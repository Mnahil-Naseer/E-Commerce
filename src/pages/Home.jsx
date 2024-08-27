import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import cover from '../assets/img/cover.jpg'; // Men's Clothing image
import cover2 from '../assets/img/cover2.jpg'; // Jewelry image
import cover3 from '../assets/img/cover3.jpg'; // Women's Clothing image
import cover4 from '../assets/img/cover4.jpg'; // Home Appliances image
import cover5 from '../assets/img/cover5.jpg'; // Decoration image

const categories = [
  { to: "/components/Accessories", image: cover, label: "Accessories" },
  { to: "/components/women", image: cover2, label: "Women's Clothing" },
  { to: "/components/men", image: cover3, label: "Men's Clothing" },
  { to: "/components/HomeAppliances", image: cover4, label: "Home Appliances" },
  { to: "/components/Decoration", image: cover5, label: "Decoration" },
];

const products = [
  { name: "Product 1", image: cover, price: "$19.99", rating: "★★★★☆" },
  { name: "Product 2", image: cover2, price: "$29.99", rating: "★★★☆☆" },
  { name: "Product 3", image: cover3, price: "$39.99", rating: "★★★★★" },
  { name: "Product 4", image: cover4, price: "$49.99", rating: "★★☆☆☆" },
  { name: "Product 5", image: cover5, price: "$59.99", rating: "★★★★☆" },
  { name: "Product 6", image: cover, price: "$69.99", rating: "★★★☆☆" },
  { name: "Product 7", image: cover2, price: "$79.99", rating: "★★★★★" },
  { name: "Product 8", image: cover3, price: "$89.99", rating: "★★★☆☆" },
  { name: "Product 9", image: cover4, price: "$99.99", rating: "★★★★☆" },
  { name: "Product 10", image: cover5, price: "$109.99", rating: "★★★★★" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  const itemsToShow = 3;
  const intervalTime = 3000; // Time between slides in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (categories.length - itemsToShow + 1));
      setProductIndex((prevIndex) => (prevIndex + 1) % (products.length - itemsToShow + 1));
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const displayedCategories = [
    ...categories.slice(currentIndex, currentIndex + itemsToShow),
    ...categories.slice(0, Math.max(0, currentIndex + itemsToShow - categories.length)),
  ];

  const displayedProducts = [
    ...products.slice(productIndex, productIndex + itemsToShow),
    ...products.slice(0, Math.max(0, productIndex + itemsToShow - products.length)),
  ];

  return (
    <div>
      <Hero />
      <div className="relative flex overflow-x-hidden bg-violet-500 text-white mt-2 mb-5">
        <div className="py-1 animate-marquee whitespace-nowrap">
          <span className="text-sm mx-4"> 📢📢📢 Welcome to <b className="text-black font-bold text-lg">Crafty Commerce</b> Online Shopping Store. Get <b className="text-red-700 font-bold text-lg">50%</b> discount on your 1st order with Free Delivery </span>
          <span className="text-sm mx-4"> 📢📢📢 Welcome to <b className="text-black font-bold text-lg">Crafty Commerce</b> Online Shopping Store. Get <b className="text-red-700 font-bold text-lg">50%</b> discount on your 1st order with Free Delivery </span>
        </div>
      </div>
      <section id="Home" className="px-4 sm:px-8 lg:px-16">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {categories.map(({ to, image, label }) => (
              <Link to={to} key={label} className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2">
                <div
                  className="relative flex flex-col items-center justify-center bg-gray-200 text-center p-4 rounded-lg shadow-lg hover:shadow-xl transition"
                  style={{
                    backgroundImage: `url('${image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                  <h3 className="relative text-xl font-semibold text-white mt-2">{label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="BigSave" className="px-4 sm:px-8 lg:px-16 mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Big Save</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${productIndex * (100 / itemsToShow)}%)` }}
          >
            {products.map(({ name, image, price, rating }) => (
              <div
                key={name}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2"
              >
                <div
                  className="relative flex flex-col items-center justify-center bg-gray-200 text-center p-4 rounded-lg shadow-lg hover:shadow-xl transition"
                  style={{
                    backgroundImage: `url('${image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                  <div className="relative text-center p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
                    <p className="text-yellow-400 mb-2">{rating}</p>
                    <p className="text-lg font-semibold text-white">{price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

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
  { name: "Product 1", image: cover, price: "$19.99", price2: "$20.99", description: "Product", rating: "★★★★☆", sold: "20+" },
  { name: "Product 2", image: cover2, price: "$29.99", price2: "$20.99", description: "Product", rating: "★★★☆☆", sold: "300+" },
  { name: "Product 3", image: cover3, price: "$39.99", price2: "$20.99", description: "Product", rating: "★★★★★", sold: "50+" },
  { name: "Product 4", image: cover4, price: "$49.99", price2: "$20.99", description: "Product", rating: "★★☆☆☆", sold: "70+" },
  { name: "Product 5", image: cover5, price: "$59.99", price2: "$20.99", description: "Product", rating: "★★★★☆", sold: "80+" },
  { name: "Product 6", image: cover, price: "$69.99", price2: "$20.99", description: "Product", rating: "★★★☆☆", sold: "40+" },
  { name: "Product 7", image: cover2, price: "$79.99", price2: "$20.99", description: "Product", rating: "★★★★★", sold: "100+" },
  { name: "Product 8", image: cover3, price: "$89.99", price2: "$20.99", description: "Product", rating: "★★★☆☆", sold: "30+" },
  { name: "Product 9", image: cover4, price: "$99.99", price2: "$20.99", description: "Product", rating: "★★★★☆", sold: "60+" },
  { name: "Product 10", image: cover5, price: "$109.99", price2: "$20.99", description: "Product", rating: "★★★★★", sold: "90+" },
];

const Home = () => {
  const [productIndex, setProductIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const itemsToShow = 4; // Number of products to show per page
  const autoScrollInterval = 3000; // Interval time in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCategoryIndex((prevIndex) =>
        (prevIndex + 1) % categories.length
      );
    }, autoScrollInterval);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrevClick = () => {
    setProductIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
  };

  const handleNextClick = () => {
    setProductIndex((prevIndex) =>
      Math.min(prevIndex + itemsToShow, products.length - itemsToShow)
    );
  };

  const displayedProducts = products.slice(productIndex, productIndex + itemsToShow);

  return (
    <div>
      <Hero />
      <div className="relative flex overflow-x-hidden bg-[#3a92a4] text-white mt-2 mb-5">
        <div className="py-1 animate-marquee whitespace-nowrap">
          <span className="text-sm mx-4"> 📢📢📢 Welcome to <b className="text-black font-bold text-lg">Crafty Commerce</b> Online Shopping Store. Get <b className="text-red-700 font-bold text-lg">50%</b> discount on your 1st order with Free Delivery </span>
          <span className="text-sm mx-4"> 📢📢📢 Welcome to <b className="text-black font-bold text-lg">Crafty Commerce</b> Online Shopping Store. Get <b className="text-red-700 font-bold text-lg">50%</b> discount on your 1st order with Free Delivery </span>
        </div>
      </div>
      <section id="Home" className="px-4 sm:px-8 lg:px-16">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${categoryIndex * 100/itemsToShow}%)` }}
          >
            {categories.map(({ to, image, label }) => (
              <Link to={to} key={label} className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2">
                <div
                  className="relative flex flex-col items-center justify-center bg-gray-200 text-center p-4 rounded-lg  hover:shadow-xl hover:shadow-gray-400 transition"
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
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            disabled={productIndex === 0}
          >
            &lt;
          </button>
          <div className="flex transition-transform duration-700 ease-in-out">
            {displayedProducts.map(({ name, image, price, price2, description, rating, sold }) => (
              <div
                key={name}
                className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4"
              >
                <div
                  className="bg-white p-4  rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <div className='flex mb-4 space-x-2'><p className="text-yellow-400 ">{rating}</p><p className="mt-1 text-gray-500 text-sm">{sold} sold</p></div>
                  <div className='flex flex-row gap-4'><p className="text-lg font-bold mb-2">{price}</p>
                    <p className="text-sm line-through font-light mb-2">{price2}</p></div>
                  <p className="text-gray-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            disabled={productIndex >= products.length - itemsToShow}
          >
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

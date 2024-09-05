import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import necklace1 from '../assets/img/necklace1.jpg';
import { Link } from 'react-router-dom';
import collection from '../assets/img/collection.jpg';
import fashion from '../assets/img/fashion.jpg';
import p2 from '../assets/img/p2.jpg';
import banner from '../assets/img/banner.jpg';
import men1 from '../assets/img/men1.jpg';
import p15 from '../assets/img/p15.jpg';
import men15 from '../assets/img/men15.jpg';
import men9 from '../assets/img/men9.jpg';
import ring7 from '../assets/img/ring7.jpg';
import earings4 from '../assets/img/earings4.jpg';
import d14 from '../assets/img/d14.jpg';
import d5 from '../assets/img/d5.jpg';
import d1 from '../assets/img/d1.jpg';
import cover from '../assets/img/cover6.jpg'; // Men's Clothing image
import cover2 from '../assets/img/cover2.jpg'; // Jewelry image
import cover3 from '../assets/img/cover3.jpg'; // Women's Clothing image
import cover4 from '../assets/img/cover4.jpg'; // Home Appliances image
import cover5 from '../assets/img/cover5.jpg'; // Decoration image
import { FaUserGroup, FaDollarSign, FaWallet } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaCartPlus, FaEye } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import women6 from '../assets/img/women6.jpg';
import p8 from '../assets/img/p8.jpg';
import men11 from '../assets/img/men11.jpg';
import banner1 from '../assets/img/banner1.jpg';
import { GrLinkNext } from "react-icons/gr";
const categories = [
  { to: "/accessories", image: cover, label: "Accessories" },
  { to: "/women", image: cover2, label: "Women's Clothing" },
  { to: "/men", image: cover3, label: "Men's Clothing" },
  { to: "/homeAppliances", image: cover4, label: "Home Appliances" },
  { to: "/decoration", image: cover5, label: "Decoration" },
];

const products = [
  {
    name: "Long Fitted Trench Coat",
    image: collection,
    price: "$19.99",
    price2: "$20.99",
    description: "A stylish coat perfect for any occasion.",
    rating: "★★★★☆",
    sold: "20+"
  },

  {
    name: "Pstylish coat",
    image: fashion,
    price: "$29.99",
    price2: "$20.99",
    description: "A stylish coat perfect for formal occasions.",
    rating: "★★★☆☆",
    sold: "300+"
  },

  {
    name: "digital air fryer",
    image: p2,
    price: "$39.99",
    price2: "$20.99",
    description: "A stylish digital air fryer perfect for healthy, oil-free cooking.",
    rating: "★★★★★",
    sold: "50+"
  },

  {
    name: "slow cooker",
    image: p15,
    price: "$49.99",
    price2: "$20.99",
    description: "An elegant slow cooker that brings out the best flavors in your meals.",
    rating: "★★★★★",
    sold: "70+"
  },

  {
    name: "Black Tie Formal Shirt ",
    image: men15,
    price: "$59.99",
    price2: "$20.99",
    description: "A black tie shirt for formal events.",
    rating: "★★★★☆",
    sold: "80+"
  },

  {
    name: "White Button Down Shirt ",
    image: men9,
    price: "$69.99",
    price2: "$20.99",
    description: "A white shirt suitable for formal occasions.",
    rating: "★★★☆☆",
    sold: "40+"
  },

  {
    name: "vintage ring",
    image: ring7,
    price: "$79.99",
    price2: "$20.99",
    description: "Elegant vintage ring.'",
    rating: "★★★★★",
    sold: "100+"
  },

  {
    name: "gold hoop earrings",
    image: earings4,
    price: "$89.99",
    price2: "$20.99",
    description: "Elegant gold hoop earrings.",
    rating: "★★★☆☆",
    sold: "30+"
  },

  {
    name: "plush velvet throw pillow",
    image: d14,
    price: "$99.99",
    price2: "$20.99",
    description: "A plush velvet throw pillow that offers unparalleled comfort and a sophisticated look for your home.",
    rating: "★★★★☆",
    sold: "60+"
  },

  {
    name: "elegant crystal vase",
    image: d5,
    price: "$109.99",
    price2: "$20.99",
    description: "An elegant crystal vase that serves as a stunning centerpiece for any table or shelf.",
    rating: "★★★★★",
    sold: "90+"
  },
];
const newarrivals = [
  {
    id: uuidv4(),
    image: women6,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Mirula Long Floral Dress',
    price: 876.88,
    description: 'A beautiful floral dress for casual outings.'
  },
  {
    id: uuidv4(),
    image: p8,
    category: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    rating: "4.0",
    title: 'Automatic Coffee Maker',
    price: 500.00,
    description: 'A luxurious automatic coffee maker for the perfect brew every time.'
  },
  {
    id: uuidv4(),
    image: men1,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "2.4",
    title: 'Full Sleeve Denim Jacket ',
    price: 987.00,
    description: 'A denim jacket for casual outings.'
  },
  {
    id: uuidv4(),
    image: necklace1,
    category: 'Accessories',
    subcategory: 'Necklaces',
    rating: "5.0",
    title: 'Gold Chain Necklace',
    price: 345.00,
    description: 'Stylish gold chain necklace.'
  },
  {
    id: uuidv4(),
    image: d1,
    category: 'Decoratives',
    subcategory: 'Clocks',
    rating: "4.7",
    title: 'Vintage Rose Wall Clock',
    price: 270.00,
    description: 'A stylish rose gold wall clock with a vintage design that complements any interior decor.'
  },
  {
    id: uuidv4(),
    image: men11,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Black Denim Jacket',
    price: 432.00,
    description: 'A black denim jacket for casual outings.'
  }
];
const Home = () => {
  const [product] = useState(products);
  const [newproduct] = useState(newarrivals);
  const [productIndex, setProductIndex] = useState(0);
  const [newProductIndex, setNewProductIndex] = useState(0); // New state for New Arrivals
  const [categoryIndex, setCategoryIndex] = useState(0);
  const itemsToShow = 4; // Number of products to show per page
  const autoScrollInterval = 3000;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCategoryIndex((prevIndex) =>
        (prevIndex + 1) % categories.length
      );
    }, autoScrollInterval);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrevClick = () => {
    setProductIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setProductIndex((prevIndex) =>
      Math.min(prevIndex + 1, products.length - 1)
    );
  };

  const handleNewArrivalsPrevClick = () => {
    setNewProductIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNewArrivalsNextClick = () => {
    setNewProductIndex((prevIndex) =>
      Math.min(prevIndex + 1, newproduct.length - 1)
    );
  };

  const displayedProducts = products.slice(productIndex, productIndex + itemsToShow);
  const displayedNewArrivals = newproduct.slice(newProductIndex, newProductIndex + itemsToShow);

  return (
    <div>
  <MainBanner />
  <section id="ShoppingBenefits" className="py-8">
    <div className="container px-4 sm:px-8 lg:px-16">
      <div className="flex flex-wrap md:flex-row gap-6 lg:gap-10 justify-between">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="flex flex-col md:flex-row   w-full lg:w-auto">
            <div className="flex flex-col items-center text-center p-4 w-full lg:w-1/5">
              <FaDollarSign className='text-3xl' />
              <h3 className="text-xs lg:text-sm font-bold">Value-for-money</h3>
              <p className="text-xs lg:text-sm text-gray-600">We offer competitive prices on millions of items</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 w-full lg:w-1/5">
              <FaUserGroup className='text-3xl' />
              <h3 className="text-xs lg:text-sm font-bold">Shoppers worldwide</h3>
              <p className="text-xs lg:text-sm text-gray-600">More than 300 million shoppers from 200+ countries & regions</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 w-full lg:w-1/5">
              <GrDeliver className='text-3xl' />
              <h3 className="text-xs lg:text-sm font-bold">Fast delivery</h3>
              <p className="text-xs lg:text-sm text-gray-600">Faster delivery on selected items thanks to our improved logistics</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 w-full lg:w-1/5">
              <FaWallet className='text-3xl' />
              <h3 className="text-xs lg:text-sm font-bold">Safe payments</h3>
              <p className="text-xs lg:text-sm text-gray-600">Safe payment methods preferred by international shoppers</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 w-full lg:w-1/5">
              <AiOutlineFileProtect className='text-3xl' />
              <h3 className="text-xs lg:text-sm font-bold">Buyer protection</h3>
              <p className="text-xs lg:text-sm text-gray-600">Get a refund if items arrive late or not as described</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="Home" className="px-4 mb-10 mt-16 sm:px-8 lg:px-12">
    <div className="relative">
      <div className="flex flex-wrap gap-6 justify-between">
        {categories.map(({ to, image, label }) => (
          <Link
            to={to}
            key={label}
            className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-2"
          >
            <div
              className="relative mx-16 md:-mx-6 flex flex-col items-center justify-end bg-gray-200 text-center p-4  hover:shadow-xl hover:shadow-gray-600 hover:animate-zoomOut transition"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'center',
                height: '320px',
                width: '245px', // Adjusted to be responsive
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50 "></div>
              <div className="relative w-full p-4">
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">{label}</h3>
                <Link
                  to={to}
                  className="inline-block bg-transparent border-2 text-black px-4 py-4 rounded-full hover:bg-white hover:border-2 hover:border-black transition"
                >
                  <GrLinkNext />
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>

  <section id="BigSave" className="px-4 sm:px-8 lg:px-16 mt-8 mb-16 relative">
    <h2 className="text-3xl font-extrabold mb-10 mt-16 font-serif text-red-800 text-left">Big Save</h2>
    <div className="relative overflow-hidden">
      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition-colors"
        disabled={productIndex === 0}
        style={{ zIndex: 10 }}
      >
        &lt;
      </button>
      <div className="flex transition-transform duration-700 ease-in-out">
        {displayedProducts.map(product => (
          <div
            key={product.name}
            className="relative flex-none w-full sm:w-1/2 lg:w-1/4 px-4 group"
          >
            <div className="bg-white p-4 rounded-lg shadow-lg transition relative overflow-hidden">
              <div className="absolute top-4 animate-pulse left-4 bg-red-700 text-white text-sm font-bold px-2 py-1 rounded-full">
                Sale
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <div className='flex mb-4 space-x-2'>
                <p className="text-yellow-400">{product.rating}</p>
                <p className="mt-1 text-gray-500 text-sm">{product.sold} sold</p>
              </div>
              <div className='flex flex-row gap-4'>
                <p className="text-lg font-bold mb-2">{product.price}</p>
                <p className="text-sm line-through font-light mb-2">{product.price2}</p>
              </div>
              <div className="absolute bg-white bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between">
                  <button onClick={() => addToCart(product)} className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-200 transition">
                    <FaCartPlus className='text-blue-500 text-3xl' />
                  </button>
                  <button onClick={() => handleModalOpen(product)} className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-200 transition">
                    <FaEye className='text-green-500 text-3xl' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition-colors"
        disabled={productIndex >= products.length - itemsToShow}
        style={{ zIndex: 10 }}
      >
        &gt;
      </button>
    </div>
  </section>
  <section className="relative bg-cover bg-center h-screen flex items-center justify-start text-white overflow-hidden">
      <div 
        className="absolute inset-0 " 
        style={{ 
          backgroundImage: `url('${banner1}')`, 
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 "></div></div> 
      <div className="relative z-10 text-start mx-16 text-white">
        <p className="text-lg md:text-xl font-semibold font-serif uppercase mb-10 animate-pulse">limited time offer</p>
        <h1 className="text-4xl md:text-5xl font-extrabold font-serif mb-4">
          Special Edition
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white font-semibold mb-2">
        Explore our exclusive winter collection, featuring the latest trends to keep you warm and stylish.<br/> Embrace cozy layers and chic designs perfect for every winter occasion.
        </p>
        <h2 className='font-sans animate-pulse font-extrabold text-red-700'>
         Use Code OFF20 And get 20% OFF
        </h2>
        <a 
          href="#Home" 
          className="mt-6 inline-block px-6 py-3 border-2 hover:border-gray-700 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  <section id="NewArrivals" className="px-4 sm:px-8 lg:px-16 mt-8 mb-16">
    <h2 className="text-3xl font-extrabold font-serif mb-10 mt-16 text-left">New Arrivals</h2>
    <div className="relative overflow-hidden">
      <button
        onClick={handleNewArrivalsPrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        disabled={newProductIndex === 0}
        style={{ zIndex: 10 }}
      >
        &lt;
      </button>
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${newProductIndex * (100 / itemsToShow)}%)` }}>
        {displayedNewArrivals.map(newproduct => (
          <div
            key={newproduct.title}
            className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4 group relative"
          >
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition relative overflow-hidden">
              <div className="absolute top-4 animate-pulse left-4 bg-red-700 text-white text-sm font-bold px-2 py-1 rounded-full">
                New
              </div>
              <img
                src={newproduct.image}
                alt={newproduct.title}
                className="w-full h-48 object-cover mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <h3 className="text-lg font-bold mb-2">{newproduct.title}</h3>
              <p className="text-lg font-bold mb-2">{newproduct.price}</p>
              <p className="text-sm line-through font-light mb-2">{newproduct.oldPrice}</p>
              <div className="absolute bg-white bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between">
                  <button onClick={() => addToCart(newproduct)} className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-200 transition">
                    <FaCartPlus className='text-blue-500 text-3xl' />
                  </button>
                  <button onClick={() => handleModalOpen(newproduct)} className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-200 transition">
                    <FaEye className='text-green-500 text-3xl' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNewArrivalsNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        disabled={newProductIndex >= newproduct.length - itemsToShow}
        style={{ zIndex: 10 }}
      >
        &gt;
      </button>
    </div>
  </section>
  {isModalOpen && selectedProduct && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 p-4 backdrop-blur-md">
        <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full relative">
          <button
            onClick={handleModalClose}
            className="absolute top-4 right-4 text-lg text-red-300 hover:text-red-700 transition"
          >
            <span className="text-3xl">&times;</span>
          </button>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">{selectedProduct.title}</h2>
          <img className="w-24 h-36 sm:w-32 sm:h-48 md:w-40 md:h-56 lg:w-48 lg:h-64 object-cover mb-4" src={selectedProduct.image} alt={selectedProduct.title} />
          <p className="text-gray-700 mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h3 className="text-lg font-semibold">${selectedProduct.price}</h3>
            <h3 className="text-sm font-semibold text-yellow-300">{selectedProduct.rating}★★★★☆</h3>
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-full mt-4 sm:mt-0"
            onClick={() => addToCart(selectedProduct)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    )}
</div>

  );
};

export const MainBanner = () => {
  return (
    <section id='MainBanner' className="relative bg-cover bg-center h-screen flex items-center justify-start text-white overflow-hidden">
      <div 
        className="absolute inset-0 " 
        style={{ 
          backgroundImage: `url('${banner}')`, 
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 "></div></div> 
      <div className="relative z-10 text-start mx-5 text-black">
        <h1 className="text-4xl md:text-5xl font-extrabold font-serif mb-4">
          Embrace the Chill in Style
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-800 font-semibold mb-2">
          Uncover our exclusive winter collection and stay warm with the latest trends.<br/> Discover cozy layers and chic designs perfect for every winter occasion.
        </p>
        <h2 className='font-sans animate-pulse font-extrabold text-red-700'>
          25% OFF On All Products
        </h2>
        <a 
          href="#Home" 
          className="mt-6 inline-block px-6 py-3 border-2 hover:border-gray-700 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};
export default Home;
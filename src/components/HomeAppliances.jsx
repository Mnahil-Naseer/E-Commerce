import { v4 as uuidv4 } from 'uuid';
import React, { useState, useContext } from 'react';
import cover4 from '../assets/img/cover4.jpg'
import p1 from '../assets/img/appliance1.jpg';
import p2 from '../assets/img/p2.jpg';
import p3 from '../assets/img/p3.jpg';
import p4 from '../assets/img/p4.jpg';
import p5 from '../assets/img/p5.jpg';
import p6 from '../assets/img/p6.jpg';
import p7 from '../assets/img/p7.jpg';
import p8 from '../assets/img/p8.jpg';
import p9 from '../assets/img/p9.jpg';
import p10 from '../assets/img/p10.jpg';
import p11 from '../assets/img/p11.jpg';
import p12 from '../assets/img/p12.jpg';
import p13 from '../assets/img/p13.jpg';
import p14 from '../assets/img/p14.jpg';
import p15 from '../assets/img/p15.jpg';
import banner from '../assets/img/banner5.jpg';
import { FaCartPlus, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
export const Homeproducts = [
  {
    id: uuidv4(),
    image: p1,
    category: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    rating: "4.5",
    title: 'Stainless Steel Blender',
    price: 234.00,
    description: 'A powerful stainless steel blender for smoothies, soups, and sauces.'
  },
  {
    id: uuidv4(),
    image: p2,
    category: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    rating: "5.0",
    title: 'Digital Air Fryer',
    price: 345.00,
    description: 'A stylish digital air fryer perfect for healthy, oil-free cooking.'
  },
  {
    id: uuidv4(),
    image: p3,
    category: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    rating: "4.0",
    title: 'Compact Microwave Oven',
    price: 123.00,
    description: 'An elegant and compact microwave oven for quick meals.'
  },
  {
    id: uuidv4(),
    image: p4,
    category: 'Home Appliances',
    subcategory: 'Laundry Appliances',
    rating: "4.7",
    title: 'Front-Load Washing Machine',
    price: 89.00,
    description: 'A high-efficiency front-load washing machine with multiple wash cycles.'
  },
  {
    id: uuidv4(),
    image: p5,
    category: 'Home Appliances',
    subcategory: 'Laundry Appliances',
    rating: "4.3",
    title: 'Steam Iron',
    price: 200.00,
    description: 'A powerful steam iron that smooths out wrinkles effortlessly.'
  },
  {
    id: uuidv4(),
    image: p6,
    category: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    rating: "5.0",
    title: 'Automatic Bread Maker',
    price: 345.00,
    description: 'A compact automatic bread maker that kneads, rises, and bakes bread with customizable settings.'
  },
  {
    id: uuidv4(),
    image: p7,
    category: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    rating: "4.5",
    title: 'Electric Kettle',
    price: 150.00,
    description: 'An elegant electric kettle for boiling water quickly and safely.'
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
    image: p9,
    category: 'Home Appliances',
    subcategory: 'Home Cleaning',
    rating: "4.8",
    title: 'Robotic Vacuum Cleaner',
    price: 789.00,
    description: 'A smart robotic vacuum cleaner that keeps your floors spotless.'
  },
  {
    id: uuidv4(),
    image: p10,
    category: 'Home Appliances',
    subcategory: 'Home Cleaning',
    rating: "4.3",
    title: 'Cordless Handheld Vacuum',
    price: 300.00,
    description: 'A classic cordless handheld vacuum for quick clean-ups.'
  },
  {
    id: uuidv4(),
    image: p11,
    category: 'Home Appliances',
    subcategory: 'Home Cleaning',
    rating: "5.0",
    title: 'Steam Mop',
    price: 450.00,
    description: 'A stylish steam mop that sanitizes and cleans floors effortlessly.'
  },
  {
    id: uuidv4(),
    image: p12,
    category: 'Home Appliances',
    subcategory: 'Home Cleaning',
    rating: "4.6",
    title: 'Carpet Cleaner',
    price: 675.00,
    description: 'An elegant carpet cleaner that removes stains and odors efficiently.'
  },
  {
    id: uuidv4(),
    image: p13,
    category: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    rating: "4.2",
    title: 'Induction Cooktop',
    price: 900.00,
    description: 'A luxury induction cooktop with precise temperature control.'
  },
  {
    id: uuidv4(),
    image: p14,
    category: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    rating: "4.9",
    title: 'Convection Oven',
    price: 1200.00,
    description: 'An exquisite convection oven for perfect baking and roasting.'
  },
  {
    id: uuidv4(),
    image: p15,
    category: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    rating: "4.0",
    title: 'Slow Cooker',
    price: 234.00,
    description: 'An elegant slow cooker that brings out the best flavors in your meals.'
  }
];


export const TopSellingProducts = Homeproducts.filter(product => product.rating >= 4.5);

const HomeAppliances = () => {
  const [products, setproducts] = useState(Homeproducts);
  const [topSelling, settopSelling] = useState(TopSellingProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, topSelling.length - 1)
    );
  };


  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + topSelling.length) % topSelling.length);
  };
  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Filter top-selling products
    const filteredTopSelling = category === 'All' ? TopSellingProducts : TopSellingProducts.filter(product => product.subcategory === category);
    settopSelling(filteredTopSelling);

    // Filter accessories products
    const filteredProducts = category === 'All' ? Homeproducts : Homeproducts.filter(product => product.subcategory === category);
    setproducts(filteredProducts);

    setCurrentSlide(0);
  };
  return (
    
    <div className="p-4">
  {/* Main Banner Section */}
  <section className="relative h-screen mb-16 border-8 border-gray-800 flex flex-col md:flex-row items-center overflow-hidden">
    <div className="flex-1 flex justify-center items-center ">
      <img
        src={banner}
        alt="Home Appliances"
        className="w-72 h-72 sm:h-64 md:h-8 lg:h-96 lg:w-96 object-cover mb-0 rounded-t-full"
      />
    </div>
    <div className="flex-1 flex flex-col justify-center p-5 text-black">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-serif mb-4">
        Upgrade Your Space with Modern Home Appliances
      </h1>
      <p className="mt-3 text-sm md:text-base lg:text-xl text-gray-800 font-semibold mb-6">
        Explore our cutting-edge home appliances designed to enhance your living experience.<br />
        From efficient kitchen gadgets to powerful cleaning solutions, find everything you need to modernize your home.
      </p>
      <a
        href="#products"
        className="px-4 py-2 border-2 border-black text-black font-semibold text-sm md:text-base rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-300"
      >
        Discover More
      </a>
    </div>
  </section>

  <div id="products" className="mb-6 flex flex-wrap justify-center gap-4">
    <button
      onClick={() => handleCategoryChange('All')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'All' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
    >
      All
    </button>
    <button
      onClick={() => handleCategoryChange('Kitchen Appliances')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Kitchen Appliances' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
    >
      Kitchen Appliances
    </button>
    <button
      onClick={() => handleCategoryChange('Home Cleaning')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Home Cleaning' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
    >
      Home Cleaning
    </button>
    <button
      onClick={() => handleCategoryChange('Laundry Appliances')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Laundry Appliances' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
    >
      Laundry Appliances
    </button>
  </div>

  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-serif mt-16 mb-10">Top Selling Products</h2>

  {/* Carousel */}
  <div className="relative">
    <button
      onClick={handlePrevSlide}
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={currentSlide === 0}
    >
      <FaChevronLeft />
    </button>

    <button
      onClick={handleNextSlide}
      className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 ${currentSlide === topSelling.length - 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={currentSlide === topSelling.length - 5}
    >
      <FaChevronRight />
    </button>

    <div className="overflow-hidden">
      <div
        className="flex gap-4 md:gap-6 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100 / 5}%)` }}
      >
        {topSelling.map(product => (
          <div
            key={product.id}
            className="relative border p-4 h-auto w-40 sm:w-48 md:w-56 lg:w-64 flex-shrink-0 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-24 sm:h-32 md:h-36 lg:h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <h2 className="text-sm font-semibold mb-1">{product.title}</h2>
            <p className='text-yellow-300'>{product.rating}★★★★☆</p>
            <p className="text-base font-bold">${product.price.toFixed(2)}</p>

            {/* Hover effects */}
            <div className="absolute bottom-0 inset-x-0 bg-white p-2 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-between items-center">
              <button
                className="bg-blue-500 text-white p-2 rounded-full mx-1"
                onClick={() => addToCart(product)} // Add to Cart
              >
                <FaCartPlus />
              </button>
              <button onClick={() => handleModalOpen(product)} className="bg-green-500 text-white p-2 rounded-full mx-1">
                <FaEye />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mt-16 mb-10">Home Appliances</h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-8">
    {products.length > 0 ? (
      products.map(product => (
        <div
          key={product.id}
          className="relative border p-4 h-auto w-48 sm:w-56 md:w-64 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-24 sm:h-32 md:h-36 lg:h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <h2 className="text-sm font-semibold mb-1">{product.title}</h2>
          <p className='text-yellow-300'>{product.rating}★★★★☆</p>
          <p className="text-base font-bold">${product.price.toFixed(2)}</p>

          {/* Hover effects */}
          <div className="absolute bottom-0 inset-x-0 bg-white p-2 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-between items-center">
            <button
              className="bg-blue-500 text-white p-2 rounded-full mx-1"
              onClick={() => addToCart(product)} // Add to Cart
            >
              <FaCartPlus />
            </button>
            <button onClick={() => handleModalOpen(product)} className="bg-green-500 text-white p-2 rounded-full mx-1">
              <FaEye />
            </button>
          </div>
        </div>
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>

  {/* Modal for product details */}
  {isModalOpen && selectedProduct && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 backdrop-blur-md">
      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full relative">
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 text-lg text-red-300 hover:text-red-700 transition"
        >
          <span className="text-3xl">&times;</span>
        </button>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">{selectedProduct.title}</h2>
        <img className="w-24 h-36 sm:h-48 md:h-56 lg:h-64 object-cover mb-4" src={selectedProduct.image} alt={selectedProduct.title} />
        <p className="text-gray-700 mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h3 className="text-lg font-semibold">${selectedProduct.price.toFixed(2)}</h3>
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

export default HomeAppliances;

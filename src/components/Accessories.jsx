import { v4 as uuidv4 } from 'uuid';
import React, { useState, useContext } from 'react';
import { FaCartPlus, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import girls2 from '../assets/img/girls2.jpg';
import girls1 from '../assets/img/girls1.jpg';
import earings4 from '../assets/img/earings4.jpg';
import earings3 from '../assets/img/earings3.jpg';
import earings2 from '../assets/img/earings2.jpg';
import necklace1 from '../assets/img/necklace1.jpg';
import necklance3 from '../assets/img/necklance3.jpg';
import necklace2 from '../assets/img/necklace2.jpg';
import rings1 from '../assets/img/rings1.jpg';
import ring2 from '../assets/img/ring2.jpg';
import ring4 from '../assets/img/ring4.jpg';
import ring7 from '../assets/img/ring7.jpg';
import ring6 from '../assets/img/ring6.jpg';
import ring5 from '../assets/img/ring5.jpg';
import earings5 from '../assets/img/earings5.jpg';
import { CartContext } from '../contexts/CartContext';
import banner from '../assets/img/banner2.jpg';
import { Link } from 'react-router-dom';
export const AccessoriesProducts = [
  {
    id: uuidv4(),
    image: girls2,
    category: 'Accessories',
    subcategory: 'Watches',
    rating: "4.5",
    title: 'Elegant Golden Pearl Watch',
    price: 234.00,
    description: 'A sophisticated golden pearl watch that adds a touch of elegance to any outfit.'
  },
  {
    id: uuidv4(),
    image: girls1,
    category: 'Accessories',
    subcategory: 'Watches',
    rating: "5.0",
    title: 'Floral Enamel Watch',
    price: 345.00,
    description: 'A stylish floral enamel watch perfect for making a statement on special occasions.'
  },
  {
    id: uuidv4(),
    image: earings4,
    category: 'Accessories',
    subcategory: 'Earrings',
    rating: "4.0",
    title: 'Gold Hoop Earrings',
    price: 123.00,
    description: 'Elegant gold hoop earrings.'
  },
  {
    id: uuidv4(),
    image: earings3,
    category: 'Accessories',
    subcategory: 'Earrings',
    rating: "4.7",
    title: 'Silver Stud Earrings',
    price: 89.00,
    description: 'Classic silver stud earrings.'
  },
  {
    id: uuidv4(),
    image: earings2,
    category: 'Accessories',
    subcategory: 'Earrings',
    rating: "4.3",
    title: 'Pearl Drop Earrings',
    price: 200.00,
    description: 'Elegant pearl drop earrings.'
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
    image: necklance3,
    category: 'Accessories',
    subcategory: 'Necklaces',
    rating: "4.5",
    title: 'Silver Pendant Necklace',
    price: 150.00,
    description: 'Elegant silver pendant necklace.'
  },
  {
    id: uuidv4(),
    image: necklace2,
    category: 'Accessories',
    subcategory: 'Necklaces',
    rating: "4.0",
    title: 'Diamond Necklace',
    price: 500.00,
    description: 'Luxurious diamond necklace.'
  },
  {
    id: uuidv4(),
    image: rings1,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.8",
    title: 'Gold Engagement Ring',
    price: 789.00,
    description: 'Beautiful gold engagement ring.'
  },
  {
    id: uuidv4(),
    image: ring2,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.3",
    title: 'Silver Wedding Band',
    price: 300.00,
    description: 'Classic silver wedding band.'
  },
  {
    id: uuidv4(),
    image: ring4,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "5.0",
    title: 'Rose Gold Ring',
    price: 450.00,
    description: 'Stylish rose gold ring.'
  },
  {
    id: uuidv4(),
    image: ring7,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.6",
    title: 'Vintage Ring',
    price: 675.00,
    description: 'Elegant vintage ring.'
  },
  {
    id: uuidv4(),
    image: ring6,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.2",
    title: 'Platinum Ring',
    price: 900.00,
    description: 'Luxury platinum ring.'
  },
  {
    id: uuidv4(),
    image: ring5,
    category: 'Accessories',
    subcategory: 'Rings',
    rating: "4.9",
    title: 'Diamond Ring',
    price: 1200.00,
    description: 'Exquisite diamond ring.'
  },
  {
    id: uuidv4(),
    image: earings5,
    category: 'Accessories',
    subcategory: 'Earrings',
    rating: "4.0",
    title: 'Gold Drop Earrings',
    price: 234.00,
    description: 'Elegant gold drop earrings.'
  }
];
export const TopSellingProducts = AccessoriesProducts.filter(product => product.rating >= 4.5);

const Accessories = () => {
  const [products, setProducts] = useState(AccessoriesProducts);
  const [topSelling, setTopSelling] = useState(TopSellingProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, Math.max(topSelling.length - 5, 0))
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
    setTopSelling(filteredTopSelling);

    // Filter accessories products
    const filteredProducts = category === 'All' ? AccessoriesProducts : AccessoriesProducts.filter(product => product.subcategory === category);
    setProducts(filteredProducts);

    setCurrentSlide(0); // Reset the carousel to the first slide when category changes
  };

  return (
    <div className="p-4">
    {/* Main Banner Section */}
    <section className="relative h-screen mb-16 border-8 border-[#08465c] flex flex-col md:flex-row items-center overflow-hidden">
      <div className="flex-1 flex flex-col justify-center p-5 text-black">
        <h1 className="text-3xl md:text-5xl font-extrabold font-serif mb-4">
          Elevate Your Style with Accessories
        </h1>
        <p className="mt-3 text-base md:text-xl text-gray-800 font-semibold mb-6">
          Explore our curated collection of accessories designed to complement any outfit.<br />
          From elegant jewelry to chic handbags, find the perfect finishing touches to enhance your look.
        </p>
        <a
          href="#products"
          className="px-5 py-3 border-2 border-black text-black font-semibold text-base md:text-lg rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-300"
        >
          Shop Now
        </a>
      </div>
      <div className="flex-1 flex justify-center items-center p-5">
        <img
          src={banner}
          alt="Elegant Accessories"
          className="w-full h-96 max-w-md object-cover"
        />
      </div>
    </section>
    {/* Category Buttons */}
    <div id="products" className="mb-6 flex flex-wrap justify-center gap-4">
      {['All', 'Watches', 'Earrings', 'Necklaces', 'Rings'].map(category => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 border-2 rounded-full ${selectedCategory === category ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
        >
          {category}
        </button>
      ))}
    </div>
  
    <h2 className="text-2xl md:text-3xl font-extrabold mb-10 mt-16 font-serif">Top Selling Products</h2>
  
    {/* Carousel */}
    <div className="relative mb-16">
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
              className="relative border p-4 h-auto w-44 md:w-56 flex-shrink-0 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 md:h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <h2 className="text-xs md:text-sm font-semibold mb-1">{product.title}</h2>
              <p className="text-sm md:text-base font-bold">${product.price.toFixed(2)}</p>
  
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
  
    <h1 className="text-2xl md:text-3xl font-extrabold mb-6">Accessories</h1>
  
    {/* Accessories Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="relative border p-4 rounded-lg shadow-lg overflow-hidden group">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-32 md:h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <h2 className="text-xs md:text-sm font-semibold mb-1">{product.title}</h2>
          <p className="text-sm md:text-base font-bold">${product.price.toFixed(2)}</p>
  
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
  
    {/* Modal for product details */}
    {isModalOpen && selectedProduct && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 p-4 backdrop-blur-md">
        <div className="bg-white p-4 rounded-lg w-full max-w-lg relative">
          <button
            className="absolute top-2 right-2 text-xl font-bold"
            onClick={handleModalClose}
          >
            &times;
          </button>
          <h2 className="text-xl md:text-2xl font-bold mb-4">{selectedProduct.title}</h2>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-72 h-48 md:h-64 object-cover mb-4"
          />
          <p className="text-gray-700 mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
          <div className="flex flex-col sm:flex-row justify-between mb-5 items-center">
            <h3 className="text-lg font-semibold">${selectedProduct.price}</h3>
            <h3 className="text-sm font-semibold text-yellow-600">{selectedProduct.rating}★★★★☆</h3>
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

export default Accessories;
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useContext } from 'react';
import men4 from '../assets/img/men4.jpg';
import men3 from '../assets/img/men3.jpg';
import men5 from '../assets/img/men5.jpg';
import men1 from '../assets/img/men1.jpg';
import men2 from '../assets/img/men2.jpg';
import men6 from '../assets/img/men6.jpg';
import men7 from '../assets/img/men7.jpg';
import men8 from '../assets/img/men8.jpg';
import men9 from '../assets/img/men9.jpg';
import men10 from '../assets/img/men10.jpg';
import men11 from '../assets/img/men11.jpg';
import men12 from '../assets/img/men12.jpg';
import men13 from '../assets/img/men13.jpg';
import men15 from '../assets/img/men15.jpg';
import men14 from '../assets/img/men14.jpg';
import banner from '../assets/img/banner4.jpg';
import { FaCartPlus, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
export const Menproducts = [
  {
    id: uuidv4(),
    image: men4,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "3.5",
    title: 'Casual Shirt Navy Blue',
    price: 876.00,
    description: 'A casual shirt for any occasion.'
  },
  {
    id: uuidv4(),
    image: men3,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "4.5",
    title: 'Fawn Glen Plaid Check Blazer For Men',
    price: 556.00,
    description: 'A stylish blazer for formal events.'
  },
  {
    id: uuidv4(),
    image: men5,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Rust Plain Casual Shirt',
    price: 766.00,
    description: 'A comfortable rust-colored shirt.'
  },
  {
    id: uuidv4(),
    image: men1,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "2.4",
    title: 'Full Sleeve Denim Jacket Brown',
    price: 987.00,
    description: 'A denim jacket for casual outings.'
  },
  {
    id: uuidv4(),
    image: men2,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "5.0",
    title: 'Denim Solid Blue Shirt',
    price: 765.00,
    description: 'A formal blue shirt for business wear.'
  },
  {
    id: uuidv4(),
    image: men6,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "4.0",
    title: 'Checkered Wool Blend Suit',
    price: 654.00,
    description: 'A sophisticated suit for formal events.'
  },
  {
    id: uuidv4(),
    image: men7,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "4.5",
    title: 'Brown Striped Casual Trousers',
    price: 789.00,
    description: 'Comfortable trousers for casual wear.'
  },
  {
    id: uuidv4(),
    image: men8,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "3.8",
    title: 'Classic Chinos',
    price: 456.00,
    description: 'Classic chinos for everyday wear.'
  },
  {
    id: uuidv4(),
    image: men9,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "5.0",
    title: 'White Button Down Shirt',
    price: 345.00,
    description: 'A white shirt suitable for formal occasions.'
  },
  {
    id: uuidv4(),
    image: men10,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "4.2",
    title: 'Grey Slim Fit Jeans',
    price: 567.00,
    description: 'Stylish slim-fit jeans for casual wear.'
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
  },
  {
    id: uuidv4(),
    image: men12,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "4.4",
    title: 'Plaid Flannel Shirt',
    price: 432.00,
    description: 'A comfortable plaid shirt for everyday wear.'
  },
  {
    id: uuidv4(),
    image: men13,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "3.8",
    title: 'Tailored Grey Suit',
    price: 987.00,
    description: 'A grey suit tailored for formal occasions.'
  },
  {
    id: uuidv4(),
    image: men15,
    category: 'Men Clothing',
    subcategory: 'Casual',
    rating: "4.3",
    title: 'V-neck Casual Sweater',
    price: 654.00,
    description: 'A casual sweater perfect for layering.'
  },
  {
    id: uuidv4(),
    image: men14,
    category: 'Men Clothing',
    subcategory: 'Formal',
    rating: "5.0",
    title: 'Black Tie Formal Shirt',
    price: 876.00,
    description: 'A black tie shirt for formal events.'
  }];

export const TopSellingProducts = Menproducts.filter(product => product.rating >= 4.5);

const Men = () => {
  const [products, setproducts] = useState(Menproducts);
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
    const filteredProducts = category === 'All' ? Menproducts : Menproducts.filter(product => product.subcategory === category);
    setproducts(filteredProducts);

    setCurrentSlide(0);
  };
  return (
    <div className="p-4 bg-gradient-to-b from-[#d3c495b4] to-[#00000059]">
  {/* Main Banner Section */}
  <section className="relative h-screen mb-16 border-8 border-t-black border-r-black border-l-[#796217] border-b-[#796217] flex flex-col md:flex-row items-center overflow-hidden">
    <div className="flex-1 flex flex-col justify-center p-5 text-black text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-t from-[#a99044] to-[#000000] text-transparent bg-clip-text font-extrabold font-serif mb-4">
        Redefine Your Look with Men's Fashion
      </h1>
      <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-800 font-semibold mb-6">
        Discover our exclusive collection of men's fashion essentials.<br />
        From stylish suits to casual wear, find everything you need to upgrade your wardrobe and express your individuality.
      </p>
      <a
        href="#products"
        className="px-4 py-2 sm:px-5 sm:py-3 border-2 border-black text-black font-semibold text-base sm:text-lg rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-300"
      >
        Explore the Collection
      </a>
    </div>
    <div className="flex-1 flex justify-center items-center p-5">
      <img
        src={banner}
        alt="Men's Fashion"
        className="w-full h-auto max-w-xs sm:max-w-md object-cover"
      />
    </div>
  </section>

  <div id="products" className="mb-6 flex justify-center flex-wrap gap-4">
    <button
      onClick={() => handleCategoryChange('All')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'All' ? 'bg-gradient-to-b from-[#d3c395] to-[#000000a8] text-white' : 'bg-white text-black'} font-semibold`}
    >
      All
    </button>
    <button
      onClick={() => handleCategoryChange('Formal')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Formal' ? 'bg-gradient-to-b from-[#d3c395] to-[#000000a8] text-white' : 'bg-white text-black'} font-semibold`}
    >
      Formal
    </button>
    <button
      onClick={() => handleCategoryChange('Casual')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Casual' ? 'bg-gradient-to-b from-[#d3c395] to-[#000000a8] text-white' : 'bg-white text-black'} font-semibold`}
    >
      Casual
    </button>
  </div>

  <h2 className="text-2xl sm:text-3xl font-extrabold mt-16 mb-10">Top Selling Products</h2>

  {/* Carousel */}
  <div className="relative">
    <button
      onClick={handlePrevSlide}
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#b39743] text-white p-2 rounded-full z-10 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={currentSlide === 0}
    >
      <FaChevronLeft />
    </button>

    <button
      onClick={handleNextSlide}
      className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#b39743] text-white p-2 rounded-full z-10 ${currentSlide === topSelling.length - 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={currentSlide === topSelling.length - 5}
    >
      <FaChevronRight />
    </button>

    <div className="overflow-hidden">
      <div
        className="flex gap-6 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100 / 5}%)` }}
      >
        {topSelling.map(product => (
          <div
            key={product.id}
            className="relative border p-4 h-auto w-48 sm:w-56 flex-shrink-0 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 sm:h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <h2 className="text-xs sm:text-sm font-semibold mb-1">{product.title}</h2>
            <p className="text-sm sm:text-base font-bold">${product.price.toFixed(2)}</p>

            {/* Hover effects */}
            <div className="absolute bottom-0 inset-x-0 bg-transparent p-2 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-between items-center">
              <button
                className="bg-[#b39743] text-white p-2 rounded-full mx-1"
                onClick={() => addToCart(product)} // Add to Cart
              >
                <FaCartPlus />
              </button>
              <button onClick={() => handleModalOpen(product)} className="bg-[#b39743] text-white p-2 rounded-full mx-1">
                <FaEye />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <h1 className="text-2xl sm:text-3xl font-extrabold mt-16 mb-4">Men Fashion</h1>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mb-8">
    {products.length > 0 ? (
      products.map(product => (
        <div
          key={product.id}
          className="relative border p-4 sm:p-6 h-auto w-44 sm:w-56 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-32 sm:h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <h2 className="text-xs sm:text-sm font-semibold mb-1">{product.title}</h2>
          <p className="text-sm sm:text-base font-bold">${product.price.toFixed(2)}</p>

          {/* Hover effects */}
          <div className="absolute bottom-0 inset-x-0 bg-transparent p-2 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-between items-center">
            <button
              className="bg-[#b39743] text-white p-2 rounded-full mx-1"
              onClick={() => addToCart(product)} // Add to Cart
            >
              <FaCartPlus />
            </button>
            <button onClick={() => handleModalOpen(product)} className="bg-[#b39743] text-white p-2 rounded-full mx-1">
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 p-4 backdrop-blur-md">
      <div className="bg-gradient-to-b from-[#d3c395ec] to-[#000000c7] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full relative">
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 text-lg text-red-300 hover:text-red-700 transition"
        >
          <span className="text-3xl">&times;</span>
        </button>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">{selectedProduct.title}</h2>
        <img className="w-20 h-32 sm:w-24 sm:h-36 md:w-28 md:h-48 lg:w-56 mx-24 lg:h-56 object-cover mb-4" src={selectedProduct.image} alt={selectedProduct.title} />
        <p className="text-gray-200 mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
        <div className="flex flex-col sm:flex-row mb-5 justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-200">${selectedProduct.price.toFixed(2)}</h3>
          <h3 className="text-sm font-semibold text-yellow-300">{selectedProduct.rating}★★★★☆</h3>
        </div>
        <button
            className="bg-gradient-to-b from-[#d3c495b4] to-[#00000059] hover:bg-gradient-to-t from-[#d3c395e0] to-[#000000b6] text-white p-2 rounded-full mt-4 sm:mt-0"
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

export default Men;

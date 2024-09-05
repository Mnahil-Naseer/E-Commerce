import { v4 as uuidv4 } from 'uuid';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import collection from '../assets/img/collection.jpg';
import hoverCollection from '../assets/img/hover collection.jpg';
import women3 from '../assets/img/women3.jpg';
import fashion from '../assets/img/fashion.jpg';
import women1 from '../assets/img/women1.jpg';
import women2 from '../assets/img/women2.jpg';
import women4 from '../assets/img/women4.jpg';
import women5 from '../assets/img/women5.jpg';
import women6 from '../assets/img/women6.jpg';
import women7 from '../assets/img/women7.jpg';
import women8 from '../assets/img/women8.jpg';
import women9 from '../assets/img/women9.jpg';
import women10 from '../assets/img/women10.jpg';
import women11 from '../assets/img/women11.jpg';
import women12 from '../assets/img/women12.jpg';
import { CartContext } from '../contexts/CartContext';
import banner from '../assets/img/banner3.jpg'
export const Womenproducts = [
  {
    id: uuidv4(),
    image: collection,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "5.0",
    title: 'Long Fitted Trench Coat',
    price: 238.00,
    description: 'A stylish coat perfect for any occasion.'
  },
  {
    id: uuidv4(),
    image: hoverCollection,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "4.5",
    title: 'Stylish Coat',
    price: 344.00,
    description: 'A stylish coat perfect for casual outings.'
  },
  {
    id: uuidv4(),
    image: women3,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Striped Cotton Perfect Shirt',
    price: 765.02,
    description: 'A casual shirt made from comfortable cotton.'
  },
  {
    id: uuidv4(),
    image: fashion,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "4.1",
    title: 'Stylish Coat',
    price: 98.03,
    description: 'A stylish coat perfect for formal occasions.'
  },
  {
    id: uuidv4(),
    image: women1,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "3.2",
    title: 'The Shorter One Button Blazer in Fluid Crepe',
    price: 189.00,
    description: 'A chic blazer for a professional look.'
  },
  {
    id: uuidv4(),
    image: women2,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "4.3",
    title: 'Geo Boatneck Flare Midi Dress',
    price: 234.23,
    description: 'A midi dress perfect for casual wear.'
  },
  {
    id: uuidv4(),
    image: women4,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Trouser Pant in Textured Drape',
    price: 456.33,
    description: 'Comfortable and stylish trousers for daily wear.'
  },
  {
    id: uuidv4(),
    image: women5,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "3.0",
    title: 'Trouser Pant in Seasonless Stretch',
    price: 555.00,
    description: 'Elegant trousers suitable for any season.'
  },
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
    image: women7,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "4.8",
    title: 'Risky Business Blazer',
    price: 456.76,
    description: 'A professional blazer for business meetings.'
  },
  {
    id: uuidv4(),
    image: women8,
    category: 'Women Clothing',
    subcategory: 'Formal',
    rating: "4.0",
    title: 'Solid Lapel Collar Single Button Blazer & Tailored Pants',
    price: 900.00,
    description: 'A stylish blazer and pants set.'
  },
  {
    id: uuidv4(),
    image: women9,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "5.0",
    title: 'Boat Lilies Cut Work Embroidered Shirt',
    price: 234.65,
    description: 'An embroidered shirt with floral details.'
  },
  {
    id: uuidv4(),
    image: women10,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "2.7",
    title: 'Trouser Jeans in Ivory',
    price: 123.22,
    description: 'Comfortable jeans in an elegant ivory color.'
  },
  {
    id: uuidv4(),
    image: women11,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "4.5",
    title: 'Wide Leg Chino Pants',
    price: 298.11,
    description: 'Casual wide leg pants for everyday wear.'
  },
  {
    id: uuidv4(),
    image: women12,
    category: 'Women Clothing',
    subcategory: 'Casual',
    rating: "4.3",
    title: 'Stripe Tie Waist Top',
    price: 356.00,
    description: 'A stylish striped top with a tie waist.'
  }
];
export const TopSellingProducts = Womenproducts.filter(product => product.rating >= 4.5);

const Women = () => {
  const [products, setproducts] = useState(Womenproducts);
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
    const filteredProducts = category === 'All' ? Womenproducts : Womenproducts.filter(product => product.subcategory === category);
    setproducts(filteredProducts);

    setCurrentSlide(0);
  };

  return (
    <div className="p-4">
  {/* Main Banner Section */}
  <section className="relative h-screen mb-16 border-8 border-[#fab790] flex flex-col md:flex-row items-center overflow-hidden">
    <div className="flex-1 flex justify-center items-center p-5">
      <img
        src={banner}
        alt="Women's Fashion"
        className="w-[650px] md:h-[570px] h-full object-cover"
      />
    </div>
    <div className="flex-1 flex flex-col justify-center p-5 text-black">
      <h1 className="text-3xl md:text-5xl font-extrabold font-serif mb-4">
        Discover the Latest in Women's Fashion
      </h1>
      <p className="mt-3 text-base md:text-lg text-gray-800 font-semibold mb-6">
        Embrace style and elegance with our exclusive collection of women's fashion.<br />
        From sophisticated dresses to chic accessories, find the perfect pieces to elevate your wardrobe and make a statement.
      </p>
      <a
        href="#products"
        className="px-4 py-2 border-2 border-black text-black font-semibold text-base rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-300"
      >
        Shop the Collection
      </a>
    </div>
  </section>

  {/* Category Buttons */}
  <div id="products" className="mb-6 flex flex-wrap justify-center gap-4">
    <button
      onClick={() => handleCategoryChange('All')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'All' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
    >
      All
    </button>
    <button
      onClick={() => handleCategoryChange('Formal')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Formal' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
    >
      Formal
    </button>
    <button
      onClick={() => handleCategoryChange('Casual')}
      className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Casual' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
    >
      Casual
    </button>
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
            className="relative border p-4 h-auto w-48 md:w-56 flex-shrink-0 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 md:h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <h2 className="text-sm font-semibold mb-1">{product.title}</h2>
            <p className="text-base font-bold">${product.price.toFixed(2)}</p>

            {/* Hover effects */}
            <div className="absolute bottom-0 inset-x-0 bg-white p-2 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-between items-center">
              <button
                className="bg-blue-500 text-white p-2 rounded-full mx-1"
                onClick={() => addToCart(product)}
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

  {/* Women Fashion Products */}
  <h1 className="text-2xl md:text-3xl font-extrabold mb-6">Women Fashion</h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6 mb-8">
    {products.length > 0 ? (
      products.map(product => (
        <div
          key={product.id}
          className="relative border p-4 h-auto w-48 md:w-56 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-32 md:h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <h2 className="text-sm font-semibold mb-1">{product.title}</h2>
          <p className="text-base font-bold">${product.price.toFixed(2)}</p>

          {/* Hover effects */}
          <div className="absolute bottom-0 inset-x-0 bg-white p-2 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 flex justify-between items-center">
            <button
              className="bg-blue-500 text-white p-2 rounded-full mx-1"
              onClick={() => addToCart(product)}
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 p-4 backdrop-blur-md">
      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full relative">
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 text-lg text-red-300 hover:text-red-700 transition"
        >
          <span className="text-3xl">&times;</span>
        </button>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">{selectedProduct.title}</h2>
        <img className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover mb-4" src={selectedProduct.image} alt={selectedProduct.title} />
        <p className="text-gray-700 mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h3 className="text-lg font-semibold">${selectedProduct.price.toFixed(2)}</h3>
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

export default Women;
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useContext } from 'react';
import { FaCartPlus, FaEye } from 'react-icons/fa';
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
  const [products] = useState(Womenproducts);
  const [topSelling] = useState(TopSellingProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext); // Add to cart context

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="p-4">
      {/* Main Banner Section */}
      <div className="bg-cover bg-center h-64 mb-8" style={{ backgroundImage: `url(${fashion})` }}>
        <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
          <h1 className="text-4xl text-white font-bold">Women's Fashion</h1>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Top Selling Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {topSelling.length > 0 ? (
          topSelling.map(product => (
            <div
              key={product.id}
              className="relative border p-4 h-auto w-56 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <h2 className="text-sm font-semibold mb-1">{product.title}</h2>
              <p className="text-xs mb-2">{product.description}</p>
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
          <p>No top-selling products found.</p>
        )}
      </div>
      <h1 className="text-2xl font-bold mb-4">Women Fashion</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
        {products.length > 0 ? (
          products.map(product => (
            <div
              key={product.id}
              className="relative border p-4 h-auto w-56 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <h2 className="text-sm font-semibold mb-1">{product.title}</h2>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 p-4 backdrop-blur-md">
          <div className="bg-violet-200 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full relative">
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-lg text-red-300 hover:text-red-700 transition"
            >
              <span className="text-3xl">&times;</span>
            </button>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{selectedProduct.title}</h2>
            <img className="w-26 h-36 sm:h-48 md:h-56 lg:h-64 object-cover mb-4" src={selectedProduct.image} alt={selectedProduct.title} />
            <p className="text-gray-700 mb-4 text-sm sm:text-base">{selectedProduct.description}</p>
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h3 className="text-lg font-semibold">${selectedProduct.price.toFixed(2)}</h3>
              <h3 className="text-sm font-semibold">{selectedProduct.rating}⭐</h3>
            </div>
            <button
              onClick={() => {
                addToCart(selectedProduct);
                handleModalClose();
              }}
              className="mt-4 bg-violet-300 hover:bg-violet-500 text-white px-4 py-2 rounded shadow-xl hover:shadow-gray-600 "
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
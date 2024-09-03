import { v4 as uuidv4 } from 'uuid';
import React,{useState, useContext} from 'react';
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
  const [products] = useState(AccessoriesProducts);
  const [topSelling] = useState(TopSellingProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topSelling.length);
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

  return (
    <div className="p-4">
      {/* Main Banner Section */}
      <div className="bg-cover bg-center h-64 mb-8" style={{ backgroundImage: `url(${girls1})` }}>
        <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
          <h1 className="text-4xl text-white font-bold">Accessories</h1>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-10">Top Selling Products</h2>
      
      {/* Carousel */}
      <div className="relative">
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          <FaChevronLeft />
        </button>
        
        <button
          onClick={handleNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          <FaChevronRight />
        </button>
        
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {topSelling.map(product => (
              <div
                key={product.id}
                className="relative border p-4 h-auto w-56 flex-shrink-0 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out"
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
            ))}
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Accessories</h1>
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
              <div className='flex space-x-4'><p className="text-base font-bold">${product.price.toFixed(2)}</p>
              <h3 className="text-sm font-semibold">{product.rating}⭐</h3></div>

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

export default Accessories;
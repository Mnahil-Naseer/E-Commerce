import { v4 as uuidv4 } from 'uuid';
import React,{useState,useContext} from 'react';
import { FaCartPlus, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import cover5 from '../assets/img/cover5.jpg'
import d1 from '../assets/img/d1.jpg';
import d2 from '../assets/img/d2.jpg';
import d3 from '../assets/img/d3.jpg';
import d4 from '../assets/img/d4.jpg';
import d5 from '../assets/img/d5.jpg';
import d6 from '../assets/img/d6.jpg';
import d7 from '../assets/img/d7.jpg';
import d8 from '../assets/img/d8.jpg';
import d9 from '../assets/img/d9.jpg';
import d10 from '../assets/img/d10.jpg';
import d11 from '../assets/img/d11.jpg';
import d12 from '../assets/img/d12.jpg';
import d13 from '../assets/img/d13.jpg';
import d14 from '../assets/img/d14.jpg';
import d15 from '../assets/img/d15.jpg';
import banner from '../assets/img/banner6.jpg'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
export const Decorationproducts = [
  {
    id: uuidv4(),
    image: d1,
    category: 'Decoratives',
    subcategory: 'Clocks',
    rating: "4.7",
    title: 'Vintage Rose Gold Wall Clock',
    price: 270.00,
    description: 'A stylish rose gold wall clock with a vintage design that complements any interior decor.'
  },
  {
    id: uuidv4(),
    image: d2,
    category: 'Decorative Accessories',
    subcategory: 'Clocks',
    rating: "4.8",
    title: 'Elegant Blue Wall Clock',
    price: 380.00,
    description: 'An elegant blue wall clock with a sleek design, perfect for adding a pop of color to your living space.'
  },
  {
    id: uuidv4(),
    image: d3,
    category: 'Decorative Accessories',
    subcategory: 'Table Lamps',
    rating: "4.6",
    title: 'Modern Gold Table Lamp',
    price: 135.00,
    description: 'A modern gold table lamp with a minimalistic design, ideal for adding a touch of sophistication to any room.'
  },
  {
    id: uuidv4(),
    image: d4,
    category: 'Decorative Accessories',
    subcategory: 'Table Lamps',
    rating: "4.8",
    title: 'Classic Silver Table Lamp',
    price: 150.00,
    description: 'A classic silver table lamp that provides warm lighting and an elegant touch to your decor.'
  },
  {
    id: uuidv4(),
    image: d5,
    category: 'Decorative Accessories',
    subcategory: 'Vases',
    rating: "4.5",
    title: 'Elegant Crystal Vase',
    price: 200.00,
    description: 'An elegant crystal vase that serves as a stunning centerpiece for any table or shelf.'
  },
  {
    id: uuidv4(),
    image: d6,
    category: 'Decorative Accessories',
    subcategory: 'Vases',
    rating: "4.9",
    title: 'Luxurious Marble Vase',
    price: 340.00,
    description: 'A luxurious marble vase that adds a touch of opulence and style to your home decor.'
  },
  {
    id: uuidv4(),
    image: d7,
    category: 'Decorative Accessories',
    subcategory: 'Wall Art',
    rating: "4.6",
    title: 'Abstract Canvas Art',
    price: 275.00,
    description: 'A striking abstract canvas art piece that brings a contemporary flair to your wall decor.'
  },
  {
    id: uuidv4(),
    image: d8,
    category: 'Decorative Accessories',
    subcategory: 'Wall Art',
    rating: "4.7",
    title: 'Modern Geometric Wall Art',
    price: 350.00,
    description: 'Modern geometric wall art that adds a touch of elegance and sophistication to any room.'
  },
  {
    id: uuidv4(),
    image: d9,
    category: 'Decorative Accessories',
    subcategory: 'Rugs',
    rating: "4.8",
    title: 'Classic Persian Rug',
    price: 500.00,
    description: 'A classic Persian rug with intricate patterns, perfect for enhancing the warmth and elegance of your home.'
  },
  {
    id: uuidv4(),
    image: d10,
    category: 'Decorative Accessories',
    subcategory: 'Rugs',
    rating: "4.5",
    title: 'Soft Wool Area Rug',
    price: 420.00,
    description: 'A soft wool area rug that offers comfort and a touch of luxury to your living space.'
  },
  {
    id: uuidv4(),
    image: d11,
    category: 'Decorative Accessories',
    subcategory: 'Wall Art',
    rating: "4.6",
    title: 'Classic Abstract Wall Art',
    price: 700.00,
    description: 'A classic abstract wall art piece that brings modern elegance and sophistication to your walls.'
  },
  {
    id: uuidv4(),
    image: d12,
    category: 'Decorative Accessories',
    subcategory: 'Wall Art',
    rating: "4.6",
    title: 'Elegant Landscape Canvas',
    price: 650.00,
    description: 'An elegant landscape canvas that enhances your space with serene and beautiful outdoor scenery.'
  },  
  {
    id: uuidv4(),
    image: d13,
    category: 'Decorative Accessories',
    subcategory: 'Cushions',
    rating: "4.4",
    title: 'Contemporary Geometric Cushion',
    price: 480.00,
    description: 'A contemporary geometric cushion that adds a stylish and artistic touch to your living space.'
  },
  {
    id: uuidv4(),
    image: d14,
    category: 'Decorative Accessories',
    subcategory: 'Cushions',
    rating: "4.9",
    title: 'Plush Velvet Throw Pillow',
    price: 800.00,
    description: 'A plush velvet throw pillow that offers unparalleled comfort and a sophisticated look for your home.'
  },
  {
    id: uuidv4(),
    image: d15,
    category: 'Decorative Accessories',
    subcategory: 'Cushions',
    rating: "4.3",
    title: 'Bohemian Patterned Cushion',
    price: 250.00,
    description: 'A bohemian patterned cushion that adds vibrant colors and artistic flair to your room decor.'
  }
];


export const TopSellingProducts = Decorationproducts.filter(product => product.rating >= 4.6);

const Decoration = () => {
  const [products, setproducts] = useState(Decorationproducts);
  const [topSelling, settopSelling] = useState(TopSellingProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, topSelling.length - 1)
    );
  };


  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + topSelling.length) % topSelling.length);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Filter top-selling products
    const filteredTopSelling = category === 'All' ? TopSellingProducts : TopSellingProducts.filter(product => product.subcategory === category);
    settopSelling(filteredTopSelling);

    // Filter accessories products
    const filteredProducts = category === 'All' ? Decorationproducts : Decorationproducts.filter(product => product.subcategory === category);
    setproducts(filteredProducts);

    setCurrentSlide(0);
  };
  return (
    <Link to="dacoration">
    <div className="p-4">
      {/* Main Banner Section */}
      <section className="relative h-screen mb-16 border-8 border-l-cyan-900 border-b-cyan-900 border-t-[#5e4b08] border-r-[#5e4b08] flex items-center overflow-hidden">
        <div className="flex-1 flex flex-col justify-center p-5 text-black">
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif mb-4">
            Upgrade Your Space with Modern Home Appliances
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-800 font-semibold mb-6">
            Explore our cutting-edge home appliances designed to enhance your living experience.<br />
            From efficient kitchen gadgets to powerful cleaning solutions, find everything you need to modernize your home.
          </p>
          <a
            href="#products"
            className="px-5 py-3 border-2 border-black text-black font-semibold text-lg rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Discover More
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center p-5">
          <img
            src={banner}
            alt="Home Appliances"
            className="w-full h-96 rounded-t-full max-w-md object-cover"
          />
        </div>
      </section>
      <div id="products" className="mb-6 flex justify-center space-x-4">
        <button
          onClick={() => handleCategoryChange('All')}
          className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'All' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange('Clocks')}
          className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Clocks' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
        >
          Clocks
        </button>
        <button
          onClick={() => handleCategoryChange('Table Lamps')}
          className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Table Lamps' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
        >
          Table Lamps
        </button>
        <button
          onClick={() => handleCategoryChange('Vases')}
          className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Vases' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
        >
          Vases
        </button>
        <button
          onClick={() => handleCategoryChange('Wall Art')}
          className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Wall Art' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
        >
          Wall Art
        </button>
        <button
          onClick={() => handleCategoryChange('Cushions')}
          className={`px-4 py-2 border-2 rounded-full ${selectedCategory === 'Cushions' ? 'bg-gray-800 text-white' : 'bg-white text-black'} font-semibold`}
        >
          Cushions
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-10">Top Selling Products</h2>
      
      {/* Carousel */}
      <div className="relative">
      <button
          onClick={handlePrevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentSlide===0}
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
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100/5}%)` }}
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

      <h1 className="text-2xl font-bold mb-10 mt-10">Decoration</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-8">
        {products.length > 0 ? (
          products.map(product => (
            <div
              key={product.id}
              className="relative border p-10 h-auto w-56 rounded-lg shadow-lg group overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
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
          <div className="bg-[#64bdce] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full relative">
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
    </Link>
  );
};

export default Decoration;

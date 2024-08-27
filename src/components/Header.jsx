import React from 'react';
import { FaSearch, FaBars, FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-3 flex flex-col">
      {/* Top Section: Logo and All Categories Dropdown */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="your-logo.png" alt="Logo" className="w-28" />
          <div className="ml-4 flex items-center bg-gray-800 px-4 py-2 rounded">
            <FaBars className="mr-2" />
            <span>All Categories</span>
            <IoIosArrowDown className="ml-2" />
          </div>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-l"
            />
            <button className="absolute right-0 top-0 bg-red-500 px-4 py-2 rounded-r">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Section: User Profile Icon and Cart Icon */}
        <div className="flex items-center">
          <div className="flex items-center">
            <FaUserCircle className="text-2xl mr-2" />
            <span>Sign in / Register</span>
          </div>
          <div className="flex items-center relative ml-4">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links */}
      <div className="mt-2 flex flex-wrap gap-4">
        <Link to="/" className="text-red-500">3 from US $2.99</Link>
        <Link to="/" className="hover:text-gray-300">Choice</Link>
        <Link to="/" className="hover:text-gray-300">SuperDeals</Link>
        <Link to="/" className="hover:text-gray-300">Plus</Link>
        <Link to="/" className="hover:text-gray-300">New</Link>
        <Link to="/" className="hover:text-gray-300">AliExpress Business</Link>
        <div className="hover:text-gray-300 flex items-center">
          <Link to="/" className="mr-2">More</Link>
          <IoIosArrowDown />
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useContext, useEffect, useState, useRef } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { BsBag } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../contexts/AuthContext";
import { FiSearch } from "react-icons/fi"; // Import the search icon
import { HiMenu } from "react-icons/hi"; // Import the hamburger menu icon

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="bg-gray-300 text-black font-semibold shadow-2xl w-full z-20 transition-all duration-300">
      <div
        ref={ref}
        className="container mx-auto flex items-center justify-between h-full px-4 md:px-8"
      >
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <HiMenu className="text-3xl" />
          </button>
        </div>

        <Link to="/" className="mx-auto md:mx-0">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <img className="w-[50px] md:w-[70px]" src={Logo} alt="Logo" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex flex-grow justify-center"
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <nav className="flex items-center space-x-4 md:space-x-8">
            <Link to="/" className="hover:text-gray-700 cursor-pointer">
              Home
            </Link>
            <Link to="/#Home" className="hover:text-gray-700 cursor-pointer">
              Collections
            </Link>
            <Link to="/#BigSave" className="hover:text-gray-700 cursor-pointer">
              Big Save
            </Link>
            <Link to="/#NewArrivals" className="hover:text-gray-700 cursor-pointer">
              New Arrivals
            </Link>
            <Link to="/#Footer" className="hover:text-gray-700 cursor-pointer">
              Contact Us
            </Link>
            <div className="relative">
              <input
                type="text"
                className="rounded-full pl-10 pr-4 py-1 text-black shadow-lg focus:outline-none focus:shadow-outline"
                placeholder="Search..."
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
          </nav>
        </motion.div>

        <motion.div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="cursor-pointer animate-slideDown flex relative z-50 md:ml-4"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <FaRegCircleUser className="text-xl mr-2 -mt-2" />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-9 bg-gray-300 border-solid border-white shadow-lg rounded-md w-48 md:w-56">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-400 hover:shadow-slate-800 hover:shadow-lg cursor-pointer flex items-center">
                  Profile <CgProfile className="ml-auto text-2xl" />
                </li>
                {isAuthenticated ? (
                  <li className="px-4 py-2 hover:bg-gray-400 hover:shadow-slate-800 hover:shadow-lg cursor-pointer flex items-center" onClick={handleLogout}>
                    Logout <FiLogOut className="ml-auto text-2xl" />
                  </li>
                ) : (
                  <li className="px-4 py-2 hover:bg-gray-400 hover:shadow-slate-800 hover:shadow-lg cursor-pointer flex items-center" onClick={handleLoginClick}>
                    Login <FiLogOut className="ml-auto text-2xl" />
                  </li>
                )}
              </ul>
            </div>
          )}
        </motion.div>

        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative animate-bounce md:ml-4"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <BsBag className="text-xl -mt-2" />
          <div className="bg-red-500 absolute -right-1 -bottom-1 top-0 text-[10px] w-[16px] h-[16px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
            <span className="absolute inline-flex w-[16px] h-[16px] animate-ping rounded-full bg-red-400 opacity-75"></span>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
   {isMobileMenuOpen && (
  <div className="absolute top-12 left-0 right-0 bg-gray-300 p-4 w-full h-72 z-20 md:hidden">
    <div className="relative mb-4">
      <input
        type="text"
        className="rounded-full pl-10 pr-4 py-1 text-black shadow-lg focus:outline-none focus:shadow-outline w-full"
        placeholder="Search..."
      />
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
    </div>
    <nav className="flex flex-col space-y-4">
      <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-700 cursor-pointer">
        Home
      </Link>
      <Link to="/#Home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-700 cursor-pointer">
        Collections
      </Link>
      <Link to="/#BigSave" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-700 cursor-pointer">
        Big Save
      </Link>
      <Link to="/#NewArrivals" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-700 cursor-pointer">
        New Arrivals
      </Link>
      <Link to="/#Footer" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-700 cursor-pointer">
        Contact Us
      </Link>
    </nav>
  </div>
)}

    </header>
  );
};

export default Header;

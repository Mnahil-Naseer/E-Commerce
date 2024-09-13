import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    alert("Thank you for signing up for our newsletter. We will get back to you soon.");
    document.getElementById("MainBanner").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="Footer" className="py-5  bg-gray-300 text-black">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mt-16 md:mt-0">
          <h1 className="font-extrabold mb-10 font-serif text-4xl mx-6">E-Mart</h1>
          <div className="text-lg mb-4 ml-5">
            <div className="flex items-center mb-2">
              <span className="text-xl mr-3">🗺</span>
              <p>Shop 009A, Level 4, Block A, Demo Park, Ottawa</p>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-xl mr-3">📞</span>
              <p>+1-613-555-0182</p>
            </div>
            <div className="flex items-center">
              <span className="text-xl mr-3">📧</span>
              <p>contact@demo.com</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4 mt-16 md:mt-10 md:ml-24 ml-5">
          <h2 className="font-bold text-xl mb-4">Follow Us</h2>
          <div className="flex space-x-6 mb-4">
            <Link to="#" className="hover:text-gray-600"><FaFacebook className="text-2xl" /></Link>
            <Link to="#" className="hover:text-gray-600"><FaInstagram className="text-2xl" /></Link>
            <Link to="#" className="hover:text-gray-600"><FaLinkedin className="text-2xl" /></Link>
            <Link to="#" className="hover:text-gray-600"><FaPinterest className="text-2xl" /></Link>
          </div>
        </div>

        <div className="w-full md:w-1/4 mt-16 md:mt-10 md:mr-10 ml-5 mr-5 ">
          <h2 className="font-bold text-xl mb-4">Subscribe</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="p-2 w-full border border-gray-300 rounded-md mb-4 text-black" 
              required 
            />
            <button 
              type="submit" 
              className="bg-black text-white p-2 rounded-md w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto text-center mt-6">
        <p className="font-bold">
          &copy; E-MART 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import bg from '../assets/img/Elegant Online Shopping Logo Template.jpg';
import hero from '../assets/img/bghero.jpg';

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    alert("Thank you for your message. We will get back to you soon.");
    document.getElementById("MainBanner").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="Footer" className="relative py-5 mt-14 bg-gray-300 text-black">
      <div className="relative container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mt-16 md:mb-0">
          <h1 className="font-extrabold mb-10 font-serif text-4xl mx-6">E-Mart</h1>
          <h4 className="text-lg">
            <span className="font-bold flex"><p className="text-xl mr-7">🗺</p>  Shop 009A, Level 4, Block A, Demo Park, Ottawa</span>
          </h4><br/>
          <h4 className="text-lg">
            <span className="font-bold flex"><p className="text-xl mr-7">📞</p>  +1-613-555-0182</span>
          </h4><br/>
          <h4 className="text-lg ">
            <span className="font-bold flex "> <p className="text-xl mr-7">📧</p> contact@demo.com</span>
          </h4>
        </div>
        <div className="w-full md:w-1/4 justify-center mt-28 md:mb-0">
          <h2 className="font-bold text-xl mb-4 my-4">Follow Us</h2>
          <div className="flex space-x-6 mt-6 mb-4">
            <Link to="#" className="hover:text-gray-600"><FaFacebook className="text-2xl" /></Link>
            <Link to="#" className="hover:text-gray-600"><FaInstagram className="text-2xl" /></Link>
            <Link to="#" className="hover:text-gray-600"><FaLinkedin className="text-2xl" /></Link>
            <Link to="#" className="hover:text-gray-600"><FaPinterest className="text-2xl" /></Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 mr-10 md:mb-0">
          <h2 className="font-bold text-center text-xl mb-4 mt-10 ">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" className="p-2 w-full border border-gray-300 rounded-md mb-4 text-black" required />
            <input type="email" placeholder="Your email address" className="p-2 w-full border border-gray-300 rounded-md mb-4 text-black" required />
            <textarea placeholder="Your message" className="p-2 w-full border border-gray-300 rounded-md mb-4 text-black" required />
            <button type="submit" className="bg-black text-white p-2 rounded-md w-full">Submit</button>
          </form>
        </div>
      </div>
      <div className="relative container mx-auto text-center mt-6">
        <p className="font-bold">
          Copyright &copy; MN's 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-white shadow border-b-2 bg-gradient-to-b from-white to-[#d2ddfc]">
    {/* Logo */}
    <div className="">
      <a href="/#home" className="no-underline">
      <div className="text-black text-5xl font-bold">Work<span className="text-[#6C6EF5]">Track</span></div>
     <div>
     <span className="text-black ml-20">Simplifying field work</span>
     </div>
      </a>
    </div>

    {/* Navigation Links */}
    <div className="hidden md:flex space-x-12">
      <a
        href="/#home"
        className="text-gray-600 hover:text-blue-500 text-lg no-underline"
      >
        Home
      </a>
      <a
        href="/#about"
        className="text-gray-600 hover:text-blue-500 text-lg no-underline"
      >
        About Us
      </a>
      <a
        href="/#contact"
        className="text-gray-600 hover:text-blue-500 text-lg no-underline"
      >
        Contact Us
      </a>
      <Link to = "/login">
      <div className="text-gray-600 hover:text-blue-500 text-lg no-underline"
    >
      Login
      </div>
      </Link>
    </div>
          {/* Sign Up Button */}
  <Link to="/signup">
    <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-600">
      Sign Up
    </button>
  </Link>
  </nav>
  );
};

export default Navbar;

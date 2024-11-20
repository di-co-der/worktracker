import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-400">
              MyBrand
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-indigo-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-indigo-400">
              About
            </Link>
            <Link to="/services" className="hover:text-indigo-400">
              Services
            </Link>
            <Link to="/contact" className="hover:text-indigo-400">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-700 hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-gray-700 hover:text-indigo-400"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 hover:bg-gray-700 hover:text-indigo-400"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-gray-700 hover:text-indigo-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

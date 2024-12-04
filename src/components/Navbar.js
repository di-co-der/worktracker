import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-2 bg-gradient-to-b from-white to-[#d2ddfc] z-50">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="no-underline">
            <div className="text-black text-3xl md:text-5xl font-bold">
              Work<span className="text-[#6C6EF5]">Track</span>
            </div>
            <span className="text-black text-sm md:text-base ml-4">
              Simplifying field work
            </span>
          </Link>
          {/* Hamburger Menu for Mobile */}
          <button
            className="text-gray-600 md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed top-0 right-0 h-full w-64 text-nowrap shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:flex md:items-center md:transform-none md:shadow-none`}
        >
          <button
            className="text-gray-600 absolute top-4 right-4 md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-start md:flex-row md:space-x-12 px-6 pt-16 md:pt-0">
            <a
              href="/#home"
              className="block text-gray-600 hover:text-blue-500 text-lg no-underline px-4 py-2"
            >
              Home
            </a>
            <a
              href="/#about"
              className="block text-gray-600 hover:text-blue-500 text-lg no-underline px-4 py-2"
            >
              About Us
            </a>
            <a
              href="/#contact"
              className="block text-gray-600 hover:text-blue-500 text-lg no-underline px-4 py-2"
            >
              Contact Us
            </a>
            <Link to="/login" className="block">
              <div className="text-gray-600 hover:text-blue-500 text-lg no-underline px-4 py-2">
                Login
              </div>
            </Link>
          </div>

          {/* Mobile Sign Up Button */}
          {isMenuOpen && (
            <div className="w-full text-center mt-6 md:hidden">
              <Link to="/signup">
                <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-600">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Sign Up Button for Larger Screens */}
        <div className="hidden md:block">
          <Link to="/signup">
            <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Push Content Down When Menu is Open */}
      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "mt-64" : "mt-16"
        }`}
      >
        {/* Main Content Goes Here */}
        {/* <div className="p-6">
          <h1 className="text-2xl font-bold">Welcome to WorkTrack</h1>
          <p className="mt-4">
            This is your platform to simplify field work and optimize workflows.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;

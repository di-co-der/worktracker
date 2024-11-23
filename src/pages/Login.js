import React from 'react';
import loginImg from "../assets/login_image-removebg-preview.png"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';

const Login = () => {
    
    return (
        <div>
        <Navbar> </Navbar>
              {/* Login Section */}
      <section
        id="login"
        className="h-full w-full bg-white flex pt-16 bg-gradient-to-b from-white to-[#d2ddfc]"
      >
        <div className="h-full w-6/12 bg-white flex flex-col items-center justify-center pb-24 bg-gradient-to-b from-white to-[#d2ddfc]">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome back</h1>
          <p className="text-gray-600 mb-6 text-xl">Please enter your details</p>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <a
                href="#"
                className="text-indigo-500 text-sm hover:underline"
              >
                Forgot password
              </a>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Login
      </button>
            </form>
            <Link to = "/Signup"
             className='text-blue-500 mt-4 hover:underline cursor-pointer'> Create new account</Link>
            </div>

        <div className="h-auto">
          <img
            className="h-full w-auto max-w-full object-contain"
            src={loginImg}
            alt="Work Progress"
          />
        </div>
      </section>
        </div>
    );
}

export default Login;

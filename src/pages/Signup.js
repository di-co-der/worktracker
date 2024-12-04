import React from "react";
import loginImg from "../assets/login_image-removebg-preview.png";

const Signup = () => {
  return (
    <div>
      <section
        id="signup"
        className="h-full w-full bg-white flex pt-16 bg-gradient-to-b from-white to-[#d2ddfc]"
      >
        <div className="h-full mt-24 w-6/12 bg-white flex flex-col items-center justify-center pb-24 bg-gradient-to-b from-white to-[#d2ddfc]">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Create Your Account
          </h1>
          <p className="text-gray-600 mb-6 text-xl">
            Fill in the details to get started!
          </p>

          <form className="w-3/4 space-y-4">
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Create a password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Re-enter your password"
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mb-4">
              <input
                id="terms"
                type="checkbox"
                className="mr-2 h-5 w-5 text-blue-500 rounded"
                required
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to the{" "}
                <a href="#" className="text-indigo-500 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="h-auto">
          <img
            className="h-full w-auto max-w-full object-contain"
            src={loginImg}
            alt="Signup"
          />
        </div>
      </section>
    </div>
  );
};

export default Signup;
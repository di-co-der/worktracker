import React from "react";

const Contact = () => {
  return (
    <div
      className="flex items-center justify-center bg-[#b0b1fc] rounded-lg shadow-lg p-8 mx-64 my-12">
      {/* Form Section */}
      <div className="m-8">
        <h2 className="text-2xl font-bold text-center mb-4 p-2">
          We’d love to walk you through the platform
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill in the form and we’ll schedule a free demo!
        </p>
        </div>
        <div>
        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Enter Your City"
            className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

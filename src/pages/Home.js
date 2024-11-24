// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/landingPageImg.png";
import image2 from "../assets/about-us.jpg";
import image4 from "../assets/contactus_page-removebg-preview.png";
const Home = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate("/login");
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen w-full bg-white flex pt-16 border-b-2"
      >
        <div className="h-full w-6/12 bg-white flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold p-3">
            <div className="p-2 pb-0">
              Track your <span className="text-[#6C6EF5]">work progress</span>
            </div>
            <div className="p-2 pb-0">
              <span className="text-[#6C6EF5]">Anywhere</span> Anytime!
            </div>
            <div className="p-2 pb-0 text-nowrap">
              Simplifying <span className="text-[#6C6EF5]">field </span>work
            </div>
          </h1>
          <p className="text-3xl text-gray-600 mb-6">
            Elevate Your Workflow, Optimize Your Time.
          </p>
          <button
            className="px-10 py-3 bg-[#FE978E] text-white text-center rounded-full font-semibold text-2xl hover:bg-[#E1483E]"
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
        <div className="">
          <img className="h-full w-full" src={image} alt="Work Progress" />
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="h-full w-full bg-gradient-to-b from-white to-[#d2ddfc] flex justify-between items-center px-16 py-12 gap-12 border-b-2"
      >
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center w-6/12 space-y-6">
          <h1 className="text-6xl font-extrabold text-[#6C6EF5] leading-tight">
            About Us
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Welcome to{" "}
            <span className="font-semibold text-[#6C6EF5]">WorkTrack</span>,
            your ultimate solution for simplifying and streamlining fieldwork
            operations. At WorkTrack, we believe in empowering professionals and
            teams to track their tasks, projects, and progress with ease.
            <br />
            <br />
            Our platform combines cutting-edge technology with user-friendly
            tools to enhance productivity, optimize workflows, and ensure better
            time management. We are driven by a passion for innovation and a
            commitment to helping you achieve your goals.
            <br />
            <br />
            Whether you're managing a remote team, supervising projects in the
            field, or coordinating on-the-go tasks, WorkTrack is designed to
            make your job simpler, smarter, and more efficient.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-5/12 h-auto">
          <img
            className="w-full h-full shadow-lg rounded-lg hover:scale-105 transition-transform"
            src={image2}
            alt="Work Progress"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="h-full w-full bg-white flex pt-16 border-b-2 bg-gradient-to-b from-white to-[#d2ddfc]"
      >
        <div className="h-full w-6/12 bg-white flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#d2ddfc]">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="h-full w-5/12">
          <img
            className="h-full w-full object-cover "
            src={image4}
            alt="Work Progress"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

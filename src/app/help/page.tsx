"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

const page = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center px-4 py-12'>
        {/* Heading */}
        <h1 className='text-4xl md:text-5xl font-extrabold text-center mb-6'>
          How Can We Help You?
        </h1>

        {/* Paragraph */}
        <p className='text-gray-300 text-center max-w-2xl mb-12 text-lg md:text-xl'>
          Whether you’re looking for assistance
          with our services, have questions, or
          need guidance, we’re here to support
          you. Explore our resources or reach out
          to us directly.
        </p>

        {/* Cards Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl'>
          {/* Card 1 */}
          <div className='bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform'>
            <h3 className='text-xl font-semibold mb-4'>
              FAQs
            </h3>
            <p className='text-gray-400'>
              Find answers to frequently asked
              questions to save your time.
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform'>
            <h3 className='text-xl font-semibold mb-4'>
              Contact Support
            </h3>
            <p className='text-gray-400'>
              Reach out to our support team for
              personalized help.
            </p>
          </div>

          {/* Card 3 */}
          <div className='bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform'>
            <h3 className='text-xl font-semibold mb-4'>
              Documentation
            </h3>
            <p className='text-gray-400'>
              Access detailed guides and resources
              to navigate our services.
            </p>
          </div>

          {/* Card 4 */}
          <div className='bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform'>
            <h3 className='text-xl font-semibold mb-4'>
              Community Forum
            </h3>
            <p className='text-gray-400'>
              Join discussions and get insights
              from our user community.
            </p>
          </div>
        </div>
      </div>
      <footer className='bg-gray-900 text-white py-12'>
        <div className='container mx-auto px-6 md:px-12'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* Logo and Description */}
            <div>
              <h2 className='text-2xl font-bold mb-4'>
                Your Company
              </h2>
              <p className='text-sm text-gray-400'>
                We deliver exceptional services
                and products to meet your needs.
                Let's build the future together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>
                Quick Links
              </h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='/about'
                    className='hover:underline text-gray-400'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='/services'
                    className='hover:underline text-gray-400'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='/pricing'
                    className='hover:underline text-gray-400'
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    className='hover:underline text-gray-400'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>
                Contact Us
              </h3>
              <ul className='space-y-2'>
                <li className='flex items-center space-x-2'>
                  <span className='material-icons-outlined'>
                    <IoLocationOutline />
                  </span>
                  <span>Dhaka,Bangladesh</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='material-icons-outlined'>
                    <CiMobile3 />
                  </span>
                  <span>number...</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <span className='material-icons-outlined'>
                    <TfiEmail />
                  </span>
                  <span>email...</span>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>
                Follow Us
              </h3>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full hover:bg-blue-600'
                >
                  <i className='fab fa-facebook-f text-white'></i>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-blue-400 flex items-center justify-center rounded-full hover:bg-blue-500'
                >
                  <i className='fab fa-twitter text-white'></i>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-pink-500 flex items-center justify-center rounded-full hover:bg-pink-600'
                >
                  <i className='fab fa-instagram text-white'></i>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full hover:bg-gray-800'
                >
                  <i className='fab fa-linkedin-in text-white'></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='mt-12 border-t border-gray-700 pt-6 text-center'>
            <p className='text-sm text-gray-400'>
              &copy; 2024 Your Company. All rights
              reserved. | Privacy Policy | Terms
              of Service
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default page;

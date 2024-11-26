"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

export default function FeaturesPage() {
  const features = [
    {
      title: "Fast Performance",
      description:
        "Optimized for speed and efficiency, ensuring a seamless experience for users.",
      icon: "🚀",
    },
    {
      title: "Highly Secure",
      description:
        "We implement top-notch security protocols to protect your data.",
      icon: "🔒",
    },
    {
      title: "User-Friendly",
      description:
        "Designed with an intuitive user interface for easy navigation.",
      icon: "👍",
    },
    {
      title: "Mobile Responsive",
      description:
        "Fully optimized for all screen sizes and devices.",
      icon: "📱",
    },
    {
      title: "SEO Optimized",
      description:
        "Built with SEO best practices to rank higher in search results.",
      icon: "🌐",
    },
    {
      title: "Customizable",
      description:
        "Easily customize features to suit your business needs.",
      icon: "⚙️",
    },
  ];

  return (
    <>
      <Navbar />
      {/* Features Section */}
      <div className='bg-black text-white'>
        <div className='container mx-auto px-4 py-16'>
          <h1 className='text-4xl font-extrabold text-center mb-8 text-white'>
            Our Features
          </h1>
          <p className='text-center text-gray-400 max-w-2xl mx-auto mb-12'>
            Discover the extensive features that
            make our platform stand out. Built for
            performance, security, and usability.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='p-6 bg-gray-800 rounded-lg border border-gray-700 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300'
              >
                <div className='text-5xl mb-4 text-blue-400 hover:text-blue-300 transition-colors duration-300'>
                  {feature.icon}
                </div>
                <h2 className='text-xl font-semibold mb-2 text-white'>
                  {feature.title}
                </h2>
                <p className='text-gray-400'>
                  {feature.description}
                </p>
              </div>
            ))}
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
}

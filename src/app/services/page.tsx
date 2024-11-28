"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting responsive and high-performance websites tailored to your needs.",
    icon: "🌐",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing visually appealing and user-friendly interfaces.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description:
      "Enhancing website visibility to increase organic traffic.",
    icon: "🚀",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Building scalable and secure online stores for your business.",
    icon: "🛒",
  },
];

const Page = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white'>
        {/* Heading */}
        <header className='text-center py-16 px-6'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Our Services
          </h1>
          <p className='text-gray-400 text-lg md:text-xl max-w-3xl mx-auto'>
            We provide a wide range of services to
            help you succeed in the digital world.
          </p>
        </header>

        {/* Services Grid */}
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 md:px-12 lg:px-24 pb-16'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300'
            >
              <div className='text-5xl mb-4'>
                {service.icon}
              </div>
              <h2 className='text-2xl font-semibold mb-3'>
                {service.title}
              </h2>
              <p className='text-gray-400'>
                {service.description}
              </p>
            </div>
          ))}
        </section>
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

export default Page;

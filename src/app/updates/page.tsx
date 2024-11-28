"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import TheImage from "@/assets/images/update.png";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-4'>
        {/* Heading */}
        <h1 className='text-5xl font-extrabold mb-6 text-center'>
          COMING SOON
        </h1>
        <Image
          src={TheImage}
          alt='update image'
          width={500}
          height={500}
          className='mb-6'
        />
        {/* Description */}
        <p className='text-gray-300 text-lg leading-relaxed text-center max-w-3xl mb-8'>
          Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Libero, reiciendis
          voluptatum ut, hic iure nam provident
          consequuntur deserunt earum dignissimos
          officiis reprehenderit quasi. Aliquid,
          quasi magnam! Incidunt magni cupiditate
          alias.
        </p>

        {/* Buttons */}
        <div className='flex flex-wrap justify-center gap-4'>
          <button className='bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-blue-400 hover:to-teal-300 focus:outline-none transition-all'>
            Learn More
          </button>
          <button className='bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-purple-400 hover:to-pink-300 focus:outline-none transition-all'>
            Contact Us
          </button>
          <button className='bg-gradient-to-r from-green-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-green-400 hover:to-yellow-300 focus:outline-none transition-all'>
            Subscribe
          </button>
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

export default Page;

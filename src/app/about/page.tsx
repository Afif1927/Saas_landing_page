"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";
import ProImage1 from "@/assets/images/p5.jpg";
import ProImage2 from "@/assets/images/p4.jpg";
import ProImage3 from "@/assets/images/p3.jpg";
import ProImage4 from "@/assets/images/p2.jpg";
import Image from "next/image";

import {
  FaUserTie,
  FaRocket,
  FaRegLightbulb,
} from "react-icons/fa";

const Page = () => {
  return (
    <>
      <Navbar />

      <div className='bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white'>
        {/* Hero Section */}
        <section className='text-center py-20 px-6 md:px-12 lg:px-24'>
          <motion.h1
            className='text-5xl md:text-6xl font-bold mb-6'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className='text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto mb-8'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            We are a team of passionate
            professionals committed to delivering
            cutting-edge solutions that drive
            innovation and success. Our focus is
            on delivering exceptional value to our
            clients through strategic partnerships
            and a customer-first approach.
          </motion.p>
          <motion.div
            className='flex justify-center space-x-6 mt-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            <div className='flex flex-col items-center'>
              <FaUserTie className='text-4xl mb-4' />
              <p className='text-xl'>
                Experienced Professionals
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <FaRocket className='text-4xl mb-4' />
              <p className='text-xl'>
                Innovative Solutions
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <FaRegLightbulb className='text-4xl mb-4' />
              <p className='text-xl'>
                Creative Ideas
              </p>
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className='py-20 bg-gray-800 text-center'>
          <h2 className='text-4xl font-semibold mb-12'>
            Meet Our Team
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-6 md:px-12'>
            <motion.div
              className='bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={ProImage1}
                alt='Team Member'
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <h3 className='text-2xl font-semibold mt-4'>
                John Doe
              </h3>
              <p className='text-gray-400 mt-2'>
                CEO & Founder
              </p>
            </motion.div>

            <motion.div
              className='bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <Image
                src={ProImage2}
                alt='Team Member'
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <h3 className='text-2xl font-semibold mt-4'>
                Jane Smith
              </h3>
              <p className='text-gray-400 mt-2'>
                Lead Developer
              </p>
            </motion.div>

            <motion.div
              className='bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <Image
                src={ProImage3}
                alt='Team Member'
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <h3 className='text-2xl font-semibold mt-4'>
                Michael Brown
              </h3>
              <p className='text-gray-400 mt-2'>
                Product Manager
              </p>
            </motion.div>

            <motion.div
              className='bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <Image
                src={ProImage4}
                alt='Team Member'
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <h3 className='text-2xl font-semibold mt-4'>
                Sarah Lee
              </h3>
              <p className='text-gray-400 mt-2'>
                Marketing Strategist
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className='py-20 px-6 md:px-12 text-center'>
          <h2 className='text-4xl font-semibold mb-12'>
            Our Values
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>
                Integrity
              </h3>
              <p className='text-gray-400'>
                We believe in being honest,
                transparent, and accountable in
                all our interactions.
              </p>
            </div>

            <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>
                Innovation
              </h3>
              <p className='text-gray-400'>
                We embrace creativity and
                forward-thinking to deliver
                cutting-edge solutions.
              </p>
            </div>

            <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-semibold mb-4'>
                Excellence
              </h3>
              <p className='text-gray-400'>
                We strive for excellence in every
                aspect of our work, ensuring the
                highest quality results.
              </p>
            </div>
          </div>
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

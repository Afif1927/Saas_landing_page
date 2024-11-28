"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
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
            Get in Touch
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
            We’d love to hear from you. Whether
            you have questions, feedback, or want
            to collaborate, feel free to reach
            out!
          </motion.p>
        </section>

        {/* Contact Form Section */}
        <section className='py-20 bg-gray-800'>
          <div className='max-w-5xl mx-auto px-6 md:px-12'>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 gap-12'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              {/* Contact Form */}
              <div>
                <h2 className='text-3xl font-semibold mb-4'>
                  Contact Form
                </h2>
                <form
                  action='#'
                  method='POST'
                  className='flex flex-col space-y-6'
                >
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    required
                    className='p-4 text-black rounded-lg focus:outline-none'
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    required
                    className='p-4 text-black rounded-lg focus:outline-none'
                  />
                  <textarea
                    name='message'
                    placeholder='Your Message'
                    rows='6'
                    required
                    className='p-4 text-black rounded-lg focus:outline-none'
                  ></textarea>
                  <button
                    type='submit'
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300'
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className='flex flex-col space-y-6'>
                <h2 className='text-3xl font-semibold mb-4'>
                  Contact Info
                </h2>
                <div className='flex items-center space-x-4'>
                  <FaPhoneAlt className='text-3xl text-blue-500' />
                  <p className='text-lg'>
                    +++++++++
                  </p>
                </div>
                <div className='flex items-center space-x-4'>
                  <FaEnvelope className='text-3xl text-blue-500' />
                  <p className='text-lg'>
                    @@@@gmail@@@@
                  </p>
                </div>
                <div className='flex items-center space-x-4'>
                  <FaMapMarkerAlt className='text-3xl text-blue-500' />
                  <p className='text-lg'>
                    Dhaka, Bangladesh
                  </p>
                </div>
                <div className='flex space-x-6'>
                  <a
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:text-blue-600 text-3xl'
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-white text-3xl'
                  >
                    <FaGithub />
                  </a>
                  <a
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:text-blue-500 text-3xl'
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </motion.div>
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

export default ContactPage;

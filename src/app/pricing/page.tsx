"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className='bg-black min-h-screen'>
        {/* Header */}
        <header className='bg-gray-900 text-white py-6'>
          <div className='container mx-auto text-center'>
            <h1 className='text-4xl font-bold text-blue-400'>
              Choose Your Plan
            </h1>
            <p className='mt-2 text-lg text-gray-300'>
              Pick the plan that works best for
              you. No credit card required.
            </p>
          </div>
        </header>
        {/* Pricing Section */}
        <section className='container mx-auto px-6 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Free Plan */}
            <div className='bg-gray-800 text-white shadow-lg border border-gray-700 rounded-lg overflow-hidden'>
              {/* Header */}
              <div className='flex justify-center bg-gray-700 py-2'>
                <span className='text-sm font-medium text-gray-300'>
                  😍 No credit card required
                </span>
              </div>

              {/* Plan Details */}
              <div className='px-6 py-4'>
                <h2 className='text-4xl font-bold text-white mb-2'>
                  Free
                </h2>
                <p className='text-gray-400 text-sm'>
                  Basic features to help you
                  create simple decks and sites
                </p>
              </div>

              {/* Pricing */}
              <div className='px-6 py-4 border-t border-gray-700'>
                <div className='flex items-center space-x-2'>
                  <span className='text-2xl font-semibold text-white'>
                    $
                  </span>
                  <h1 className='text-4xl font-bold text-white'>
                    0
                  </h1>
                  <span className='text-sm text-gray-400'>
                    / per seat / per month
                  </span>
                </div>
                <p className='text-sm text-gray-500 mt-2'>
                  Always free, no commitment
                </p>
              </div>

              {/* Action Button */}
              <div className='px-6 py-4'>
                <button className='w-full bg-blue-600 text-white text-center font-medium py-2 rounded hover:bg-blue-700 transition'>
                  Get Started
                </button>
              </div>

              {/* Key Features */}
              <div className='px-6 py-2'>
                <h2 className='text-xl font-semibold text-white'>
                  Key features
                </h2>
                <ul className='text-gray-300 mt-2'>
                  <li>
                    ✅ 400 AI credits at signup
                  </li>
                  <li>
                    ✅ Basic AI image generation
                  </li>
                  <li>
                    ✅ Generate up to 10 cards
                  </li>
                </ul>
              </div>

              {/* Free Plan Includes */}
              <div className='px-6 py-2'>
                <h2 className='text-xl font-semibold text-white'>
                  Free plan includes...
                </h2>
                <ul className='text-gray-300 mt-2'>
                  <li>
                    • Unlimited gammas and users
                  </li>
                  <li>
                    • Basic import and PPT/PDF
                    export
                  </li>
                  <li>• Website builder Beta</li>
                </ul>
              </div>
            </div>

            {/* Most Popular */}
            <div className='bg-gray-800 text-white shadow-lg border-4 border-purple-700 rounded-lg overflow-hidden'>
              {/* Header */}
              <div className='flex justify-center bg-gray-700 py-2'>
                <span className='text-sm font-medium text-gray-300'>
                  😍 Most Powerful
                </span>
              </div>

              {/* Plan Details */}
              <div className='px-6 py-4'>
                <h2 className='text-4xl font-bold text-white mb-2'>
                  Pro
                </h2>
                <p className='text-gray-400 text-sm'>
                  Advanced features for power
                  users and businesses
                </p>
              </div>

              {/* Pricing */}
              <div className='px-6 py-4 border-t border-gray-700'>
                <div className='flex items-center space-x-2'>
                  <span className='text-2xl font-semibold text-white'>
                    $
                  </span>
                  <h1 className='text-4xl font-bold text-white'>
                    49
                  </h1>
                  <span className='text-sm text-gray-400'>
                    / per seat / per month
                  </span>
                </div>
                <p className='text-sm text-gray-500 mt-2'>
                  Best for growing teams
                </p>
              </div>

              {/* Action Button */}
              <div className='px-6 py-4'>
                <button className='w-full bg-purple-600 text-white text-center font-medium py-2 rounded hover:bg-purple-700 transition'>
                  Get Started
                </button>
              </div>

              {/* Key Features */}
              <div className='px-6 py-2'>
                <h2 className='text-xl font-semibold text-white'>
                  Key features
                </h2>
                <ul className='text-gray-300 mt-2'>
                  <li>✅ Unlimited AI credits</li>
                  <li>✅ Advanced AI features</li>
                  <li>✅ Priority support</li>
                </ul>
              </div>

              {/* Pro Plan Includes */}
              <div className='px-6 py-2'>
                <h2 className='text-xl font-semibold text-white'>
                  Pro plan includes...
                </h2>
                <ul className='text-gray-300 mt-2'>
                  <li>
                    • Everything in Free plan
                  </li>
                  <li>• Advanced analytics</li>
                  <li>• Premium integrations</li>
                </ul>
              </div>
            </div>

            {/* Most Powerful */}
            <div className='bg-gray-800 text-white shadow-lg border border-gray-700 rounded-lg overflow-hidden'>
              {/* Header */}
              <div className='flex justify-center bg-gray-700 py-2'>
                <span className='text-sm font-medium text-gray-300'>
                  😍 Most Popular
                </span>
              </div>

              {/* Plan Details */}
              <div className='px-6 py-4'>
                <h2 className='text-4xl font-bold text-white mb-2'>
                  Enterprise
                </h2>
                <p className='text-gray-400 text-sm'>
                  Fully customizable features for
                  large-scale businesses
                </p>
              </div>

              {/* Pricing */}
              <div className='px-6 py-4 border-t border-gray-700'>
                <div className='flex items-center space-x-2'>
                  <span className='text-2xl font-semibold text-white'>
                    $
                  </span>
                  <h1 className='text-4xl font-bold text-white'>
                    99
                  </h1>
                  <span className='text-sm text-gray-400'>
                    / per seat / per month
                  </span>
                </div>
                <p className='text-sm text-gray-500 mt-2'>
                  Tailored for large enterprises
                </p>
              </div>

              {/* Action Button */}
              <div className='px-6 py-4'>
                <button className='w-full bg-blue-600 text-white text-center font-medium py-2 rounded hover:bg-blue-700 transition'>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
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
                &copy; 2024 Your Company. All
                rights reserved. | Privacy Policy
                | Terms of Service
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Pricing;

"use client";
import React, { useState } from "react";
import MenuIcon from "../assets/icons/menu.svg";
import CloseIcon from "../assets/icons/menu_close.svg"; // Import a close icon
import logoImage from "../assets/images/logosaas.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-black'>
      <div className='px-5'>
        <div className='py-4 flex justify-between items-center'>
          {/* Logo */}
          <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md'>
              {" "}
            </div>
            <Image
              src={logoImage}
              alt='saas logo'
              className='w-11 h-11 relative'
            />
          </div>

          {/* Menu Icon for Mobile */}
          <div
            className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden cursor-pointer'
            onClick={toggleMenu}
          >
            <MenuIcon className='text-white' />
          </div>

          {/* Desktop Nav */}
          <nav className='flex gap-6 items-center hidden sm:flex'>
            <Link
              href='/'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              Home
            </Link>
            <Link
              href='/features'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              Features
            </Link>
            <Link
              href='/updates'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              Updates
            </Link>
            <Link
              href='/help'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              Help
            </Link>
            <Link
              href='/pricing'
              className='text-opacity-60 text-white hover:text-opacity-100 transition'
            >
              Pricing
            </Link>

            <button className='bg-white py-2 px-4 rounded-lg'>
              <Link href='/login'>
                Get for free
              </Link>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start pt-20 z-50'>
          <div className='bg-gray-800 rounded-lg shadow-lg p-6 w-4/5 max-w-sm'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-lg text-white font-semibold'>
                Menu
              </h2>
              <CloseIcon
                className='w-6 h-6 cursor-pointer'
                onClick={toggleMenu}
              />
            </div>
            <nav className='flex flex-col gap-4'>
              <Link
                href='/'
                className='text-gray-300 hover:text-white transition'
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href='/features'
                className='text-gray-300 hover:text-white transition'
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href='/updates'
                className='text-gray-300 hover:text-white transition'
                onClick={toggleMenu}
              >
                Updates
              </Link>
              <Link
                href='/help'
                className='text-gray-300 hover:text-white transition'
                onClick={toggleMenu}
              >
                Help
              </Link>
              <Link
                href='/pricing'
                className='text-gray-300 hover:text-white transition'
                onClick={toggleMenu}
              >
                Pricing
              </Link>
            </nav>
            <button className='mt-6 w-full bg-white text-black py-2 rounded-lg'>
              <Link
                href='/login'
                onClick={toggleMenu}
              >
                Get for free
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

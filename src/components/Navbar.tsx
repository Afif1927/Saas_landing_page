"use client";
import React from "react";
import MenuIcon from "../assets/icons/menu.svg";
import logoImage from "../assets/images/logosaas.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='px-5'>
        <div className='py-4 flex justify-between items-center'>
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
          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
            <MenuIcon className='text-white' />
          </div>
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
    </div>
  );
};

export default Navbar;

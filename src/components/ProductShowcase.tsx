'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import appScreen from '../assets/images/app-screen.png'
import { motion, useScroll, useTransform } from 'framer-motion'

const ProductShowcase = () => {
   const appImage = useRef<HTMLImageElement>(null)
   const {scrollYProgress} = useScroll({
     target: appImage,
     offset: ["start end", "end end"],
   });
   const rotateX = useTransform(scrollYProgress, [0,1], [15,0])
   const opacity = useTransform(scrollYProgress, [0,1], [.10,1])
  return (
    <div className='bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tight'>Intuitive Interface</h2>
        <div className='max-w-xl mx-auto'>
        <p className='text-center text-xl text-white/70 mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.
        </p>
        </div>
        <motion.div
         style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "400px",
         }}
        >
        <Image 
          src={appScreen}
          alt='The product screenshot' 
          className='mt-14 mx-auto'
          ref={appImage}
          /> 
        </motion.div>
      </div>
    </div>
  )
}

export default ProductShowcase
// The product screenshot

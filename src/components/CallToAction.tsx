'use client'
import React, { useRef } from 'react'
import helixImage from '../assets/images/helix2.png'
import emojiStar from '../assets/images/emojistar.png'
import Image from 'next/image'
import { useScroll, useTransform, motion} from 'framer-motion'

const CallToAction = () => {

   const containerRef = useRef<HTMLDivElement>(null)  
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ['start end', 'end end']
   })
        
   const translateY = useTransform(scrollYProgress, [0,1], [50,-50])
     
  return (
    <div className='bg-black text-white py-[72px] sm:py-24' ref={containerRef}>
        <div className='container max-w-xl relative'>
           <motion.div style={{translateY}}>
           <Image 
             src={helixImage}
             alt='' 
             className='absolute hidden sm:block top-6 left-[calc(100%+36px)]'/>
           </motion.div>
           <motion.div style={{translateY}}>
           <Image 
             src={emojiStar} 
             alt=''
             className='absolute -top-[100px] right-[calc(100%+24px)]'/>     
           </motion.div>
         <h2 className='text-center text-5xl sm:6xl font-bold'>Get instant access</h2>
         <p className='text-center text-white/70 mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
         <form className='mt-8 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row'>
            <input 
            type='email' 
            placeholder='afifarfan808@gmail.com'
            className='h-12 bg-white/20 px-5 rounded-lg font-medium sm:flex-1'
            />
            <button className='h-12 bg-white text-black font-bold px-5 rounded-lg'>Get access</button>
         </form>
        </div>
    </div>
  )
}

export default CallToAction

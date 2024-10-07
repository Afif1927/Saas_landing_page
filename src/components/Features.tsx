import React from 'react'
import Feature from './Feature'

const features = [
  {
    title: "Integration Ecosystem",
    description: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
  },
  {
    title: "Goal setting and tracking",
    description: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."   
  },
  {
    title: "Secure data encryption",
    description: "With end-to-end encryption, your data is securely stored and protected from unauthorized access."
  },
]

const Features = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tight'>Everything you need</h2>
        <div className='max-w-xl mx-auto'>
        <p className='text-center mt-5 text-xl text-white/70'>
        Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.
        </p>
        </div>
        <div className='mt-16 flex flex-col sm:flex-row gap-4'>
          {
            features.map(({title,description})=>(
             <Feature title={title} description={description} key={title}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Features

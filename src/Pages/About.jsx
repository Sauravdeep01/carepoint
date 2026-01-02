import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-4 sm:px-10'>
      {/* Page Title Section */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      {/* Main Content Section */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        
        {/* Left Side: Image */}
        <img 
          className='w-full md:max-w-[360px] rounded-lg shadow-md object-cover' 
          src={assets.about_image} 
          alt="About Us" 
        />

        {/* Right Side: Text Content */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-relaxed'>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to deliver a seamless healthcare experience for every user.
          </p>
          <b className='text-gray-800 text-lg'>Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section Header */}
      <div className='text-xl my-8'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      {/* Why Choose Us Cards */}
      <div className='flex flex-col md:flex-row mb-20 border border-gray-200'>
        
        {/* Card 1 */}
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-400 hover:text-white transition-all duration-500 text-gray-600 cursor-pointer group'>
          <b className='group-hover:text-white text-gray-800 transition-colors'>EFFICIENCY:</b>
          <p className='group-hover:text-white transition-colors'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        {/* Card 2 */}
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-400 hover:text-white transition-all duration-500 text-gray-600 cursor-pointer group'>
          <b className='group-hover:text-white text-gray-800 transition-colors'>CONVENIENCE:</b>
          <p className='group-hover:text-white transition-colors'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        {/* Card 3 */}
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-400 hover:text-white transition-all duration-500 text-gray-600 cursor-pointer group'>
          <b className='group-hover:text-white text-gray-800 transition-colors'>PERSONALIZATION:</b>
          <p className='group-hover:text-white transition-colors'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>
    </div>
  )
}

export default About

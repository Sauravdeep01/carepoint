import React from 'react'
<<<<<<< HEAD

export default function Contact() {
  return (
    <div></div>
  )
}
=======
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='px-4 sm:px-10'>
      
      {/* Page Title Section */}
      <div className='text-center text-2xl pt-10 text-gray-500 uppercase tracking-wide'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* Main Container */}
      <div className='my-12 flex flex-col justify-center md:flex-row gap-12 mb-28 text-sm'>
        
        {/* Left Side: Contact Image */}
        <img 
          className='w-full md:max-w-[360px] rounded-lg shadow-sm' 
          src={assets.contact_image} 
          alt="Contact Us" 
        />

        {/* Right Side: Contact Details */}
        <div className='flex flex-col justify-center items-start gap-6 text-gray-600'>
          
          <p className='font-semibold text-lg text-gray-700 uppercase tracking-wider'>Our Office</p>
          
          <div className='leading-relaxed'>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>

          <div className='leading-relaxed'>
            <p>Tel: (415) 555-0132</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>

          <p className='font-semibold text-lg text-gray-700 uppercase tracking-wider'>Careers at Prescripto</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>

          {/* Interactive Button */}
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-sm active:scale-95'>
            Explore Jobs
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
>>>>>>> main

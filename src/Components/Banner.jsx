import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export default function Banner() {

    const navigate = useNavigate();
  return (
    <div className="px-4 md:px-8 py-12">
      
      {/* Banner Container */}
      <div className="relative max-w-6xl mx-auto bg-[#5F6FFF] rounded-3xl flex flex-col md:flex-row justify-between px-6 md:px-12 py-28 text-white overflow-visible">
        
        {/*=============== Left Side (Centered Text) =================*/}
        <div className="flex flex-col justify-center gap-2 text-center md:text-left z-10">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Book Appointments
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
            With 100+ Trusted Doctors
          </p>

          <button
            onClick={()=>{navigate('/login'); scrollTo(0,0)}}
            className="mx-auto md:mx-0 mt-2 w-fit px-7 py-2 bg-white text-[#5F6FFF] font-semibold rounded-full hover:scale-105 hover:shadow-md transition-all duration-300">
            Create Account
          </button>
        </div>

        {/*============= Right Side (Bottom attached + top overflow) ================*/}
        <div className="absolute bottom-0 right-4 md:right-12 flex justify-end">
          <img
            src={assets.appointment_img}
            alt="Appointment"
            className="w-72 sm:w-80 md:w-96 lg:w-105 -mt-14"
          />
        </div>

      </div>

    </div>
  )
}

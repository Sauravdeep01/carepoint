import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

export default function SpecialityMenu() {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      {/* Title */}
      <h1 className="text-3xl font-semibold">Our Specialists</h1>

      {/* Description */}
      <p className="text-sm text-gray-500 text-center max-w-xl">
        Search and book appointments with trusted doctors, based on specialty and availability.
      </p>

      {/* Specialists Row */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {specialityData.map((item, index) => (
          <Link
            onClick={()=>scrollTo(0,0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-20 h-20 object-contain bg-gray-100 rounded-full p-3"
            />
            <p className="text-sm font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

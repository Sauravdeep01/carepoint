import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10'>
      {/* Page Title */}
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b border-zinc-200'>
        My appointments
      </p>

      <div className='mt-4'>
        {/* Mapping through doctors list to display appointments */}
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b border-zinc-100'
          >
            {/* Left: Doctor Image */}
            <div>
              <img
                className='w-32 bg-indigo-50 rounded-lg shadow-sm hover:scale-105 transition-all duration-300'
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Middle: Appointment Details */}
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.name}</p>
              <p className='text-zinc-500 mb-1'>{item.speciality}</p>

              <div className='mt-2'>
                <p className='text-zinc-700 font-medium'>Address:</p>
                <p className='text-xs text-zinc-500'>{item.address.line1}</p>
                <p className='text-xs text-zinc-500'>{item.address.line2}</p>
              </div>

              <p className='text-xs mt-2'>
                <span className='text-sm font-medium text-neutral-700'>Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Right: Action Buttons (Responsive Layout) */}
            <div className='flex flex-col gap-2 justify-end col-span-2'>
              {/* Dynamic Button Example based on Figma logic */}
              {index === 1 ? (
                <button className='sm:min-w-48 py-2 border border-indigo-100 rounded text-indigo-500 bg-indigo-50 font-medium'>
                  Pay here
                </button>
              ) : index === 2 ? (
                <button className='sm:min-w-48 py-2 border border-zinc-200 rounded text-zinc-500 bg-zinc-50 font-medium'>
                  Paid
                </button>
              ) : (
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-zinc-200 rounded hover:bg-indigo-600 hover:text-white transition-all duration-300'>
                  Pay Online
                </button>
              )}

              <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border border-zinc-200 rounded hover:bg-red-600 hover:text-white transition-all duration-300'>
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
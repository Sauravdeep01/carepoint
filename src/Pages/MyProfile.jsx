import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjamesswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='flex flex-col gap-6 p-6 md:p-10 bg-gray-50 rounded-3xl shadow-sm max-w-2xl my-10 mx-auto'>
      
      {/* Header Section: Profile Pic & Name */}
      <div className='flex flex-col sm:flex-row items-center gap-6'>
        <div className='relative group'>
          <img 
            className={`w-36 rounded-2xl object-cover border-4 ${isEdit ? 'border-indigo-400' : 'border-white'} shadow-md transition-all`} 
            src={userData.image} 
            alt="Profile" 
          />
          {isEdit && (
            <div className='absolute inset-0 bg-black/20 flex items-center justify-center rounded-2xl cursor-pointer'>
              <p className='text-white text-xs font-medium'>Change Photo</p>
            </div>
          )}
        </div>

        <div className='flex-1 text-center sm:text-left'>
          {isEdit ? (
            <input 
              className='bg-white text-3xl font-bold p-2 rounded-lg border border-indigo-200 outline-none w-full' 
              type="text" 
              value={userData.name} 
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} 
            />
          ) : (
            <h1 className='text-3xl font-bold text-gray-800 tracking-tight'>{userData.name}</h1>
          )}
          <p className='text-indigo-600 font-medium mt-1'>Patient ID: #PRC8821</p>
        </div>
      </div>

      <hr className='border-gray-200' />

      {/* Grid Container for Info Panels */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        
        {/* Contact Panel */}
        <div className='bg-white p-5 rounded-2xl border border-gray-100 shadow-sm'>
          <p className='text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4'>Contact Info</p>
          <div className='space-y-3'>
            <div>
              <p className='text-gray-400 text-xs'>Email</p>
              <p className='text-gray-800 font-medium truncate'>{userData.email}</p>
            </div>
            <div>
              <p className='text-gray-400 text-xs'>Phone</p>
              {isEdit ? (
                <input className='w-full bg-indigo-50 p-1 rounded border border-indigo-100 outline-none px-2' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              ) : (
                <p className='text-gray-800 font-medium'>{userData.phone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Address Panel */}
        <div className='bg-white p-5 rounded-2xl border border-gray-100 shadow-sm'>
          <p className='text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4'>Location</p>
          {isEdit ? (
            <div className='flex flex-col gap-2'>
              <input className='bg-indigo-50 p-1 rounded border border-indigo-100 outline-none px-2' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
              <input className='bg-indigo-50 p-1 rounded border border-indigo-100 outline-none px-2' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
            </div>
          ) : (
            <p className='text-gray-800 font-medium leading-relaxed'>
              {userData.address.line1}<br />{userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* Basic Info Bottom Bar */}
      <div className='bg-indigo-900 text-white p-6 rounded-2xl flex flex-wrap gap-8 justify-around'>
        <div className='text-center'>
          <p className='text-indigo-300 text-xs uppercase'>Gender</p>
          {isEdit ? (
            <select className='bg-indigo-800 rounded mt-1 outline-none px-2 cursor-pointer' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : <p className='font-bold text-lg'>{userData.gender}</p>}
        </div>
        <div className='text-center'>
          <p className='text-indigo-300 text-xs uppercase'>Birthday</p>
          {isEdit ? (
            <input className='bg-indigo-800 rounded mt-1 outline-none px-2 cursor-pointer' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
          ) : <p className='font-bold text-lg'>{userData.dob}</p>}
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-center gap-4 mt-4'>
        {isEdit ? (
          <>
            <button 
              onClick={() => setIsEdit(false)}
              className='px-10 py-3 rounded-full font-semibold bg-green-500 text-white hover:bg-green-600 transition-all shadow-md active:scale-95'
            >
              Save Information
            </button>
            <button 
              onClick={() => setIsEdit(false)}
              className='px-10 py-3 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all shadow-md active:scale-95'
            >
              Cancel
            </button>
          </>
        ) : (
          <button 
            onClick={() => setIsEdit(true)}
            className='px-10 py-3 rounded-full font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md active:scale-95'
          >
            Edit Profile
          </button>
        )}
      </div>

    </div>
  )
}

export default MyProfile
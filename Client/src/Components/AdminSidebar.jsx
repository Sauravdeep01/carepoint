import React, { useContext } from 'react'
import { AdminContext } from '../Context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const AdminSidebar = () => {
    const { aToken } = useContext(AdminContext)

    return (
        <div className='min-h-screen bg-white border-r border-gray-100 shadow-sm'>
            {aToken && (
                <ul className='text-gray-600 mt-5 space-y-1'>
                    <NavLink to={'/admin/dashboard'} className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-indigo-50 border-r-4 border-indigo-600 text-indigo-700 font-medium' : 'hover:bg-gray-50'}`}>
                        <img className='w-6 group-hover:scale-110 transition-transform' src={assets.home_icon} alt="" />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>

                    <NavLink to={'/admin/all-appointments'} className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-indigo-50 border-r-4 border-indigo-600 text-indigo-700 font-medium' : 'hover:bg-gray-50'}`}>
                        <img className='w-6 group-hover:scale-110 transition-transform' src={assets.appointment_icon} alt="" />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>

                    <NavLink to={'/admin/add-doctor'} className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-indigo-50 border-r-4 border-indigo-600 text-indigo-700 font-medium' : 'hover:bg-gray-50'}`}>
                        <img className='w-6 group-hover:scale-110 transition-transform' src={assets.add_icon} alt="" />
                        <p className='hidden md:block'>Add Doctor</p>
                    </NavLink>

                    <NavLink to={'/admin/doctor-list'} className={({ isActive }) => `group flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 ${isActive ? 'bg-indigo-50 border-r-4 border-indigo-600 text-indigo-700 font-medium' : 'hover:bg-gray-50'}`}>
                        <img className='w-6 group-hover:scale-110 transition-transform' src={assets.people_icon} alt="" />
                        <p className='hidden md:block'>Doctors List</p>
                    </NavLink>
                </ul>
            )}
        </div>
    )
}

export default AdminSidebar

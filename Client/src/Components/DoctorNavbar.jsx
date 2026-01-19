import React, { useContext } from 'react'
import { DoctorContext } from '../Context/DoctorContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const DoctorNavbar = () => {
    const { dToken, setDToken } = useContext(DoctorContext)
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-4 border-b bg-white shadow-sm'>
            <div className='flex items-center gap-2 text-xs'>
                <img onClick={() => navigate('/')} className='w-36 sm:w-44 cursor-pointer' src={assets.nav_image} alt="" />
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 font-medium'>Doctor Panel</p>
            </div>
            <button onClick={logout} className='bg-indigo-600 text-white text-sm px-10 py-2 rounded-full font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all active:scale-95'>Logout</button>
        </div>
    )
}

export default DoctorNavbar

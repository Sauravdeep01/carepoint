import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'


export default function Navbar() {

    const navigate = useNavigate();

<<<<<<< HEAD
    const [show, setShow] = useState(false);
    const [token, setToken] = useState(true);

    return (

        // NavLogo
        <div className='flex justify-between items-center py-4 text-sm mb-5 border-b border-b-gray-400'>
            <img onClick={()=>navigate('/')} src={assets.nav_image} className="h-10 w-auto cursor-pointer object-contain" alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>

                {/* NavLink */}
=======
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={() => navigate('/')} src={assets.nav_image} className="w-44 cursor-pointer" alt="" />

            {/* Desktop Menu */}
            <ul className='hidden md:flex items-start gap-5 font-medium'>
>>>>>>> main
                <NavLink to="/">
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/doctors">
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/about">
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/contact">
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

<<<<<<< HEAD
            {/* Create Account */}
            <div className='flex items-center  gap-4'>
                {
                    token
                        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
=======
            <div className='flex items-center gap-4'>
                {
                    token
                        ? <div className='hidden md:flex items-center gap-2 cursor-pointer group relative'>
>>>>>>> main
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                            {/* DropDown Menu */}
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-slate-100 rounded flex flex-col gap-4 p-4 '>
<<<<<<< HEAD
                                    <p 
                                    onClick={()=>navigate("/my-profile")}
                                    className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p 
                                    onClick={()=>navigate("/my-appointments")}
                                    className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p 
                                    onClick={()=>setToken(false)}
                                    className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                        
=======
                                    <p
                                        onClick={() => navigate("/my-profile")}
                                        className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p
                                        onClick={() => navigate("/my-appointments")}
                                        className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p
                                        onClick={() => setToken(false)}
                                        className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>

>>>>>>> main
                        : <button
                            onClick={() => navigate("/login")}
                            className='bg-[#5f6FFF] text-white cursor-pointer font-light px-8 py-3 rounded-full hidden md:block'
                        >Create Account</button>
                }

<<<<<<< HEAD
=======
                {/* Mobile Menu Icon */}
                <img onClick={() => setShowMenu(true)} src={assets.menu_icon} className='w-6 md:hidden cursor-pointer' alt="" />

                {/* Mobile Menu */}
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img src={assets.nav_image} className='w-36' alt="" />
                        <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7 cursor-pointer' alt="" />
                    </div>

                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to="/">
                            <p className='px-4 py-2 rounded inline-block hover:text-[#5f6FFF] transition-all'>HOME</p>
                            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/doctors">
                            <p className='px-4 py-2 rounded inline-block hover:text-[#5f6FFF] transition-all'>ALL DOCTORS</p>
                            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/about">
                            <p className='px-4 py-2 rounded inline-block hover:text-[#5f6FFF] transition-all'>ABOUT</p>
                            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/contact">
                            <p className='px-4 py-2 rounded inline-block hover:text-[#5f6FFF] transition-all'>CONTACT</p>
                            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                        </NavLink>
                        {
                            token && <>
                                <NavLink onClick={() => { setShowMenu(false); navigate("/my-profile") }} to="/my-profile">
                                    <p className='px-4 py-2 rounded inline-block hover:text-[#5f6FFF] transition-all'>My Profile</p>
                                    <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                                </NavLink>
                                <NavLink onClick={() => { setShowMenu(false); navigate("/my-appointments") }} to="/my-appointments">
                                    <p className='px-4 py-2 rounded inline-block hover:text-[#5f6FFF] transition-all'>My Appointments</p>
                                    <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden' />
                                </NavLink>
                                <p onClick={() => { setShowMenu(false); setToken(false) }} className='px-4 py-2 rounded inline-block cursor-pointer hover:text-[#5f6FFF] transition-all'>Logout</p>
                            </>
                        }
                        {
                            !token && <button onClick={() => { setShowMenu(false); navigate("/login") }} className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hover:scale-105 hover:opacity-90 transition-all duration-300'>Create Account</button>
                        }
                    </ul>
                </div>
>>>>>>> main
            </div>
        </div>
    )
}
<<<<<<< HEAD
=======

>>>>>>> main

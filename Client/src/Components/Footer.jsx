import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-600">
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        
        {/*=============== Left Section =================*/}
        <div className="flex flex-col gap-4">
          <img
            src={assets.nav_image}
            alt="Logo"
            className="w-36"
          />
          <p className="text-sm leading-relaxed">
            Book appointments with trusted doctors anytime, anywhere.
            Your health, our priority.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a className="p-2 rounded-full border hover:text-[#5F6FFF] hover:border-[#5F6FFF] transition cursor-pointer">
              <FaFacebookF />
            </a>
            <a className="p-2 rounded-full border hover:text-[#5F6FFF] hover:border-[#5F6FFF] transition cursor-pointer">
              <FaTwitter />
            </a>
            <a className="p-2 rounded-full border hover:text-[#5F6FFF] hover:border-[#5F6FFF] transition cursor-pointer">
              <FaInstagram />
            </a>
            <a className="p-2 rounded-full border hover:text-[#5F6FFF] hover:border-[#5F6FFF] transition cursor-pointer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/*=============== Center Section =================*/}
        <div>
          <p className="text-lg font-semibold mb-4 text-gray-800">
            Company
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:text-[#5F6FFF] cursor-pointer">Home</li>
            <li className="hover:text-[#5F6FFF] cursor-pointer">About</li>
            <li className="hover:text-[#5F6FFF] cursor-pointer">Contact Us</li>
            <li className="hover:text-[#5F6FFF] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/*=============== Right Section =================*/}
        <div>
          <p className="text-lg font-semibold mb-4 text-gray-800">
            Get in Touch
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>📞 +111-343-764</li>
            <li>📧 support@carepoint.com</li>
            <li>⏰ Available 24/7</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t" />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} CarePoint. All rights reserved.
      </div>

    </footer>
  )
}

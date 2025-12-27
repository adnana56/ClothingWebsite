import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-12 py-10 px-4'>
            {/* Logo */}
            <div className="flex items-center gap-5">
                <img src={footer_logo} alt="footer logo" className="w-16 h-auto" />
                <p className="text-[#383838] text-3xl md:text-5xl font-bold">UrbanAura</p>
            </div>

            {/* Links */}
            <ul className='flex flex-wrap justify-center list-none gap-6 md:gap-12 text-[#252525] text-lg md:text-xl'>
                <li className="cursor-pointer hover:text-[#ff9d00] transition-colors">Company</li>
                <li className="cursor-pointer hover:text-[#ff9d00] transition-colors">Products</li>
                <li className="cursor-pointer hover:text-[#ff9d00] transition-colors">Offices</li>
                <li className="cursor-pointer hover:text-[#ff9d00] transition-colors">About</li>
                <li className="cursor-pointer hover:text-[#ff9d00] transition-colors">Contacts</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-5">
                <div className="p-2 pb-1 bg-[#fbfbfb] border border-[#ebebeb]">
                    <img src={instagram_icon} alt="instagram" className="hover:scale-110 transition-transform cursor-pointer" />
                </div>
                <div className="p-2 pb-1 bg-[#fbfbfb] border border-[#ebebeb]">
                    <img src={whatsapp_icon} alt="whatsapp" className="hover:scale-110 transition-transform cursor-pointer" />
                </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center gap-8 w-full mb-8 text-[#1a1a1a] text-lg md:text-xl">
                <hr className="w-[80%] border-none rounded-full h-[3px] bg-[#c7c7c7]" />
                <p>Copyright @ 2025 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
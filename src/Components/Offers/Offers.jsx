import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='w-[90%] md:w-[65%] h-auto flex flex-col-reverse md:flex-row m-auto px-6 md:px-[60px] py-10 md:py-0 mb-12 md:mb-[150px] bg-gradient-to-b from-[#ffb49c] to-[#e1ffea22] mt-10 md:mt-[100px] rounded-[10px] items-center justify-center md:justify-between text-center md:text-left gap-8'>
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start leading-tight gap-4">
        <h1 className="text-[#171717] text-4xl md:text-6xl font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-4xl md:text-6xl font-semibold">Deals Just For You</h1>
        <p className="text-[#171717] text-lg md:text-xl font-medium mt-2">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="w-[200px] h-[50px] rounded-[35px] bg-[#ff4141] text-white text-lg font-medium mt-6 md:mt-8 hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-md">Check Now</button>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-end">
        <img src={exclusive_image} alt="" className="w-full max-w-[300px] md:max-w-none md:h-auto object-contain drop-shadow-lg" />
      </div>
    </div>
  )
}

export default Offers
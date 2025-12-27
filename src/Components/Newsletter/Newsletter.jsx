import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-[90%] md:w-[65%] h-auto md:h-[40vh] flex flex-col items-center justify-center mx-auto my-[100px] px-8 py-10 md:py-0 bg-gradient-to-b from-[#ffb49c] to-[#e1ffea22] rounded-xl gap-6 md:gap-8'>
      <h1 className='text-[#454545] text-2xl md:text-5xl font-semibold text-center'>Get special deals sent to your email</h1>
      <p className='text-[#454545] text-sm md:text-xl text-center'>Subscribe to our website and stay updated</p>
      <div className='flex items-center justify-between bg-white w-full max-w-[730px] h-12 md:h-16 rounded-full border border-[#e3e3e3] pl-4 md:pl-6 overflow-hidden'>
        <input
          type="email"
          placeholder="Your email id"
          className='flex-1 border-none outline-none text-[#616161] font-poppins text-sm md:text-base'
        />
        <button className='w-32 md:w-52 h-full rounded-full bg-black text-white text-sm md:text-lg cursor-pointer active:bg-gray-800 hover:bg-[#333] transition-colors'>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Newsletter
import React from 'react';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row bg-gradient-to-b from-[#ffb49c] to-[#e1ffea22] p-4 md:px-20'>
      {/* Left Section */}
      <div className='flex-1 flex flex-col justify-center gap-5 pl-4 md:pl-0 leading-tight pt-10 md:pt-0'>
        <h4 className='text-[#090909] text-lg md:text-2xl font-semibold uppercase tracking-wide'>New Arrivals Only</h4>

        <div className="flex flex-col gap-2 md:gap-0">
          <div className="flex items-center gap-3 md:gap-5">
            <p className='text-[#171717] text-4xl md:text-[5rem] font-bold'>new</p>
            <img src={null} className="w-12 md:w-24 hidden" alt="" />
          </div>
          <p className='text-[#171717] text-4xl md:text-[5rem] font-bold'>collections</p>
          <p className='text-[#171717] text-4xl md:text-[5rem] font-bold'>for everyone</p>
        </div>

        <button className='w-48 md:w-72 h-12 md:h-16 rounded-full bg-[#ff4141] text-white text-base md:text-xl font-medium mt-6 flex justify-center items-center gap-4 cursor-pointer active:bg-red-600 hover:scale-95 transition-transform shadow-lg'>
          Latest Collection
          <img src={arrow_icon} alt="arrow" className="w-4 md:w-6 layer-transparent" />
        </button>
      </div>

      {/* Right Section */}
      <div className='flex-1 flex items-center justify-center pt-10 md:pt-0'>
        <img src={hero_image} alt="Hero" className="w-[80%] md:w-[500px] object-contain drop-shadow-xl animate-[bounce_3s_infinite]" />
      </div>
    </div>
  );
};

export default Hero;

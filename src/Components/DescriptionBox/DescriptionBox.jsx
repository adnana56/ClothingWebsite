import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='w-full max-w-[1000px] mx-auto my-12 md:my-28 px-4 md:px-0'>
      <div className="flex border-b border-[#e0e0e0] bg-[#fafafa] rounded-t-lg overflow-hidden">
        <div className="flex-1 py-4 text-center font-bold text-base md:text-lg text-[#333] border-r border-[#e0e0e0] bg-white cursor-pointer hover:bg-white transition-colors">
          Description
        </div>
        <div className="flex-1 py-4 text-center font-semibold text-base md:text-lg text-[#555] bg-[#f9f9f9] cursor-pointer hover:bg-[#eaeaea] transition-colors">
          Reviews (130)
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6 md:p-12 border border-t-0 border-[#e0e0e0] bg-white rounded-b-lg shadow-sm">
        <p className="text-[#555] text-sm md:text-base leading-7 md:leading-8">Our online clothing platform offers a seamless and stylish shopping experience for fashion lovers. It allows users to browse a wide range of trendy outfits, view detailed product information, and make confident purchase decisions. Each product page displays high-quality images, prices, and descriptions that highlight material quality, comfort, and design.</p>
        <p className="text-[#555] text-sm md:text-base leading-7 md:leading-8">Users can explore various categories like casual wear, formal wear, accessories, and seasonal collections. The platform ensures smooth navigation — from viewing product details to adding items to the cart — with an intuitive and mobile-friendly interface.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
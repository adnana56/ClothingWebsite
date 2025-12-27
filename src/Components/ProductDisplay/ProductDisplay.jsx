import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { getImageUrl } from '../../utils/imageUtils';

const ProductDisplay = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext);

  const mainImage = getImageUrl(product.image);

  return (
    <div className='flex flex-col md:flex-row gap-8 md:gap-12 my-8 md:my-0 mx-4 md:mx-[100px] pb-16 font-poppins'>
      {/* Left Side - Images */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-3 md:gap-4 h-full">
          <img className="w-16 h-20 md:w-[150px] md:h-[163px] object-cover rounded-md cursor-pointer hover:scale-105 transition-transform border border-gray-100" src={mainImage} alt="" />
          <img className="w-16 h-20 md:w-[150px] md:h-[163px] object-cover rounded-md cursor-pointer hover:scale-105 transition-transform border border-gray-100" src={mainImage} alt="" />
          <img className="w-16 h-20 md:w-[150px] md:h-[163px] object-cover rounded-md cursor-pointer hover:scale-105 transition-transform border border-gray-100" src={mainImage} alt="" />
          <img className="w-16 h-20 md:w-[150px] md:h-[163px] object-cover rounded-md cursor-pointer hover:scale-105 transition-transform border border-gray-100" src={mainImage} alt="" />
        </div>
        <div className="flex-1">
          <img className='w-full md:w-[586px] h-auto md:h-[700px] object-cover rounded-xl shadow-sm' src={mainImage} alt="" />
        </div>
      </div>

      {/* Right Side - Info */}
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-[#3d3d3d] text-2xl md:text-4xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-1 text-[#1c1c1c] text-sm md:text-base">
          <img src={star_icon} alt="" className="w-4 md:w-5" />
          <img src={star_icon} alt="" className="w-4 md:w-5" />
          <img src={star_icon} alt="" className="w-4 md:w-5" />
          <img src={star_icon} alt="" className="w-4 md:w-5" />
          <img src={star_dull_icon} alt="" className="w-4 md:w-5" />
          <p className="ml-2">(122)</p>
        </div>
        <div className="flex gap-6 text-xl md:text-2xl font-bold my-2">
          <div className='text-[#818181] line-through'>₹{product.old_price}</div>
          <div className='text-[#ff4141]'>₹{product.new_price}</div>
        </div>
        <div className="text-[#555] text-sm md:text-base bg-[#f9f9f9] p-4 rounded-lg leading-relaxed">
          Stay cozy and stylish with our ultra-soft fleece hoodie. Designed with a front kangaroo pocket and adjustable drawstrings, it’s perfect for layering on chilly days or lounging in comfort.
        </div>
        <div>
          <h1 className="text-[#656565] text-lg md:text-xl font-semibold mt-4 mb-4">Select Size</h1>
          <div className="flex gap-3 md:gap-4">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div key={size} className="py-3 px-5 bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer hover:bg-black hover:text-white transition-all duration-200 text-sm md:text-base font-medium">
                {size}
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => { addToCart(Number(product.id)) }} className='w-48 md:w-[200px] py-4 bg-[#ff4141] text-white text-base font-semibold uppercase rounded-lg cursor-pointer hover:bg-[#ff2424] active:bg-[#e62e2e] transition-colors mt-4 shadow-md'>
          Add To Cart
        </button>
        <p className='mt-4 text-[#555] text-sm md:text-base'><span className='font-semibold'>Category :</span> Women, T-shirt, Crop Top</p>
        <p className='text-[#555] text-sm md:text-base'><span className='font-semibold'>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay

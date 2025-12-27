import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className='flex items-center gap-2 text-[#5e5e5e] text-sm md:text-base font-semibold my-10 md:my-16 mx-4 md:mx-[170px] capitalize'>
      Home <img src={arrow_icon} alt="" className="h-3 md:h-4" />
      Shop <img src={arrow_icon} alt="" className="h-3 md:h-4" />
      {product.category} <img src={arrow_icon} alt="" className="h-3 md:h-4" />
      {product.name}
    </div>
  )
}
export default Breadcrum
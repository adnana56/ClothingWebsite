import React from 'react'
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/imageUtils';

const Item = (props) => {
  const imageSrc = getImageUrl(props.image);

  return (
    <div className='w-full max-w-[350px] hover:scale-105 transition-transform duration-300 cursor-pointer rounded-xl bg-white shadow-sm hover:shadow-md overflow-hidden'>
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={imageSrc}
          alt={props.name}
          className="w-full h-auto object-cover"
        />
      </Link>
      <div className="p-4">
        <p className="my-1.5 text-[#374151] font-medium leading-tight truncate text-sm md:text-base">{props.name}</p>
        <div className="flex gap-2 md:gap-4 mt-2 items-center">
          <div className="text-[#374151] text-base md:text-lg font-bold">
            ₹{props.new_price}
          </div>
          <div className="text-[#8c8c8c] text-xs md:text-sm font-medium line-through">
            ₹{props.old_price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
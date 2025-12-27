import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category pb-24'>
      <img className="block my-8 mx-auto w-[90%] md:w-[82%]" src={props.banner} alt="category banner" />
      <div className="flex flex-col md:flex-row mx-8 md:mx-36 justify-between items-center gap-4 md:gap-0">
        <p className="font-medium text-sm md:text-base">
          <span className="font-semibold">1-12</span> of 36 products
        </p>
        <div className="flex items-center gap-2 py-2 px-4 rounded-3xl border border-[#888]">
          <span className="text-sm">Sort by</span>
          <img src={dropdown_icon} alt="" className="h-3 w-3" />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10 px-4 md:px-0 justify-items-center w-[90%] md:w-[85%] mx-auto'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center mx-auto w-48 md:w-60 h-12 md:h-16 rounded-full bg-[#ededed] text-[#787878] text-base md:text-lg font-medium cursor-pointer hover:bg-[#e2e2e2]">
        Explore More
      </div>
    </div>
  )
}

export default Shopcategory
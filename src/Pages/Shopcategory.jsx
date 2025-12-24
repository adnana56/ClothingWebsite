import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} />
      <div className="shopcategory-index">
        <p>
          <span>1-12</span> of 36
        </p>
        <div className="shopcategory-sort">
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          }
          else {
            return null;
          }
        })}

      </div>
      <div className="shopcategory-loadmore">
        Shop more
      </div>
    </div>
  )
}

export default Shopcategory
import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="image-list">
          <img src={product.image && !product.image.startsWith('http') && !product.image.startsWith('/') ? `/images/${product.image}` : product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-img">
          <img className='main-img' src={product.image && !product.image.startsWith('http') && !product.image.startsWith('/') ? `/images/${product.image}` : product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
        </div>
        <div className="right-prices">
          <div className='right-price-old'>₹{product.old_price}</div>
          <div className='right-price-new'>₹{product.new_price}</div>
        </div>
        <div className="discription">
          Stay cozy and stylish with our ultra-soft fleece hoodie. Designed with a front kangaroo pocket and adjustable drawstrings, it’s perfect for layering on chilly days or lounging in comfort.

        </div>
        <div className="right-size">
          <h1>Select Size</h1>
          <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(Number(product.id)) }} className='right-button'>ADD TO CART</button>
        <p className='right-category'><span>Category : </span>Women,T-shirt,Crop Top</p>
        <p className='right-category'><span>Category : </span>Women,T-shirt,Crop Top</p>
      </div>
    </div>
  )
}

export default ProductDisplay

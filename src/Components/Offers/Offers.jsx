import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>DEALS JUST FOR YOU</h1>
        <p>CLEARANCE SALE – HURRY!</p>
        <button>DO CHECK IT NOW</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />

      </div>

    </div>
  )
}

export default Offers
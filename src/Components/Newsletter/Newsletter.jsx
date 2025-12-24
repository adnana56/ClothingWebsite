import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get special deals sent to your email</h1>
        <p>Subscribe to our website and stay updated</p>
        <div>
            <input type="email" placeholder="Your email id"/>
            <button> SUBSCRIBE</button>
        </div>
    
    
    </div>
  )
}

export default Newsletter
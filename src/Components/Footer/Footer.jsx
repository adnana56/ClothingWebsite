import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo}/>
            <p>UrbanAura</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
             
        </ul>
        <div className="social-icons">
            <div className="icons_container">
                <img src={instagram_icon}/>
            </div>
           
            <div className="icons_container">
                <img src={whatsapp_icon}/>
            </div>
            </div>
            <div className="copyright">
                <hr/>
                <p>copyright @ adnan-All right reserved</p>
            </div>
        
    </div>
  )
}

export default Footer
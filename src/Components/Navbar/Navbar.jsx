import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="flex justify-around items-center p-4 shadow-md bg-white sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="UrbanAura Logo" className="h-10 md:h-12" />
        <p className="text-gray-800 text-2xl md:text-3xl font-semibold">UrbanAura</p>
      </div>

      {/* Mobile Menu Toggle */}
      <img
        onClick={dropdown_toggle}
        className="block md:hidden w-8 h-8 cursor-pointer object-contain"
        src={nav_dropdown}
        alt="Menu"
      />

      {/* Navigation Menu */}
      <ul ref={menuRef} className="hidden md:flex items-center gap-8 list-none text-gray-600 text-lg font-medium nav-menu-base">
        <li
          className={`cursor-pointer hover:text-[#ff9d00] transition-colors ${menu === "shop" ? "border-b-2 border-[#ff9d00] pb-1" : ""}`}
          onClick={() => setMenu("shop")}
        >
          <Link to="/" className="no-underline text-inherit">Shop</Link>
        </li>
        <li
          className={`cursor-pointer hover:text-[#ff9d00] transition-colors ${menu === "men" ? "border-b-2 border-[#ff9d00] pb-1" : ""}`}
          onClick={() => setMenu("men")}
        >
          <Link to="/mens" className="no-underline text-inherit">Men</Link>
        </li>
        <li
          className={`cursor-pointer hover:text-[#ff9d00] transition-colors ${menu === "women" ? "border-b-2 border-[#ff9d00] pb-1" : ""}`}
          onClick={() => setMenu("women")}
        >
          <Link to="/womens" className="no-underline text-inherit">Women</Link>
        </li>
        <li
          className={`cursor-pointer hover:text-[#ff9d00] transition-colors ${menu === "kids" ? "border-b-2 border-[#ff9d00] pb-1" : ""}`}
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids" className="no-underline text-inherit">Kids</Link>
        </li>
      </ul>

      {/* Login & Cart */}
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/login">
          <button className="w-24 md:w-32 h-10 md:h-12 border border-[#7a7a7a] rounded-full text-[#515151] font-medium text-base hover:bg-[#ff9d00] hover:text-white transition-all active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <div className="relative cursor-pointer">
          <Link to="/cart">
            <img src={cart_icon} alt="Cart" className="h-8 md:h-10" />
          </Link>
          <div className="absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center bg-red-500 text-white rounded-full text-xs font-bold">
            {getTotalCartItems()}
          </div>
        </div>
      </div>

      {/* Mobile Menu Styling (via Style Tag for simplicity while keeping Tailwind classes) */}
      <style>{`
        .nav-menu-visible {
          display: flex !important;
          flex-direction: column;
          position: absolute;
          top: 80px;
          right: 0;
          background: white;
          width: 200px;
          padding: 20px;
          box-shadow: -5px 5px 10px rgba(0,0,0,0.1);
          border-radius: 10px 0 0 10px;
          gap: 20px;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

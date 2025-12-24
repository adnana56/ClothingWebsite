import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className="navbar">
      {/* ---------- Logo Section ---------- */}
      <div className="nav-logo">
        <img src={logo} alt="UrbanAura Logo" />
        <p>UrbanAura</p>
      </div>

      {/* ---------- Menu Section ---------- */}
      <ul className="nav-menu">
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => setMenu("shop")}
        >
          <Link to="/">Shop</Link>
        </li>

        <li
          className={menu === "men" ? "active" : ""}
          onClick={() => setMenu("men")}
        >
          <Link to="/mens">Men</Link>
        </li>

        <li
          className={menu === "women" ? "active" : ""}
          onClick={() => setMenu("women")}
        >
          <Link to="/womens">Women</Link>
        </li>

        <li
          className={menu === "kids" ? "active" : ""}
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      {/* ---------- Login & Cart Section ---------- */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="navcart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

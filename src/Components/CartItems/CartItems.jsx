import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  // Add debugging
  console.log("CartItems - cartItems:", cartItems);
  console.log("CartItems - all_product length:", all_product.length);

  const itemsInCart = all_product.filter((item) => cartItems[item.id] > 0);
  console.log("Items in cart:", itemsInCart);

  return (
    <div className="Cartitems">
      <div className="format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {itemsInCart.length === 0 ? (
        <div className="cartitems-empty">
          <p>Your cart is empty</p>
        </div>
      ) : (
        itemsInCart.map((item) => {
          const quantity = cartItems[item.id];
          return (
            <div className="format" key={item.id}>
              <img
                className="product-icon"
                src={item.image && !item.image.startsWith('http') && !item.image.startsWith('/') ? `/images/${item.image}` : item.image}
                alt={item.name}
                onError={(e) => { e.target.onerror = null; e.target.src = '/p1_product.png' }}
              />
              <p>{item.name}</p>
              <p>₹{item.new_price}</p>
              <p>{quantity}</p>
              <p>₹{item.new_price * quantity}</p>
              <img
                src={remove_icon}
                className="remove-icon"
                onClick={() => removeFromCart(item.id)}
                alt="Remove"
              />
            </div>
          );
        })
      )}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total cart</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>

            </div>
          </div>
          <button>PROCEED</button>
        </div>
        <div className="cartitems-promocode">
          <p>Enter your coupon</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Coupon" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CartItems;
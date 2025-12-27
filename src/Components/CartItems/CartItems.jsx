import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { getImageUrl } from '../../utils/imageUtils';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  const itemsInCart = all_product.filter((item) => cartItems[item.id] > 0);

  return (
    <div className="my-8 mx-4 md:my-24 md:mx-36 font-poppins text-[#454545]">
      {/* Header */}
      <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] md:grid-cols-[0.5fr_3fr_1fr_1fr_1fr_1fr] items-center gap-2 md:gap-16 py-5 hover:bg-gray-50 transition-colors border-b border-[#e2e2e2] text-xs md:text-lg font-semibold uppercase">
        <p>Products</p>
        <p>Title</p>
        <p className="hidden md:block">Price</p>
        <p className="hidden md:block">Quantity</p>
        <p className="hidden md:block">Total</p>
        <p className="hidden md:block">Remove</p>
        {/* Mobile headers alternate */}
        <p className="md:hidden">Qty</p>
        <p className="md:hidden">X</p>
      </div>
      <hr className="h-0.5 bg-[#e2e2e2] border-none" />

      {/* Items */}
      {itemsInCart.length === 0 ? (
        <div className="text-center py-20 text-xl font-medium text-gray-500">
          Your cart is empty
        </div>
      ) : (
        itemsInCart.map((item) => {
          const quantity = cartItems[item.id];
          return (
            <div key={item.id}>
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] md:grid-cols-[0.5fr_3fr_1fr_1fr_1fr_1fr] items-center gap-2 md:gap-16 py-5 text-sm md:text-lg font-medium border-b border-[#e2e2e2]">
                <img
                  src={getImageUrl(item.image)}
                  alt={item.name}
                  onError={(e) => { e.target.onerror = null; e.target.src = '/p1_product.png' }}
                  className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-md"
                />
                <p className="text-xs md:text-lg text-gray-800 line-clamp-2">{item.name}</p>
                <p className="hidden md:block">₹{item.new_price}</p>
                <button className="hidden md:block w-12 h-10 border border-[#ebebeb] bg-white text-[#454545]">{quantity}</button>
                <p className="hidden md:block">₹{item.new_price * quantity}</p>

                {/* Mobile View Alternates */}
                <div className="md:hidden flex flex-col gap-1 text-xs">
                  <span>₹{item.new_price}</span>
                  <span className="border border-gray-300 px-2 w-fit">x{quantity}</span>
                </div>

                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(item.id)}
                  alt="Remove"
                  className="w-3 md:w-4 cursor-pointer hover:scale-110 transition-transform mx-auto md:mx-0"
                />
              </div>
            </div>
          );
        })
      )}

      {/* Totals Section */}
      <div className="flex flex-col md:flex-row my-16 md:my-24 gap-12 md:gap-32">
        <div className="flex-1 flex flex-col gap-6 md:gap-10">
          <h1 className="text-2xl font-bold">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-4 border-b border-[#e2e2e2]">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between py-4 border-b border-[#e2e2e2]">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between py-4 text-lg font-bold">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-full md:w-64 h-14 outline-none border-none bg-[#ff4141] text-white text-base font-semibold cursor-pointer rounded-md hover:bg-black transition-colors active:scale-95">PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code */}
        <div className="flex-1 text-base font-medium">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="w-full md:w-96 mt-4 pl-5 h-14 bg-[#eaeaea] rounded-lg flex items-center">
            <input type="text" placeholder="promo code" className="border-none outline-none bg-transparent text-base w-full h-full text-[#454545]" />
            <button className="w-32 md:w-40 h-14 text-base bg-black text-white rounded-lg cursor-pointer active:bg-gray-800">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
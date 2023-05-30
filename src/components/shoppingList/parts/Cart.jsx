import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Cart = ({ 
  item,
  setTotalCartCount 
  }) => {
  const [cartCount, setCartCount] = useState(0);
  console.log(cartCount);

  if (cartCount < 0) {
    setCartCount(0);
  }

  return (
    <div className="item-cart">
      <div className="item-number">
        <input type="checkbox"  id="checkbox" />
        <label htmlFor="checkbox">{item}</label>
      </div>
      <div className="cart-count">
        <button>
          <FaChevronLeft
            className="decrease"
            onClick={() => {
              setCartCount((pre) => pre - 1);
              if (cartCount === 0) {
                return;
              }
              setTotalCartCount((pre) => pre - 1);
            }}
          />
          <span className="cart-count-value">{cartCount}</span>

          <FaChevronRight
            className="increase"
            onClick={() => {
              setCartCount((pre) => pre + 1);
              setTotalCartCount((pre) => pre + 1);
            }}
          />
        </button>{" "}
      </div>
    </div>
  );
};

export default Cart;

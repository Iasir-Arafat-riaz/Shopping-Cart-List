import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";



const Cart = ({ item, setTotalCartCount }) => {
  const [cartCount, setCartCount] = useState(0);
  const [change, setChange] = useState(false);

  console.log(change);

  const handleChange = () => {
    setChange(!change)

    console.log(change);

    if (change) {
      setTotalCartCount(pre => pre + cartCount)
    }
    else if (!change) {
      setTotalCartCount(pre => pre - cartCount)
    }
  }

  console.log(cartCount);

  if (cartCount < 0) {
    setCartCount(0);
  }

  return (
    <div className="item-cart">
      <div className="item-number">
        <input type="checkbox" id="checkbox" onChange={handleChange} />
        <label htmlFor="checkbox">
          {item}
        </label>
      </div>
      <div className="cart-count">
        <button disabled={change}>
          <FaChevronLeft
            className="decrease"
            onClick={() => {
              if (change) {
                return;
              }
              setCartCount((pre) => pre - 1);
              if (cartCount === 0) {
                return;
              }
              setTotalCartCount((pre) => pre - 1);
            }}
          />
          <span className="cart-count-value">
            {cartCount}
          </span>

          <FaChevronRight
            className="increase"
            onClick={() => {
              if (change) {
                return;
              }
              setCartCount((pre) => pre + 1);
              setTotalCartCount((pre) => pre + 1);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;

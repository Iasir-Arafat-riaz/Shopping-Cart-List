import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { TypeChildProps } from "../../../types/commonTypes";

const Cart = ({
  item,
  handleChange,
  increaseDecreaseHandler,
  removeItem
}: TypeChildProps) => {
  return (
    <div className="item-cart">
      <div className="item-number">
        <input
          type="checkbox"
          id={item.itemName}
          onChange={() => handleChange(item.uniqId)}
          checked={item.isChecked}

        />
        <label htmlFor={item.itemName}>
          {item.itemName}
        </label>
      </div>
      <AiFillDelete className="delete-button" onClick={() => removeItem(item.uniqId)} />
      <div className="cart-count">
        <button disabled={item?.isChecked}>
          <FaChevronLeft
            className="decrease"
            onClick={() => increaseDecreaseHandler(item.uniqId, "decrease")}
          />
          <span className="cart-count-value">
            {item.count}
          </span>
          <FaChevronRight
            className="increase"
            onClick={() => increaseDecreaseHandler(item.uniqId, "increase")}
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;

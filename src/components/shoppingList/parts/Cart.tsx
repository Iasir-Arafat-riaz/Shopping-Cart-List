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
      <div className={!item?.isChecked?"cart-count-enabled":"cart-count-disabled"}>
        <button disabled={item?.isChecked} >
          <FaChevronLeft
            className="common"
            onClick={() => !item.isChecked && increaseDecreaseHandler(item.uniqId, "decrease")}
          />
          </button>
          <span className="cart-count-value common">
            {item.count}
          </span>
          <button disabled={item?.isChecked} >
          <FaChevronRight
            className="common"
            onClick={() => !item.isChecked && increaseDecreaseHandler(item.uniqId, "increase")}
          />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Cart;

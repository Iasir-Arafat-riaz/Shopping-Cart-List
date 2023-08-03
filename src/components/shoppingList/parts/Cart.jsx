import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Cart = ({ item, listItems, setListItems, setTotalCartCount }) => {

  console.log(item.isChecked);

  const handleChange = () => {
    item.isChecked = !item.isChecked;

    console.log(item.isChecked);

    if (item.isChecked) {
      setTotalCartCount(pre => pre - item.count)
    }
    else if (!item.isChecked) {
      setTotalCartCount(pre => pre + item.count)
    }
  }
  const removeItem = (ui) => {
    console.log("remove item");
    const filteredItems = listItems.filter(item => item.uniqId !== ui)
    setListItems(filteredItems)
    const findingItem = listItems.find(i => i.uniqId == ui);
    const removedCount = findingItem.count;
    console.log(removedCount);
    setTotalCartCount(pre => pre - removedCount)
  }

  return (
    <div className="item-cart">
      <div className="item-number">
        <input
          type="checkbox"
          id="checkbox"
          onChange={handleChange}
        />
        <label htmlFor="checkbox">
          {item.itemName}
        </label>
      </div>
      <button onClick={() => removeItem(item.uniqId)}>x</button>
      <div className="cart-count">
        <button disabled={item.isChecked}>
          <FaChevronLeft
            className="decrease"
            onClick={() => {
              if (item.count === 0) {
                return;
              }
              if (item.isChecked) {
                return;
              }
              item.count--;
              setTotalCartCount((pre) => pre - 1);
            }}
          />
          <span className="cart-count-value">
            {item.count}
          </span>
          <FaChevronRight
            className="increase"
            onClick={() => {
              if (item.isChecked) {
                return;
              }
              item.count++
              setTotalCartCount((pre) => pre + 1);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;

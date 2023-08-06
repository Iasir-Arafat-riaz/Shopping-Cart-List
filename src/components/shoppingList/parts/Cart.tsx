import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { TypeChildProps } from "../../../types/commonTypes";


type TypeItemName = {
  itemName: string;
  count: number;
  isChecked: boolean;
  uniqId: number;
};
const Cart = ({ item, listItems, setListItems, setTotalCartCount }: TypeChildProps) => {

  console.log(item.isChecked);

  const handleChange = () => {
    item.isChecked = !item.isChecked;

    console.log(item.isChecked,"clicked checkbox");

    if (item.isChecked) {
      setTotalCartCount(pre => pre - item.count)
    }
    else if (!item.isChecked) {
      setTotalCartCount(pre => pre + item.count)
    }
  }
  const removeItem = (ui: number) => {
    console.log("remove item");
    const filteredItems = listItems.filter(item => item.uniqId !== ui)
    setListItems(filteredItems)
    const findingItem = listItems.find(i => i.uniqId === ui);
    let removedCount = !findingItem?.count ? 0 : findingItem.count  ;

    setTotalCartCount(pre => pre - removedCount)
    // console.log(removedCount);

  }

  return (
    <div className="item-cart">
      <div className="item-number">
        <input
          type="checkbox"
          id={item.itemName}
          onClick={handleChange}
        />
        <label htmlFor={item.itemName}>
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

import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { TypeChildProps } from "../../../types/commonTypes";


const Cart = ({ item, listItems, setListItems, setTotalCartCount }: TypeChildProps) => {

  const handleChange = (id: number) => {

    const updateCheckbox = listItems.map(itm => {

      if (itm.uniqId === id) {
        if (!itm.isChecked) {
          // console.log(!itm.isChecked);
          setTotalCartCount(pre => pre - itm.count)
        }
        else if (itm.isChecked) {
          setTotalCartCount(pre => pre + itm.count)
        }
        // console.log(itm);
        return { ...itm, isChecked: !itm.isChecked }

      }
      // console.log(itm);
      return itm

    })

    setListItems(updateCheckbox)
    console.log(updateCheckbox);

  }

  const increaseHandler = (uid: number) => {
    const incCreaseUpdate = listItems.map(itm => {
      if (itm.uniqId === uid && !itm.isChecked) {
        console.log(itm.uniqId);
        setTotalCartCount((pre) => pre + 1);
        return { ...itm, count: itm.count + 1 }
      }
      console.log(itm);
      return itm;
    })
    setListItems(incCreaseUpdate)
  }

  const decreaseHandler = (uid: number) => {
    const incCreaseUpdate = listItems.map(itm => {
      if (itm.uniqId === uid && !itm.isChecked && itm.count > 0) {
        console.log(itm.uniqId);
        setTotalCartCount((pre) => pre - 1);
        return { ...itm, count: itm.count - 1 }
      }
      // console.log(itm);
      return itm;
    })
    setListItems(incCreaseUpdate)
  }

  const removeItem = (ui: number) => {
    const filteredItems = listItems.filter(item => item.uniqId !== ui)
    setListItems(filteredItems)
    const findingItem = listItems.find(i => i.uniqId === ui);
    let removedCount = !findingItem?.count ? 0 : findingItem.count;
    
    if(findingItem?.isChecked===false){
      setTotalCartCount(pre => pre - removedCount)
    }

  }

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
      <AiFillDelete className="delete-button" onClick={() => removeItem(item.uniqId)}/>
      <div className="cart-count">
        <button disabled={item?.isChecked}>
          <FaChevronLeft
            className="decrease"
            onClick={() => decreaseHandler(item.uniqId)}
          />
          <span className="cart-count-value">
            {item.count}
          </span>
          <FaChevronRight
            className="increase"
            onClick={() => increaseHandler(item.uniqId)}
          />
        </button>
      </div>
    </div>
  );
};

export default Cart;

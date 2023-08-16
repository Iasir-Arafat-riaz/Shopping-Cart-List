import React, { useState } from "react";
import Cart from "./parts/Cart";
import { FaPlus } from "react-icons/fa";
import { TypeCartItem } from "../../types/commonTypes";

const ShoppingList = () => {

  const [cartItems, setCartItems] = useState<TypeCartItem[]>([]);
  const [totalCartCount, setTotalCartCount] = useState<number>(0);
  const [newCartItemName, setNewCartItemName] = useState<string>("");


  const addCardItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newCartItemName.length || cartItems.find(x => x.itemName === newCartItemName)) {
      return alert("Your item is duplicate or empty!");
    }

    setCartItems([
      ...cartItems,
      {
        itemName: newCartItemName,
        count: 0,
        isChecked: false,
        uniqId: Math.floor(Math.random() * 10000000)
      }
    ]);
    setNewCartItemName("");
  };

  const handleCheckboxChange = (id: number) => {

    const updatedCartItems = [...cartItems];
    const updatedCartItem = updatedCartItems.find(x => x.uniqId === id);

    if (updatedCartItem) {

      if (updatedCartItem.isChecked) {
        setTotalCartCount(x => x + updatedCartItem.count);
      } else {
        setTotalCartCount(x => x - updatedCartItem.count);
      }

      updatedCartItem.isChecked = !updatedCartItem.isChecked;
    }

    // const updatedCartItems = [...cartItems].map(item => {

    //   if (item.uniqId === id) {

    //     if (!item.isChecked) {
    //       // console.log(!itm.isChecked);
    //       setTotalCartCount(x => x - item.count);
    //     }

    //     else if (item.isChecked) {
    //       setTotalCartCount(x => x + item.count);
    //     }

    //     return {
    //       ...item,
    //       isChecked: !item.isChecked
    //     };
    //   }

    //   return item;
    // })

    console.log(updatedCartItems);

    setCartItems(updatedCartItems);
  }

  const increaseDecreaseButtonHandler = (id: number, method: "increase" | "decrease") => {

    const updatedCartItems = [...cartItems];
    const updatedCartItem = updatedCartItems.find(item => item.uniqId === id);

    if (method === "increase" && updatedCartItem) {
      updatedCartItem.count++;
      setTotalCartCount(x => x + 1);
    }

    if (method === "decrease" && updatedCartItem && updatedCartItem.count > 0) {
      updatedCartItem.count--;
      setTotalCartCount(x => x - 1);
    }

    setCartItems(updatedCartItems);
  }

  const cartItemRemove = (id: number) => {
    const updatedCartItems = [...cartItems];
    const findObjIndex = updatedCartItems.findIndex(x => x.uniqId === id)
    const removeCartItem = updatedCartItems.splice(findObjIndex, 1);
   
    console.log("removeItem = ", removeCartItem[0], "index = ", findObjIndex);

    if (removeCartItem[0] && !removeCartItem[0].isChecked) {
      setTotalCartCount(x => x - removeCartItem[0].count);
      console.log("decrease from total count");
    }

    setCartItems(updatedCartItems);
  }

  return (
    <div className="list-item">
      <form
        onSubmit={addCardItem}
        action=""
        className="add-item-field"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Add an item..."
          onChange={(e) => setNewCartItemName(e.target.value)}
          value={newCartItemName}
        />
        <button
          type="submit"
          className="item-add-button"
        >
          <FaPlus />
        </button>
      </form>

      {cartItems.map((item, index) => (
        <Cart
          key={index}
          item={item}
          handleCheckboxChange={handleCheckboxChange}
          increaseDecreaseButtonHandler={increaseDecreaseButtonHandler}
          cartItemRemove={cartItemRemove}
        />

      ))}

      <div className="total-cart">
        Total : {totalCartCount}
      </div>
    </div>
  );
};

export default ShoppingList;

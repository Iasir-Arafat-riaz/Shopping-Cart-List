import React, { useState } from "react";
import Cart from "./parts/Cart";
import { FaPlus } from "react-icons/fa";
import { TypeCartItemAdd, TypeCartItems, TypeTotalCount } from "../../types/commonTypes";

const ShoppingList = () => {

  const [cartsItem, setCartsItem] = useState<TypeCartItems[]>([]);
  const [totalCartCount, setTotalCartCount] = useState<TypeTotalCount>(0);
  const [cartItemAdd, setCartItemAdd] = useState<TypeCartItemAdd>("");


  const itemCartAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cartItemAdd.length === 0 || cartsItem.find(i => i.itemName === cartItemAdd)) {
      return alert("Your Order duplicate or empty!");
    }

    setCartsItem([...cartsItem, { itemName: cartItemAdd, count: 0, isChecked: false, uniqId: Math.floor(Math.random() * 10000000) }]);
    setCartItemAdd("");
  };

  const checkboxHandleChange = (id: number) => {

    const updateCheckbox = cartsItem.map(itm => {

      if (itm.uniqId === id) {

        if (!itm.isChecked) {
          // console.log(!itm.isChecked);
          setTotalCartCount(pre => pre - itm.count)
        }

        else if (itm.isChecked) {
          setTotalCartCount(pre => pre + itm.count)
        }

        return { ...itm, isChecked: !itm.isChecked }
      }

      return itm
    })

    setCartsItem(updateCheckbox)

    console.log(updateCheckbox);

  }

  const increaseDecreaseButtonHandler = (uid: number, method: string) => {
    const incCreaseDecreseUpdate = cartsItem.map(itm => {

      if (itm.uniqId === uid && method === "increase") {
        console.log(itm.uniqId);
        setTotalCartCount((pre) => pre + 1);
        return { ...itm, count: itm.count + 1 }
      }

      else if (itm.uniqId === uid && itm.count > 0 && method === "decrease") {
        console.log(itm.uniqId);
        setTotalCartCount((pre) => pre - 1);
        return { ...itm, count: itm.count - 1 }
      }

      console.log(itm);

      return itm;
    })
    setCartsItem(incCreaseDecreseUpdate)
  }

  const cartItemRemove = (ui: number) => {
    const filteredItems = cartsItem.filter(item => item.uniqId !== ui)
    const findingItem = cartsItem.find(i => i.uniqId === ui);
    // let removedCount = !findingItem?.count ? 0 : findingItem.count;

    if (findingItem?.isChecked === false) {
      setTotalCartCount(pre => pre - findingItem.count)
    }

    setCartsItem(filteredItems)
  }

  return (
    <div className="list-item">
      <form
        onSubmit={itemCartAdd}
        action=""
        className="add-item-field"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Add an item..."
          onChange={(e) => setCartItemAdd(e.target.value)}
          value={cartItemAdd}
        />
        <button
          type="submit"
          className="item-add-button"
        >
          <FaPlus />
        </button>
      </form>

      {cartsItem.map((item, index) => (
        <Cart
          key={index}
          item={item}
          checkboxHandleChange={checkboxHandleChange}
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

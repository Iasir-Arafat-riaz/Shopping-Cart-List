import React, { useState } from "react";
import Cart from "./parts/Cart";
import { FaPlus } from "react-icons/fa";
import { type } from "os";
import { TypeItemAdd, TypeListItems, TypeTotalCount } from "../../types/commonTypes";

const ShoppingList = () => {

  const [listItems, setListItems] = useState<TypeListItems[]>([]);
  const [totalCartCount, setTotalCartCount] = useState<TypeTotalCount>(0);
  const [itemAdd, setItemAdd] = useState<TypeItemAdd>("");


  const itemCartAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemAdd.length === 0 || listItems.find(i => i.itemName === itemAdd)) {
      return alert("Your Order duplicate or empty!");
    }
    setListItems([...listItems, { itemName: itemAdd, count: 0, isChecked: false, uniqId: Math.floor(Math.random() * 10000000) }]);
    setItemAdd("");
  };

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

  const increaseDecreaseHandler = (uid: number,method:string) => {
    const incCreaseDecreseUpdate = listItems.map(itm => {
      if (itm.uniqId === uid && !itm.isChecked && method==="increase") {
        console.log(itm.uniqId);
        setTotalCartCount((pre) => pre + 1);
        return { ...itm, count: itm.count + 1 }
      }
      else if (itm.uniqId === uid && !itm.isChecked && itm.count > 0 && method ==="decrease") {
        console.log(itm.uniqId);
        setTotalCartCount((pre) => pre - 1);
        return { ...itm, count: itm.count - 1 }
      }
      console.log(itm);
      return itm;
    })
    setListItems(incCreaseDecreseUpdate)
  }

  const removeItem = (ui: number) => {
    const filteredItems = listItems.filter(item => item.uniqId !== ui)
    const findingItem = listItems.find(i => i.uniqId === ui);
    // let removedCount = !findingItem?.count ? 0 : findingItem.count;
    if(findingItem?.isChecked === false){
      setTotalCartCount(pre => pre - findingItem.count)
    }
    setListItems(filteredItems)

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
          onChange={(e) => setItemAdd(e.target.value)}
          value={itemAdd}
        />
        <button
          type="submit"
          className="item-add-button"
        >
          <FaPlus />
        </button>
      </form>

      {listItems.map((item, index) => (
        <Cart
          key={index}
          item={item}
          handleChange={handleChange}
          increaseDecreaseHandler={increaseDecreaseHandler}
          removeItem={removeItem}
          />
          
      ))}

      <div className="total-cart">
        Total : {totalCartCount}
      </div>
    </div>
  );
};

export default ShoppingList;

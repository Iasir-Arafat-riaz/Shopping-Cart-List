import React, { useState } from "react";
import Cart from "./parts/Cart";
import { FaPlus } from "react-icons/fa";

const ShoppingList = () => {
  const [listItems, setListItems] = useState([]);
  const [totalCartCount, setTotalCartCount] = useState(0);
  const [itemAdd, setItemAdd] = useState("");

  const itemCartAdd = () => {
    if (itemAdd.length === 0 || listItems.includes(itemAdd)) {
      return alert("Your Order duplicate or empty!");
      }
      
    setListItems([...listItems, itemAdd]);
  };
  console.log("total count =", totalCartCount, "item add =", itemAdd);
  
  return (
    <div className="list-item">
      {/* <button className='item-add-button' onClick={itemCartAdd}><div >Add an item...</div> <div>+</div></button> */}
      <div className="add-item-field">
        <input
          type="text"
          name=""
          id=""
          placeholder="Add an item..."
          onChange={(e) => setItemAdd(e.target.value)}
        />
        <FaPlus className="item-add-button" onClick={itemCartAdd} />
      </div>
      {listItems.map((item, index) => (
        <Cart key={index} item={item} setTotalCartCount={setTotalCartCount} />
      ))}
      <div className="total-cart">Total : {totalCartCount}</div>
    </div>
  );
};

export default ShoppingList;

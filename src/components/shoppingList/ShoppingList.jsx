import React, { useState } from "react";
import Cart from "./parts/Cart";
import { FaPlus } from "react-icons/fa";

const ShoppingList = () => {
  const [listItems, setListItems] = useState([]);
  const [totalCartCount, setTotalCartCount] = useState(0);
  const [itemAdd, setItemAdd] = useState("");

  const itemCartAdd = (e) => {
    e.preventDefault();
    if (itemAdd.length === 0 || listItems.find(i => i.itemName === itemAdd)) {
      return alert("Your Order duplicate or empty!");
    }
    setListItems([...listItems, { itemName: itemAdd, count: 0, isChecked: false, uniqId: Math.floor(Math.random() * 1000000) }]);
    setItemAdd("");
  };

  console.log("total count =", totalCartCount, "item add =", itemAdd);
  console.log(listItems);

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
        <Cart key={index} item={item} setListItems={setListItems} setTotalCartCount={setTotalCartCount} listItems={listItems} />
      ))}

      <div className="total-cart">
        Total : {totalCartCount}
      </div>
    </div>
  );
};

export default ShoppingList;

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  // METHOD,
  TypeCartItem
} from "../../../types/commonTypes";

export type TypeChildProps = {
  item: TypeCartItem,
  handleCheckboxChange: (value: number) => void,
  increaseDecreaseButtonHandler: (id: number, method: "increase" | "decrease") => void,
  // increaseDecreaseButtonHandler: (id: number, method: METHOD) => void,
  cartItemRemove: (value: number) => void;
}

const Cart = ({
  item,
  handleCheckboxChange: checkboxHandleChange,
  increaseDecreaseButtonHandler,
  cartItemRemove
}: TypeChildProps
) => {

  return (
    <div className="item-cart">

      <div className="item-number">
        <input
          type="checkbox"
          id={item.itemName}
          onChange={() => checkboxHandleChange(item.uniqId)}
          checked={item.isChecked}

        />
        <label htmlFor={item.itemName}>
          {item.itemName}
        </label>
      </div>

      <AiFillDelete className="delete-button" onClick={() => cartItemRemove(item.uniqId)} />

      <div className="cart-count">
        <div className={
          !item?.isChecked ?
            "cart-count-enabled" :
            "cart-count-disabled"
        }>

          <button disabled={item?.isChecked} >
            <FaChevronLeft
              className="common"
              onClick={
                () => !item.isChecked &&
                  increaseDecreaseButtonHandler(item.uniqId, "decrease")
              }
            />
          </button>

          <span className="cart-count-value common">
            {item.count}
          </span>

          <button disabled={item?.isChecked} >
            <FaChevronRight
              className="common"
              onClick={
                () => !item.isChecked &&
                  increaseDecreaseButtonHandler(item.uniqId, "increase")
              }
            />
          </button>

        </div>
      </div>

    </div>
  );
};

export default Cart;

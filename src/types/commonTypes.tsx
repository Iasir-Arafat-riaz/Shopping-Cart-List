export type TypeCartItems = {
  itemName: string,
  count: number,
  isChecked: boolean,
  uniqId: number
}
export type TypeTotalCount = number;
export type TypeCartItemAdd = string;

export type TypeChildProps = {
  item: TypeCartItems,
  // listItems: {
  //   itemName: string,
  //   count: number,
  //   isChecked: boolean,
  //   uniqId: number
  // }[],
  // setListItems: (value: {
  //   itemName: string,
  //   count: number,
  //   isChecked: boolean,
  //   uniqId: number
  // }[]) => void;
  // setTotalCartCount: (f1: (value: number) => number) => void,
  checkboxHandleChange:(value:number) => void,
  increaseDecreaseButtonHandler:(value1:number,value2:string) => void,
  cartItemRemove:(value:number) => void;
}
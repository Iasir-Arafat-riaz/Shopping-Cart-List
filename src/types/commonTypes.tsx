export type TypeListItems = {
  itemName: string,
  count: number,
  isChecked: boolean,
  uniqId: number
}
export type TypeTotalCount = number;
export type TypeItemAdd = string;

export type TypeChildProps = {
  item: TypeListItems,
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
  handleChange:(value:number) => void,
  increaseDecreaseHandler:(value1:number,value2:string) => void,
  removeItem:(value:number) => void;
}
export type TypeListItems = {
  itemName: string,
  count: number,
  isChecked: boolean,
  uniqId: number
}
export type TypeTotalCount = number;
export type TypeItemAdd = string;

export type TypeChildProps = {
  item: {
    itemName: string,
    count: number,
    isChecked: boolean,
    uniqId: number
  },
  listItems: {
    itemName: string,
    count: number,
    isChecked: boolean,
    uniqId: number
  }[],
  setListItems: (value: {
    itemName: string,
    count: number,
    isChecked: boolean,
    uniqId: number
  }[]) => void;
  setTotalCartCount: (f1: (value: number) => number) => void;
}
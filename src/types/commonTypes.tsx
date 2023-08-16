export type TypeCartItem = {
  itemName: string,
  count: number,
  isChecked: boolean,
  uniqId: number
}
// export type TypeTotalCount = number;
// export type TypeCartItemAdd = string;


export enum METHOD {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE"
}
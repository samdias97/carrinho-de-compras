export enum ActionTypes {
  addProductToCart = 'ADD_PRODUCT_TO_CART',
}

export interface ICartProps {
  quantityOfProducts: number;
}

export interface IProjectProps {
  cart: ICartProps;
}
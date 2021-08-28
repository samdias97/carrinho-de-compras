import { Product } from '../../../interfaces';

export enum ActionTypes {
  // "enum" representa uma propriedade que tem um valor
  addToCartCounter = 'ADD_TO_CART_COUNTER',
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  changeProductQuantityUnic = 'ADD_ITEN_TO_QUANTITY',
  removeAllProducts = 'REMOVE_ALL_PRODUCTS',
  removeProduct = 'REMOVE_PRODUCT',
  changeStatusModal = 'CHANGE_STATUS_MODAL',
  changeMessageModal = 'CHANGE_MESSAGE_MODAL',
}

interface IDataModal {
  title: string;
  description: string;
}

export interface ICartProps {
  quantityOfProducts: number;
  products: Product[];
  statusModal: boolean;
  dataModal: IDataModal;
}

export interface IProjectProps {
  cart: ICartProps;
}
import { Product } from '../../../interfaces';

// LISTA DE AÇÕES
export enum ActionTypes {
  // "enum" REPRESENTA UMA PROPRIEDADE QUE TEM UM VALOR
  addToCartCounter = 'ADD_TO_CART_COUNTER',
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  changeProductQuantityUnic = 'ADD_ITEN_TO_QUANTITY',
  removeAllProducts = 'REMOVE_ALL_PRODUCTS',
  removeProduct = 'REMOVE_PRODUCT',
  changeStatusModal = 'CHANGE_STATUS_MODAL',
  changeMessageModal = 'CHANGE_MESSAGE_MODAL',
}

interface IDataModal {
  type: 'info' | 'error';
  title: string;
  description: string;
}

// INTERFACE DAS RAMIFICAÇÕES/PROPRIEDADES DA GLOBAL
export interface ICartProps {
  quantityOfProducts: number;
  products: Product[];
  statusModal: boolean;
  dataModal: IDataModal;
}

// INTERFACE GLOBAL
export interface IProjectProps {
  cart: ICartProps;
}
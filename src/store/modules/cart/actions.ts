import { ActionTypes } from './types';

interface ReturnProps {
  type: string;
  payload: {
    quantityOfProducts: number;
  };
}

export const addProductToCart = (quantityOfProducts: number): ReturnProps => {
  return {
    type: ActionTypes.addProductToCart,
    payload: {
      quantityOfProducts,
    },
  };
}
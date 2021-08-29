import { Reducer } from 'redux';
import produce from 'immer';

import { IProjectProps, ActionTypes } from './types';
  
const INITIAL_STATE_TEST: IProjectProps = {
  cart: {
    quantityOfProducts: 0,
    products: [],
    statusModal: false,
    dataModal: {
      title: '',
      description: '',
    }
  }
}

export const cartTest: Reducer<IProjectProps> = (state = INITIAL_STATE_TEST, action) => 
produce(state, draft => {
  switch (action.type) {
    case ActionTypes.addToCartCounter: {
      draft.cart.quantityOfProducts += action.payload.quantityOfProducts;
      break;
    }
    case ActionTypes.addProductToCart: {
      draft.cart.products.push(action.payload.product);
      break;
    }
    case ActionTypes.changeProductQuantityUnic: {
      const productFindIndex = draft.cart.products.findIndex(product => Number(product.id) === action.payload.productId);

      if (productFindIndex !== -1) {
        draft.cart.products[productFindIndex].quantity = action.payload.quantityOfProductsUnic;
      }
      break;
    }
    case ActionTypes.removeAllProducts: {
      draft.cart.quantityOfProducts = 0;
      draft.cart.products = [];
      break;
    }
    case ActionTypes.removeProduct: {
      const productFindIndex = draft.cart.products.findIndex(product => Number(product.id) === action.payload.productId);
      
      if (productFindIndex !== -1) {
        draft.cart.quantityOfProducts = draft.cart.quantityOfProducts - 1;
        draft.cart.products.splice(productFindIndex, 1);
      }
      break;
    }
    case ActionTypes.changeStatusModal: {
      draft.cart.statusModal = action.payload.status;
      break;
    }
    case ActionTypes.changeMessageModal: {
      draft.cart.dataModal.title = action.payload.title;
      draft.cart.dataModal.description = action.payload.description;
      break;
    }
    default: {
      return draft;
    }
  }
});
// ARQUIVO REDUCER ONDE SERÁ FEITO OS TRATAMENTOS DAS AÇÕES

import { Reducer } from 'redux';
import produce from 'immer';

import { ICartProps, ActionTypes } from './types';

// ESTADO INICIAL DO CONTEXTO GLOBAL
const INITIAL_STATE: ICartProps = {
  quantityOfProducts: 0,
  products: [],
  statusModal: false,
  dataModal: {
    type: 'info',
    title: '',
    description: '',
  }
}

// REALIZA AS AÇÕES PROPRIAMENTE DITAS DE ACORDO COM A AÇÃO E PROPRIEDADES PASSADAS
export const cart: Reducer<ICartProps> = (state = INITIAL_STATE, action) => 
  // PROPORCIONA "BURLAR" O CONCEITO DE IMUTABILIDADE DO REACT, PERMITINDO QUE O ESTADO SEJA ALTERADO DIRETAMENTE 
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addToCartCounter: {
        draft.quantityOfProducts += action.payload.quantityOfProducts;
        break;
      }
      case ActionTypes.addProductToCart: {
        draft.products.push(action.payload.product);
        break;
      }
      case ActionTypes.changeProductQuantityUnic: {
        const productFindIndex = draft.products.findIndex(product => Number(product.id) === action.payload.productId);

        if (productFindIndex !== -1) {
          draft.products[productFindIndex].quantity = action.payload.quantityOfProductsUnic;
        }
        break;
      }
      case ActionTypes.removeAllProducts: {
        draft.quantityOfProducts = 0;
        draft.products = [];
        break;
      }
      case ActionTypes.removeProduct: {
        const productFindIndex = draft.products.findIndex(product => Number(product.id) === action.payload.productId);
       
        if (productFindIndex !== -1) {
          draft.quantityOfProducts = draft.quantityOfProducts - 1;
          draft.products.splice(productFindIndex, 1);
        }
        break;
      }
      case ActionTypes.changeStatusModal: {
        draft.statusModal = action.payload.status;
        break;
      }
      case ActionTypes.changeMessageModal: {
        draft.dataModal.type = action.payload.type;
        draft.dataModal.title = action.payload.title;
        draft.dataModal.description = action.payload.description;
        break;
      }
      default: {
        return draft;
      }
    }
  });

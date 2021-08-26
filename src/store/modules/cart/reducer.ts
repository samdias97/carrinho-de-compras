import { Reducer } from 'redux';
import produce from 'immer';
import { ICartProps, ActionTypes } from './types';

const INITIAL_STATE: ICartProps = {
  quantityOfProducts: 0,
}

export const cart: Reducer<ICartProps> = (quantityOfProducts = INITIAL_STATE, action) => 
  produce(quantityOfProducts, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCart: {
        draft.quantityOfProducts += action.payload.quantityOfProducts;
        break;
      }
      default: {
        return draft;
      }
    }
  });

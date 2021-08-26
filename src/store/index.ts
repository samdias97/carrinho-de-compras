import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICartProps } from './modules/cart/types';
import rootReducer from './modules/rootReducer';

export interface IProject {
  cart: ICartProps;
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
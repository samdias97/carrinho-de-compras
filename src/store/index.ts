import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICartProps } from './modules/cart/types';
import rootReducer from './modules/rootReducer';

// INTERFACE GLOBAL
export interface IProject {
  cart: ICartProps;
}

// CRIA O CONTEXTO DE ARMAZENAMENTO GLOBAL
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
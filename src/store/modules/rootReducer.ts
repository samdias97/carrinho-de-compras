import { combineReducers } from 'redux';
import { cart } from './cart/reducer';

// COMBINA E EXPORTA UM CONJUNTO DE REDUCERS PARA A CRIAÇÃO DO STORE NO 
// ARQUIVO "index" (NO CASO ATUAL, SOMENTE UM REDUCER) 
export default combineReducers({
  cart,
});
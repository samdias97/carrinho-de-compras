import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICartProps } from './modules/cart/types';
import rootReducer from './modules/rootReducer';

// PARA PERSISTENCIA DE ESTADO NO LOCAL STORAGE
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// INTERFACE GLOBAL
export interface IProject {
  cart: ICartProps;
}

// CONFIGURAÇÃO DO QUE PERSISTIR
const persistConfig = {
  key: 'cart',
  storage,
  // whitelist: [], // DEFINE APENAS OS REDUCERS QUE EU QUERO SALVAR
  // blacklist: [], // DEFINE APENAS OS REDUCERS QUE EU NÃO QUERO SALVAR
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// CRIA O CONTEXTO DE ARMAZENAMENTO GLOBAL
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()));
export const persistor = persistStore(store);
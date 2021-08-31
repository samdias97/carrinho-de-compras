import { ActionTypes } from './types';
import { Product } from '../../../interfaces';

// Requisição para adicionar um produto no contador do carrinho
export const addToCartCounter = (quantityOfProducts: number) => {
  return {
    type: ActionTypes.addToCartCounter,
    payload: {
      quantityOfProducts,
    },
  };
}

// Requisição para adicionar o produto ao carrinho
export const addProductToCart = (product: Product) => {
  return {
    type: ActionTypes.addProductToCart,
    payload: {
      product,
    },
  };
}

// Requisição para adicionar ou remover a quatidade do mesmo produto no carrinho
export const changeProductQuantityUnic = (quantityOfProductsUnic: number, productId: number) => {
  return {
    type: ActionTypes.changeProductQuantityUnic,
    payload: {
      quantityOfProductsUnic,
      productId,
    },
  };
}

// Requisição para remover todos os produtos do carrinho
export const removeAllProducts = (removeAll: boolean) => {
  return {
    type: ActionTypes.removeAllProducts,
    payload: {
      removeAll,
    },
  };
}

// Requisição para remover um produto do carrinho
export const removeProduct = (productId: number) => {
  return {
    type: ActionTypes.removeProduct,
    payload: {
      productId,
    },
  };
}

// Requisição para abrir e fechar o modal
export const changeStatusModal = (status: boolean) => {
  return {
    type: ActionTypes.changeStatusModal,
    payload: {
      status,
    },
  };
}

// Requisição para adicionar o tipo, título e descrição no modal
export const changeMessageModal = (type: 'info' | 'error', title: string, description: string) => {
  return {
    type: ActionTypes.changeMessageModal,
    payload: {
      type,
      title,
      description,
    },
  };
}
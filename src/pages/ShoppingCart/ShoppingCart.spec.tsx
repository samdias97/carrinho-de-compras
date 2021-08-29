import { render, screen, fireEvent } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import { ShoppingCart } from '.';
import { Product } from '../../interfaces';
import rootReducer from '../../store/modules/rootReducer';
import { addToCartCounter, addProductToCart } from '../../store/modules/cart/actions';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  }
});

const productTest: Product = {
  createdAt: '2021-08-28T12:00:00.000Z',
  id: '1',
  image: 'https://miro.medium.com/max/544/1*REfN2oQiMwz7sgEYkJVY8g.jpeg',
  name: 'React Testing Library',
  price: '300.00',
  quantity: 2,
  stock: 10,
}

describe('ShoppingCart page', () => {
  it('renders correctly on empty cart', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

    render(
      <Provider store={storeTest}>
        <ShoppingCart />
      </Provider>
    )

    expect(screen.getByText(`O seu carrinho está vazio`)).toBeInTheDocument(); 
    expect(screen.getByText(`Deseja olhar outros produtos similares?`)).toBeInTheDocument(); 
    expect(screen.getByText(`Continuar comprando`)).toBeInTheDocument(); 
  });

  it('render correctly in cart with products', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);

    storeTest.dispatch(addToCartCounter(1));
    storeTest.dispatch(addProductToCart(productTest));

    render(
      <Provider store={storeTest}>
        <ShoppingCart />
      </Provider> 
    )

    expect(screen.getByText(`Produtos`)).toBeInTheDocument(); 
    expect(screen.getByText(`Continuar comprando`)).toBeInTheDocument(); 
    expect(screen.getByText(`Remover todos`)).toBeInTheDocument(); 
    expect(screen.getByText(`React Testing Library`)).toBeInTheDocument(); 
    expect(screen.getByText(/Preço: R\$ 300,00/i)).toBeInTheDocument(); 
    expect(screen.getByText(`Estoque: 8`)).toBeInTheDocument(); 
    expect(screen.getByText(`Quant:`)).toBeInTheDocument(); 
    expect(screen.getByText(`2`)).toBeInTheDocument(); 
    expect(screen.getByText(`Remover`)).toBeInTheDocument(); 
    expect(screen.getByText(`Valor total:`)).toBeInTheDocument(); 
    expect(screen.getByText(/R\$ 600,00/i)).toBeInTheDocument(); 
  });

  it('click remove all products', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);

    storeTest.dispatch(addToCartCounter(1));
    storeTest.dispatch(addProductToCart(productTest));

    render(
      <Provider store={storeTest}>
        <ShoppingCart />
      </Provider> 
    )

    fireEvent.click(screen.getByTestId(`removeAllProducts`));
    expect(storeTest.dispatch).toHaveBeenCalled();
  });
});
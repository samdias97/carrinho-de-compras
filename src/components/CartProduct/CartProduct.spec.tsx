import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { mockReactRedux } from "mock-react-redux";
import { CartProduct } from '.';
import { Provider } from 'react-redux';
import { cartTest } from '../../store/modules/cart/reducerTest';
import { createStore } from 'redux';
import { addProductToCart } from '../../store/modules/cart/actions';

describe('CartProduct component', () => {
  const storeTest = createStore(cartTest);

  storeTest.dispatch(addProductToCart({
    createdAt: '2021-08-28T12:00:00.000Z',
    id: '1',
    image: 'https://miro.medium.com/max/544/1*REfN2oQiMwz7sgEYkJVY8g.jpeg',
    name: 'React Testing Library',
    price: '300.00',
    quantity: 2,
    stock: 10,
  }));

  it('renders correctly', () => {
    render(
      <Provider store={storeTest}>
        <CartProduct data={storeTest.getState().cart.products[0]} />
      </Provider>
    )

    expect(screen.getByText(`React Testing Library`)).toBeInTheDocument(); 
    expect(screen.getByText(`Preço: R$ 300,00`)).toBeInTheDocument();
    expect(screen.getByText(`Estoque: 8`)).toBeInTheDocument();
    expect(screen.getByText(`2`)).toBeInTheDocument(); 
    expect(screen.getByText(`R$ 600,00`)).toBeInTheDocument(); 
  }); 

  it('click increment button', () => {
    const storeTest = createStore(cartTest);
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);

    storeTest.dispatch(addProductToCart({
      createdAt: '2021-08-28T12:00:00.000Z',
      id: '1',
      image: 'https://miro.medium.com/max/544/1*REfN2oQiMwz7sgEYkJVY8g.jpeg',
      name: 'React Testing Library',
      price: '300.00',
      quantity: 2,
      stock: 10,
    }));

    render(
      <Provider store={storeTest}>
        <CartProduct data={storeTest.getState().cart.products[0]} />
      </Provider>
    )

    fireEvent.click(screen.getByTestId(`increment`));
    expect(storeTest.dispatch).toHaveBeenCalled();
    expect(screen.getByText(`Estoque: 7`)).toBeInTheDocument();
    expect(screen.getByText(`3`)).toBeInTheDocument(); 
    expect(screen.getByText(`R$ 900,00`)).toBeInTheDocument(); 
  }); 

  it('click decrement button', () => {
    const storeTest = createStore(cartTest);
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);

    storeTest.dispatch(addProductToCart({
      createdAt: '2021-08-28T12:00:00.000Z',
      id: '1',
      image: 'https://miro.medium.com/max/544/1*REfN2oQiMwz7sgEYkJVY8g.jpeg',
      name: 'React Testing Library',
      price: '300.00',
      quantity: 2,
      stock: 10,
    }));

    render(
      <Provider store={storeTest}>
        <CartProduct data={storeTest.getState().cart.products[0]} />
      </Provider>
    )

    fireEvent.click(screen.getByTestId(`decrement`));
    expect(storeTest.dispatch).toHaveBeenCalled();
    expect(screen.getByText(`Estoque: 9`)).toBeInTheDocument();
    expect(screen.getByText(`1`)).toBeInTheDocument(); 
    expect(screen.getByText(`R$ 300,00`)).toBeInTheDocument(); 
  });

  it('click remove product', () => {
    const storeTest = createStore(cartTest);
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);

    storeTest.dispatch(addProductToCart({
      createdAt: '2021-08-28T12:00:00.000Z',
      id: '1',
      image: 'https://miro.medium.com/max/544/1*REfN2oQiMwz7sgEYkJVY8g.jpeg',
      name: 'React Testing Library',
      price: '300.00',
      quantity: 2,
      stock: 10,
    }));

    render(
      <Provider store={storeTest}>
        <CartProduct data={storeTest.getState().cart.products[0]} />
      </Provider>
    )

    fireEvent.click(screen.getByTestId(`removeProduct`));
    expect(storeTest.dispatch).toHaveBeenCalled();
  });
});
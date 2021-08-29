import { render, screen, fireEvent } from '@testing-library/react';
import { SideList } from '.';
import { Provider } from 'react-redux';
import { cartTest } from '../../store/modules/cart/reducerTest';
import { createStore } from 'redux';

jest.mock('react-router-dom', () => {
  return {
    useHistory() {
      return {
        push: jest.fn(),
      }
    }
  }
});

describe('SideList component', () => {
  it('click show previousCard and nextCard', () => {
    const storeTest = createStore(cartTest);

    render(
      <Provider store={storeTest}>
        <SideList data={storeTest.getState().cart.products} />
      </Provider>
    )

    fireEvent.click(screen.getByTestId(`previousCard`));
    fireEvent.click(screen.getByTestId(`nextCard`)); 
    fireEvent.click(screen.getByTestId(`previousCard`));
    fireEvent.click(screen.getByTestId(`previousCard`));
    fireEvent.click(screen.getByTestId(`nextCard`)); 
    fireEvent.click(screen.getByTestId(`nextCard`)); 
    fireEvent.click(screen.getByTestId(`nextCard`)); 
    fireEvent.click(screen.getByTestId(`previousCard`));
    fireEvent.click(screen.getByTestId(`previousCard`));
    fireEvent.click(screen.getByTestId(`previousCard`));
  }); 
});
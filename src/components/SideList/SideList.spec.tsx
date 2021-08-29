import { render, screen, fireEvent } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import { SideList } from '.';
import rootReducer from '../../store/modules/rootReducer';

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
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

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
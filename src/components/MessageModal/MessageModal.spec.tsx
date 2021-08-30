import { render, screen, fireEvent } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import rootReducer from '../../store/modules/rootReducer';
import { MessageModal } from '.';
import { changeStatusModal, changeMessageModal } from '../../store/modules/cart/actions';

describe('MessageModal component', () => {
  it('renders correctly on infotype and click on button "Sim"', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);
    storeTest.dispatch(changeStatusModal(true));
    storeTest.dispatch(changeMessageModal(
      'info',
      'Title test',
      'Description test',
    ));

    render(
      <Provider store={storeTest}>
        <MessageModal />
      </Provider>
    )

    expect(screen.getByText(`Description test`)).toBeInTheDocument();
    expect(screen.getByText(`Sim`)).toBeInTheDocument();
    expect(screen.getByText(`Não`)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(`removeAllProducts`));
    expect(storeTest.dispatch).toHaveBeenCalled();
  });

  it('renders correctly on infotype and click on button "Não"', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);
    storeTest.dispatch(changeStatusModal(true));
    storeTest.dispatch(changeMessageModal(
      'info',
      'Title test',
      'Description test',
    ));

    render(
      <Provider store={storeTest}>
        <MessageModal />
      </Provider>
    )

    expect(screen.getByText(`Description test`)).toBeInTheDocument();
    expect(screen.getByText(`Sim`)).toBeInTheDocument();
    expect(screen.getByText(`Não`)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(`closeModalButton`));
    expect(storeTest.dispatch).toHaveBeenCalled();
  });

  it('renders correctly on error type', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);
    storeTest.dispatch(changeStatusModal(true));
    storeTest.dispatch(changeMessageModal(
      'error',
      'Title test',
      'Description test',
    ));

    render(
      <Provider store={storeTest}>
        <MessageModal />
      </Provider>
    )

    expect(screen.getByText(`Title test`)).toBeInTheDocument();
    expect(screen.getByText(`Description test`)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(`closeModalIn`));
    expect(storeTest.dispatch).toHaveBeenCalled();
  });
});
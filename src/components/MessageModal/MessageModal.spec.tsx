import { render, screen, fireEvent } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import rootReducer from '../../store/modules/rootReducer';
import { MessageModal } from '.';
import { changeStatusModal, changeMessageModal } from '../../store/modules/cart/actions';

describe('MessageModal component', () => {
  it('renders correctly', () => {
    const storeTest = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
    const origDispatch = storeTest.dispatch;
    storeTest.dispatch = jest.fn(origDispatch);
    storeTest.dispatch(changeStatusModal(true));
    storeTest.dispatch(changeMessageModal(
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
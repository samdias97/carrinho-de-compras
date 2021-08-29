import { render, screen, fireEvent } from '@testing-library/react';
import { MessageModal } from '.';
import { Provider } from 'react-redux';
import { cartTest } from '../../store/modules/cart/reducerTest';
import { createStore } from 'redux';
import { changeStatusModal, changeMessageModal } from '../../store/modules/cart/actions';

describe('MessageModal component', () => {
  it('renders correctly', () => {
    const storeTest = createStore(cartTest);
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
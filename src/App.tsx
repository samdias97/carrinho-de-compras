import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-modal';

import { MessageModal } from './components/MessageModal';
import { store, persistor } from './store';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

import { Container } from './styles'; 

Modal.setAppElement('#root');

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Container>
            <Routes />

            <MessageModal />
          </Container>

          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

import { Provider } from 'react-redux';

import { store } from './store';

import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';

import { Container } from './styles'; 

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Routes />
        </Container>

        <GlobalStyle />
      </Router>
    </Provider>
  );
}

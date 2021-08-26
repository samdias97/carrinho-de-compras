import { Provider } from 'react-redux';

import { store } from './store';

import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';

import { Container } from './styles'; 

import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';

import { Footer } from './components/Footer';

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Header />

          <Routes />

          <Footer />
        </Container>

        <GlobalStyle />
      </Router>
    </Provider>
  );
}

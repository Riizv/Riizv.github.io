import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

import { Layout } from './containers';
import Router from './router/Router';

import { lightTheme, darkTheme } from './theme/theme';

import { store } from './store/themeSlice';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  </Provider>
);

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.dark};
  }
`;

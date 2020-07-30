import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import './App.css';

import { Layout } from './containers';
import Router from './router/Router';

import theme from './theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <Router />
    </Layout>
  </ThemeProvider>
);

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.dark};
  }
`;

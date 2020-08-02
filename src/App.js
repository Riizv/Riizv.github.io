import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

import './App.css';

import { Layout } from './containers';
import Router from './router/Router';

import { lightTheme, darkTheme } from './theme/theme';
import { selectTheme } from './store/themeSlice';

const App = () => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.dark};
  }
`;

import React from 'react';
import { Navigation } from '../../components';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const WrapperLayout = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
`;

const MainWrapper = styled.main`
  margin: 1rem;
  width: calc(100% - 2rem);
`;

const Layout = ({ children }) => {
  return (
    <WrapperLayout>
      <BrowserRouter>
        <MainWrapper>{children}</MainWrapper>
        <Navigation />
      </BrowserRouter>
    </WrapperLayout>
  );
};

export default Layout;

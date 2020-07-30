import React from 'react';
import styled from 'styled-components';

const Logotype = styled.h1`
  color: ${({ theme }) => theme.white};
  position: relative;
  font-size: 3rem;
  letter-spacing: 4px;
  margin-top: 1rem;

  &::after, &::before {
    content: '${({ children }) => children}';
    position: absolute;
    top: 2px;
    left: 2px;
    color: #14FDFD;
    z-index: -1;
  }
  &::before{
    top: -2px;
    left: -2px;
    color: #D80B28;
  }
`;

const Logo = ({ children }) => {
  return <Logotype>{children}</Logotype>;
};

export default Logo;

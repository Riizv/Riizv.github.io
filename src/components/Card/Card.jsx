import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* width: 100%; */
  border-radius: 1rem;
  background: ${({ theme }) => theme.main};
  box-sizing: border-box;
  padding: 1rem;
`;

export const CardTitle = styled.h2`
  margin-top: 0.5rem;
`;

export const CardContent = styled.div``;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;

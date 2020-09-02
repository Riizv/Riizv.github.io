import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Grid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Grid;

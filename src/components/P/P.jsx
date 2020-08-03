import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius / 1.5}rem;
  background: ${({ second, theme }) => (second ? theme.second : 'transparent')};
  color: ${({ theme }) => theme.card.fontColor};
  margin-bottom: 0;
`;

const P = props => {
  return <Paragraph {...props}></Paragraph>;
};

export default P;

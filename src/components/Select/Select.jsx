import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius / 1.5}rem;
  background: ${({ theme }) => theme.second};
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.card.fontColor};
  font-size: 1rem;
  font-weight: bold;

  &:active,
  &:focus {
    outline: none;
  }
  > * {
    background: ${({ theme }) => theme.card.backgroundColor};
    color: ${({ theme }) => theme.card.fontColor};
  }
`;

const Select = props => {
  return <StyledSelect {...props}></StyledSelect>;
};

export default Select;

import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
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
`;

const Input = props => {
  return <StyledInput {...props}></StyledInput>;
};

export default Input;

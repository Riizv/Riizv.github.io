import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius}rem;
  background: ${({ theme }) => theme.card.backgroundColor};
  color: ${({ theme }) => theme.card.fontColor};
  box-sizing: border-box;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.card.shadow};
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 1rem;
`;

export const CardIcon = styled.div`
  font-size: 1.7rem;
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius / 1.5}rem;
  color: ${({ theme }) => theme.card.fontColor};
  background: ${({ theme }) => theme.card.fontColor}30;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.h2`
  margin: 0 0 0 1rem;
  display: inline-block;
`;

export const CardContent = styled.div``;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;

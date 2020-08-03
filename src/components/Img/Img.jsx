import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius}rem;
  background: ${({ theme }) => theme.card.backgroundColor};
  box-sizing: border-box;
`;

const Img = ({ src, padding, maxHeight }) => {
  return <Image src={src} style={{ padding: padding, maxHeight: maxHeight }} />;
};

export default Img;

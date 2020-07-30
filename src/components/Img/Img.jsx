import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  /* height: 10rem; */
  width: 100%;
  border-radius: 1rem;
  background: ${({ theme }) => theme.main};
  box-sizing: border-box;
`;

const Img = ({ src, padding, maxHeight }) => {
  return <Image src={src} style={{ padding: padding, maxHeight: maxHeight }} />;
};

export default Img;

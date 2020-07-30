import React from 'react';
// import styled from 'styled-components';

import { Img, Logo } from '../components';

import towing from '../assets/towing.svg';

const PageNotFound = ({ children }) => {
  return (
    <div>
      <Logo>PageNotFound</Logo>
      <Img src={towing} padding={30} maxHeight={300} />
    </div>
  );
};

export default PageNotFound;

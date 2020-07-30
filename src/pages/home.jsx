import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

import { Img, Logo } from '../components';

import home_cinema from '../assets/home_cinema.svg';

const Home = () => {
  return (
    <div>
      <Logo>ExLog App</Logo>
      <Img src={home_cinema} padding={30} maxHeight={300} />
    </div>
  );
};

export default Home;

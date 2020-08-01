import React from 'react';
import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';

import { Img, Logo } from '../components';
import home_cinema from '../assets/home_cinema.svg';

import { store, switchTheme } from '../store/themeSlice';

const mapDispatch = { switchTheme };
const mapState = state => state;

const Home = ({ switchTheme }) => {
  return (
    <div>
      <Logo>ExLog App</Logo>
      <Img src={home_cinema} padding={30} maxHeight={300} />
      <h1>{store.getState()}</h1>
      <button onClick={() => switchTheme('light')}>Switch theme</button>
    </div>
  );
};

export default connect(mapState, mapDispatch)(Home);

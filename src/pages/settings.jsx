import React from 'react';
import { connect, useSelector } from 'react-redux';
// import styled from 'styled-components';

import { Img, Logo } from '../components';

import operating_system from '../assets/operating_system.svg';

import { selectTheme, switchTheme } from '../store/themeSlice';

const mapDispatch = { switchTheme };
const mapState = state => state;

const Settings = ({ switchTheme }) => {
  const theme = useSelector(selectTheme);

  const switcher = () => {
    theme === 'light' ? switchTheme('dark') : switchTheme('light');
  };

  return (
    <div>
      <Logo>Settings</Logo>
      <Img src={operating_system} padding={30} maxHeight={300} />
      <h1>{theme}</h1>
      <button onClick={switcher}>Switch theme</button>
    </div>
  );
};

export default connect(mapState, mapDispatch)(Settings);

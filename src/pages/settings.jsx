import React from 'react';
import { connect, useSelector } from 'react-redux';
// import styled from 'styled-components';

import { Img, Logo, Card, CardTitle, CardContent } from '../components';
import { Grid } from '../containers';

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
      <Grid>
        <Card>
          <CardTitle>Theme: {theme}</CardTitle>
          <CardContent>
            <button onClick={switcher}>Switch theme</button>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Version</CardTitle>
          <CardContent>v0.3 Beta</CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default connect(mapState, mapDispatch)(Settings);

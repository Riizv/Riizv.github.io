import React from 'react';
import { connect, useSelector } from 'react-redux';
// import styled from 'styled-components';

import { Img, Logo, Card, CardTitle, CardContent, Select } from '../components';
import { Grid } from '../containers';

import operating_system from '../assets/operating_system.svg';

import { selectTheme, switchTheme } from '../store/themeSlice';

const mapDispatch = { switchTheme };

const Settings = ({ switchTheme }) => {
  const theme = useSelector(selectTheme);

  const switcher = ({ target }) => {
    switchTheme(target.value);
  };

  return (
    <div>
      <Logo>Settings</Logo>
      <Img src={operating_system} padding={30} maxHeight={300} />
      <Grid>
        <Card>
          <CardTitle>Theme</CardTitle>
          <CardContent>
            {/* https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_optgroup */}
            <Select name="theme" onChange={switcher}>
              {['light', 'dark', 'pink', 'yellow'].map(el => (
                <option key={el} value={el} selected={el === theme}>
                  {el}
                </option>
              ))}
            </Select>
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

export default connect(null, mapDispatch)(Settings);

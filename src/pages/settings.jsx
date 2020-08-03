import React from 'react';
import { connect, useSelector } from 'react-redux';
// import styled from 'styled-components';

import { MdUpdate, MdBrightnessMedium } from 'react-icons/md';

import {
  Img,
  Logo,
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  CardContent,
  Select,
} from '../components';
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
          <CardHeader>
            <CardIcon>
              <MdBrightnessMedium />
            </CardIcon>
            <CardTitle>Theme</CardTitle>
          </CardHeader>
          <CardContent>
            {/* https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_optgroup */}
            <Select name="theme" onChange={switcher} value={theme}>
              {['light', 'dark', 'pink', 'yellow'].map(el => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <MdUpdate />
            </CardIcon>
            <CardTitle>Version</CardTitle>
          </CardHeader>
          <CardContent>v0.3 Beta</CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default connect(null, mapDispatch)(Settings);

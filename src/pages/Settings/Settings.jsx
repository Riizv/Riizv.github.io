import React from 'react';
import { connect, useSelector } from 'react-redux';
// import styled from 'styled-components';

import { MdUpdate, MdBrightnessMedium } from 'react-icons/md';
import { FaFont } from 'react-icons/fa';
import { AiOutlineRadiusSetting } from 'react-icons/ai';

import {
  Img,
  Logo,
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  CardContent,
  Select,
  P,
} from '../../components';
import { Grid } from '../../containers';
import BorderRadiusCard from './local-components/BorderRadiusCard';

import operating_system from '../../assets/operating_system.svg';

import { selectTheme, switchTheme } from '../../store/themeSlice';
import { selectFont, switchFont } from '../../store/fontSlice';

const mapDispatch = { switchTheme, switchFont };

const Settings = ({ switchTheme, switchFont }) => {
  const theme = useSelector(selectTheme);
  const font = useSelector(selectFont);

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
            <Select
              name="theme"
              onChange={({ target }) => switchTheme(target.value)}
              value={theme}
            >
              {['light', 'dark', 'yellow'].map(el => (
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
              <FaFont />
            </CardIcon>
            <CardTitle>Font</CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              name="font"
              onChange={({ target }) => switchFont(target.value)}
              value={font}
            >
              {[
                'Montserrat',
                'Ubuntu',
                'Roboto',
                'Jetbrains Mono',
                'Arial',
              ].map(el => (
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
              <AiOutlineRadiusSetting />
            </CardIcon>
            <CardTitle>Border radius</CardTitle>
          </CardHeader>
          <CardContent>
            <BorderRadiusCard />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <MdUpdate />
            </CardIcon>
            <CardTitle>Version</CardTitle>
          </CardHeader>
          <CardContent>
            <P>
              <b>v0.3 Beta</b>
            </P>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default connect(null, mapDispatch)(Settings);

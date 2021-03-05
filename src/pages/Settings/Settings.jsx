import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
// import styled from 'styled-components';

import { MdUpdate, MdBrightnessMedium, MdTranslate } from 'react-icons/md';
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
import { selectLang, switchLang } from '../../store/langSlice';

const mapDispatch = { switchTheme, switchFont, switchLang };

const Settings = ({ switchTheme, switchFont, switchLang }) => {
  const theme = useSelector(selectTheme);
  const font = useSelector(selectFont);
  const lang = useSelector(selectLang);

  const { t, i18n } = useTranslation();

  const changeLanguage = ({ target: { value } }) => {
    switchLang(value);
    i18n.changeLanguage(value);
  };

  const displayOptions = el => (
    <option key={el} value={el}>
      {el}
    </option>
  );

  return (
    <div>
      <Logo>{t('Settings')}</Logo>
      <Img src={operating_system} padding={30} maxHeight={300} />
      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
              <MdBrightnessMedium />
            </CardIcon>
            <CardTitle>{t('Theme')}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_optgroup */}
            <Select
              name="theme"
              onChange={({ target }) => switchTheme(target.value)}
              value={theme}
            >
              {['light', 'dark', 'pink', 'yellow'].map(displayOptions)}
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <FaFont />
            </CardIcon>
            <CardTitle>{t('Font')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              name="font"
              onChange={({ target }) => switchFont(target.value)}
              value={font}
            >
              {[
                'Ubuntu',
                'Montserrat',
                'Roboto',
                'Jetbrains Mono',
                'Arial',
              ].map(displayOptions)}
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <AiOutlineRadiusSetting />
            </CardIcon>
            <CardTitle>{t('Border radius')}</CardTitle>
          </CardHeader>
          <CardContent>
            <BorderRadiusCard />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <MdTranslate />
            </CardIcon>
            <CardTitle>{t('Language')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Select name="lang" onChange={changeLanguage} value={lang}>
              {['en', 'pl', 'de'].map(displayOptions)}
            </Select>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardIcon>
              <MdUpdate />
            </CardIcon>
            <CardTitle>{t('Version')}</CardTitle>
          </CardHeader>
          <CardContent onClick={() => alert('Easter egg! Dużo klikasz')}>
            <P>
              <b>
                v0.6.1 <i>Beta</i>
              </b>
            </P>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default connect(null, mapDispatch)(Settings);

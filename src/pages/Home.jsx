import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useSelector, useDispatch } from 'react-redux';

import {
  Img,
  Logo,
  P,
  Card,
  CardHeader,
  CardIcon,
  CardContent,
  CardTitle,
} from '../components';
import home_cinema from '../assets/home_cinema.svg';
import { Grid } from '../containers';
import { FaCloudMoonRain } from 'react-icons/fa';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Logo> {t('ExLog App')}</Logo>
      <Img src={home_cinema} padding={30} maxHeight={300} />

      <Grid>
        <Card>
          <CardHeader>
            <CardIcon>
              <FaCloudMoonRain />
            </CardIcon>
            <CardTitle>{t('About App')}</CardTitle>
          </CardHeader>
          <CardContent>Jesto to strona rozwojowa, do testów różnego rodzaju urządzeń oraz nowinek technologicznych.</CardContent>
        </Card>
        <Card></Card>
      </Grid>
      
    </div>
  );
};

export default Home;

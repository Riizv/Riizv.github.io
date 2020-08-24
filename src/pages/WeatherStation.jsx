import React from 'react';
import { useTranslation } from 'react-i18next';
import { useObject } from 'react-firebase-hooks/database';
import { MdError } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

import { IoIosWater } from 'react-icons/io';
import { RiTempColdLine } from 'react-icons/ri';

import base from '../database/firebase';

import {
  Img,
  Logo,
  Card,
  CardHeader,
  CardIcon,
  CardTitle,
  CardContent,
  Progress,
} from '../components';
import { Grid } from '../containers';
import weather_notification from '../assets/weather_notification.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AnimationAiOutlineLoading3Quarters = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 2s linear infinite;
  font-size: 4rem;
  color: ${({ theme }) => theme.main};
  position: absolute;
`;

const WeatherStation = () => {
  const [value, loading, error] = useObject(base.ref('weather-station'));

  const { t } = useTranslation();

  return (
    <div>
      <Logo>{t('Weather Station')}</Logo>
      <Img src={weather_notification} padding={30} maxHeight={300} />
      <p>
        {error && (
          <strong>
            <MdError />
            Error: {error}
          </strong>
        )}
        {loading && <AnimationAiOutlineLoading3Quarters />}
      </p>
      {value && (
        <Grid>
          <Card>
            <CardHeader>
              <CardIcon>
                <RiTempColdLine />
              </CardIcon>
              <CardTitle>{t('Temperature')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={value.val().temperature} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardIcon>
                <IoIosWater />
              </CardIcon>
              <CardTitle>{t('Humidity')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={value.val().humidity} />
            </CardContent>
          </Card>
        </Grid>
      )}
    </div>
  );
};

export default WeatherStation;

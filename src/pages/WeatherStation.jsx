import React from 'react';
import { useObject } from 'react-firebase-hooks/database';
import { MdError } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

import base from '../database/firebase';

import { Img, Logo } from '../components';
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

  return (
    <div>
      <Logo>Weather Station</Logo>
      <Img src={weather_notification} padding={30} maxHeight={300} />
      <p>
        {error && (
          <strong>
            <MdError />
            Error: {error}
          </strong>
        )}
        {loading && <AnimationAiOutlineLoading3Quarters />}
        {value && (
        <span>
          Humidity: {value.val().humidity}
          Temperature: {value.val().temperature}
          </span>
          )}
      </p>
    </div>
  );
};

export default WeatherStation;

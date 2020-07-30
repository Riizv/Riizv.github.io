import React from 'react';
// import styled from 'styled-components';

import { Img, Logo } from '../components';

import operating_system from '../assets/operating_system.svg';

const Settings = () => {
  return (
    <div>
      <Logo>Settings</Logo>
      <Img src={operating_system} padding={30} maxHeight={300} />
    </div>
  );
};

export default Settings;

import React, { useState } from 'react';
import styled from 'styled-components';

import {
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusBottomright,
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright,
} from 'react-icons/ai';

import { CardIcon, Input as _Input } from '../../../components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Fragment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled(_Input)`
  width: 3rem;
  margin-top: 1rem;
`;

const BorderRadiusCard = () => {
  return (
    <Wrapper>
      <Fragment>
        <CardIcon>
          <AiOutlineRadiusUpleft />
        </CardIcon>
        <Input type="number" />
      </Fragment>
      <Fragment>
        <CardIcon>
          <AiOutlineRadiusUpright />
        </CardIcon>
        <Input type="number" />
      </Fragment>
      <Fragment>
        <CardIcon>
          <AiOutlineRadiusBottomright />
        </CardIcon>
        <Input type="number" />
      </Fragment>
      <Fragment>
        <CardIcon>
          <AiOutlineRadiusBottomleft />
        </CardIcon>
        <Input type="number" />
      </Fragment>
    </Wrapper>
  );
};

export default BorderRadiusCard;

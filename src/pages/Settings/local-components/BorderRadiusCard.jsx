import React from 'react';
import styled from 'styled-components';

import {
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusBottomright,
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright,
} from 'react-icons/ai';

import { CardIcon, Select as _Select } from '../../../components';

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

const Select = styled(_Select)`
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
        <Select name="theme">
          {[0, 0.5, 1, 1.5].map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </Select>
      </Fragment>
      <Fragment>
        <CardIcon>
          <AiOutlineRadiusUpright />
        </CardIcon>
        <Select name="theme">
          {[0, 0.5, 1, 1.5].map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </Select>
      </Fragment>
      <Fragment>
        <CardIcon>
          <AiOutlineRadiusBottomright />
        </CardIcon>
        <Select name="theme">
          {[0, 0.5, 1, 1.5].map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </Select>
      </Fragment>
      <Fragment>
        <CardIcon>
          <AiOutlineRadiusBottomleft />
        </CardIcon>
        <Select name="theme">
          {[0, 0.5, 1, 1.5].map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </Select>
      </Fragment>
    </Wrapper>
  );
};

export default BorderRadiusCard;

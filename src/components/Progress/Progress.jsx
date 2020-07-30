import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 1rem;
  overflow: hidden;
  background: #43a04730;
`;
const Status = styled.div`
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background: #43a047;
  font-weight: bold;
`;

const AnimatedStatus = animated(Status);

const Progress = ({ value }) => {
  const [{ width }, set] = useSpring(() => ({
    width: 0,
    config: { mass: 1, tension: 400, friction: 20 },
  }));

  useEffect(() => {
    set({ width: value });
  });

  return (
    <Wrapper>
      <AnimatedStatus style={{ width: width.interpolate(w => `${w}%`) }}>
        {value}
      </AnimatedStatus>
    </Wrapper>
  );
};

export default Progress;

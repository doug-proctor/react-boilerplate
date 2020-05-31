import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

interface Props extends SvgProps {
  fullScreen?: boolean;
}

export const LoadingIndicator = (props: Props) => {
  if (props.fullScreen) {
    return (
      <Wrapper>
        <Svg viewBox="-24 -24 48 48" small={props.small}>
          <Circle cx="0" cy="0" r="20" fill="none" strokeWidth="4"></Circle>
        </Svg>
      </Wrapper>
    );
  }
  return (
    <Svg viewBox="-24 -24 48 48" small={props.small}>
      <Circle cx="0" cy="0" r="20" fill="none" strokeWidth="4"></Circle>
    </Svg>
  );
};

const speed = 1.5;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -24;
  }
  100% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: -124;
  }
`;

interface SvgProps {
  small?: boolean;
}

const Svg = styled.svg<SvgProps>`
  animation: ${rotate} ${speed * 1.75}s linear infinite;
  height: ${props => (props.small ? '1.25rem' : '3rem')};
  width: ${props => (props.small ? '1.25rem' : '3rem')};
  transform-origin: center;
`;

const Circle = styled.circle`
  animation: ${dash} ${speed}s ease-in-out infinite;
  stroke: ${props => props.theme.colors.blue};
  stroke-linecap: round;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  target?: string;
  title?: string;
  href?: string;
  rel?: string;
  to?: string;
}

export function A(props: Props) {
  if (props.to) {
    return <StyledLink to={props.to}>{props.children}</StyledLink>;
  }
  return <StyledA {...props}>{props.children}</StyledA>;
}

const styles = css<Props>`
  text-decoration: underline;
  &,
  &:hover,
  &:active,
  &:visited {
    color: ${props => props.theme.colors.blue};
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    opacity: 0.4;
  }
`;

const StyledA = styled.a`
  ${styles}
`;

const StyledLink = styled(({ /* filter anything out here */ ...props }) => (
  <Link {...props} />
))`
  ${styles}
`;

/**
 *
 * Button
 *
 */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { buttonStyles, ButtonStyleProps } from 'styles/button-styles';

interface Props extends ButtonStyleProps {
  children: React.ReactNode;
  submit?: boolean;
  onClick?: any;
  to?: string;
  href?: any;
}

export function Button(props: Props) {
  if (props.to) {
    return <StyledLink {...props}>{props.children}</StyledLink>;
  }
  if (props.href) {
    return <StyledA {...props}>{props.children}</StyledA>;
  }
  return (
    <StyledButton type={props.submit ? 'submit' : undefined} {...props}>
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${buttonStyles}
`;

const StyledA = styled.a`
  ${buttonStyles}
`;

const StyledLink = styled(
  // We use destructuring to pull the style attributes out of props, otherwise
  // they'll be added to the root <a> tag, which will cause warnings, eg
  // Warning: Received `true` for a non-boolean attribute `sm`.
  ({ sm, primary, secondary, ...props }) => <Link {...props} />,
)`
  ${buttonStyles}
`;

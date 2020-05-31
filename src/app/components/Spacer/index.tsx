/**
 *
 * Spacer
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  children?: any;
  mt?: number;
  mb?: number;
  pt?: number;
  pb?: number;
}

export function Spacer(props: Props) {
  return <Div {...props}>{props.children}</Div>;
}

interface DivProps {
  mt?: number;
  pt?: number;
  mb?: number;
  pb?: number;
}

const Div = styled.div<DivProps>`
  margin-top: ${p => (p.mt ? `${p.mt}px` : '')};
  padding-top: ${p => (p.pt ? `${p.pt}px` : '')};
  margin-bottom: ${p => (p.mb ? `${p.mb}px` : '')};
  padding-bottom: ${p => (p.pb ? `${p.pb}px` : '')};
`;

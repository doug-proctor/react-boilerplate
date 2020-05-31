/**
 *
 * Container
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  children: React.ReactNode;
}

export function Container(props: Props) {
  return <Div>{props.children}</Div>;
}

const Div = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

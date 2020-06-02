/**
 *
 * FormGroup
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  children: React.ReactNode;
}

export function FormGroup(props: Props) {
  return <Div>{props.children}</Div>;
}

const Div = styled.div`
  margin-bottom: 1rem;
`;

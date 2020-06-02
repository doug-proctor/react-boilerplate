/**
 *
 * FormLabel
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  children: string;
  htmlFor: string;
}

export function FormLabel(props: Props) {
  return <Label htmlFor={props.htmlFor}>{props.children}</Label>;
}

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

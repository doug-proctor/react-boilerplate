/**
 *
 * Input
 *
 */
import styled from 'styled-components/macro';

export const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.greyLight};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius};
  line-height: 50px;
  font-size: 18px;
  padding: 0 7px;
  height: 50px;
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.greyLight};
  }
`;

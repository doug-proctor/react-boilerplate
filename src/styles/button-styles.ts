import { css } from 'styled-components/macro';

export interface ButtonStyleProps {
  mobileBlock?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  primary?: boolean;
  block?: boolean;
  sm?: boolean;
}

export const buttonStyles = css<ButtonStyleProps>`
  text-transform: uppercase;
  background: transparent;
  vertical-align: middle;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  border-radius: 2px;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
  
  // Colours
  // Primary
  ${props => (props.primary ? `background: ${props.theme.colors.blue};` : '')}
  ${props => (props.primary ? `color: ${props.theme.colors.white};` : '')}
  
  // Secondary
  ${props => (props.secondary ? `color: ${props.theme.colors.blue};` : '')}
  ${props =>
    props.secondary ? `border: 2px solid ${props.theme.colors.blue};` : ''}
   

  // Size
  height: 40px;
  font-size: 16px;
  padding: 0 1rem;
  line-height: 42px;
  
  ${props =>
    props.sm
      ? 'padding: 0 0.5rem; font-size: 14px; height: 30px; line-height: 30px;'
      : ''}

  // Now reduce the line heights for normal-sized bordered buttons
  ${props => (props.secondary ? 'line-height: 40px;' : '')}
  
  // Same for line heights for small bordered buttons
  ${props => (props.secondary && props.sm ? 'line-height: 28px;' : '')}
 
  // Disabled
  ${props => (props.disabled ? 'opacity: 0.5;' : '')}

  // Block
  width: auto;
  ${props => (props.block ? 'width: 100%;' : '')}
  ${props =>
    props.mobileBlock ? '@media (max-width: 768px) {width: 100%;}' : ''}
`;

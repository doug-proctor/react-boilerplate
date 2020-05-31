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
  background: transparent;
  vertical-align: middle;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  border-radius: 2px;
  user-select: none;
  font-weight: 700;
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
   

  // Sizes
  // Medium button (default)
  line-height: 50px;
  padding: 0 25px;
  font-size: 14px;
  height: 50px;

  ${props =>
    props.sm
      ? 'padding: 0 20px; font-size: 12px; height: 40px; line-height: 40px;'
      : ''}

  // Now reduce the line heights for normal-sized bordered buttons
  ${props => (props.secondary ? 'line-height: 48px;' : '')}
  
  // Same for line heights for small bordered buttons
  ${props => (props.secondary && props.sm ? 'line-height: 38px;' : '')}
 
  // Disabled
  ${props => (props.disabled ? 'opacity: 0.5;' : '')}

  // Block
  width: auto;
  ${props => (props.block ? 'width: 100%;' : '')}
  ${props =>
    props.mobileBlock ? '@media (max-width: 768px) {width: 100%;}' : ''}
`;

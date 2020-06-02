import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 18px;
    line-height: 1.6;
    color: ${props => props.theme.colors.black};
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  body.fontLoaded {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

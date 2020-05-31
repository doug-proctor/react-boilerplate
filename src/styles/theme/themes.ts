export const lightTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
  },
  fontSizes: {
    xs: '10px',
    sm: '14px',
    md: '18px',
    lg: '24px',
  },
  radius: '2px',
};

// const darkTheme: Theme = {
//   primary: 'rgba(220,120,95,1)',
//   text: 'rgba(241,233,231,1)',
//   textSecondary: 'rgba(241,233,231,0.6)',
//   background: 'rgba(0,0,0,1)',
//   backgroundVariant: 'rgba(28,26,26,1)',
//   border: 'rgba(241,233,231,0.15)',
//   borderLight: 'rgba(241,233,231,0.05)',
// };

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  // dark: darkTheme,
};

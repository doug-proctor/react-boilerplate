export const lightTheme = {
  colors: {
    black: '#333333',
    greyLight: '#AAAAAA',
    greyDark: '#999999',
    white: '#ffffff',
    red: '#ab3f3f',
    green: '#089b08',
    blue: '#3434a0',
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

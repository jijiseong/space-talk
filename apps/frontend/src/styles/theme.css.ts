import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  colors: {
    primary: 'red',
    white: '#fff',
    black: '#000',
  },
  space: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
});

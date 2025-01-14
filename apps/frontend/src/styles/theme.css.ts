import {
  grayDark,
  blueDark,
  redDark,
  greenDark,
  slateDark,
} from '@radix-ui/colors';
import { createTheme } from '@vanilla-extract/css';

export const [theme, vars] = createTheme({
  colors: {
    white: '#fff',
    black: '#000',
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...slateDark,
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },
});

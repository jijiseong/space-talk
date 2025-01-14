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
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...slateDark,
  },
});

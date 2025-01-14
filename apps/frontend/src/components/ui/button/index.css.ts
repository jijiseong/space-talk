import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

const base = style({
  backgroundColor: vars.colors.gray1,
  borderRadius: '0.6rem',
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  color: vars.colors.gray12,
  border: 'none',
});

const size = styleVariants({
  sm: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
  },
  md: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
  },
  lg: {
    padding: '0.8rem 1.5rem',
    fontSize: '1.25rem',
  },
});

const color = styleVariants({
  primary: {
    backgroundColor: vars.colors.gray5,
    color: vars.colors.gray12,
    ':hover': {
      backgroundColor: vars.colors.gray4,
    },
    ':active': {
      backgroundColor: vars.colors.gray3,
    },
  },
  secondary: {
    backgroundColor: vars.colors.gray1,
    color: vars.colors.gray12,
    ':hover': {
      backgroundColor: vars.colors.gray2,
    },
  },
});

const styles = {
  base,
  size,
  color,
};
export default styles;

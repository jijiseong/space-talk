import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const body = style({
  backgroundColor: 'black',
  color: vars.colors.gray1,
  height: '100vh',
  width: '100vw',
});

const styles = {
  body,
};

export default styles;

import { style } from '@vanilla-extract/css';

const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '4rem',
  zIndex: 1000,
  padding: '0 1rem',
});

const headerInner = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  margin: '0 auto',
});

const styles = {
  header,
  headerInner,
};

export default styles;

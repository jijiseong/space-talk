import { vars } from '@/styles/theme.css';
import typo from '@/styles/typography.css';
import { style } from '@vanilla-extract/css';

const dialogContent = style([
  typo.body1,
  {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: vars.colors.gray1,
    borderRadius: vars.radius.md,
    width: '90%',
    color: vars.colors.white,
    padding: vars.space.md,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: vars.space.lg,
  },
]);

const closeButton = style({
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  backgroundColor: 'transparent',
});

const title = style([
  typo.body1,
  {
    textAlign: 'center',
  },
]);

const description = style([typo.body2]);

const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.sm,
});

const footer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: vars.space.sm,
});

const styles = {
  dialogContent,
  closeButton,
  title,
  description,
  header,
  footer,
};

export default styles;

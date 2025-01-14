import { style } from '@vanilla-extract/css';

const typo = {
  h1: style({
    fontSize: '2.5rem',
    fontWeight: '700',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  }),

  h2: style({
    fontSize: '2rem',
    fontWeight: '700',
    lineHeight: '1.3',
    letterSpacing: '-0.01em',
  }),

  h3: style({
    fontSize: '1.75rem',
    fontWeight: '600',
    lineHeight: '1.4',
  }),

  h4: style({
    fontSize: '1.5rem',
    fontWeight: '600',
    lineHeight: '1.4',
  }),

  body1: style({
    fontSize: '1.4rem',
    fontWeight: '400',
    lineHeight: '1.5',
  }),

  body2: style({
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
  }),

  body3: style({
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5',
  }),

  body4: style({
    fontSize: '0.75rem',
    fontWeight: '400',
    lineHeight: '1.5',
  }),

  caption1: style({
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.4',
    color: 'rgba(0, 0, 0, 0.6)',
  }),

  caption2: style({
    fontSize: '0.75rem',
    fontWeight: '500',
    lineHeight: '1.4',
    color: 'rgba(0, 0, 0, 0.6)',
  }),

  caption3: style({
    fontSize: '0.625rem',
    fontWeight: '500',
    lineHeight: '1.4',
    color: 'rgba(0, 0, 0, 0.6)',
  }),

  caption4: style({
    fontSize: '0.5rem',
    fontWeight: '500',
    lineHeight: '1.4',
    color: 'rgba(0, 0, 0, 0.6)',
  }),
};

export default typo;

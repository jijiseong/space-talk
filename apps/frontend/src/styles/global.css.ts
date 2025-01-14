import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';
import { mq } from '@/lib/midea-query';

// Reset CSS
globalStyle(
  `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video`,
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
    boxSizing: 'border-box',
  },
);

// HTML5 display-role reset for older browsers
globalStyle(
  `article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section`,
  {
    display: 'block',
  },
);

globalStyle('body', {
  lineHeight: 1,
});

globalStyle('ol, ul', {
  listStyle: 'none',
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: "''",
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('html', {
  fontSize: '14px',
  color: vars.colors.white,

  '@media': {
    [mq.min('md')]: {
      fontSize: '15px',
    },
    [mq.min('lg')]: {
      fontSize: '16px',
    },
  },
});

globalStyle('button', {
  border: 'none',
});

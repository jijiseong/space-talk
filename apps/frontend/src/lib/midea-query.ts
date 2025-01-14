export const BREAKPOINT = {
  sm: 768,
  md: 1280,
  lg: 1536,
} as const;

type Breakpoint = keyof typeof BREAKPOINT;

export const mq = {
  min: (breakpoint: Breakpoint) => {
    return `screen and (min-width: ${BREAKPOINT[breakpoint]}px)` as const;
  },
  max: (breakpoint: Breakpoint) => {
    return `screen and (max-width: ${BREAKPOINT[breakpoint]}px)` as const;
  },
  between: (start: Breakpoint, end: Breakpoint) => {
    return `screen and (min-width: ${BREAKPOINT[start]}px) and (max-width: ${BREAKPOINT[end]}px)` as const;
  },
};

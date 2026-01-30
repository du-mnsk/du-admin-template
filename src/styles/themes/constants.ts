export const BORDER_RADIUS = '7px'

export const BASE_COLORS = {
  white: '#ffffff',
  black: '#000000',
  green: '#008000',
  orange: '#ffb155',
  gray: '#808080',
  lightgrey: '#c5d3e0',
  violet: '#ee82ee',
  lightgreen: '#89dca0',
  pink: '#ffc0cb',
  blue: '#0000ff',
  skyblue: '#35a0dc',
  red: '#ff5252',
}

export const LAYOUT = {
  mobile: {
    paddingVertical: '0.6rem',
    paddingHorizontal: '1rem',
    headerHeight: '4.25rem',
    headerPadding: '1rem',
  },
  desktop: {
    paddingVertical: '1.1rem',
    paddingHorizontal: '2.25rem',
    headerHeight: '4.625rem',
  },
}

export const FONT_SIZE = {
  xxs: '0.75rem',
  xs: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '1.625rem',
  xxxxl: '2rem',
}

export const FONT_WEIGHT = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
}


export const BREAKPOINT = {
  xs: 360,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1920,
} as const

export const MQ_EPSILON = 0.02

export const mediaQuery = {
  minWidth: (bp: number) => `min-width: ${bp}px`,
  maxWidth: (bp: number) => `max-width: ${bp - MQ_EPSILON}px`,
  between: (min: number, max: number) =>
    `min-width: ${min}px and max-width: ${max - MQ_EPSILON}px`,
} as const

export const media = {
  minXs: mediaQuery.minWidth(BREAKPOINT.xs),
  minSm: mediaQuery.minWidth(BREAKPOINT.sm),
  minMd: mediaQuery.minWidth(BREAKPOINT.md),
  minLg: mediaQuery.minWidth(BREAKPOINT.lg),
  minXl: mediaQuery.minWidth(BREAKPOINT.xl),
  minXxl: mediaQuery.minWidth(BREAKPOINT.xxl),
} as const
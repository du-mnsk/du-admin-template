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


export const BREAKPOINTS = {
  xs: 360,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1920,
} as const

/**
 * media query에서 max-width 경계가 겹칠 때(예: 768 포함 여부) 중복 매칭을 방지하기 위한 보정값
 * - (max-width: 767.98px) 처럼 약간 줄여서 구간이 명확히 분리되게 함
 */
export const Mq_Epsilon = 0.02

export const mq = {
  min: (bp: number) => `(min-width: ${bp}px)`,
  max: (bp: number) => `(max-width: ${bp - Mq_Epsilon}px)`,
  between: (min: number, max: number) =>
    `(min-width: ${min}px) and (max-width: ${max - Mq_Epsilon}px)`,
} as const

/**
 * "이상(min-width)" 기준 쿼리 모음 (필요할 때만 사용)
 * - 네이밍을 atLeast~로 정직하게 둠
 */
export const media = {
  atLeastXs: mq.min(BREAKPOINTS.xs),
  atLeastSm: mq.min(BREAKPOINTS.sm),
  atLeastMd: mq.min(BREAKPOINTS.md),
  atLeastLg: mq.min(BREAKPOINTS.lg),
  atLeastXl: mq.min(BREAKPOINTS.xl),
  atLeastXxl: mq.min(BREAKPOINTS.xxl),
} as const
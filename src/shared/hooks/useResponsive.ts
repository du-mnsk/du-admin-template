import { type MediaQueryAllQueryable, type MediaQueryMatchers, useMediaQuery } from "react-responsive"

import { BREAKPOINTS, mediaQuery } from "@/styles/themes/constants"

interface ResponsiveReturnValues {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isBigScreen: boolean
  mobileOnly: boolean
  tabletOnly: boolean
  desktopOnly: boolean
  useMediaQuery: (
    settings: Partial<MediaQueryAllQueryable & { query?: string | undefined }>,
    device?: MediaQueryMatchers,
    callback?: (matches: boolean) => void,
  ) => boolean
}

export const useResponsive = (): ResponsiveReturnValues => {
  const isMobile = useMediaQuery({ 
    query: mediaQuery.minWidth(BREAKPOINTS.xs) 
  })
  const isTablet = useMediaQuery({ 
    query: mediaQuery.minWidth(BREAKPOINTS.md) 
  })
  const isDesktop = useMediaQuery({ 
    query: mediaQuery.minWidth(BREAKPOINTS.xl) 
  })
  const isBigScreen = useMediaQuery({ 
    query: mediaQuery.minWidth(BREAKPOINTS.xxl) 
  })

  const mobileOnly = useMediaQuery({
    query: mediaQuery.maxWidth(BREAKPOINTS.md),
  })

  const tabletOnly = useMediaQuery({
    query: mediaQuery.between(BREAKPOINTS.md, BREAKPOINTS.xl),
  })

  const desktopOnly = useMediaQuery({
    query: mediaQuery.between(BREAKPOINTS.xl, BREAKPOINTS.xxl),
  })

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigScreen,
    mobileOnly,
    tabletOnly,
    desktopOnly,
    useMediaQuery,
  }
}
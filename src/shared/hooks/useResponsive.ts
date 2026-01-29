// @app/hooks/useResponsive.ts
import { useMediaQuery } from "react-responsive"

import { BREAKPOINTS, mq } from "@/styles/themes/constants"

export interface ResponsiveReturnValues {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isBigScreen: boolean
  mobileOnly: boolean
  tabletOnly: boolean
  desktopOnly: boolean
}

export const useResponsive = (): ResponsiveReturnValues => {
  const mobileOnly = useMediaQuery({
    query: mq.max(BREAKPOINTS.md),
  })

  const tabletOnly = useMediaQuery({
    query: mq.between(BREAKPOINTS.md, BREAKPOINTS.xl),
  })

  const desktopOnly = useMediaQuery({
    query: mq.between(BREAKPOINTS.xl, BREAKPOINTS.xxl),
  })

  const isBigScreen = useMediaQuery({
    query: mq.min(BREAKPOINTS.xxl),
  })

  const isMobile = mobileOnly
  const isTablet = tabletOnly
  const isDesktop = desktopOnly

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigScreen,
    mobileOnly,
    tabletOnly,
    desktopOnly,
  }
}

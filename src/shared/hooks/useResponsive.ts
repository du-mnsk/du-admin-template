// @app/hooks/useResponsive.ts
import { useMediaQuery } from "react-responsive"

import { BREAKPOINT, mediaQuery } from "@/styles/themes/constants"

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
    query: mediaQuery.maxWidth(BREAKPOINT.sm),  // 0~639.98px
  })

  const tabletOnly = useMediaQuery({
    query: mediaQuery.between(BREAKPOINT.sm, BREAKPOINT.xl),  // 640~1279.98px
  })

  const desktopOnly = useMediaQuery({
    query: mediaQuery.between(BREAKPOINT.xl, BREAKPOINT.xxl),  // 1280~1919.98px
  })

  const isBigScreen = useMediaQuery({
    query: mediaQuery.minWidth(BREAKPOINT.xxl),  // 1920px~
  })

  const isMobile = useMediaQuery({
    query: mediaQuery.maxWidth(BREAKPOINT.sm),  // 0~639.98px
  })
  
  const isTablet = useMediaQuery({
    query: mediaQuery.maxWidth(BREAKPOINT.xl),  // 0~1279.98px
  })
  
  const isDesktop = useMediaQuery({
    query: mediaQuery.maxWidth(BREAKPOINT.xxl),  // 0~1919.98px
  })

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

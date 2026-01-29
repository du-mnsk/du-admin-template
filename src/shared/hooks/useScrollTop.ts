import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
/**
 * 라우트(pathname) 변경 시 window 스크롤을 최상단으로 이동시킨다.
 *
 * ⚠️ 주의
 * - window scroll 기반 레이아웃에서만 사용
 * - 모달/부분 전환 라우팅에는 사용하지 말 것
 */

export const useScrollToTop = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

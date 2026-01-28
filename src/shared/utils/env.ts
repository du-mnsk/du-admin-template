/**
 * 현재 실행 환경이 개발(로컬 포함) 모드 여부 확인
 */
export const isDevelopment = () => {
  return location.hostname.includes('dev') || location.hostname.includes('localhost')
}

/**
 * 현재 실행 환경이 상용 모드 여부 확인
 */
export const isProduction = (): boolean => import.meta.env.PROD // (Vite)
// export const isProduction = (): boolean => process.env.NODE_ENV === 'production'  (CRA)

/**
 * 현재 실행 환경이 로컬 환경 여부 확인
 */
export const isLocalhost = (): boolean => location.hostname.includes('localhost')

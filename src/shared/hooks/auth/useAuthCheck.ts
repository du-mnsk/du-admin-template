import { useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import useLocalStorage from '../useLocalStorage'
/**
 * useAuthCheck
 * - 공통 어드민 Auth/권한 가드 훅
 *
 * 정책(기본):
 * - 세션 만료/미로그인: localStorage.clear() 후 loginPath로 이동
 * - 권한 없음: forbiddenPath로 이동
 *
 * 사용:
 * - 프로젝트에서 authMap을 만들어 주입해서 사용한다.
 * - 예시는 authMap.example.ts / 노션 https://www.notion.so/datau/useAuthCheck-2e3fdd70e86c8184a0e7fcde188b3ee0 참고
 */

export type ExampleAuthInfo = {
  expireTime?: number
  authMember?: boolean
  authMessage?: boolean
}

export const ADMIN_AUTH_MAP_EXAMPLE = [
  { key: 'member', field: 'authMember' },
  { key: 'message', field: 'authMessage' },
] as const
/**
 * 사용 예시)
 *
 * // 1) 프로젝트에서 AuthInfo 타입 정의
 * type AuthInfo = {
 *   expireTime?: number
 *   authMember?: boolean
 *   authMessage?: boolean
 * }
 *
 * // 2) 프로젝트에서 authMap 정의 (공통(shared) 말고 프로젝트 영역에 두는 걸 권장)
 * const ADMIN_AUTH_MAP = [
 *   { key: 'member', field: 'authMember' },
 *   { key: 'message', field: 'authMessage' },
 * ] as const
 *
 * // 3) Layout에서 호출 (한 번만)
 * useAuthCheck<AuthInfo>({
 *   authMap: ADMIN_AUTH_MAP,
 *   loginPath: '/login', // 라우터에 맞게
 * })
 */

type BooleanKey<T> = {
  [K in keyof T]-?: T[K] extends boolean | undefined ? K : never
}[keyof T]

type AuthGuardConfig<TAuth extends { expireTime?: number }> = {
  storageKey?: string

  authMap: ReadonlyArray<{
    key: string
    field: BooleanKey<TAuth>
  }>

  loginPath?: string
  forbiddenPath?: string
}

export const useAuthCheck = <TAuth extends { expireTime?: number }>(
  config: AuthGuardConfig<TAuth>,
) => {
  const {
    storageKey = 'auth',
    authMap,
    loginPath = '/login',
    forbiddenPath = '/',
  } = config

  const { sessionValue: auth } = useLocalStorage<TAuth>(storageKey)

  const location = useLocation()
  const navigate = useNavigate()

  const mainMenu = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean)
    if (parts.length === 0) return ''
    return parts[0] !== 'popup' ? parts[0] : parts[1] ?? ''
  }, [location.pathname])

  const authCheck = useMemo(() => {
    if (!auth) return false
    return authMap.some(({ key, field }) => mainMenu === key && !auth[field])
  }, [auth, authMap, mainMenu])

  useEffect(() => {
    const isExpired = !auth?.expireTime || Date.now() > (auth.expireTime ?? 0)

    if (auth === null || isExpired) {
      localStorage.clear()
      alert('로그인 해주세요.')
      navigate(loginPath)
      return
    }

    if (authCheck) {
      alert('접근 권한이 없습니다.')
      navigate(forbiddenPath)
    }
  }, [auth, authCheck, navigate, loginPath, forbiddenPath])

  return { auth, authCheck, mainMenu }
}

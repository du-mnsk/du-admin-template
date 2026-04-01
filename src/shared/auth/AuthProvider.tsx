import React, { createContext, useContext, useMemo } from 'react'

import type { AuthInfo } from '@/shared/components/layouts/MainLayout/tempTypes'
import { DomainType } from '@/shared/components/layouts/MainLayout/tempTypes'
import useLocalStorage from '@/shared/hooks/useLocalStorage'

const AuthContext = createContext<AuthInfo | null>(null)

const mockAuth: AuthInfo = {
  Type: DomainType.ADMIN,      // UI에서 관리자 라우트 보이게
  UserName: '템플릿유저',
  UserID: 'template',
} as any

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const isUiMode = import.meta.env.VITE_UI_MODE === 'true'
    const { sessionValue: realAuth } = useLocalStorage<AuthInfo>('auth')    // 실제 인증 정보
  
    const auth = useMemo(
      () => realAuth ?? (isUiMode ? mockAuth : null),
      [realAuth, isUiMode],
    )
  
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
  }
  

export function useAuth() {
  return useContext(AuthContext)
}

/**
 * 예시 파일
 * - 프로젝트에 복사해서 사용하세요 (shared에 그대로 쓰지 말 것)
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
  
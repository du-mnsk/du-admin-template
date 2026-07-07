import axios, { AxiosError } from 'axios'

import { CMD_TYPE } from '../types/constants'
import { notificationController } from '../utils/notificationController'
import type { ApiResponse } from './api.types'

export interface ResponseData<T = any> {
  Header: {
    ErrCode: number
    ErrMsg: string
  }
  Body: T
}

const httpApi = axios.create({
  baseURL: import.meta.env.VITE_DMRS_SERVER_URL,
  withCredentials: true,
})

/**
 * ========================================================================
 * 기존 세션 기반 인증 방식
 * ------------------------------------------------------------------------
 * - Response Interceptor에서 API 응답의 ErrCode(9999)를 통해
 *   세션 만료 여부를 확인
 * - 세션 만료 시 localStorage(auth) 제거 후 로그인 페이지로 이동
 * - 모든 요청은 서버 세션(Cookie)에 의존
 * ========================================================================
 */

httpApi.interceptors.response.use(
  (response) => {
    const apiRespponse = response.data as ApiResponse<any>
    // if (!!apiRespponse.Header && apiRespponse.Header.ErrCode === 9999) {
    //   localStorage.removeItem('auth')

    //   if (apiRespponse.Header.CmdType.toString() !== CMD_TYPE.LOGOUT.toString()) {
    //     // 세션 만료
    //     notificationController.error({
    //       key: `${apiRespponse.Header.ErrCode}`,
    //       message: `로그인 세션이 만료되었습니다.`,
    //       duration: 3,
    //     })
    //     setTimeout(() => {
    //       location.href = '/login'
    //     }, 1000)
    //   }
    // }

    return response
  },
  (error: AxiosError) => {
    const errResponse = error.response
    if (isInternalServerError(errResponse)) {
      notificationController.error({
        key: 'InternalServerError',
        message: `InternalServerError`,
        duration: 3,
      })
    }
    return Promise.reject(error)
  },
)

const isInternalServerError = (errResponse: any) => {
  return !errResponse || errResponse.status === 500
}

export default httpApi

/**
 * ========================================================================
 * JWT 기반 인증 방식
 * ------------------------------------------------------------------------
 * 변경 사항
 * - Request Interceptor에서 AccessToken의 만료 시간을 확인
 * - 토큰 만료 5분 전 requestCheckSession()을 호출하여
 *   AccessToken을 갱신
 * - 갱신된 AccessToken을 Authorization Bearer 헤더에 설정
 * - 중복 갱신 요청 방지를 위해 checkSessionPromise 사용
 * - 세션 갱신 실패 또는 만료 시 공통 sessionExpiredHandler 실행
 *
 * Response Interceptor
 * - API 응답의 ErrCode(9999) 수신 시 세션 만료 처리
 * - Logout 요청(CMD_TYPE.LOGOUT)은 예외 처리
 * ========================================================================
 */

// let isSessionExpiredHandling = false

// const sessionExpiredHandler = () => {
//   if (isSessionExpiredHandling) return
//   isSessionExpiredHandling = true

//   const basename = getBasePath()
//   const pathname = window.location.pathname.replace(basename, '') || '/'

//   localStorage.removeItem('auth')
//   localStorage.removeItem('accessToken')

//   notificationController.error({
//     key: 'SESSION_EXPIRED',
//     message: '로그인 세션이 만료되었습니다.',
//     duration: 3,
//   })

//   setTimeout(() => {
//     window.location.href =
//       pathname !== '/' ? `${basename}/login?redirect=${pathname}` : `${basename}/login`
//   }, 1000)
// }

// const setAuthorizationHeader = (config: any, token: string) => {
//   config.headers.Authorization = `Bearer ${token}`
// }

// const getTokenExpiry = (token: string): number | null => {
//   try {
//     const payload = deserialize(token.split('.')[1]) as { exp: number }
//     return payload.exp * 1000
//   } catch {
//     return null
//   }
// }

// const httpApi = axios.create({
//   baseURL: import.meta.env.VITE_DMRS_SERVER_URL,
//   withCredentials: true,
// })

// let checkSessionPromise: Promise<any> | null = null

// httpApi.interceptors.request.use(async (config) => {
//   const cmdType = (config.data as { Header?: { CmdType?: number } })?.Header?.CmdType
//   const accessToken = localStorage.getItem('accessToken')

//   if (!accessToken) return config
//   // 세션 갱신(10000) 요청은 갱신 로직 스킵, 기존 토큰만 붙여서 반환 (재진입/무한호출 방지)
//   if (cmdType === CMD_TYPE.CHECK_SESSION) {
//     setAuthorizationHeader(config, accessToken)
//     return config
//   }

//   const expTime = getTokenExpiry(accessToken)
//   if (!expTime) return config

//   const remaining = expTime - Date.now()
//   const FIVE_MINUTES = 5 * 60 * 1000

//   if (remaining < FIVE_MINUTES) {
//     try {
//       if (!checkSessionPromise) {
//         checkSessionPromise = requestCheckSession().finally(() => {
//           checkSessionPromise = null
//         })
//       }
//       const response = await checkSessionPromise

//       if (response.Header.ErrCode === ERRORCODES_COMMON.SUCCESS && response.Body?.AccessToken) {
//         const newAccessToken = response.Body.AccessToken
//         localStorage.setItem('accessToken', newAccessToken)
//         setAuthorizationHeader(config, newAccessToken)
//         return config
//       }
//     } catch {
//       // 네트워크/기타 오류
//     }
//     sessionExpiredHandler()
//     return Promise.reject(new Error('SESSION_EXPIRED'))
//   }
//   setAuthorizationHeader(config, accessToken)
//   return config
// })

// httpApi.interceptors.response.use(
//   (response) => {
//     const apiRespponse = response.data as ApiResponse<any>
//     if (!!apiRespponse.Header && apiRespponse.Header.ErrCode === 9999) {
//       if (apiRespponse.Header.CmdType.toString() !== CMD_TYPE.LOGOUT.toString()) {
//         sessionExpiredHandler()
//       }
//     }

//     return response
//   },
//   (error: AxiosError) => {
//     const errResponse = error.response
//     if (isInternalServerError(errResponse)) {
//       notificationController.error({
//         key: 'InternalServerError',
//         message: `InternalServerError`,
//         duration: 3,
//       })
//     }
//     return Promise.reject(error)
//   },
// )

// export default httpApi


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
  baseURL: process.env.REACT_APP_DMRS_SERVER_URL,
  withCredentials: true,
})

httpApi.interceptors.response.use(
  (response) => {
    const apiRespponse = response.data as ApiResponse<any>
    if (!!apiRespponse.Header && apiRespponse.Header.ErrCode === 9999) {
      localStorage.removeItem('auth')

      if (apiRespponse.Header.CmdType.toString() !== CMD_TYPE.LOGOUT.toString()) {
        // 세션 만료
        notificationController.error({
          key: `${apiRespponse.Header.ErrCode}`,
          message: `로그인 세션이 만료되었습니다.`,
          duration: 3,
        })
        setTimeout(() => {
          location.href = '/login'
        }, 1000)
      }
    }

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

import type { AxiosResponse } from "axios"

import { CMD_TYPE, type QUERY_NAME } from "@/shared/types/constants"
import { notificationController } from "@/shared/utils/notificationController"

import type { DmrsResponse } from "./api.types"
import httpApi from "./httpClient"

export interface DmrsApiConfig {
  /** 에러 발생 시 자동으로 알림을 띄울지 여부 (기본값: true) */
  autoNotifyError?: boolean

  /** 에러 알림을 숨길지 여부 (기본값: false) */
  hiddenError?: boolean
}

export interface ListApiRequest {
  id?: number | string | undefined
  offset: number
  limit: number
  where: string
  order: string
}

/**
 * Select/Replace 요청 바디 타입
 */

export interface SelectRequestBodyData {
  Query: QUERY_NAME
  Data: (null | undefined | boolean | string | number)[]
  Replace?: { Key: string; Value: string }[]
}

/**
 * CUID (Create/Update/Insert/Delete) 요청 바디 타입
 */

export interface ExecuteRequestBodyData {
  Query: QUERY_NAME
  Data: (null | undefined | boolean | string | number)[]
}

/* ============================================================================
 * Core DMRS API Factory (권장 방식)
 * ============================================================================
 */

/**
 * DMRS API Factory 함수
 *
 * 서버의 DmrsByPass (1010) 전문 형식을 사용:
 * - 외부 CmdType: CMD_TYPE.DMRS_BYPASS (1010)
 * - 내부 CmdType: CMD_TYPE.SELECT (DBMW_00010) | CMD_TYPE.CUID (DBMW_00020)
 *
 * @param defaultConfig - 기본 에러 핸들링 설정
 */

export const createDmrsApi = (defaultConfig?: DmrsApiConfig) => {
  /**
   * DmrsByPass 전문 생성 (1010)
   * @internal
   */

  const createByPassRequest = (params: {
    Query: QUERY_NAME
    Data: SelectRequestBodyData['Data']
    Replace?: SelectRequestBodyData['Replace']
    dmrsCmdType: typeof CMD_TYPE.SELECT | typeof CMD_TYPE.CUID
  }) => ({
    Header: {
      CmdType: CMD_TYPE.DMRS_BYPASS, // 1010
    },
    Body: {
      DmrsHeader: {
        CmdType: params.dmrsCmdType, // 'DBMW_00010' | 'DBMW_00020'
        XMLName: 'ADM',
        Query: params.Query,
      },
      DmrsBody: {
        Data: params.Data,
        Replace: params.Replace,
      },
    },
  })

  /**
   * 에러 핸들러
   * @internal
   */

  const handleError = <T>(
    data: DmrsResponse<T>,
    config?: DmrsApiConfig,
  ): DmrsResponse<T> => {
    const mergedConfig = { ...defaultConfig, ...config }
    const shouldNotify =
      mergedConfig?.autoNotifyError !== false &&
      !mergedConfig?.hiddenError

    if (
      data.Header.ErrCode !== 0 &&
      data.Header.ErrCode !== 9999 &&
      shouldNotify
    ) {
      notificationController.error({
        key: `${data.Header.ErrCode}`,
        message: data.Header.ErrMsg,
      })
    }

    return data
  }

  return {
    /**
     * Select 요청 (데이터 조회)
     * CmdType: DBMW_00010
     *
     * @param bodyData - 쿼리 정보 (Replace 옵션 포함 가능)
     * @param config   - API 설정 (에러 핸들링)
     */
   
    select: async <T>(
      bodyData: SelectRequestBodyData,
      config?: DmrsApiConfig,
    ): Promise<DmrsResponse<T>> => {
      const request = createByPassRequest({
        ...bodyData,
        dmrsCmdType: CMD_TYPE.SELECT,
      })

      return httpApi
        .post('/', request)
        .then((res: AxiosResponse<DmrsResponse<T>>) => {
          return handleError(res.data, config)
        })
    },    
    /**
     * CUID 요청 (Create, Update, Insert, Delete)
     * CmdType: DBMW_00020
     *
     * @param bodyData - 쿼리 정보
     * @param config   - API 설정
     */
    cuid: async <T>(
      bodyData: ExecuteRequestBodyData,
      config?: DmrsApiConfig,
    ): Promise<DmrsResponse<T>> => {
      const request = createByPassRequest({
        ...bodyData,
        dmrsCmdType: CMD_TYPE.CUID,
      })

      return httpApi
        .post('/', request)
        .then((res: AxiosResponse<DmrsResponse<T>>) => {
          return handleError(res.data, config)
        })
    },
  }
}

/* ============================================================================
 * Default Instance
 * ============================================================================
 */

/**
 * 기본 DMRS API 인스턴스 (즉시 사용 가능)
 *
 * @example
 * import { dmrsApi } from '@/shared/api'
 *
 * // Select (단순 조회)
 * const users = await dmrsApi.select<User[]>({
 *   Query: QUERY_NAME.SELECT_USERS,
 *   Data: [],
 * })
 *
 * // Select with Replace (조건부 조회)
 * const admins = await dmrsApi.select<Admin[]>({
 *   Query: QUERY_NAME.SELECT_ADMIN_LIST,
 *   Data: [10, 0],
 *   Replace: [{ Key: '##replace##', Value: 'WHERE status = "active"' }],
 * })
 *
 * // CUID (Create/Update/Delete)
 * await dmrsApi.cuid({
 *   Query: QUERY_NAME.UPDATE_USER,
 *   Data: [userId, userName],
 * })
 */

export const dmrsApi = createDmrsApi({ autoNotifyError: true })

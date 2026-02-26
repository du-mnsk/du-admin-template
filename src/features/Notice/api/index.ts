import type { Notice } from '@/features/Notice/types'
import { dmrsApi, type ListApiRequest, type SelectRequestBodyData } from '@/shared/api'
import type { DmrsCuidBody, DmrsResponse } from '@/shared/api/api.types'
import { QUERY_NAME } from '@/shared/types/constants'

/**
 * 공지사항 목록 조회 API
 */
export const SelectNoticeListQueryOption = (params: ListApiRequest) => {
  const reqBody: SelectRequestBodyData = {
    Query: QUERY_NAME.SELECT_NOTICE_LIST,
    Data: [params.limit, params.offset],
    Replace: [{ Key: '##replace##', Value: ` ${params.where} ${params.order} ` }
    ],
  }

  return {
    queryKey: ['SelectNoticeList', params],
    queryFn: async (): Promise<Notice[]> => {
      const response = await dmrsApi.select<Notice[]>(reqBody)
      return response.Body ?? []
    },
  }
}

/**
 * 공지사항 개수 조회 API
 */
export const SelectNoticeCountQueryOption = (params: ListApiRequest) => {
  const reqBody: SelectRequestBodyData = {
    Query: QUERY_NAME.SELECT_NOTICE_COUNT,
    Data: [],
    Replace: [{ Key: '##replace##', Value: ` ${params.where} ` }],
  }

  return {
    queryKey: ['SelectNoticeCount', params],
    queryFn: async (): Promise<number> => {
      const response = await dmrsApi.select<{ cnt: number }>(reqBody)
      return response.Body?.cnt ?? 0
    },
  }
}

/**
 * 공지사항 상세 조회 API
 */
export const SelectNoticeDetailQueryOption = (idx: number) => {
  const reqBody: SelectRequestBodyData = {
    Query: QUERY_NAME.SELECT_NOTICE_LIST,
    Data: ['1', '0'],
    Replace: [{ Key: '##replace##', Value: ` and Idx = ${idx} ` }],
  }

  return {
    queryKey: ['SELECT_NOTICE_LIST', `${idx}`],
    queryFn: async (): Promise<Notice | undefined> => {
      const response = await dmrsApi.select<Notice[]>(reqBody)
      return response.Body?.[0]
    },
    enabled: idx > 0,
  }
}

/**
 * 공지사항 등록 API
 */
export const InsertNoticeQueryOption = () => {
  return {
    mutationKey: [QUERY_NAME.INSERT_NOTICE],
    mutationFn: async (notice: Notice): Promise<DmrsResponse<DmrsCuidBody>> => {
      return await dmrsApi.cuid({
        Query: QUERY_NAME.INSERT_NOTICE,
        Data: [
          notice.Title,
          notice.ShowFlag,
          notice.Contents,
          // TODO: 시간 형식 변환
          notice.StartTime ? (typeof notice.StartTime === 'number' ? notice.StartTime : notice.StartTime.unix()) : null,
          notice.EndTime ? (typeof notice.EndTime === 'number' ? notice.EndTime : notice.EndTime.unix()) : null,
        ],
      })
    },
  }
}

/**
 * 공지사항 수정 API
 */
export const UpdateNoticeQueryOption = () => {
  return {
    mutationKey: ['UpdateNotice'],
    mutationFn: async (notice: Notice): Promise<DmrsResponse<DmrsCuidBody>> => {
      return await dmrsApi.cuid({
        Query: QUERY_NAME.UPDATE_NOTICE,
        Data: [
          notice.Idx,
          notice.Title,
          notice.ShowFlag,
          notice.Contents,
          notice.StartTime ? (typeof notice.StartTime === 'number' ? notice.StartTime : notice.StartTime.unix()) : null,
          notice.EndTime ? (typeof notice.EndTime === 'number' ? notice.EndTime : notice.EndTime.unix()) : null,
        ],
      })
    },
  }
}

/**
 * 공지사항 삭제 API
 */
export const DeleteNoticeQueryOption = (idx: number) => {
  return {
    mutationKey: ['DeleteNotice', idx],
    mutationFn: async (): Promise<DmrsResponse<DmrsCuidBody>> => {
      return await dmrsApi.cuid({
        Query: QUERY_NAME.DELETE_NOTICE,
        Data: [idx],
      })
    },
  }
}

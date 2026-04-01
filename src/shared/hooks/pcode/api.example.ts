import type dayjs from "dayjs"

import { dmrsApi, type SelectRequestBodyData } from "@/shared/api"
import { QUERY_NAME } from "@/shared/types/constants"
import { renderDt } from "@/shared/utils/date"

import type { PartnerSelection } from "./type.example"


/* 제휴사 PCode 목록 조회 API */
export const SelectPartnerSelectionListQueryOption = (date?: dayjs.Dayjs) => {
  const searchDate = date ? renderDt(date) : ''

  const reqBody: SelectRequestBodyData = {
    Query: QUERY_NAME.SELECT_PARTNER_SELECTION_LIST,
    Data: [searchDate],
  }

  return {
    queryKey: [QUERY_NAME.SELECT_PARTNER_SELECTION_LIST, searchDate] as const,
    queryFn: async (): Promise<PartnerSelection[]> => {
      const response = await dmrsApi.select<PartnerSelection[]>(reqBody)
      return response.Body ?? []
    },
  }
}

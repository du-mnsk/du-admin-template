import type { Dayjs } from "dayjs"

export interface Notice {
  Idx: number
  Title: string
  ShowFlag: number
  Contents: string
  StartTime?: number | Dayjs | null
  EndTime?: number | Dayjs | null
  RegDT?: number | Dayjs | null
}

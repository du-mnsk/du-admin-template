/**
 * UI 템플릿용 타입 (실제 API 연동 없음, 목업 전용)
 */

export interface ListPageRow {
  id: number
  repeatFlag: string
  showFlag: string
  showState: string
  group: string
  number: number
  name: string
  code: string
  image?: string
  issuedCnt: number
  startDt: string
  endDt: string
  regDt: string
  status: string
  category: string
  createdAt: string
  updatedAt: string
}

export interface DashboardPageStat {
  title: string
  value: string | number
  sub?: string
}

import { type ReactNode } from 'react'
import { type LoaderFunction } from 'react-router-dom'

export type PAGE_ID =
  | '100000000' // 대시보드
  // ========================
  | '200000000' // 쿠폰관리
  // ========================
  | '200100000' // 쿠폰상품 관리
  | '200100100' // 쿠폰상품 관리 / 조회
  | '200100200' // 쿠폰상품 관리 / 등록/상세/수정

export interface IRoute {
  pageId: PAGE_ID
  level: 1 | 2 | 3 | 4
  title: string
  path: string
  element: ReactNode
  icon?: ReactNode
  child?: IRoute[]
  loader?: LoaderFunction | boolean
}

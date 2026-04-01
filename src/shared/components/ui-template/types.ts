/**
 * UI 템플릿 레이아웃 설정 타입.
 * - Row/Col 구분으로 위치를 정하고, 각 위치에 Form 컴포넌트를 넣을 수 있음.
 */
import type { CSSProperties } from 'react'

/** Col 하나에 넣을 컴포넌트 종류 (Form 전부 + Antd 대표) */
export type FormFieldType =
  | 'none'
  | 'input'
  | 'select'
  | 'textarea'
  | 'datepicker'
  | 'switch'
  | 'checkbox'
  | 'radio'
  | 'colorpicker'
  | 'editor'
  | 'title'
  | 'uploadDragger'
  | 'uploadReplaceDragger'
  | 'uploadCertFile'
  | 'antdButton'
  | 'antdTag'
  | 'antdBadge'
  | 'antdSkeleton'
  | 'antdCard'
  | 'antdInput'
  | 'antdSearchInput'
  | 'antdPagination'
  | 'antdDescriptions'
  | 'tableList'

export interface ColConfig {
  /** 기본 span (모든 breakpoint에 적용). xs/sm/md/lg/xl 지정 시 해당 구간에서 override. Ant Design: xs <576px, sm ≥576px, md ≥768px, lg ≥992px, xl ≥1200px */
  span: number
  /** 반응형 Col 비율. 예: sm={24} md={16} → 모바일 100%, 데스크탑 16/24 */
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  form?: {
    type: FormFieldType
    name: string
    label: string
    placeholder?: string
    items?: { text: string; value: string }[]
    disabled?: boolean
    /** 라벨 옆에 표시할 버튼 (예: textarea 타이틀 옆 버튼) */
    titleButton?: { text: string }
  }
  rows?: RowConfig[]
  style?: CSSProperties
  className?: string
}

export type ColumnFromBreakpoint = 'sm' | 'md' | 'lg' | 'xl'

export interface RowConfig {
  gutter?: [number, number] | { xs?: number; md?: number; xl?: number }
  cols: ColConfig[]
  /** 이 breakpoint 이하에서 Col들을 세로(column) 배치, 초과하면 가로(row). Ant Design: sm 576px, md 768px, lg 992px, xl 1200px */
  columnFromBreakpoint?: ColumnFromBreakpoint
}

/** 카드 본문 전체 레이아웃: Row 순서대로 배치 */
export interface LayoutConfig {
  rows: RowConfig[]
}

import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

/**
 * Unix timestamp 또는 Dayjs 객체를 원하는 포맷으로 변환
 * @param date - Unix timestamp (초 단위) 또는 Dayjs 객체
 * @param format - 날짜/시간 포맷 문자열 (기본값: 'YYYY-MM-DD HH:mm')
 * @returns 포맷된 날짜 문자열
 * @example
 * renderDate(1609459200) // '2021-01-01 12:00'
 * renderDate(1609459200, 'YYYY-MM-DD') // '2021-01-01'
 * renderDate(dayjs(), 'YYYY-MM-DD HH:mm:ss') // '2021-01-01 00:00:00'
 */
export const renderDate = (
  date: number | Dayjs,
  format:
    | 'YYYY-MM-DD'
    | 'YYYY-MM-DD HH:mm'
    | 'YYYY-MM-DD HH:mm:ss'
    | 'YYYY-MM' = 'YYYY-MM-DD HH:mm',
) => {
  if (!date) return '-'

  const dayjsObj = typeof date === 'number' ? dayjs.unix(date) : date
  return dayjsObj.format(format)
}

export const renderDt = (date: number | Dayjs): string => {
  return renderDate(date, 'YYYY-MM-DD')
}

export const renderDtm = (date: number | Dayjs): string => {
  return renderDate(date, 'YYYY-MM-DD HH:mm')
}

export const renderDtms = (date: number | Dayjs): string => {
  return renderDate(date, 'YYYY-MM-DD HH:mm:ss')
}

export const renderYm = (date: number | Dayjs): string => {
  return renderDate(date, 'YYYY-MM')
}

/**
 * 두 날짜 사이의 일수 차이 계산
 * @formerly dateDiff
 * @param date1 - 첫 번째 날짜
 * @param date2 - 두 번째 날짜
 * @returns 일수 차이
 * @example
 * getDaysDiff(dayjs('2024-01-01'), dayjs('2024-01-05')) // 4
 */
export function getDaysDiff(date1: Dayjs | string, date2: Dayjs | string): number {
  const d1 = typeof date1 === 'string' ? dayjs(date1) : date1
  const d2 = typeof date2 === 'string' ? dayjs(date2) : date2

  return Math.ceil(Math.abs(d1.diff(d2)) / (1000 * 3600 * 24))
}

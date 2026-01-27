import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

/**
 * 현재 실행 환경이 개발(로컬 포함) 모드 여부 확인
 */
export const isDevelopment = () => {
  return location.hostname.includes('dev') || location.hostname.includes('localhost')
}

/**
 * 현재 실행 환경이 상용 모드 여부 확인
 */
export const isProduction = (): boolean => import.meta.env.PROD // (Vite)
// export const isProduction = (): boolean => process.env.NODE_ENV === 'production'  (CRA)

/**
 * 현재 실행 환경이 로컬 환경 여부 확인
 */
export const isLocalhost = (): boolean => location.hostname.includes('localhost')

/**
 * 백분율 계산
 * @param num - 분자
 * @param den - 분모
 * @returns 백분율 값 (0-100)
 */
export function calculatePercentage(num: number, den: number): number {
  if (!num || !den) return 0

  return (num / den) * 100
}

/**
 * 두 날짜 사이의 일수 차이 계산
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

/**
 * 임시 비밀번호 생성
 * 대문자, 소문자, 숫자를 각각 최소 1개 이상 포함
 * @param len - 비밀번호 길이 (기본값: 16)
 * @returns 생성된 임시 비밀번호 문자열
 * @example
 * generateTempPassword()     // "aB3xYz9Qw2Km5Prt" (16자)
 */
export const generateTempPassword = (len = 16): string => {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const digits = '0123456789'
  const all = upper + lower + digits
  // 최소 1개씩 보장
  const pw = [
    upper[Math.floor(Math.random() * upper.length)],
    lower[Math.floor(Math.random() * lower.length)],
    digits[Math.floor(Math.random() * digits.length)],
  ]
  // 나머지 자리 채우기
  for (let i = pw.length; i < len; i++) {
    pw.push(all[Math.floor(Math.random() * all.length)])
  }
  // suffle
  return pw.sort(() => Math.random() - 0.5).join('')
}

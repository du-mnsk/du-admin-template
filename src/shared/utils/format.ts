import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

import { TelecomItems } from '@/shared/constants'

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
 * 숫자를 퍼센트 문자열로 변환 (소수점 2자리)
 * @param n - 변환할 숫자
 * @returns 퍼센트 형식 문자열 (소수점 2자리 반올림)
 * @example
 * renderPercentage(85.567)  // '85.57%'
 * renderPercentage(NaN)     // 'NaN'
 */
export const renderPercentage = (n: number): string => {
  return isNaN(n) ? n + '' : n.toFixed(2) + '%'
}

/**
 * 문자열의 앞/뒤를 지정한 길이만큼 마스킹
 *
 * @param value - 마스킹할 원본 문자열
 * @param maskStart - 앞에서부터 마스킹할 자리 수
 * @param maskEnd - 뒤에서부터 마스킹할 자리 수
 * @param maskChar - 마스킹 문자 (기본값: '*')
 * @returns 마스킹된 문자열
 * @example
 * renderMaskingString('12345678', 4, 0)        // '****5678' (앞 4자리 마스킹)
 * renderMaskingString('123456789012', 4, 4) // '****5678****' (앞뒤 4자리 마스킹)
 */
export const renderMaskingString = (
  value: string,
  maskStart: number,
  maskEnd: number,
  maskChar: string = '*',
): string => {
  if (!value || value.trim() === '' || value === '-') {
    return '-'
  }

  const length = value.length

  if (length <= maskStart + maskEnd) {
    return maskChar.repeat(length)
  }

  const startMask = maskChar.repeat(maskStart)
  const endMask = maskChar.repeat(maskEnd)
  const middle = value.slice(maskStart, length - maskEnd)

  return `${startMask}${middle}${endMask}`
}

/**
 * 쿠폰 번호 마스킹 (앞 4자리)
 * @param value - 쿠폰 번호
 * @returns 마스킹된 쿠폰 번호
 * @example
 * renderMaskingCouponNumber('12345678') // '****5678'
 */
export const renderMaskingCouponNumber = (couponNumber: string): string => {
  return renderMaskingString(couponNumber, 4, 0)
}

/**
 * 바코드 마스킹 (앞뒤 4자리)
 * @param value - 바코드
 * @returns 마스킹된 바코드
 * @example
 * renderMaskingBarcode('123456789012') // '****5678****'
 */
export const renderMaskingBarcode = (barcode: string): string => {
  return renderMaskingString(barcode, 4, 4)
}

/**
 * 핸드폰 번호 마스킹
 * @param phone - 핸드폰 번호
 * @param position - 마스킹 위치 (기본값: 'end')
 * @param withHyphen - 하이픈 포함 여부 (기본값: true)
 * @returns 마스킹된 전화번호
 * @example
 * renderMaskingPhone('01012345678') // '010-1234-****'
 * renderMaskingPhone('01012345678', 'start') // '***-1234-5678'
 * renderMaskingPhone('01012345678', 'middle') // '010-****-5678'
 * renderMaskingPhone('01012345678', 'end', false) // '0101234****'
 */
export const renderMaskingPhone = (
  phone: string,
  position: 'start' | 'end' | 'middle' = 'end',
  withHyphen = true,
): string => {
  if (!phone || phone.trim() === '' || phone === '-') {
    return '-'
  }

  const numbers = phone.replace(/\D/g, '')

  switch (position) {
    case 'start':
      return withHyphen
        ? numbers.replace(/(\d{3})(\d{4})(\d{4})/, '***-$2-$3')
        : numbers.replace(/(\d{3})(\d{4})(\d{4})/, '***$2$3')

    case 'middle':
      return withHyphen
        ? numbers.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3')
        : numbers.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')

    case 'end':
      return withHyphen
        ? numbers.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-****')
        : numbers.replace(/(\d{3})(\d{4})(\d{4})/, '$1$2****')

    default:
      return phone
  }
}

/**
 * 전화번호에 하이픈 추가
 * @param phone - 전화번호
 * @returns 하이픈이 포함된 전화번호
 * @example
 * renderPhone('01012345678')  // '010-1234-5678'
 */
export const renderPhone = (phone: string) => {
  if (!phone) return ''
  return phone.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3')
}

/**
 * 통신사 코드를 통신사 이름으로 변환
 * @param telecom - 통신사 코드 (0: SKT, 1: KT, 2: LG U+)
 * @returns 통신사 이름 문자열
 * @example
 * renderTelecomTypeName(0)  // 'SKT'
 */
export const renderTelecomTypeName = (telecom: number) =>
  TelecomItems.filter((item) => item.value == telecom)[0]?.text || '-'

/**
 * CSS에서 사용 가능한 px 단위 문자열로 포맷
 *
 * @param prop - px로 변환할 CSS 값
 * @returns CSS에서 사용 가능한 문자열 값
 * @example
 * formatCssSize(8)        // "8px"
 * formatCssSize([4, 12]) // "4px 12px"
 * formatCssLength("1rem")  // "1rem"
 */
export const formatCssSize = (prop: string | number | [number, number]): string =>
  typeof prop === 'number'
    ? `${prop}px`
    : (Array.isArray(prop) && `${prop[0]}px ${prop[1]}px`) || prop.toString()

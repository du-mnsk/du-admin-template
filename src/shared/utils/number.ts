import { renderMaskingString } from '@/shared/utils/string'

/**
 * 백분율 계산
 * @formerly calcPercentage
 * @param num - 분자
 * @param den - 분모
 * @returns 백분율 값 (0-100)
 * @example
 * calculatePercentage(25, 100)  // 25
 * calculatePercentage(1, 3)     // 33.3333...
 */
export function calculatePercentage(num: number, den: number): number {
  if (!num || !den) return 0

  return (num / den) * 100
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
 * 숫자를 천 단위 구분 형식으로 변환
 * @formerly formatNumberWithCommas, renderComma
 * @param num - 숫자
 * @returns 천 단위 구분자 포함 문자열
 * @example
 * renderComma(1234567) // "1,234,567"
 * renderComma(0)       // "0"
 */
export const renderCommas = (num: number): string => {
  return num.toLocaleString()
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
 * @formerly renderMaskingPhoneCenter
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

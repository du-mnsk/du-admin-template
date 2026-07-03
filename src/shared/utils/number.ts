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
 * 숫자를 가격 문자열로 변환 (천 단위 구분 + ' 원' 단위)
 * @param n - 변환할 숫자
 * @returns 가격 형식 문자열 (예: '1,234 원'), NaN이면 'NaN'
 * @example
 * renderPrice(1234)   // '1,234 원'
 * renderPrice(0)      // '0 원'
 * renderPrice(NaN)    // 'NaN'
 */
export const renderPrice = (n: number): string => {
  return isNaN(n) ? n + '' : n.toLocaleString() + ' 원'
}

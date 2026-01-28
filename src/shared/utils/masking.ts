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

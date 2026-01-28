import { TelecomItems } from '@/shared/constants'

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

/**
 * 통신사 코드를 통신사 이름으로 변환
 * @formerly renderWithTelecom, getNameByCode
 * @param telecom - 통신사 코드 (0: SKT, 1: KT, 2: LG U+)
 * @returns 통신사 이름 문자열
 * @example
 * renderTelecomTypeName(0)  // 'SKT'
 */
export const renderTelecomTypeName = (telecom: number) =>
  TelecomItems.filter((item) => item.value == telecom)[0]?.text || '-'

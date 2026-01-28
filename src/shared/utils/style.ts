/**
 * 16진수 색상 코드를 RGB 문자열로 변환

 * @param hex - HEX 색상 코드
 * @returns RGB 문자열
 * @example
 * hexToRGB("#FFFFFF") // "255, 255, 255"
 */
export const hexToRGB = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  return `${r}, ${g}, ${b}`
}

/**
 * HEX 색상의 밝기를 조정
 * @param color - HEX 색상 코드
 * @param percent - 밝기 조정 비율 (-100 ~ 100)
 *   - 양수: 밝게 (예: 20 = 20% 밝게)
 *   - 음수: 어둡게 (예: -20 = 20% 어둡게)
 * @returns 조정된 HEX 색상 코드
 * @example
 * adjustColorBrightness('#FF5733', 20)   // '#FF8753'
 * adjustColorBrightness('#FF5733', -20)  // '#CC4711'
 */
export const adjustColorBrightness = (color: string, percent: number): string => {
  let R = parseInt(color.substring(1, 3), 16)
  let G = parseInt(color.substring(3, 5), 16)
  let B = parseInt(color.substring(5, 7), 16)

  R = parseInt(((R * (100 + percent)) / 100).toString())
  G = parseInt(((G * (100 + percent)) / 100).toString())
  B = parseInt(((B * (100 + percent)) / 100).toString())

  R = R < 255 ? R : 255
  G = G < 255 ? G : 255
  B = B < 255 ? B : 255

  const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16)
  const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16)
  const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16)

  return '#' + RR + GG + BB
}
/**
 * CSS에서 사용 가능한 px 단위 문자열로 포맷
 * @formerly normalizeProp
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

import { saveAs } from 'file-saver'

/**
 * Base64 문자열을 객체로 디코딩
 * @param data - Base64로 인코딩된 JSON 문자열
 * @returns 복원된 JS 객체
 * @example
 * decodeBase64ToObject('eyJuYW1lIjo...') // { name: 'DU', age: 20 }
 */
export const decodeBase64ToObj = (data: string): object => {
  return data && JSON.parse(atob(data))
}

/**
 * 객체를 JSON으로 변환 후 Base64로 인코딩
 * @param data - 인코딩할 객체
 * @returns Base64 문자열
 * @example
 * encodeObjectToBase64({ name: 'DU', age: 20 }) // 'eyJuYW1lIjo...'
 *
 */
export const encodeObjToBase64 = (data: object): string => {
  return data && btoa(JSON.stringify(data))
}

/**
 * base64로 인코딩된 js object를 복원
 * @param encoded - Base64+UTF-8 인코딩된 문자열
 * @returns 복원된 객체
 * @example
 * decodeUrlBase64ToObj('JTdCJTIybmFtZSUyMi4uLg==')  // { name: '한글' }
 */
export function decodeUrlBase64ToObj(base64: string): object | null {
  try {
    return JSON.parse(decodeURIComponent(window.atob(base64)))
  } catch (e) {
    console.error(e)
    return null
  }
}

/**
   * 객체를 Base64+UTF-8 문자열로 인코딩 
   * 
   * 한글 및 특수문자를 안전하게 처리 (URL-safe)
  
   * @param json - 인코딩할 객체
   * @returns Base64+UTF-8 인코딩된 문자열
   * @example
   * encodeObjToUrlBase64({ name: '한글' })  // 'JTdCJTIybmFtZSUyMi...'
   */
export function encodeObjToUrlBase64(json: object): string {
  return btoa(encodeURIComponent(JSON.stringify(json)))
}

/**
 * HTML 테이블을 CSV 파일로 변환 후 다운로드
 * @param tableElement - 변환할 HTML 테이블
 * @param title - 파일명
 * @example
 * const table = document.querySelector('table')
 * exportCsvFromTable(tableElement, '회원목록') // '회원목록.csv' 파일 다운로드
 *
 */
export function exportCsvFromTable(tableElement: HTMLTableElement, title: string) {
  const tableRows = tableElement.querySelectorAll('thead > tr, tbody > tr, tfoot > tr')
  const W = Array.from(tableRows[0].children).reduce(
    (acc, cur) => acc + (Number(cur.getAttribute('colspan')) || 1),
    0,
  )
  const H = tableRows.length
  const csvData = new Array(H).fill(null).map(() => new Array(W).fill(null))

  let [y, x] = [0, 0]
  tableRows.forEach((tr) => {
    tr.childNodes.forEach((td) => {
      if (!(td instanceof HTMLElement)) return
      const [cols, rows] = [
        Number(td.getAttribute('colspan')) || 1,
        Number(td.getAttribute('rowspan')) || 1,
      ]

      while (csvData[y][x] !== null) x += 1
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          csvData[y + i][x + j] = '""'
        }
      }
      csvData[y][x] = `"${td.textContent}"`
    })
    x = 0
    y += 1
  })

  const BOM = '\uFEFF'
  const type = 'text/csv;charset=utf-8'
  saveAs(new Blob([BOM + csvData.map((row) => row.join(',')).join('\n')], { type }), `${title}.csv`)
}

/**
 * 파일을 Base64 문자열로 변환
 * @param file - 변환할 파일 객체
 * @param callback - Base64 변환 완료 시 실행할 콜백 함수
 * @example
 * fileToBase64(file, (img) => {
 *   console.log(img) // "data:image/png;base64,iVBORw0KG..."
 * })
 */
export const fileToBase64 = (file: File, callback: (_: any) => void) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    callback(reader.result)
  }
  reader.onerror = function (error) {
    console.error('Error: ', error)
  }
}

/**
 * 파일을 Base64 문자열로 비동기 변환
 * @param file - 변환할 파일 객체
 * @returns Base64 문자열을 담은 Promise
 * @example
 * const base64 = await fileToBase64Async(file)
 * console.log(base64) // "data:image/png;base64,iVBORw0KG..."
 */
export const fileToBase64Async = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}

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

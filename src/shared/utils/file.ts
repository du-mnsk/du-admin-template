import { saveAs } from 'file-saver'

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
 * @formerly getBase64
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
 * @formerly getBase64Async
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

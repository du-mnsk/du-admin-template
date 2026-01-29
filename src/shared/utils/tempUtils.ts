//TODO: 파일 생성 후 삭제 예정

import type { ReactNode } from 'react'
import axios from 'axios'
import EventEmitter from 'eventemitter3'
import { saveAs } from 'file-saver'
import type { UploadRequestOption } from 'rc-upload/lib/interface'

export const hexToRGB = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  return `${r}, ${g}, ${b}`
}

export const normalizeProp = (prop: string | number | [number, number]): string =>
  typeof prop === 'number'
    ? `${prop}px`
    : (Array.isArray(prop) && `${prop[0]}px ${prop[1]}px`) || prop.toString()

export const shadeColor = (color: string, percent: number): string => {
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

const httpApi = axios.create({
  baseURL: import.meta.env.VITE_DMRS_SERVER_URL,
  withCredentials: true,
})

export const requestRegisterImage = (request: UploadRequestOption, savePath: string) => {
  const formData = new FormData()
  formData.append('Image', request.file)
  formData.append('ImagePath', savePath)
  httpApi.post('/', formData).then((response) => {
    return request.onSuccess && request.onSuccess(response.data)
  })
}

export const isEmptyString = (value: string | undefined | null) => {
  return !value || value.replaceAll(' ', '').length === 0
}

interface DownloadFileOption {
  filename?: string
  extension?: string
}

export const downloadFile = async (url: string, options?: DownloadFileOption) => {
  const a = document.createElement('a')
  const response = await axios.get(url, {
    responseType: 'blob',
  })
  const blob = response.data
  const file = URL.createObjectURL(blob)
  const filename = options?.filename || 'download'
  a.href = file
  a.download = isEmptyString(options?.extension) ? filename : `${filename}.${options?.extension}`

  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
}

export class ChartOptionBuilder {
  title?: object
  legend?: object
  grid?: object
  xAxis?: object
  yAxis?: object
  tooltip?: object = { trigger: 'item' }
  toolbox?: object = { feature: { saveAsImage: {} }, top: 'top', right: '15px' }
  series?: object[]

  setTitle(title: object) {
    this.title = title
    return this
  }
  setLegend(legend: object) {
    this.legend = legend
    return this
  }
  setGrid(grid: object) {
    this.grid = grid
    return this
  }
  setXAxis(xAxis: object) {
    this.xAxis = xAxis
    return this
  }
  setYAxis(yAxis: object) {
    this.yAxis = yAxis
    return this
  }
  setTooltip(tooltip: object) {
    this.tooltip = tooltip
    return this
  }
  setToolbox(toolbox: object) {
    this.toolbox = toolbox
    return this
  }
  setSeries(series: object[]) {
    this.series = series
    return this
  }

  build() {
    return new ChartOption(this)
  }
}

export class ChartOption {
  title?: object
  legend?: object
  grid?: object
  xAxis?: object
  yAxis?: object
  tooltip?: object
  toolbox?: object
  series?: object[]

  constructor(builder: ChartOptionBuilder) {
    this.title = builder.title
    this.legend = builder.legend
    this.grid = builder.grid
    this.xAxis = builder.xAxis
    this.yAxis = builder.yAxis
    this.tooltip = builder.tooltip
    this.toolbox = builder.toolbox
    this.series = builder.series
  }
}

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode
    }
  : T & {
      children?: ReactNode
    }

export const eventEmitter = new EventEmitter()

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
//TODO: 파일 생성 후 삭제 예정

import type { NotificationType } from "../components/du-admin-ui/antd/Badge/Badge"

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

export const defineColorBySeverity = (
  severity: NotificationType | undefined,
  rgb = false,
): string => {
  const postfix = rgb ? 'rgb-color' : 'color'
  switch (severity) {
    case 'error':
    case 'warning':
    case 'success':
      return `var(--${severity}-${postfix})`
    case 'info':
    default:
      return `var(--primary-${postfix})`
  }
}

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
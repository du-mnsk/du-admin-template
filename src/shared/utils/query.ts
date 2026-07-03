import type { FilterValue, SorterResult } from 'antd/lib/table/interface'

/**
 * Antd Table의 filters를 SQL WHERE 절로 변환
 */
export const convertFilterToQuery = (filters: Record<string, FilterValue | null>): string => {
  const conditions: string[] = []

  Object.keys(filters).forEach((key) => {
    const value = filters[key]
    if (value && Array.isArray(value) && value.length > 0) {
      if (value.length === 1) {
        conditions.push(`${key} LIKE '%${value[0]}%'`)
      } else {
        const values = value.map((v) => `'${v}'`).join(', ')
        conditions.push(`${key} IN (${values})`)
      }
    }
  })

  return conditions.length > 0 ? `AND ${conditions.join(' AND ')}` : ''
}

/**
 * Antd Table의 sorter를 SQL ORDER BY 절로 변환
 */
export const convertSorterToQuery = (
  sorter: SorterResult<any> | SorterResult<any>[],
): string | null => {
  if (Array.isArray(sorter)) {
    const orders = sorter
      .filter((s) => s.order)
      .map((s) => {
        const field = s.field as string
        const order = s.order === 'ascend' ? 'ASC' : 'DESC'
        return `${field} ${order}`
      })
    return orders.length > 0 ? `ORDER BY ${orders.join(', ')}` : null
  }

  if (sorter.order && sorter.field) {
    const field = sorter.field as string
    const order = sorter.order === 'ascend' ? 'ASC' : 'DESC'
    return `ORDER BY ${field} ${order}`
  }

  return null
}

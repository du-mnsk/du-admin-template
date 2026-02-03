import type { FormSelectItem } from '@/shared/components/du-admin-ui/Form/select'

/**
 * SelectItem 배열에서 value에 해당하는 text를 반환
 */
export const renderFromSelectItem = (
  value: string | number | boolean,
  items: FormSelectItem[],
): string => {
  const item = items.find((item) => item.value === value)
  return item?.text || String(value)
}

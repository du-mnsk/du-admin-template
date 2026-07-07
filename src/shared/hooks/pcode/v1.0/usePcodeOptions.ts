import { useMemo } from 'react'

import type { FormSelectItem } from '@/shared/components/du-admin-ui/Form/select'
import { isEmptyString } from '@/shared/utils/string'

import { useCustomQuery } from '../../useCustomQuery'
import { SelectPartnerSelectionListQueryOption } from '../api.example'
import type { PartnerSelection } from './type.example'

/**
 * 공통 어드민(템플릿)에서 사용하는 제휴사(PGroup/PCode) 선택 옵션 훅
 *
 * 제공 값:
 * - pgroupOptions: PGroup 옵션 목록
 * - pcodeOptions : 선택된 PGroup에 따른 PCode 옵션 목록
 * - getPName     : PCode -> PName lookup
 */
const usePCodeOptions = (PGroup?: string) => {
  const { data: partnerList = [], isLoading } = useCustomQuery<PartnerSelection[]>(
    SelectPartnerSelectionListQueryOption(undefined),
  )

  // PCode -> PName lookup
  const pCodeNameMap = useMemo(() => {
    return partnerList.reduce<Record<string, string>>((acc, cur) => {
      acc[cur.PCode] = cur.PName
      return acc
    }, {})
  }, [partnerList])

  const getPName = (pcode: string): string => {
    return pCodeNameMap[pcode] ?? ''
  }

  const pgroupOptions: FormSelectItem[] = useMemo(() => {
    const groups = Array.from(new Set(partnerList.map((v) => v.PGroup)))
    return groups.map((group) => ({ text: group, value: group }))
  }, [partnerList])

  const pcodeOptions: FormSelectItem[] = useMemo(() => {
    return partnerList
      .filter((v) => isEmptyString(PGroup) || v.PGroup === PGroup)
      .map((v) => ({ text: v.PName, value: v.PCode }))
  }, [partnerList, PGroup])

  return {
    pcodeOptions,
    pgroupOptions,
    getPName,
    isLoading,
    partnerList,
  }
}

export default usePCodeOptions

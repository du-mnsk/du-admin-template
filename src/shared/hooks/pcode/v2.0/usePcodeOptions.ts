import { useMemo } from 'react'

import type { FormSelectItem } from '@/shared/components/du-admin-ui/Form/select'
import { SelectPartnerSelectionListQueryOption } from '@/shared/hooks/pcode/api.example'
import type { PartnerSelection } from '@/shared/hooks/pcode/v2.0/type.example'
import { useCustomQuery } from '@/shared/hooks/useCustomQuery'

/**
 * 공통 어드민(템플릿)에서 사용하는 제휴사(GroupID/PCode) 선택 옵션 훅
 *
 * 제휴사 목록을 조회하여 화면에서 사용할 그룹/채널 선택 옵션을 제공합니다.
 *
 * 제공 기능
 * - pgroupOptions : GroupID 기준 그룹 선택 옵션
 * - pcodeOptions  : 선택된 GroupID에 속한 PCode 목록
 * - getPName      : PCode → PName 조회
 * - getPGroup     : GroupID → PGroup 조회
 */

const usePCodeOptions = (groupId?: number) => {
  const { data: partnerList = [], isLoading } = useCustomQuery<PartnerSelection[]>(
    SelectPartnerSelectionListQueryOption(),
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

  /**
   * GroupID로 그룹명(PGroup) 조회 (신규 추가)
   */
  const getPGroup = (id: number): string => {
    const row = partnerList.find(
      (p) =>
        p.GroupID !== undefined && !Number.isNaN(Number(p.GroupID)) && Number(p.GroupID) === id,
    )

    return row?.PGroup ?? ''
  }

  /**
   * GroupID 기준 그룹 옵션 생성 (수정)
   *
   * 동일한 GroupID는 하나의 옵션만 생성하도록 중복 제거
   */
  const pgroupOptions: FormSelectItem[] = useMemo(() => {
    const byId = new Map<number, string>()

    for (const v of partnerList) {
      if (v.GroupID == null || Number.isNaN(Number(v.GroupID))) continue

      const id = Number(v.GroupID)

      if (!byId.has(id)) {
        byId.set(id, v.PGroup)
      }
    }

    return [...byId.entries()].map(([value, text]) => ({
      text,
      value,
    }))
  }, [partnerList])

  /**
   * 선택된 GroupID에 해당하는 PCode 목록 생성
   *
   * groupId가 없으면 전체 채널을 반환
   */
  const pcodeOptions: FormSelectItem[] = useMemo(() => {
    return partnerList
      .filter(
        (v) =>
          groupId == null ||
          (v.GroupID !== undefined &&
            !Number.isNaN(Number(v.GroupID)) &&
            Number(v.GroupID) === groupId),
      )
      .map((v) => ({
        text: v.PName,
        value: v.PCode,
      }))
  }, [partnerList, groupId])

  return {
    pcodeOptions,
    pgroupOptions,
    getPName,
    getPGroup,
    isLoading,
    partnerList,
  }
}

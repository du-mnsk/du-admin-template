import type { ListPageRow } from '../types'

/** 목록 템플릿용 목업 데이터 (API 연동 없음, Coupon 리스트와 동일한 컬럼 구성) */
export const listMockData: ListPageRow[] = [
  {
    id: 1,
    repeatFlag: 'Y',
    showFlag: 'Y',
    showState: '노출중',
    group: '그룹A',
    number: 1,
    name: '샘플 항목 1',
    code: 'CODE-001',
    issuedCnt: 100,
    startDt: '2025-01-15 00:00:00',
    endDt: '2025-02-28 23:59:59',
    regDt: '2025-01-15 10:00:00',
    status: 'Y',
    category: '카테고리A',
    createdAt: '2025-01-15',
    updatedAt: '2025-02-01',
  },
  {
    id: 2,
    repeatFlag: 'N',
    showFlag: 'N',
    showState: '비노출',
    group: '그룹B',
    number: 2,
    name: '샘플 항목 2',
    code: 'CODE-002',
    issuedCnt: 50,
    startDt: '2025-01-16 00:00:00',
    endDt: '2025-03-31 23:59:59',
    regDt: '2025-01-16 11:00:00',
    status: 'N',
    category: '카테고리B',
    createdAt: '2025-01-16',
    updatedAt: '2025-02-02',
  },
  {
    id: 3,
    repeatFlag: 'Y',
    showFlag: 'Y',
    showState: '노출중',
    group: '그룹A',
    number: 3,
    name: '샘플 항목 3',
    code: 'CODE-003',
    issuedCnt: 200,
    startDt: '2025-01-17 00:00:00',
    endDt: '2025-02-28 23:59:59',
    regDt: '2025-01-17 09:00:00',
    status: 'Y',
    category: '카테고리A',
    createdAt: '2025-01-17',
    updatedAt: '2025-02-03',
  },
]

export const listRepeatFlagFilters = [
  { text: '반복', value: 'Y' },
  { text: '미반복', value: 'N' },
]

export const listShowFlagFilters = [
  { text: '노출', value: 'Y' },
  { text: '비노출', value: 'N' },
]

export const listStatusFilters = [
  { text: '노출', value: 'Y' },
  { text: '비노출', value: 'N' },
]

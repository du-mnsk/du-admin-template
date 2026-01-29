# usePCodeOptions
공통 어드민에서 사용하는 제휴사(PGroup / PCode) 선택용 훅

## 개요
- 제휴사 목록 API를 조회하여
  - PGroup 옵션 목록
  - 선택된 PGroup에 따른 PCode 옵션 목록
  - PCode → PName lookup 함수
를 제공합니다.


## 사용 대상
- 공통 어드민 기반 프로젝트
- 제휴사 선택 UI가 필요한 페이지
  - 통계
  - 정산
  - 쿠폰 / 제휴 관리 등

## 반환값
```ts
{
  pgroupOptions: FormSelectItem[]  // PGroup 선택 옵션
  pcodeOptions: FormSelectItem[]   // 선택된 PGroup 기준 PCode 옵션
  getPName: (pcode: string) => string
  isLoading: boolean
  partnerList: PartnerSelection[]
}

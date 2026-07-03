# usePCodeOptions

공통 어드민에서 사용하는 제휴사(`GroupID` / PCode) 선택용 훅

## 개요

제휴사 목록 API를 조회하여 아래 데이터를 제공합니다.

- GroupID 기반 그룹 옵션 목록
- 선택된 GroupID에 따른 PCode 옵션 목록
- PCode → PName Lookup 함수
- GroupID → PGroup Lookup 함수

통계 배치 마스터 테이블(`statistics.servicegroupstats`, `statistics.servicechannelstats`)은
그룹 식별값으로 **GroupID**를 사용합니다.

기존에는 PGroup 문자열을 기준으로 그룹을 식별했지만,
PGroup 표시명이 변경될 경우 GroupCode 기반 통계 집계가 끊길 수 있는 문제가 있어
불변 식별자인 **GroupID 기준으로 변경**되었습니다.

이에 따라 화면에는 기존과 동일하게 **PGroup을 표시**하지만,
실제 선택값(value)과 내부 처리는 **GroupID**를 사용하도록 변경되었습니다.

> **GroupID 대응이 필요한 프로젝트에서 사용하는 버전입니다.**
> GroupID 대응이 필요하지 않은 경우에는 **v1.0(usePCodeOptions)** 을 사용해주세요.

---

## 사용 대상

- GroupID 기반 통계/조회 기능을 사용하는 프로젝트
- 통계 배치 테이블(`statistics.servicegroupstats`, `statistics.servicechannelstats`)과 연동되는 화면
- GroupID를 기준으로 그룹을 조회하거나 저장하는 화면

---

## 사용 방법

```ts
const {
  pgroupOptions,
  pcodeOptions,
  getPName,
  getPGroup,
} = usePCodeOptions(groupId)
```

---

## 반환값

```ts
{
  pgroupOptions: FormSelectItem[]         // GroupID 기반 그룹 선택 옵션
  pcodeOptions: FormSelectItem[]          // 선택된 GroupID의 채널(PCode) 목록
  getPName: (pcode: string) => string     // PCode → PName
  getPGroup: (groupId: number) => string  // GroupID → PGroup
  isLoading: boolean
  partnerList: PartnerSelection[]
}
```

---

## 변경사항

### 기존

- PGroup(string)을 그룹 식별값(value)으로 사용
- PGroup 문자열을 기준으로 PCode 목록 조회

### 변경

- GroupID(number)를 그룹 식별값(value)으로 사용
- 화면에는 PGroup을 표시하고, 실제 선택값은 GroupID 사용
- 선택된 GroupID를 기준으로 PCode 목록 조회
- GroupID → PGroup 조회 함수(`getPGroup`) 추가
- 그룹 옵션 생성 시 GroupID 기준으로 중복 제거
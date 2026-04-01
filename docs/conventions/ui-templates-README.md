# UI 템플릿 (ui-templates)

공통 어드민 UI 가이드·frontend-conventions를 반영한 **참조용 UI 템플릿**입니다.  
실제 API 연동 없이 **화면 구조와 컴포넌트 배치만** 확인할 수 있습니다.

## 위치

- **Feature**: `src/features/ui-templates/`
- **라우트 정의**: `src/routes/uiTemplates.tsx`

## 대표 페이지

모든 페이지는 **TemplateCard**(`@/shared/components/ui-template`)로 감싸 레이아웃을 통일합니다.

| 페이지 | 파일 | 설명 |
|--------|------|------|
| 목록 | `ListPage` | TemplateCard + NoticeBox + Table.Top(버튼) + Table.Column(검색/정렬/필터) |
| 상세(상단 버튼) | `Detail1Page` | 패턴 A – 제목 줄 우측에 목록/저장 버튼 |
| 상세(Footer 버튼) | `Detail2Page` | 패턴 B – Form footer에 목록/저장 버튼 |
| 대시보드 | `DashboardPage` | 상단 새로고침·집계 시간, 2열 패널 |
| 통계 | `StatisticsPage` | 상단 조건(RangePicker, Select, 검색) + 차트/테이블 |

## 메뉴에 추가하는 방법

1. `src/routes/index.tsx` 상단에 import 추가:
   ```ts
   import uiTemplateRoutes from '@/routes/uiTemplates'
   ```
2. `routes` 배열에 템플릿 라우트 추가 (예: 맨 위에 추가):
   ```ts
   const routes: IRoute[] = [
     ...uiTemplateRoutes,
     { pageId: '100000000', title: '대시보드', ... },
     // ...
   ]
   ```
3. 접속 경로 예: `/ui-templates/list`, `/ui-templates/detail1`, `/ui-templates/dashboard`, `/ui-templates/statistics`

## 참고 문서

- `docs/conventions/공통_어드민_UI_가이드.md` – 페이지 유형, 레이아웃, Row/Col, TemplateCard 요약
- `docs/conventions/frontend-conventions.md` – feature 구조, 네이밍, 훅/API 규칙

## 주의

- **shared 폴더는 수정하지 않음** – 기존 `@/shared/components/du-admin-ui` 등만 사용합니다.
- **API 연동 없음** – 목업 데이터(`mockData/`)만 사용하며, 실제 비즈니스 로직은 각 feature에서 구현합니다.

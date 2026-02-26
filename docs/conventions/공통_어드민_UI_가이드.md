# 공통 어드민 UI 가이드

프로젝트 전체 페이지를 한눈에 보고, 새 어드민 제작 시 UI를 균일하게 적용하기 위한 가이드입니다.

---

## 1. 페이지 유형 요약

| 유형 | 설명 | 대표 경로/페이지 |
|------|------|------------------|
| **로그인** | 인증 전 단일 폼 | `/login` |
| **대시보드** | 요약 카드/패널 나열 | `/dashboard` |
| **목록(List)** | 검색/필터 + 테이블 + 액션 버튼 | 쿠폰상품 관리, 공지사항, 채널 관리 등 |
| **상세/등록/수정(Detail)** | 단일 폼 + 목록/저장 버튼 | 쿠폰상품 상세, 공지 상세, 채널 등록/수정 등 |
| **통계** | 기간/조건 선택 + 차트/테이블 패널 | 일별 가입/해지, 이통사 가입/해지 등 |
| **정산** | 조건 + 테이블/요약 | 이통사 월별 매출, 제휴사 정산 등 |

---

## 2. 공통 레이아웃 구조

- **최상위**: `MainLayout` (사이드 메뉴 + 콘텐츠 영역)
- **콘텐츠**: 페이지별 카드 1개를 기본으로, 필요 시 여러 카드
- **카드**: `TemplateCard`(`@/shared/components/ui-template`) 사용 권장. `title`, `loading`, `children` 지원. 목록/상세/대시보드/통계 등 모든 UI 템플릿 페이지가 동일하게 적용.

---

## 3. 목록 페이지 (List)

### 3.1 구조

```
TemplateCard(title="페이지명" [, loading])
  ├─ [선택] NoticeBox 등 안내 영역
  └─ Table
       ├─ Table.Top        ← 버튼/필터 영역
       └─ Table.Column...  ← 컬럼 정의 (검색/정렬/필터 옵션)
```

참조: `src/features/ui-templates/pages/ListPage.tsx`

### 3.2 버튼 위치

- **Table.Top** 안에 배치
- **좌측**: 액션 버튼
  - `Col` > `Space size={10}` 안에 버튼들
  - **신규 등록**: `Button type="ghost"` → 목록 페이지에서는 통일
  - **일괄 액션**(선택 시에만): `Button type="primary"`, `disabled={selectedRow.length === 0}`
- **추가 영역**: 필요 시 `Col span={24}` 로 체크박스, 안내 문구 등

### 3.3 Row/Col 사용

- **Table.Top** 내부:
  - 버튼 영역: `<Col>` (span 없이, 내용만큼 너비)
  - 하단 필터/안내: `<Col span={24}>` 로 한 줄 전체 사용

### 3.4 테이블 공통

- `rowKey`, `data`, `pagination`, `onChange`, `loading` 필수
- 행 클릭 이동: `onClickRow` 또는 `rowSelection` + 일괄 액션
- 컬럼: `Table.Column` 에 `searchFilter`, `sorter`, `filters`, `searchRangeFilter` 등으로 검색/정렬/필터 통일

---

## 4. 상세/등록/수정 페이지 (Detail / Form)

### 4.1 구조

```
TemplateCard(title="페이지명 등록|수정", loading)
  └─ Form (form, onFinish, footer?)
        ├─ [선택] 상단 Row: 제목 Col + 버튼 Col (목록 | 저장/신규등록)
        ├─ Row + Form.Input/Select/DatePicker... (mdCols로 그리드)
        ├─ Divider + 섹션 제목 반복
        └─ Form footer (목록 버튼 + 저장/신규등록 버튼)
```

### 4.2 버튼 위치 (두 가지 패턴)

**패턴 A – 상단 우측 (제목과 같은 줄)**  
- `Row` > `Col` (제목) + `Col md={8} sm={24}` > `Row gutter={10} justify="end"`  
  - 목록: `Button` (ghost)  
  - 저장/신규등록: `Button type="primary" htmlType="submit"`  
- 사용 예: 이벤트 관리, 배너, 추천 상품/브랜드, 채널 등

**패턴 B – Form 하단 footer**  
- `Form` 에 `footer={...}` 전달  
- `Row justify="end"` > `Col` > 목록 버튼 + 저장/신규등록 버튼  
- 사용 예: 공지사항, FAQ, 이용약관, 가입 메시지, 답변 상용구, 카테고리, 브랜드 등

버튼 문구 통일:

- 목록: `목록`
- 저장: `{!isNew ? '수정' : '신규등록'}` (또는 `{isNew ? '등록' : '수정'}`)

### 4.3 Row/Col 및 Form 필드

- **Form 전체**: `Row gutter={{ xs: 10, md: 15, xl: 30 }}` (Form 내부 기본)
- **필드 그리드**: 각 `Form.Input` / `Form.Select` / `Form.DatePicker` 등에 **mdCols** 사용
  - `mdCols={8}`: 3열 (8+8+8=24)
  - `mdCols={12}`: 2열
  - `mdCols={16}`: 1.5열 느낌 (나머지 8과 함께)
  - `mdCols={24}`: 한 줄 전체 (TextArea, 에디터 등)
- **fill**: 해당 필드만 24칸 전체 (세로 배치 시)
- **섹션 구분**: `Divider` + `S.SubTitle` 등으로 구분

### 4.4 2단 레이아웃 (폼 + 사이드)

- 메인: `Col md={16} sm={24}` → 폼 필드
- 사이드: `Col md={8} sm={24}` → 이미지 미리보기, 메모, 등록일/수정일 등
- 쿠폰상품 상세 등 복잡한 폼에서 사용

---

## 5. 통계 / 대시보드 페이지

### 5.1 통계 페이지

- **상단**: 조건 영역
  - `Space wrap` 또는 `Row` 안에 `RangePicker`, `Select`, `Button type="primary"` (검색)
- **본문**: `Row gutter={[0, 20]}` 또는 `[10, 20]`
  - `Col span={24}`: 차트 컴포넌트
  - `Col span={24}`: 요약 테이블/패널

### 5.2 대시보드

- **상단**: 새로고침 버튼 + 집계 시간 등 `Row justify="space-between"`
- **본문**: `Row gutter={[10, 20]} justify="space-between"`
  - `Col span={24} lg={12}`: 2열 (lg 이상에서만), 각 Col 안에 여러 패널

---

## 6. Row/Col 사용 요약

**Gutter 상수** (`@/styles/themes/constants` 의 `ROW_GUTTER`): Col 사이 간격은 한 곳에서 관리. `gutter={ROW_GUTTER.section}` 등으로 사용.

| 용도 | Row | Col |
|------|-----|-----|
| 테이블 상단 버튼 | Table.Top 내부 기본 | 버튼: span 없음 / 하단 영역: span={24} |
| 폼 필드 | Form 기본 Row gutter (`ROW_GUTTER.form`) | 각 필드 mdCols (8,12,16,24) |
| 상세 2단(메인+사이드) | `gutter={ROW_GUTTER.section}` | md={16}, md={8} 등 |
| 상세 상단 제목+버튼 | 1개 Row | 제목 Col + 버튼 Col md={8} justify="end" |
| 대시보드 2열 | `gutter={ROW_GUTTER.panel}` | span={24} lg={12} |
| 통계 차트+패널 | `gutter={ROW_GUTTER.verticalOnly}` | span={24} 각각 |
| Form footer | Form footer Row | justify="end", 버튼들 |

### 반응형

- `md={8} sm={24}`: 중간 이상 8칸, 작은 화면 전체
- `span={24} lg={12}`: 기본 전체, 큰 화면에서 2열
- Form 필드 `mdCols`는 내부적으로 Col span에 매핑되므로 md 브레이크포인트 기준

---

## 7. 공통 컴포넌트

| 용도 | 컴포넌트 | 비고 |
|------|----------|------|
| 페이지 카드 레이아웃 | `TemplateCard` | `@/shared/components/ui-template`, title / loading / children |
| 버튼 | `Button` | du-admin-ui Antd.Button, type: primary / ghost |
| 테이블 | `Table` | `@/shared/components/du-admin-ui/Table`, Table.Top, Table.Column |
| 폼 | `Form` | `@/shared/components/du-admin-ui/Form`, Form.Input/Select/DatePicker 등 |
| 알림 | `notificationController` | success / error / warning |

---

## 8. 페이지별 참고 (경로 기준)

**UI 템플릿 (참조용, 동일 구조)**  
- **목록**: `src/features/ui-templates/pages/ListPage.tsx`
- **상세(상단 버튼)**: `src/features/ui-templates/pages/Detail1Page.tsx`
- **상세(Footer 버튼)**: `src/features/ui-templates/pages/Detail2Page.tsx`
- **대시보드**: `src/features/ui-templates/pages/DashboardPage.tsx`
- **통계**: `src/features/ui-templates/pages/StatisticsPage.tsx`

실제 비즈니스 페이지는 각 feature 경로에서 동일한 구조로 구현.

---

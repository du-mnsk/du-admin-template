# Frontend Conventions Guide

## 핵심 요약

- React 컴포넌트 파일/폴더: **PascalCase**
- Hooks/Utils/API/Store 파일: **camelCase**
- Feature 폴더: **lowercase** + 복수형(도메인 컬렉션)
- Page 컴포넌트는 `*Page.tsx` suffix로 구분
- 타입 파일은 `.types.ts`, 타입명은 `PascalCase`

---

## 기본 원칙

### 1. Feature-Based 구조 채택

- 관련 코드가 한 곳에 모여있어 유지보수 용이
- 기능 단위로 팀 작업 분리 가능
- 기능 추가/삭제 시 영향 범위 명확

### 2. 네스팅 깊이 제한

최대 3~4단계까지만 허용

```
// 너무 깊음 (5단계) - 금지
src/features/partners/components/list/table/cells/StatusCell.tsx

// 적절한 깊이 (3단계) - 권장
src/features/partners/components/StatusCell.tsx
```

### 3. 절대 경로 사용

**tsconfig.json / jsconfig.json 설정**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/features/*": ["src/features/*"],
      "@/shared/*": ["src/shared/*"],
      "@/assets/*": ["src/assets/*"]
    }
  }
}
```

**사용 예시**

```ts
// 상대 경로 - 금지
import { Button } from '../../../shared/components/Button'

// 절대 경로 - 권장
import { Button } from '@/shared/components/Button'
```

---

## 프로젝트 구조 (Vite + React 18 기반 SPA)

```
shoppingcare-admin/
├── public/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── App.module.css
│   │   └── main.tsx
│   │
│   ├── routes/                   # 라우팅 관련 모아두기
│   │   ├── AppRouter.tsx
│   │   ├── helper.tsx
│   │   ├── index.ts
│   │   └── router.tsx
│   │
│   ├── features/                 # 기능별 모듈 (Feature-Based)
│   │   │
│   │   ├── login/
│   │   │   ├── api/
│   │   │   │   └── authApi.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.ts
│   │   │   │   └── useLogin.ts
│   │   │   ├── store/
│   │   │   │   └── authStore.ts
│   │   │   ├── types/
│   │   │   │   └── auth.types.ts
│   │   │   ├── pages/
│   │   │   │   └── LoginPage.tsx
│   │   │   └── index.ts          # Public API
│   │   │
│   │   ├── services/
│   │   │   ├── contentsData/
│   │   │   │   ├── api/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── api.types.ts
│   │   │   │   │   └── api.utils.ts
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useTestHook.ts
│   │   │   │   │   └── useTestHookMutation.ts
│   │   │   │   ├── types/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── utils/
│   │   │   │   │   └── index.ts
│   │   │   │   └── pages/
│   │   │   │       ├── detail/
│   │   │   │       │   ├── index.tsx
│   │   │   │       │   └── message/
│   │   │   │       │       └── index.tsx
│   │   │   │       └── index.ts
│   │   │   │
│   │   │   ├── approvedData/
│   │   │   │   ├── api/
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── api.types.ts
│   │   │   │   │   └── api.utils.ts
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useSecondTestHook.ts
│   │   │   │   │   └── useSecondTestHookMutation.ts
│   │   │   │   ├── types/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── utils/
│   │   │   │   │   └── index.ts
│   │   │   │   └── pages/
│   │   │   │       └── index.tsx
│   │   │   │
│   │   │   ├── components/
│   │   │   │   ├── PartnerTable.tsx
│   │   │   │   ├── PartnerForm.tsx
│   │   │   │   └── PartnerStatusBadge.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── coupons/
│   │   │   ├── api/
│   │   │   │   ├── index.ts
│   │   │   │   ├── api.types.ts
│   │   │   │   └── api.utils.ts
│   │   │   ├── hooks/
│   │   │   │   └── useCoupons.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   ├── utils/
│   │   │   │   └── index.ts
│   │   │   ├── pages/
│   │   │   │   ├── detail/
│   │   │   │   │   └── index.tsx   // CouponDetailPage
│   │   │   │   └── index.tsx       // CouponListPage (default)
│   │   │   ├── components/
│   │   │   │   ├── CouponTable.tsx
│   │   │   │   └── CouponForm.tsx
│   │   │   └── index.ts            // Barrel File
│   │   │
│   │   ├── dashboard/
│   │   │   ├── api/
│   │   │   │   ├── index.ts
│   │   │   │   ├── api.types.ts
│   │   │   │   └── api.utils.ts
│   │   │   ├── hooks/
│   │   │   │   └── useDashboardStats.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   ├── utils/
│   │   │   │   └── index.ts
│   │   │   ├── pages/
│   │   │   │   └── index.tsx
│   │   │   ├── components/
│   │   │   │   ├── StatCards.tsx
│   │   │   │   └── RevenueChart.tsx
│   │   │   └── index.ts            // Barrel File
│   │   │
│   │   └── benefits/
│   │       ├── api/
│   │       │   ├── index.ts
│   │       │   ├── api.types.ts
│   │       │   └── api.utils.ts
│   │       ├── hooks/
│   │       │   └── useBenefits.ts
│   │       ├── types/
│   │       │   └── index.ts
│   │       ├── utils/
│   │       │   └── index.ts
│   │       ├── pages/
│   │       │   └── index.tsx       // BenefitsPage
│   │       ├── components/
│   │       │   └── ...
│   │       └── index.ts            // benefits Public API
│   │
│   ├── shared/                     # 전역 공통 모듈
│   │   ├── components/
│   │   │   ├── du-admin-ui/        # 라이브러리 성격 UI (index 허용)
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Input/
│   │   │   │   ├── Modal/
│   │   │   │   └── antd/
│   │   │   │       ├── Button/
│   │   │   │       └── ...
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── MainLayout.tsx
│   │   │   └── index.ts            # shared/components Public API
│   │   │
│   │   ├── hooks/
│   │   │   ├── useDebounce.ts
│   │   │   └── useLocalStorage.ts
│   │   │
│   │   ├── lib/
│   │   │   ├── axios.ts
│   │   │   ├── queryClient.ts
│   │   │   └── antd.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── date.ts
│   │   │   ├── env.ts
│   │   │   ├── file.ts
│   │   │   ├── masking.ts
│   │   │   ├── number.ts
│   │   │   ├── serialization.ts
│   │   │   ├── string.ts
│   │   │   └── style.ts
│   │   │
│   │   ├── api/
│   │   │   ├── dmrsApi.ts
│   │   │   ├── api.types.ts
│   │   │   ├── api.utils.ts
│   │   │   └── httpClient.ts
│   │   │
│   │   ├── types/
│   │   │   └── common.types.ts
│   │   │
│   │   └── constants/
│   │       └── index.ts
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   └── styles/
│       ├── global.css
│       ├── variables.css
│       └── reset.css
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── .env.example
├── .env.development
├── .env.production
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

---

## 1) 파일/폴더 케이스 규칙

### 컴포넌트 파일/폴더: PascalCase

- `Button/Button.tsx`
- `PartnerList.tsx`
- `RevenueChart.tsx`

### 훅/유틸/서비스/스토어: camelCase

- `usePartners.ts`
- `formatPhoneNumber.ts` (혹은 `format.ts` 내부 함수)
- `authApi.ts`
- `authStore.ts`

### 라우트 폴더/기능 폴더: kebab-case 또는 lowercase 단일

- features 안의 기능 폴더: `auth`, `partners`, `coupons` 처럼 lowercase 단수/복수 일관

---

## 2) 네이밍 단수/복수 규칙

도메인 "컬렉션"은 복수

- `features/partners`
- `features/coupons`

단일 엔티티(상세)는 파일명으로 표현

- `PartnerDetail.tsx`
- `CouponDetail.tsx`

타입 파일은 단수 엔티티 기준

- `partner.types.ts`
- `coupon.types.ts`

Feature 폴더는 lowercase, 기본은 복수형 컬렉션(`partners`, `coupons`).
단, 관용 도메인(`auth`, `dashboard`)은 예외 허용.

---

## 3) exports 규칙 (index.ts 남용 방지)

barrel(`index.ts`)는 최상위 1~2단만 허용

- `features/partners/index.ts` (Public API)
- `shared/components/index.ts`
- `shared/hooks/index.ts`

`shared/components/ui/Button/index.ts` 같은 "라이브러리형"은 허용.
feature 내부 barrel은 금지.

---

## 4) 타입/상수/유틸 파일 네이밍

### 타입

- 파일: `partner.types.ts`
- 타입명: `export type Partner = ...`
- 예시: `PartnerListResponse`, `PartnerCreateRequest`

### 상수

- 파일: `routes.ts`, `api.ts`
- 상수명은 **UPPER_SNAKE_CASE** 또는 **camelCase** 중 택1
  - `routes.partners.list`
  - 변하지 않는 값은 UPPER_SNAKE_CASE: `DEFAULT_PAGE_SIZE`

---

## 5) 컴포넌트 네이밍 패턴

페이지와 재사용 컴포넌트를 구분한다.

- 페이지: `PartnerListPage.tsx`, `PartnerDetailPage.tsx`
- 재사용 컴포넌트: `PartnerTable.tsx`, `PartnerForm.tsx`

---

## 6) API 함수 네이밍 규칙

```ts
// 권장 패턴
export const partnersApi = {
  // 조회 - get
  getList: (params) => {},      // GET /partners
  getDetail: (id) => {},        // GET /partners/:id

  // 생성 - create
  create: (data) => {},         // POST /partners

  // 수정 - update / patch
  update: (id, data) => {},     // PUT /partners/:id
  patch: (id, data) => {},      // PATCH /partners/:id

  // 삭제 - delete (remove는 지양)
  delete: (id) => {},           // DELETE /partners/:id

  // 특수 액션 - 동사로 시작
  approve: (id) => {},          // POST /partners/:id/approve
  reject: (id) => {},           // POST /partners/:id/reject
  restore: (id) => {},          // POST /partners/:id/restore
};

// 금지 패턴
export const partnersApi = {
  fetchPartners: () => {},      // fetch 대신 get
  removePartner: () => {},      // remove 대신 delete
  modifyPartner: () => {},      // modify 대신 update
  getAllPartners: () => {},      // getAll 대신 getList
};
```

---

## 7) Hook 네이밍 규칙

```ts
// 권장 패턴

// 데이터 조회 - use[Entity] / use[Entity]List
export function usePartner(id: string) {}     // 단일 조회
export function usePartners(params) {}        // 목록 조회
export function usePartnerList(params) {}     // 또는 명시적으로 List

// 데이터 변경 - use[Action][Entity]
export function useCreatePartner() {}
export function useUpdatePartner() {}
export function useDeletePartner() {}
export function useApprovePartner() {}

// 상태/로직 - use[Feature]
export function useAuth() {}
export function useFilter() {}
export function usePagination() {}

// 유틸 Hook - use[Util]
export function useDebounce() {}
export function useLocalStorage() {}
export function useClickOutside() {}

// 금지 패턴
export function useGetPartner() {}       // get 불필요
export function usePartnerMutation() {}  // 너무 추상적
export function partnerHook() {}         // use 접두사 필수
```

---

## 8) 이벤트 핸들러 네이밍

```tsx
// 권장 패턴 - handle 접두사 + 동사 (+ 명사)
function PartnerList() {
  const handleClick = () => {};
  const handleSubmit = () => {};
  const handleEdit = (id: string) => {};
  const handleDelete = (id: string) => {};
  const handleApprove = (id: string) => {};

  // Props로 전달받은 핸들러는 on 접두사
  return <PartnerTable onEdit={handleEdit} onDelete={handleDelete} />;
}

// Props 정의
interface PartnerTableProps {
  partners: Partner[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onSelect?: (id: string) => void;  // optional은 ?
}

// 금지 패턴
const clickHandler = () => {};      // 접미사 대신 접두사 사용
const onClick = () => {};           // 컴포넌트 내부는 handle
const edit = () => {};              // handle 누락
```

---

## 9) Boolean 변수/상태 네이밍

```ts
// 권장 패턴 - is/has/can/should 접두사
const [isLoading, setIsLoading] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const [hasError, setHasError] = useState(false);
const [canEdit, setCanEdit] = useState(true);
const [shouldRefetch, setShouldRefetch] = useState(false);

// 타입 정의
interface Partner {
  id: string;
  name: string;
  isActive: boolean;
  hasContract: boolean;
  canDelete: boolean;
}

// 금지 패턴
const [loading, setLoading] = useState(false);
const [open, setOpen] = useState(false);
const [error, setError] = useState(false);
```

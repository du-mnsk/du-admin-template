# du-admin-ui 컴포넌트 사용 가이드

## 목차

1. [Antd 컴포넌트](#antd-컴포넌트)
2. [Form 컴포넌트](#form-컴포넌트)
3. [기타 컴포넌트](#기타-컴포넌트)
4. [공통 패턴](#공통-패턴)

---

# Antd 컴포넌트

Antd 컴포넌트는 Ant Design을 래핑한 커스텀 컴포넌트입니다. 모든 컴포넌트는 `Antd` 객체를 통해 접근합니다.

## 기본 사용법

```typescript
import { Antd } from '@/shared/components/du-admin-ui/Antd'

<Antd.Button type="primary">버튼</Antd.Button>
<Antd.Input placeholder="입력하세요" />
```

## 컴포넌트 목록

### 1. Antd.Input

텍스트 입력 필드입니다.

```typescript
<Antd.Input
  placeholder="입력하세요"
  type="text"  // text, password, number, email 등
  maxLength={100}
  showCount={true}
  prefix="https://"
  suffix=".com"
  disabled={false}
  readOnly={false}
  allowClear={true}
  onPressEnter={(e) => console.log('Enter pressed')}
  onChange={(e) => console.log(e.target.value)}
/>
```

**주요 Props:**
- `defaultValue`: 기본 값
- `maxLength`: 최대 입력 길이
- `showCount`: 입력 길이 표시 여부
- `prefix`: 입력 접두사
- `suffix`: 입력 접미사
- `readOnly`: 읽기 전용 여부
- `disabled`: 비활성화 여부
- `type`: 입력 타입 (text, password, number, email 등)
- `placeholder`: 플레이스홀더
- `allowClear`: 초기화 버튼 표시 여부

### 2. Antd.TextArea

여러 줄 텍스트 입력 필드입니다.

```typescript
<Antd.TextArea
  placeholder="텍스트를 입력하세요"
  rows={4}
  showCount={true}
  maxLength={500}
  disabled={false}
/>
```

**주요 Props:**
- `rows`: 줄 수
- `showCount`: 글자 수 표시 여부
- `maxLength`: 최대 길이
- `placeholder`: 플레이스홀더
- `disabled`: 비활성화 여부

### 3. Antd.Select

선택 필드입니다.

```typescript
<Antd.Select
  placeholder="선택하세요"
  allowClear={true}
  mode="multiple"  // 다중 선택
  showSearch={true}
  loading={false}
  width={200}  // 커스텀 너비
>
  <Antd.SelectOption value="option1">옵션 1</Antd.SelectOption>
  <Antd.SelectOption value="option2">옵션 2</Antd.SelectOption>
  <Antd.SelectOption value="option3" disabled>옵션 3</Antd.SelectOption>
</Antd.Select>
```

**주요 Props:**
- `allowClear`: 선택 초기화 여부
- `disabled`: 선택 비활성화 여부
- `mode`: `'multiple' | 'tags'` - 다중 선택 모드
- `loading`: 로딩 여부
- `listHeight`: 목록 높이
- `placeholder`: 플레이스홀더
- `showSearch`: 검색 기능 활성화
- `width`: 커스텀 너비 (number | string)

**특징:**
- `getPopupContainer`가 자동으로 설정되어 부모 요소에 팝업이 렌더링됩니다

### 4. Antd.Button

버튼 컴포넌트입니다.

```typescript
<Antd.Button 
  type="primary"  // primary, default, dashed, text, link, ghost
  size="middle"  // large, middle, small
  danger={false}
  disabled={false}
  loading={false}
  icon={<Icon />}
  onClick={() => console.log('clicked')}
>
  버튼
</Antd.Button>
```

**주요 Props:**
- `type`: 버튼 타입
- `size`: 버튼 크기
- `danger`: 위험 스타일
- `disabled`: 비활성화
- `loading`: 로딩 상태
- `icon`: 아이콘
- `onClick`: 클릭 핸들러

### 5. Antd.Table

테이블 컴포넌트입니다.

```typescript
const columns = [
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '나이',
    dataIndex: 'age',
    key: 'age',
  },
]

const dataSource = [
  { key: '1', name: 'John', age: 32 },
  { key: '2', name: 'Jane', age: 28 },
]

<Antd.Table
  columns={columns}
  dataSource={dataSource}
  pagination={false}
  bordered={true}
/>
```

**주요 Props:**
- `columns`: 컬럼 정의 배열
- `dataSource`: 데이터 배열
- `pagination`: 페이지네이션 설정
- `bordered`: 테두리 표시 여부
- `loading`: 로딩 상태
- `rowKey`: 행 키 지정

### 6. Antd.Modal

모달 다이얼로그입니다.

```typescript
<Antd.Modal
  title="모달 제목"
  open={isOpen}
  onOk={() => console.log('OK')}
  onCancel={() => setIsOpen(false)}
  width={600}
  centered={true}
>
  모달 내용
</Antd.Modal>
```

**주요 Props:**
- `title`: 제목
- `open`: 열림 상태
- `onOk`: 확인 핸들러
- `onCancel`: 취소 핸들러
- `width`: 너비
- `centered`: 중앙 정렬
- `footer`: 커스텀 푸터

### 7. Antd.DatePicker

날짜 선택기입니다.

```typescript
<Antd.DatePicker
  format="YYYY-MM-DD HH:mm"
  showTime={true}
  picker="date"  // date, month, year
  placeholder="날짜를 선택하세요"
  disabled={false}
  allowClear={true}
/>
```

**주요 Props:**
- `format`: 날짜 형식
- `showTime`: 시간 선택 표시
- `picker`: 선택 유형
- `placeholder`: 플레이스홀더
- `disabled`: 비활성화
- `allowClear`: 초기화 버튼

### 8. Antd.RangePicker

날짜 범위 선택기입니다.

```typescript
<Antd.RangePicker
  format="YYYY-MM-DD"
  showTime={true}
  placeholder={['시작일', '종료일']}
/>
```

### 9. Antd.Checkbox

체크박스입니다.

```typescript
<Antd.Checkbox
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  disabled={false}
>
  체크박스 라벨
</Antd.Checkbox>
```

### 10. Antd.CheckboxGroup

체크박스 그룹입니다.

```typescript
<Antd.CheckboxGroup
  defaultValue={['option1', 'option2']}
  onChange={(checkedValues) => console.log(checkedValues)}
>
  <Antd.Checkbox value="option1">옵션 1</Antd.Checkbox>
  <Antd.Checkbox value="option2">옵션 2</Antd.Checkbox>
  <Antd.Checkbox value="option3">옵션 3</Antd.Checkbox>
</Antd.CheckboxGroup>
```

### 11. Antd.Switch

스위치 토글입니다.

```typescript
<Antd.Switch
  checked={isOn}
  onChange={(checked) => setIsOn(checked)}
  checkedChildren="ON"
  unCheckedChildren="OFF"
  disabled={false}
  loading={false}
  size="default"  // default, small
/>
```

### 12. Antd.Tag

태그 컴포넌트입니다.

```typescript
<Antd.Tag color="blue">태그</Antd.Tag>
<Antd.Tag closable onClose={() => console.log('closed')}>닫기 가능</Antd.Tag>
```

### 13. Antd.Badge

배지 컴포넌트입니다.

```typescript
<Antd.Badge count={5}>
  <Antd.Button>알림</Antd.Button>
</Antd.Badge>
```

### 14. Antd.Menu

메뉴 컴포넌트입니다.

```typescript
<Antd.Menu
  mode="horizontal"  // horizontal, vertical, inline
  selectedKeys={['1']}
  onClick={(e) => console.log('clicked', e.key)}
>
  <Antd.MenuItem key="1">메뉴 1</Antd.MenuItem>
  <Antd.MenuItem key="2">메뉴 2</Antd.MenuItem>
</Antd.Menu>
```

### 15. Antd.Tabs

탭 컴포넌트입니다.

```typescript
<Antd.Tabs
  activeKey="1"
  onChange={(key) => console.log(key)}
>
  <Antd.TabPane tab="탭 1" key="1">내용 1</Antd.TabPane>
  <Antd.TabPane tab="탭 2" key="2">내용 2</Antd.TabPane>
</Antd.Tabs>
```

### 16. Antd.Pagination

페이지네이션입니다.

```typescript
<Antd.Pagination
  current={1}
  total={100}
  pageSize={10}
  onChange={(page, pageSize) => console.log(page, pageSize)}
  showSizeChanger={true}
  showTotal={(total) => `총 ${total}개`}
/>
```

### 17. Antd.Card

카드 컴포넌트입니다.

```typescript
<Antd.Card
  title="카드 제목"
  extra={<Antd.Button>더보기</Antd.Button>}
  bordered={true}
>
  카드 내용
</Antd.Card>
```

### 18. Antd.Dropdown

드롭다운 메뉴입니다.

```typescript
const menu = (
  <Antd.Menu>
    <Antd.MenuItem key="1">옵션 1</Antd.MenuItem>
    <Antd.MenuItem key="2">옵션 2</Antd.MenuItem>
  </Antd.Menu>
)

<Antd.Dropdown overlay={menu} trigger={['click']}>
  <Antd.Button>드롭다운</Antd.Button>
</Antd.Dropdown>
```

### 19. Antd.Descriptions

설명 목록입니다.

```typescript
<Antd.Descriptions title="사용자 정보" bordered>
  <Antd.DescriptionsItem label="이름">John</Antd.DescriptionsItem>
  <Antd.DescriptionsItem label="나이">32</Antd.DescriptionsItem>
</Antd.Descriptions>
```

### 20. Antd.Skeleton

스켈레톤 로딩입니다.

```typescript
<Antd.Skeleton active loading={isLoading}>
  <div>실제 컨텐츠</div>
</Antd.Skeleton>
```

### 21. Antd.InputPassword

비밀번호 입력 필드입니다.

```typescript
<Antd.InputPassword
  placeholder="비밀번호를 입력하세요"
  visibilityToggle={true}
/>
```

### 22. Antd.SearchInput

검색 입력 필드입니다.

```typescript
<Antd.SearchInput
  placeholder="검색하세요"
  onSearch={(value) => console.log(value)}
  enterButton={true}
/>
```

### 23. Antd.Calendar

캘린더 컴포넌트입니다.

```typescript
<Antd.Calendar
  onPanelChange={(date, mode) => console.log(date, mode)}
  onSelect={(date) => console.log(date)}
/>
```

### 24. Antd.Carousel

캐러셀 컴포넌트입니다.

```typescript
<Antd.Carousel autoplay>
  <div><h3>슬라이드 1</h3></div>
  <div><h3>슬라이드 2</h3></div>
  <div><h3>슬라이드 3</h3></div>
</Antd.Carousel>
```

---

# Form 컴포넌트

Form 컴포넌트는 Ant Design의 Form을 래핑한 커스텀 폼 컴포넌트입니다. 모든 Form 필드 컴포넌트는 `FormFieldWrapper`를 통해 일관된 레이아웃과 스타일을 제공합니다.

## 기본 구조

```typescript
import Form from '@/shared/components/du-admin-ui/Form'

<Form name="form-name" initialValues={{}} onFinish={handleSubmit}>
  <Form.Input ... />
  <Form.Select ... />
  {/* 기타 필드들 */}
</Form>
```

## Form Props

### 주요 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | 폼 이름 (필수) |
| `initialValues` | `object` | `{}` | 폼 초기값 |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | 폼 레이아웃 |
| `onFinish` | `(values: any) => void` | - | 제출 핸들러 |
| `confirmFinish` | `boolean` | `true` | 제출 시 확인 모달 표시 여부 |
| `footer` | `React.ReactElement` | - | 폼 하단 푸터 |
| `onCancel` | `() => void` | - | 취소 핸들러 |

### 특징

- **자동 확인 모달**: `confirmFinish={true}`일 때 제출 시 확인 모달이 자동으로 표시됩니다
- **자동 에러 처리**: 유효성 검사 실패 시 자동으로 에러 메시지와 포커스 이동이 처리됩니다
- **반응형 레이아웃**: 내부적으로 Row/Col을 사용하여 반응형 레이아웃을 제공합니다

## 공통 Props (모든 Form 필드 컴포넌트)

모든 Form 필드 컴포넌트는 다음 공통 props를 가집니다:

### colSetProps

레이아웃 설정을 위한 props입니다.

```typescript
colSetProps?: {
  defaultColSize?: 'fill' | 'flat' | 'tiny' | number  // 기본: 12
  xsColSize?: number  // 모바일 사이즈 (기본: 24)
  colOffset?: number  // 왼쪽 여백
  style?: React.CSSProperties
}
```

**ColSize 값:**
- `'fill'`: 24 (전체 너비)
- `'flat'`: 6
- `'tiny'`: 3
- `number`: 직접 숫자 지정 (1-24)

### formItemProps

Ant Design의 `Form.Item`에 전달되는 props입니다.

```typescript
formItemProps?: {
  name: string  // 필드 이름 (필수)
  label: string | React.ReactNode  // 라벨
  rules?: Rule[]  // 유효성 검사 규칙
  required?: boolean  // 필수 여부
  help?: React.ReactNode  // 도움말
  tooltip?: string  // 툴팁
  hidden?: boolean  // 숨김 여부
  hasFeedback?: boolean  // 피드백 표시 여부
  // ... 기타 Form.Item props
}
```

## Form 필드 컴포넌트

### 1. Form.Input

텍스트 입력 필드입니다.

```typescript
<Form.Input
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ 
    name: 'input', 
    label: '입력',
    rules: [{ required: true, message: '입력해주세요.' }]
  }}
  childrenProps={{ 
    placeholder: '입력하세요.',
    type: 'text',  // text, password, number, email 등
    maxLength: 100,
    showCount: true
  }}
/>
```

**childrenProps (Antd.Input props):**
- `placeholder`: 플레이스홀더
- `type`: 입력 타입
- `maxLength`: 최대 길이
- `showCount`: 글자 수 표시
- `prefix`: 접두사
- `suffix`: 접미사
- `disabled`: 비활성화
- `readOnly`: 읽기 전용

### 2. Form.Select

선택 필드입니다.

```typescript
<Form.Select
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'select', label: '선택' }}
  childrenProps={{ 
    placeholder: '선택하세요.',
    allowClear: true,
    mode: 'multiple'  // 다중 선택
  }}
  items={[
    { text: '옵션 1', value: 'option1' },
    { text: '옵션 2', value: 'option2' },
    { text: '옵션 3', value: 'option3', disabled: true }
  ]}
/>
```

**items:**
```typescript
items?: Array<{
  text: string
  value: string | number | boolean
  disabled?: boolean
}>
```

**childrenProps (Antd.Select props):**
- `placeholder`: 플레이스홀더
- `allowClear`: 초기화 버튼 표시
- `mode`: `'multiple'` (다중 선택)
- `showSearch`: 검색 기능 활성화

### 3. Form.Checkbox

체크박스 그룹입니다.

```typescript
<Form.Checkbox
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'checkbox', label: '체크박스' }}
  childrenProps={{ defaultValue: [1, 2] }}
  items={[
    { label: '체크박스 1', value: 1 },
    { label: '체크박스 2', value: 2 }
  ]}
  span={8}  // 각 체크박스 간격 (Row의 Col span)
/>
```

**items:**
```typescript
items?: Array<{
  label: string
  value: string | number | boolean | null
}>
```

**특징:**
- `span`을 지정하면 Row/Col로 배치됩니다
- `span`이 없으면 기본적으로 가로로 나열됩니다

### 4. Form.Radio

라디오 버튼 그룹입니다.

```typescript
<Form.Radio
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'radio', label: '라디오' }}
  childrenProps={{ defaultValue: 'radio1' }}
  items={[
    { text: '라디오 1', value: 'radio1' },
    { text: '라디오 2', value: 'radio2' }
  ]}
/>
```

**items:**
```typescript
items?: Array<{
  text: string
  value: string | number | boolean | null
}>
```

### 5. Form.Switch

스위치 토글입니다.

```typescript
<Form.Switch
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'switch', label: '스위치' }}
  childrenProps={{ 
    defaultChecked: true,
    checkedChildren: 'ON',
    unCheckedChildren: 'OFF'
  }}
/>
```

**childrenProps (Antd.Switch props):**
- `defaultChecked`: 초기 체크 상태
- `checkedChildren`: 체크 시 표시 텍스트
- `unCheckedChildren`: 언체크 시 표시 텍스트
- `disabled`: 비활성화
- `loading`: 로딩 상태
- `size`: `'default' | 'small'`

**주의:** Switch는 `valuePropName="checked"`가 자동으로 설정됩니다.

### 6. Form.TextArea

여러 줄 텍스트 입력 필드입니다.

```typescript
<Form.TextArea
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'textarea', label: '텍스트 영역' }}
  childrenProps={{ 
    placeholder: '텍스트를 입력하세요.',
    rows: 4,
    showCount: true,
    maxLength: 500
  }}
/>
```

**childrenProps (Antd.TextArea props):**
- `placeholder`: 플레이스홀더
- `rows`: 줄 수
- `showCount`: 글자 수 표시
- `maxLength`: 최대 길이
- `disabled`: 비활성화

### 7. Form.DatePicker

날짜 선택기입니다.

```typescript
<Form.DatePicker
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'date', label: '날짜' }}
  childrenProps={{ 
    format: 'YYYY-MM-DD HH:mm',
    showTime: true,
    picker: 'date'  // date, month, year
  }}
/>
```

**childrenProps (Antd.DatePicker props):**
- `format`: 날짜 형식 (기본: `'YYYY-MM-DD HH:mm'`)
- `showTime`: 시간 선택 표시
- `picker`: `'date' | 'month' | 'year'`
- `disabled`: 비활성화

**특징:**
- `inputReadOnly`가 자동으로 `true`로 설정됩니다
- `allowClear`는 `required`가 아닐 때만 표시됩니다

### 8. Form.ColorPicker

색상 선택기입니다.

```typescript
<Form.ColorPicker
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'color', label: '색상' }}
  childrenProps={{ placeholder: '색상을 선택하세요.' }}
/>
```

**특징:**
- 내부적으로 `Input type="color"`를 사용합니다

### 9. Form.Editor

리치 텍스트 에디터입니다.

```typescript
<Form.Editor
  colSetProps={{ defaultColSize: 24 }}
  formItemProps={{ name: 'editor', label: '에디터' }}
/>
```

**특징:**
- SunEditor를 사용합니다
- 전체 너비(`defaultColSize: 24`) 사용을 권장합니다

### 10. Form.Title

섹션 제목입니다.

```typescript
<Form.Title>섹션 제목</Form.Title>

// 또는
<Form.Title children="섹션 제목" />
```

**특징:**
- 항상 전체 너비(`defaultColSize: 24`)로 표시됩니다
- Form.Item 없이 제목만 표시됩니다

### 11. Form.UploadDragger

이미지 파일 업로드 (즉시 업로드)입니다.

```typescript
<Form.UploadDragger
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'upload', label: '이미지 업로드' }}
  name="upload"
  label="이미지를 드래그하거나 클릭하여 업로드하세요"
  description="PNG, JPG 파일만 업로드 가능합니다"
  imgPath="/upload"  // 필수: 업로드 경로
  allowType="image/png"  // 'image/png' | 'image/jpeg'
  previewImage=""  // 미리보기 이미지 URL
  maxWidth="400px"
  maxHeight="300px"
/>
```

**특징:**
- 이미지 업로드 시 즉시 서버에 업로드됩니다
- 업로드 성공 시 미리보기 이미지가 표시됩니다
- `imgPath`는 필수 prop입니다

### 12. Form.UploadReplaceDragger

이미지 파일 업로드 (폼 제출 시 업로드)입니다.

```typescript
const [imgUploadRequest, setImgUploadRequest] = useState<UploadRequestOption | undefined>()

<Form.UploadReplaceDragger
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'upload', label: '이미지 업로드' }}
  name="upload"
  label="이미지를 드래그하거나 클릭하여 업로드하세요"
  description="PNG, JPG 파일만 업로드 가능합니다"
  imgPath="/upload"  // 필수
  allowType="image/png"
  previewImage=""
  imgUploadRequest={imgUploadRequest}
  setImgUploadRequest={setImgUploadRequest}
/>
```

**특징:**
- 이미지 선택 시 로컬 미리보기만 표시됩니다
- 폼 제출 시 `imgUploadRequest`를 사용하여 업로드합니다

### 13. Form.UploadCertFile

인증서 파일 업로드 (이미지, PDF)입니다.

```typescript
const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

<Form.UploadCertFile
  colSetProps={{ defaultColSize: 12 }}
  formItemProps={{ name: 'upload', label: '인증서 파일 업로드' }}
  name="upload"
  label="인증서 파일을 업로드하세요"
  description="PNG, JPG, PDF 파일만 업로드 가능합니다"
  imgPath="/upload"  // 필수
  allowTypes={['image/png', 'image/jpeg', 'application/pdf']}
  downloadURL=""  // 다운로드 가능한 파일 URL
  uploadRequest={uploadRequest}
  setUploadRequest={setUploadRequest}
/>
```

**특징:**
- 이미지와 PDF 파일을 모두 지원합니다
- `downloadURL`이 있으면 다운로드 링크가 표시됩니다
- 폼 제출 시 `uploadRequest`를 사용하여 업로드합니다

## Form Hooks

### Form.useForm

폼 인스턴스를 생성합니다.

```typescript
const [form] = Form.useForm()

<Form form={form} name="form-name">
  {/* 필드들 */}
</Form>

// 폼 제출
form.submit()

// 필드 값 설정
form.setFieldsValue({ fieldName: 'value' })

// 필드 값 가져오기
const values = form.getFieldsValue()

// 유효성 검사
form.validateFields().then((values) => {
  console.log('Valid values:', values)
})
```

### Form.useWatch

특정 필드의 값을 실시간으로 감시합니다.

```typescript
const watchedValue = Form.useWatch('fieldName', form)
```

## 유효성 검사 (Validation)

### 기본 규칙

```typescript
formItemProps={{
  name: 'email',
  label: '이메일',
  rules: [
    { required: true, message: '이메일을 입력해주세요.' },
    { type: 'email', message: '올바른 이메일 형식이 아닙니다.' },
    { min: 5, message: '최소 5자 이상 입력해주세요.' },
    { max: 50, message: '최대 50자까지 입력 가능합니다.' }
  ]
}}
```

### 커스텀 유효성 검사

```typescript
formItemProps={{
  name: 'password',
  label: '비밀번호',
  rules: [
    { required: true, message: '비밀번호를 입력해주세요.' },
    {
      validator: (_, value) => {
        if (!value) {
          return Promise.resolve()
        }
        if (value.length < 8) {
          return Promise.reject(new Error('비밀번호는 8자 이상이어야 합니다.'))
        }
        if (!/[A-Z]/.test(value)) {
          return Promise.reject(new Error('대문자를 포함해야 합니다.'))
        }
        return Promise.resolve()
      }
    }
  ]
}}
```

### 의존성 필드

```typescript
formItemProps={{
  name: 'confirmPassword',
  label: '비밀번호 확인',
  dependencies: ['password'],
  rules: [
    {
      validator: (_, value) => {
        const password = form.getFieldValue('password')
        if (value !== password) {
          return Promise.reject(new Error('비밀번호가 일치하지 않습니다.'))
        }
        return Promise.resolve()
      }
    }
  ]
}}
```

## 초기값 설정

### Form 레벨 초기값 (권장)

```typescript
<Form 
  name="form-name" 
  initialValues={{ 
    input: '기본 값',
    select: 'option1',
    checkbox: [1, 2],
    switch: true
  }}
>
  <Form.Input formItemProps={{ name: 'input' }} />
  <Form.Select formItemProps={{ name: 'select' }} />
</Form>
```

**장점:**
- Form 상태와 완전히 연동됩니다
- 폼 제출 시 값이 포함됩니다
- Form.Item의 `name`과 자동 매칭됩니다

### childrenProps의 defaultValue (비권장)

```typescript
<Form.Select
  formItemProps={{ name: 'select' }}
  childrenProps={{ defaultValue: 'option1' }}
/>
```

**주의:**
- Form 상태와 분리되어 제출 시 값이 포함되지 않을 수 있습니다
- 특수한 경우에만 사용하세요

## 실제 사용 예시

### 기본 폼

```typescript
import Form from '@/shared/components/du-admin-ui/Form'
import { Antd } from '@/shared/components/du-admin-ui/Antd'

const MyForm = () => {
  const [form] = Form.useForm()

  const handleSubmit = (values: any) => {
    console.log('Form values:', values)
    // API 호출 등
  }

  return (
    <Form 
      name="my-form" 
      form={form}
      initialValues={{ name: '', email: '' }}
      onFinish={handleSubmit}
      footer={
        <>
          <Antd.Button onClick={() => form.resetFields()}>초기화</Antd.Button>
          <Antd.Button type="primary" htmlType="submit">제출</Antd.Button>
        </>
      }
    >
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'name',
          label: '이름',
          rules: [{ required: true, message: '이름을 입력해주세요.' }]
        }}
        childrenProps={{ placeholder: '이름을 입력하세요.' }}
      />
      
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'email',
          label: '이메일',
          rules: [
            { required: true, message: '이메일을 입력해주세요.' },
            { type: 'email', message: '올바른 이메일 형식이 아닙니다.' }
          ]
        }}
        childrenProps={{ 
          type: 'email',
          placeholder: '이메일을 입력하세요.' 
        }}
      />
      
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ 
          name: 'category', 
          label: '카테고리',
          rules: [{ required: true, message: '카테고리를 선택해주세요.' }]
        }}
        childrenProps={{ placeholder: '카테고리를 선택하세요.' }}
        items={[
          { text: '카테고리 1', value: 'cat1' },
          { text: '카테고리 2', value: 'cat2' }
        ]}
      />
    </Form>
  )
}
```

### 조건부 필드

```typescript
const category = Form.useWatch('category', form)

<Form.Select
  formItemProps={{ name: 'subCategory', label: '하위 카테고리' }}
  items={
    category === 'cat1' 
      ? [{ text: '하위 1', value: 'sub1' }]
      : [{ text: '하위 2', value: 'sub2' }]
  }
/>
```

---

# 기타 컴포넌트

Antd와 Form 외의 독립적인 컴포넌트들입니다.

## 컴포넌트 목록

### 1. Chart

ECharts를 사용한 차트 컴포넌트입니다.

```typescript
import Chart from '@/shared/components/du-admin-ui/Chart'

<Chart
  option={chartOption}  // ECharts 옵션 객체
  height={400}  // 차트 높이 (number | 'auto')
/>
```

**주요 Props:**
- `option`: ECharts 옵션 객체 (ChartOption 타입)
- `height`: 차트 높이 (number | 'auto', 기본값: undefined)

**특징:**
- `option`이 없으면 로딩 스피너가 표시됩니다
- ECharts의 모든 옵션을 지원합니다

### 2. Editor

SunEditor를 사용한 리치 텍스트 에디터입니다.

```typescript
import Editor from '@/shared/components/du-admin-ui/Editor'

<Editor
  value={content}
  onChange={(value) => setContent(value)}
/>
```

**주요 Props:**
- `value`: 에디터 내용 (string, 기본값: '')
- `onChange`: 내용 변경 핸들러 `(value: string) => void`

**특징:**
- SunEditor의 complex 버튼 리스트를 사용합니다
- 최소 높이는 400px입니다
- 이미지 업로드 기능이 포함되어 있습니다 (현재 TODO 상태)

### 3. Error

에러 페이지 컴포넌트입니다.

```typescript
import { Error } from '@/shared/components/du-admin-ui/Error'

<Error
  img="/error-image.png"
  msg="에러 메시지"
/>
```

**주요 Props:**
- `img`: 에러 이미지 경로 (string)
- `msg`: 에러 메시지 (string)

**특징:**
- 반응형 레이아웃을 지원합니다
- 홈으로 돌아가기 링크가 포함되어 있습니다

### 4. ImagePreviewButton

이미지 미리보기 버튼 컴포넌트입니다.

```typescript
import { ImagePreviewButton } from '@/shared/components/du-admin-ui/ImagePreviewButton'

<ImagePreviewButton
  image="/path/to/image.jpg"
/>
```

**주요 Props:**
- `image`: 이미지 URL (string | undefined)

**특징:**
- `image`가 없으면 렌더링되지 않습니다
- "보기" 링크를 클릭하면 이미지 미리보기가 표시됩니다
- Ant Design의 Image 컴포넌트를 사용합니다

### 5. Loading

전체 화면 로딩 스피너 컴포넌트입니다.

```typescript
import Loading from '@/shared/components/du-admin-ui/Loading'

<Loading />
```

**특징:**
- 전체 화면을 덮는 로딩 오버레이입니다
- 반투명 배경과 스피너 애니메이션이 포함되어 있습니다
- z-index: 9998로 설정되어 있습니다

### 6. Overlay

블러 효과가 있는 오버레이 컴포넌트입니다.

```typescript
import Overlay from '@/shared/components/du-admin-ui/Overlay'

<Overlay show={isVisible} />
```

**주요 Props:**
- `show`: 표시 여부 (boolean)

**특징:**
- `show={true}`일 때 전체 화면 오버레이가 표시됩니다
- backdrop-filter: blur(6px) 효과가 적용됩니다
- styled-components로 구현된 스타일드 컴포넌트입니다

### 7. Panel

테이블을 감싸는 패널 컴포넌트입니다. CSV 및 이미지 다운로드 기능을 제공합니다.

```typescript
import Panel from '@/shared/components/du-admin-ui/Panel'

<Panel
  title="패널 제목"
  fileTitle="파일명"
  showExtraDownloadBtn={true}
  callbackFn={async () => {
    // 추가 다운로드 버튼 클릭 시 실행할 함수
  }}
  radio={<RadioGroup />}
>
  <table>
    {/* 테이블 내용 */}
  </table>
</Panel>
```

**주요 Props:**
- `title`: 패널 제목 (string | undefined)
- `fileTitle`: 다운로드 파일명 (string, 기본값: title)
- `showExtraDownloadBtn`: 추가 다운로드 버튼 표시 여부 (boolean, 기본값: false)
- `callbackFn`: 추가 다운로드 버튼 클릭 핸들러 `() => Promise<void> | void | boolean`
- `radio`: 라디오 버튼 그룹 (JSX.Element | undefined)
- `children`: 패널 내용 (React.ReactNode)

**특징:**
- 헤더에 CSV 다운로드, 이미지 다운로드 버튼이 자동으로 표시됩니다
- `#PartnerTable` ID를 가진 테이블이 있으면 특별한 CSV 다운로드 로직이 실행됩니다
- 테이블을 이미지로 변환하여 다운로드할 수 있습니다

### 8. References

저작권 표시 컴포넌트입니다.

```typescript
import { References } from '@/shared/components/du-admin-ui/References'

<References year={2024} />
```

**주요 Props:**
- `year`: 저작권 연도 (number)

**특징:**
- 반응형 레이아웃을 지원합니다
- "(주)데이터유니버스. All Rights Reserved." 메시지가 표시됩니다

### 9. RenderIf / RenderSwitch

조건부 렌더링 컴포넌트입니다.

```typescript
import { RenderIf, RenderSwitch } from '@/shared/components/du-admin-ui/RenderIf'

// 조건이 true일 때만 렌더링
<RenderIf when={isVisible}>
  <div>보이는 내용</div>
</RenderIf>

// 조건에 따라 다른 내용 렌더링
<RenderSwitch when={isActive}>
  <div>활성 상태</div>
  <div>비활성 상태</div>
</RenderSwitch>
```

**RenderIf Props:**
- `when`: 렌더링 조건 (boolean)
- `children`: 렌더링할 내용 (ReactNode)

**RenderSwitch Props:**
- `when`: 조건 (boolean)
- `children`: [true일 때 내용, false일 때 내용] (튜플)

**특징:**
- Fragment를 사용하여 불필요한 DOM 요소를 생성하지 않습니다
- 간단한 조건부 렌더링에 유용합니다

### 10. RequireFullscreen

전체화면 모드를 요구하는 컴포넌트입니다.

```typescript
import { RequireFullscreen } from '@/shared/components/du-admin-ui/RequireFullscreen'
import { useRef } from 'react'

const MyComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null)

  return (
    <RequireFullscreen component={elementRef}>
      {(isFullscreen) => (
        <div ref={elementRef}>
          {isFullscreen ? '전체화면 모드' : '일반 모드'}
        </div>
      )}
    </RequireFullscreen>
  )
}
```

**주요 Props:**
- `component`: 전체화면으로 만들 요소의 ref (React.RefObject<HTMLElement>)
- `children`: 렌더 함수 `(isFullscreen: boolean) => ReactNode`

**특징:**
- 클릭 시 전체화면 모드로 전환/해제됩니다
- 전체화면 상태를 children 함수에 전달합니다
- 브라우저 호환성을 위해 여러 이벤트 리스너를 등록합니다

### 11. Table

고급 테이블 컴포넌트입니다. 검색 필터, 범위 필터, 이미지 미리보기 등 다양한 기능을 제공합니다.

```typescript
import Table from '@/shared/components/du-admin-ui/Table'

<Table
  id="my-table"
  rowKey="id"
  data={tableData}
  pagination={{
    current: 1,
    pageSize: 10,
    total: 100
  }}
  loading={isLoading}
  onChange={(pagination, filters, sorter) => {
    // 테이블 변경 핸들러
  }}
  onSelectedRows={(selectedKeys) => {
    // 선택된 행 핸들러
  }}
  onClickRow={(record, index) => {
    // 행 클릭 핸들러
  }}
  previewImageId="imageUrl"
  summaryValues={[100, 200, 300]}
>
  <Table.Column
    title="이름"
    dataIndex="name"
    searchFilter
  />
  <Table.Column
    title="나이"
    dataIndex="age"
    searchRangeFilter
    searchRangeFilterProps={{
      min: 0,
      max: 100,
      step: 1,
      defaultValue: [0, 100]
    }}
  />
  <Table.Column
    title="날짜"
    dataIndex="date"
    searchMonthFilter
  />
  <Table.Top>
    <Button>추가 버튼</Button>
  </Table.Top>
</Table>
```

**주요 Props:**
- `id`: 테이블 ID (string | undefined)
- `rowKey`: 행 키 필드명 (string, 필수)
- `data`: 테이블 데이터 배열 (T[] | undefined)
- `pagination`: 페이지네이션 설정 (Pagination | undefined)
- `loading`: 로딩 상태 (boolean, 기본값: false)
- `onChange`: 테이블 변경 핸들러
- `onSelectedRows`: 선택된 행 핸들러 `(selectedRowKeys: React.Key[]) => void`
- `onClickRow`: 행 클릭 핸들러 `(record: T, index: number | undefined) => void`
- `disabledTopSection`: 상단 섹션 비활성화 (boolean | undefined)
- `previewImageId`: 이미지 미리보기 컬럼의 dataIndex (string | undefined)
- `summaryValues`: 하단 합계 값 배열 ((number | string)[] | undefined)
- `rowSelection`: 행 선택 설정 (TableRowSelection<T> | undefined)
- `scroll`: 스크롤 설정
- `footer`: 커스텀 푸터

**Table.Column Props:**
- `searchFilter`: 검색 필터 활성화 (boolean | undefined)
- `searchRangeFilter`: 범위 검색 필터 활성화 (boolean | undefined)
- `searchRangeFilterProps`: 범위 필터 설정
  - `min`: 최소값 (number)
  - `max`: 최대값 (number)
  - `step`: 단계 (number)
  - `defaultValue`: 기본값 [number, number]
- `searchMonthFilter`: 월 선택 필터 활성화 (boolean | undefined)
- `alias`: 필터/정렬 시 사용할 별칭 (string | undefined)
- 기타 Ant Design Table Column props

**특징:**
- 상단에 총 건수가 자동으로 표시됩니다
- `Table.Top`을 사용하여 상단에 추가 버튼을 배치할 수 있습니다
- `summaryValues`를 사용하여 하단에 합계 행을 표시할 수 있습니다
- 이미지 URL이 있는 컬럼은 자동으로 미리보기 아이콘이 표시됩니다
- 필터는 메뉴 모드로 동작합니다

### 12. VerificationCodeInput

인증 코드 입력 컴포넌트입니다.

```typescript
import { VerificationCodeInput } from '@/shared/components/du-admin-ui/VerificationCodeInput'

<VerificationCodeInput
  length={6}
  autoFocus={true}
  onlyNumber={true}
  onChange={(value) => console.log(value)}
  onComplete={(value) => console.log('완료:', value)}
/>
```

**주요 Props:**
- `length`: 입력 길이 (number, 기본값: 6)
- `autoFocus`: 자동 포커스 (boolean | undefined)
- `validChars`: 허용할 문자 (string | undefined)
- `onlyNumber`: 숫자만 입력 허용 (boolean | undefined)
- `inputProps`: input 요소에 전달할 props (React.InputHTMLAttributes<HTMLInputElement> | undefined)
- `onChange`: 값 변경 핸들러 `(value: string) => void`
- `onFocus`: 포커스 핸들러 `() => void`
- `onBlur`: 블러 핸들러 `() => void`
- `onComplete`: 입력 완료 핸들러 `(value: string) => void`

**특징:**
- 각 숫자가 개별 입력 필드로 표시됩니다
- `onlyNumber={true}`일 때 숫자가 아닌 문자는 자동으로 제거됩니다
- 입력이 완료되면 `onComplete`가 호출됩니다
- 반응형 디자인을 지원합니다

---

## 주의사항

### Antd 컴포넌트

1. **Select 컴포넌트**: `getPopupContainer`가 자동으로 설정되어 부모 요소에 팝업이 렌더링됩니다
2. **Table 컴포넌트**: 커스텀 스타일이 적용되어 있습니다
3. **Button 컴포넌트**: 호버 효과와 비활성화 스타일이 커스터마이징되어 있습니다

### Form 컴포넌트

1. **Form.Item의 name과 initialValues 매칭**: `formItemProps.name`과 `Form.initialValues`의 키가 일치해야 합니다

2. **Switch 컴포넌트**: `valuePropName="checked"`가 자동 설정되므로 `initialValues`에서 boolean 값을 사용하세요

3. **Upload 컴포넌트**: `imgPath`는 필수 prop입니다. 업로드 경로를 반드시 지정해야 합니다

4. **반응형 레이아웃**: `colSetProps.defaultColSize`를 사용하여 반응형 레이아웃을 구성하세요

5. **유효성 검사**: `rules` 배열을 사용하여 필드별 유효성 검사를 설정하세요

6. **초기값 설정**: `Form.initialValues`를 사용하는 것이 `childrenProps.defaultValue`보다 권장됩니다

---

## Storybook

모든 컴포넌트는 Storybook에서 확인할 수 있습니다:

- **Antd 컴포넌트**: `Common/Antd.*`
- **Form 컴포넌트**: `Common/Form.*`
- **기타 컴포넌트**: 각 컴포넌트의 `.stories.tsx` 파일 참조

각 컴포넌트의 다양한 사용 예시와 props를 Storybook에서 확인하세요.

---

## 참고 자료

- [Ant Design 공식 문서](https://ant.design/)
- 프로젝트 내 Storybook: 각 컴포넌트의 `.stories.tsx` 파일 참조

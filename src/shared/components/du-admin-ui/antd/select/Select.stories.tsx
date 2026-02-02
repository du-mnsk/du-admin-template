import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Select"로 표시
if (Antd.Select) {
  Antd.Select.displayName = 'Antd.Select'
}

const meta = {
  title: 'Common/Antd.Select',
  component: Antd.Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    allowClear: {
      control: 'boolean',
      description: '선택 초기화 버튼 표시 여부',
    },
    autoClearSearchValue: {
      control: 'boolean',
      description: '선택 시 검색 값 자동 초기화 여부',
    },
    autoFocus: {
      control: 'boolean',
      description: '자동 포커스 여부',
    },
    bordered: {
      control: 'boolean',
      description: '테두리 표시 여부',
    },
    clearIcon: {
      description: '초기화 아이콘(ReactNode)',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    defaultActiveFirstOption: {
      control: 'boolean',
      description: '기본 첫 번째 옵션 활성화 여부',
    },
    defaultOpen: {
      control: 'boolean',
      description: '기본 드롭다운 열림 여부',
    },
    defaultValue: {
      control: 'text',
      description: '기본 선택 값(string | string[] | number | number[] | LabeledValue | LabeledValue[])',
    },
    disabled: {
      control: 'boolean',
      description: '선택 비활성화 여부',
    },
    popupClassName: {
      control: 'text',
      description: '드롭다운 클래스명',
    },
    dropdownMatchSelectWidth: {
      control: 'boolean',
      description: '드롭다운 너비를 선택 박스와 일치 여부(boolean | number)',
    },
    dropdownRender: {
      description: '드롭다운 렌더링 함수((originNode: ReactNode) => ReactNode)',
    },
    dropdownStyle: {
      control: 'object',
      description: '드롭다운 스타일(CSSProperties)',
    },
    fieldNames: {
      control: 'object',
      description: '필드 이름 객체(object)',
    },
    filterOption: {
      control: 'boolean',
      description: '필터 옵션 함수((inputValue: string, option: Option) => boolean)',
    },
    filterSort: {
      description: '필터 정렬 함수((optionA: Option, optionB: Option) => number)',
    },
    getPopupContainer: {
      description: '드롭다운 컨테이너 함수((triggerNode: HTMLElement) => HTMLElement)',
    },
    labelInValue: {
      control: 'boolean',
      description: '값에 라벨 포함 여부',
    },
    listHeight: {
      control: 'number',
      description: '목록 높이',
    },
    loading: {
      control: 'boolean',
      description: '로딩 여부',
    },
    maxTagCount: {
      control: 'number',
      description: '최대 태그 개수',
    },
    maxTagPlaceholder: {
      description: '최대 태그 플레이스홀더(ReactNode | function(omittedValues))',
    },
    maxTagTextLength: {
      control: 'number',
      description: '최대 태그 텍스트 길이',
    },
    menuItemSelectedIcon: {
      description: '메뉴 선택 아이콘(ReactNode)',
    },
    mode: {
      control: 'select',
      options: ['multiple', 'tags'],
      description: '다중 선택 모드',
    },
    notFoundContent: {
      description: '미찾음 콘텐츠(ReactNode)',
    },
    open: {
      control: 'boolean',
      description: '드롭다운 열림 상태',
    },
    optionFilterProp: {
      control: 'text',
      description: '옵션 필터 속성',
    },
    optionLabelProp: {
      control: 'text',
      description: '옵션 라벨 속성',
    },
    options: {
      control: 'object',
      description: '옵션 목록({ label, value }[])',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더(ReactNode)',
    },
    placement: {
      control: 'select',
      options: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      description: '드롭다운 위치',
    },
    removeIcon: {
      description: '태그 제거 아이콘(ReactNode)',
    },
    searchValue: {
      control: 'text',
      description: '검색 값',
    },
    showArrow: {
      control: 'boolean',
      description: '화살표 표시 여부',
    },
    showSearch: {
      control: 'boolean',
      description: '검색 여부',
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: '선택 크기',
    },
    status: {
      control: 'select',
      options: ['error', 'warning'],
      description: '입력 상태',
    },
    style: {
      control: 'object',
      description: '인라인 스타일(CSSProperties)',
    },
    suffixIcon: {
      description: '접미사 아이콘(ReactNode)',
    },
    tagRender: {
      description: '태그 렌더링 함수((props) => ReactNode)',
    },
    tokenSeparators: {
      control: 'object',
      description: '토큰 구분자(string[]), mode="tags"일 때만 적용',
    },
    value: {
      control: 'text',
      description: '선택 값(string | string[] | number | number[] | LabeledValue | LabeledValue[])',
    },
    virtual: {
      control: 'boolean',
      description: '가상 스크롤 비활성화 여부',
    },
    width: {
      control: 'text',
      description: '너비 (커스텀 prop)',
    },
    children: {
      description: 'SelectOption 컴포넌트들(ReactNode)',
    },
    onBlur: {
      action: 'blurred',
      description: '포커스 아웃 이벤트 핸들러',
    },
    onChange: {
      action: 'changed',
      description: '선택 변경 이벤트 핸들러',
    },
    onClear: {
      action: 'cleared',
      description: '초기화 이벤트 핸들러',
    },
    onDeselect: {
      action: 'deselected',
      description: '옵션 선택 해제 이벤트 핸들러(function(string | number | LabeledValue))',
    },
    onDropdownVisibleChange: {
      action: 'dropdown-visible-changed',
      description: '드롭다운 열림 상태 변경 이벤트 핸들러(function(open: boolean))',
    },
    onFocus: {
      action: 'focused',
      description: '포커스 인 이벤트 핸들러',
    },
    onInputKeyDown: {
      action: 'input-key-down',
      description: '키 입력 이벤트 핸들러',
    },
    onMouseEnter: {
      action: 'mouse-entered',
      description: '마우스 진입 이벤트 핸들러',
    },
    onMouseLeave: {
      action: 'mouse-left',
      description: '마우스 이탈 이벤트 핸들러',
    },
    onPopupScroll: {
      action: 'popup-scrolled',
      description: '드롭다운 스크롤 이벤트 핸들러',
    },
    onSearch: {
      action: 'searched',
      description: '검색 이벤트 핸들러',
    },
    onSelect: {
      action: 'selected',
      description: '옵션 선택 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Select>

export default meta
type Story = StoryObj<typeof meta>

const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

export const Default: Story = {
  args: {
    placeholder: '선택하세요',
    options: basicOptions,
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'option1',
    options: basicOptions,
  },
}

export const WithValue: Story = {
  args: {
    value: 'option1',
    options: basicOptions,
  },
  render: function WithValueStory(args) {
    const [value, setValue] = useState<string>(args.value as string || '')
    
    return (
      <Antd.Select
        {...args}
        value={value}
        onChange={(val, option) => {
          setValue(val as string)
          args.onChange?.(val, option)
        }}
      />
    )
  },
}

export const AllowClear: Story = {
  args: {
    allowClear: true,
    defaultValue: 'option1',
    options: basicOptions,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'option1',
    options: basicOptions,
  },
}

export const ShowSearch: Story = {
  args: {
    showSearch: true,
    placeholder: '검색 가능한 선택',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
    ],
  },
}

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    placeholder: '다중 선택',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ],
  },
}

export const Tags: Story = {
  args: {
    mode: 'tags',
    placeholder: '태그 입력',
    options: [
      { value: 'tag1', label: 'Tag 1' },
      { value: 'tag2', label: 'Tag 2' },
      { value: 'tag3', label: 'Tag 3' },
    ],
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    placeholder: '로딩 중...',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: '큰 크기 선택',
    options: basicOptions,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: '작은 크기 선택',
    options: basicOptions,
  },
}

export const WithStatusError: Story = {
  args: {
    status: 'error',
    placeholder: '에러 상태 선택',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
  },
}

export const WithStatusWarning: Story = {
  args: {
    status: 'warning',
    placeholder: '경고 상태 선택',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
  },
}

export const WithWidth: Story = {
  args: {
    width: 300,
    placeholder: '너비 300px',
    options: basicOptions,
  },
}

export const WithListHeight: Story = {
  args: {
    listHeight: 500,
    placeholder: '목록 높이 500px',
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `Option ${i + 1}`,
    })),
  },
}

export const WithMaxTagCount: Story = {
  args: {
    mode: 'multiple',
    maxTagCount: 2,
    placeholder: '최대 태그 2개',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ],
  },
}

export const WithDisabledOption: Story = {
  args: {
    placeholder: '비활성화 옵션 포함',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2 (Disabled)', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}

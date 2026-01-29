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
      description: '선택 초기화 여부',
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
    className: {
      control: 'text',
      description: '클래스명',
    },
    defaultActiveFirstOption: {
      control: 'boolean',
      description: '기본 첫 번째 옵션 활성화 여부',
    },
    defaultValue: {
      control: 'text',
      description: '기본 선택 값',
    },
    disabled: {
      control: 'boolean',
      description: '선택 비활성화 여부',
    },
    dropdownClassName: {
      control: 'text',
      description: '드롭다운 클래스명',
    },
    dropdownMatchSelectWidth: {
      control: 'boolean',
      description: '드롭다운 너비를 선택 박스와 일치 여부',
    },
    filterOption: {
      description: '필터 옵션 함수',
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
    mode: {
      control: 'select',
      options: ['multiple', 'tags'],
      description: '다중 선택 모드',
    },
    open: {
      control: 'boolean',
      description: '드롭다운 열림 상태',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더',
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
    value: {
      control: 'text',
      description: '선택 값',
    },
    width: {
      control: 'text',
      description: '너비 (커스텀 prop)',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    children: {
      description: 'SelectOption 컴포넌트들(ReactNode)',
    },
    onChange: {
      action: 'changed',
      description: '선택 변경 이벤트 핸들러',
    },
    onSearch: {
      action: 'searched',
      description: '검색 이벤트 핸들러',
    },
    onSelect: {
      action: 'selected',
      description: '옵션 선택 이벤트 핸들러',
    },
    onDeselect: {
      action: 'deselected',
      description: '옵션 선택 해제 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '선택하세요',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: '옵션을 선택하세요',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'option1',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
}

export const WithValue: Story = {
  args: {
    value: 'option1',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
  render: function WithValueStory(args) {
    const [value, setValue] = useState<string>(args.value as string || '')
    
    return (
      <Antd.Select
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val as string)
          args.onChange?.(val, args.children as any)
        }}
      />
    )
  },
}

export const AllowClear: Story = {
  args: {
    allowClear: true,
    defaultValue: 'option1',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'option1',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
}

export const ShowSearch: Story = {
  args: {
    showSearch: true,
    placeholder: '검색 가능한 선택',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
        <Antd.SelectOption value="option4">Option 4</Antd.SelectOption>
        <Antd.SelectOption value="option5">Option 5</Antd.SelectOption>
      </>
    ),
  },
}

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    placeholder: '다중 선택',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
        <Antd.SelectOption value="option4">Option 4</Antd.SelectOption>
      </>
    ),
  },
}

export const Tags: Story = {
  args: {
    mode: 'tags',
    placeholder: '태그 입력',
    children: (
      <>
        <Antd.SelectOption value="tag1">Tag 1</Antd.SelectOption>
        <Antd.SelectOption value="tag2">Tag 2</Antd.SelectOption>
        <Antd.SelectOption value="tag3">Tag 3</Antd.SelectOption>
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    placeholder: '로딩 중...',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
      </>
    ),
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: '큰 크기 선택',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: '작은 크기 선택',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
}

export const WithStatusError: Story = {
  args: {
    status: 'error',
    placeholder: '에러 상태 선택',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
      </>
    ),
  },
}

export const WithStatusWarning: Story = {
  args: {
    status: 'warning',
    placeholder: '경고 상태 선택',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
      </>
    ),
  },
}

export const WithWidth: Story = {
  args: {
    width: 300,
    placeholder: '너비 300px',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
}

export const WithListHeight: Story = {
  args: {
    listHeight: 200,
    placeholder: '목록 높이 200px',
    children: (
      <>
        {Array.from({ length: 20 }, (_, i) => (
          <Antd.SelectOption key={i} value={`option${i + 1}`}>
            Option {i + 1}
          </Antd.SelectOption>
        ))}
      </>
    ),
  },
}

export const WithMaxTagCount: Story = {
  args: {
    mode: 'multiple',
    maxTagCount: 2,
    placeholder: '최대 태그 2개',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2">Option 2</Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
        <Antd.SelectOption value="option4">Option 4</Antd.SelectOption>
      </>
    ),
  },
}

export const WithDisabledOption: Story = {
  args: {
    placeholder: '비활성화 옵션 포함',
    children: (
      <>
        <Antd.SelectOption value="option1">Option 1</Antd.SelectOption>
        <Antd.SelectOption value="option2" disabled>
          Option 2 (Disabled)
        </Antd.SelectOption>
        <Antd.SelectOption value="option3">Option 3</Antd.SelectOption>
      </>
    ),
  },
}

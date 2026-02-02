import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.SearchInput"로 표시
if (Antd.SearchInput) {
  Antd.SearchInput.displayName = 'Antd.SearchInput'
}

const meta = {
  title: 'Common/Antd.SearchInput',
  component: Antd.SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    addonAfter: {
      description: '입력 후 추가 요소(ReactNode)',
    },
    addonBefore: {
      description: '입력 전 추가 요소(ReactNode)',
    },
    allowClear: {
      control: 'boolean',
      description: '입력 초기화 버튼 표시 여부',
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
    defaultValue: {
      control: 'text',
      description: '기본 값',
    },
    disabled: {
      control: 'boolean',
      description: '입력 비활성화 여부',
    },
    enterButton: {
      control: 'boolean',
      description: 'Enter 버튼 표시 여부 (boolean | ReactNode)',
    },
    filter: {
      description: '필터 요소(ReactNode)',
    },
    id: {
      control: 'text',
      description: '입력 필드 ID',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    maxLength: {
      control: 'number',
      description: '최대 입력 길이',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더',
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: '입력 크기',
    },
    value: {
      control: 'text',
      description: '입력 값',
    },
    onPressEnter: {
      action: 'pressed-enter',
      description: 'Enter 키 입력 이벤트 핸들러',
    },
    onSearch: {
      action: 'searched',
      description: '검색 버튼 클릭 또는 Enter 키 입력 이벤트 핸들러',
    },
    onChange: {
      action: 'changed',
      description: '입력 변경 이벤트 핸들러',
    },
    onBlur: {
      action: 'blurred',
      description: '포커스 아웃 이벤트 핸들러',
    },
    onFocus: {
      action: 'focused',
      description: '포커스 인 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: '검색어',
  },
}

export const WithValue: Story = {
  args: {
    value: '검색어',
  },
  render: function WithValueStory(args) {
    const [value, setValue] = useState<string>(args.value as string || '')
    
    return (
      <Antd.SearchInput
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          args.onChange?.(e)
        }}
      />
    )
  },
}

export const WithCustomEnterButton: Story = {
  args: {
    enterButton: '검색',
    placeholder: '검색어를 입력하세요',
  },
}

export const WithLoading: Story = {
  args: {
    loading: true,
    placeholder: '검색 중...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '비활성화된 검색',
  },
}

export const AllowClear: Story = {
  args: {
    allowClear: true,
    defaultValue: '초기화 가능한 검색',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: '큰 크기 검색 입력',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: '작은 크기 검색 입력',
  },
}

export const WithMaxLength: Story = {
  args: {
    maxLength: 20,
    placeholder: '최대 20자까지 입력 가능',
  },
}

export const WithOnSearch: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    onSearch: (value) => {
      alert(`검색: ${value}`)
    },
  },
}

export const WithOnPressEnter: Story = {
  args: {
    placeholder: 'Enter 키를 눌러보세요',
    onPressEnter: (e) => {
      alert('Enter 키가 눌렸습니다!')
    },
  },
}

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    placeholder: '자동 포커스',
  },
}

export const WithoutBordered: Story = {
  args: {
    bordered: false,
    placeholder: '테두리 없는 검색 입력',
  },
}

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.TextArea"로 표시
if (Antd.TextArea) {
  Antd.TextArea.displayName = 'Antd.TextArea'
}

const meta = {
  title: 'Common/Antd/Antd.TextArea',
  component: Antd.TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    allowClear: {
      control: 'boolean',
      description: '입력 초기화 버튼 표시 여부',
    },
    autoSize: {
      control: 'object',
      description: '자동 크기 조정 (boolean | { minRows: number, maxRows: number })',
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
    id: {
      control: 'text',
      description: '입력 필드 ID',
    },
    maxLength: {
      control: 'number',
      description: '최대 입력 길이',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더',
    },
    readOnly: {
      control: 'boolean',
      description: '입력 읽기 전용 여부',
    },
    rows: {
      control: 'number',
      description: '줄 수',
    },
    showCount: {
      control: 'boolean',
      description: '글자수 표시 여부',
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: '입력 크기',
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
      description: '입력 값',
    },
    onPressEnter: {
      action: 'pressed-enter',
      description: 'Enter 키 입력 이벤트 핸들러',
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
    onKeyDown: {
      action: 'key-down',
      description: '키 다운 이벤트 핸들러',
    },
    onResize: {
      action: 'resized',
      description: '크기 변경 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: '텍스트를 입력하세요',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: '기본 텍스트 값입니다.',
  },
}

export const WithValue: Story = {
  args: {
    value: '제어된 텍스트 값입니다.',
  },
  render: function WithValueStory(args) {
    const [value, setValue] = useState<string>(args.value as string || '')
    
    return (
      <Antd.TextArea
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

export const WithRows: Story = {
  args: {
    rows: 4,
    placeholder: '4줄 높이의 텍스트 영역',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '비활성화된 텍스트 영역입니다.',
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: '읽기 전용 텍스트 영역입니다.',
  },
}

export const WithMaxLength: Story = {
  args: {
    maxLength: 100,
    placeholder: '최대 100자까지 입력 가능',
  },
}

export const WithShowCount: Story = {
  args: {
    showCount: true,
    maxLength: 200,
    placeholder: '글자 수가 표시됩니다',
  },
}

export const AutoSize: Story = {
  args: {
    autoSize: true,
    placeholder: '자동으로 크기가 조정됩니다',
  },
}

export const AutoSizeWithMinMaxRows: Story = {
  args: {
    autoSize: {
      minRows: 3,
      maxRows: 6,
    },
    placeholder: '최소 3줄, 최대 6줄까지 자동 조정',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: '큰 크기 텍스트 영역',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: '작은 크기 텍스트 영역',
  },
}

export const WithStatusError: Story = {
  args: {
    status: 'error',
    placeholder: '에러 상태 텍스트 영역',
  },
}

export const WithStatusWarning: Story = {
  args: {
    status: 'warning',
    placeholder: '경고 상태 텍스트 영역',
  },
}

export const WithoutBordered: Story = {
  args: {
    bordered: false,
    placeholder: '테두리 없는 텍스트 영역',
  },
}

export const AllowClear: Story = {
  args: {
    allowClear: true,
    defaultValue: '초기화 가능한 텍스트 영역입니다.',
  },
}

export const WithCustomStyle: Story = {
  args: {
    style: {
      backgroundColor: '#f0f0f0',
      borderColor: '#1890ff',
    },
    placeholder: '커스텀 스타일이 적용된 텍스트 영역',
  },
}

export const WithOnPressEnter: Story = {
  args: {
    placeholder: 'Enter 키를 눌러보세요 (Ctrl+Enter로 줄바꿈)',
    onPressEnter: (e) => {
      alert('Enter 키가 눌렸습니다!')
    },
  },
}

export const LongText: Story = {
  args: {
    defaultValue: '이것은 긴 텍스트 예제입니다. 여러 줄에 걸쳐 텍스트를 입력할 수 있으며, 자동으로 줄바꿈이 됩니다. 텍스트 영역은 사용자가 긴 내용을 입력할 때 유용합니다.',
    rows: 6,
    showCount: true,
  },
}

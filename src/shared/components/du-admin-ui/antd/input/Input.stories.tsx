import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Input"로 표시
if (Antd.Input) {
  Antd.Input.displayName = 'Antd.Input'
}

const meta = {
  title: 'Common/Antd.Input',
  component: Antd.Input,
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
    id: {
      control: 'text',
      description: '입력 필드 ID',
    },
    maxLength: {
      control: 'number',
      description: '최대 입력 길이',
    },
    prefix: {
      description: '입력 접두사(ReactNode)',
    },
    readOnly: {
      control: 'boolean',
      description: '입력 읽기 전용 여부',
    },
    showCount: {
      control: 'boolean',
      description: '입력 길이 표시 여부',
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
    suffix: {
      description: '입력 접미사(ReactNode)',
    },
    type: {
      control: 'text',
      description: '입력 타입 (text, password, number, email 등)',
    },
    value: {
      control: 'text',
      description: '입력 값',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더',
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
  },
} satisfies Meta<typeof Antd.Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: '입력하세요',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: '기본 값',
  },
}

export const WithValue: Story = {
  args: {
    value: '제어된 값',
  },
  render: function WithValueStory(args) {
    const [value, setValue] = useState<string>(args.value as string || '')
    
    return (
      <Antd.Input
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

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '비활성화된 입력',
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: '읽기 전용 입력',
  },
}

export const WithMaxLength: Story = {
  args: {
    maxLength: 10,
    placeholder: '최대 10자까지 입력 가능',
  },
}

export const WithShowCount: Story = {
  args: {
    showCount: true,
    maxLength: 20,
    placeholder: '글자 수가 표시됩니다',
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'https://',
    placeholder: 'example.com',
  },
}

export const WithSuffix: Story = {
  args: {
    suffix: '.com',
    placeholder: 'example',
  },
}

export const WithPrefixAndSuffix: Story = {
  args: {
    prefix: 'https://',
    suffix: '.com',
    placeholder: 'example',
  },
}

export const WithAddonBefore: Story = {
  args: {
    addonBefore: 'http://',
    placeholder: 'example.com',
  },
}

export const WithAddonAfter: Story = {
  args: {
    addonAfter: '.com',
    placeholder: 'example',
  },
}

export const WithAddonBeforeAndAfter: Story = {
  args: {
    addonBefore: 'http://',
    addonAfter: '.com',
    placeholder: 'example',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: '큰 크기 입력',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: '작은 크기 입력',
  },
}

export const WithStatusError: Story = {
  args: {
    status: 'error',
    placeholder: '에러 상태 입력',
  },
}

export const WithStatusWarning: Story = {
  args: {
    status: 'warning',
    placeholder: '경고 상태 입력',
  },
}

export const WithoutBordered: Story = {
  args: {
    bordered: false,
    placeholder: '테두리 없는 입력',
  },
}

export const AllowClear: Story = {
  args: {
    allowClear: true,
    defaultValue: '초기화 가능한 입력',
  },
}

export const TypePassword: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
}

export const TypeNumber: Story = {
  args: {
    type: 'number',
    placeholder: '숫자를 입력하세요',
  },
}

export const TypeEmail: Story = {
  args: {
    type: 'email',
    placeholder: '이메일을 입력하세요',
  },
}

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    placeholder: '자동 포커스',
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

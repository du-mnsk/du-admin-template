import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Switch"로 표시
if (Antd.Switch) {
  Antd.Switch.displayName = 'Antd.Switch'
}

const meta = {
  title: 'Common/Antd.Switch',
  component: Antd.Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    autoFocus: {
      control: 'boolean',
      description: '자동 포커스 여부',
    },
    checked: {
      control: 'boolean',
      description: '체크 상태',
    },
    checkedChildren: {
      control: 'text',
      description: '체크된 상태 표시 텍스트(ReactNode)',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    defaultChecked: {
      control: 'boolean',
      description: '초기 체크 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: '스위치 크기',
    },
    unCheckedChildren: {
      control: 'text',
      description: '체크되지 않은 상태 표시 텍스트(ReactNode)',
    },
    onChange: {
      action: 'changed',
      description: '상태 변경 이벤트 핸들러',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: function CheckedStory(args) {
    const [checked, setChecked] = useState(true)
    
    return (
      <Antd.Switch
        {...args}
        checked={checked}
        onChange={(val, e) => {
          setChecked(val)
          args.onChange?.(val, e)
        }}
      />
    )
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
  },
  render: function UncheckedStory(args) {
    const [checked, setChecked] = useState(false)
    
    return (
      <Antd.Switch
        {...args}
        checked={checked}
        onChange={(val, e) => {
          setChecked(val)
          args.onChange?.(val, e)
        }}
      />
    )
  },
}

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const WithCheckedChildren: Story = {
  args: {
    checkedChildren: 'ON',
  },
}

export const WithUnCheckedChildren: Story = {
  args: {
    unCheckedChildren: 'OFF',
  },
}

export const WithBothChildren: Story = {
  args: {
    checkedChildren: 'ON',
    unCheckedChildren: 'OFF',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    defaultChecked: false,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    defaultChecked: true,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    checkedChildren: 'ON',
    unCheckedChildren: 'OFF',
  },
}

export const WithIcon: Story = {
  args: {
    checkedChildren: '✓',
    unCheckedChildren: '✗',
  },
}

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
  },
}

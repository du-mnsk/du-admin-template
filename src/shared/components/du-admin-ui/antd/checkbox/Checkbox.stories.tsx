import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Checkbox"로 표시
if (Antd.Checkbox) {
  Antd.Checkbox.displayName = 'Antd.Checkbox'
}

const meta = {
  title: 'Common/Antd.Checkbox',
  component: Antd.Checkbox,
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
    className: {
      control: 'text',
      description: '클래스명',
    },
    defaultChecked: {
      control: 'boolean',
      description: '기본 체크 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    indeterminate: {
      control: 'boolean',
      description: '반체크 상태(부분 선택)',
    },
    name: {
      control: 'text',
      description: 'name 속성',
    },
    value: {
      description: '체크박스 값',
    },
    children: {
      control: 'text',
      description: '체크박스 라벨(ReactNode | string)',
    },
    onChange: {
      action: 'changed',
      description: '변경 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Checkbox',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    children: 'Checked',
  },
}

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
    children: 'Default Checked',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    children: 'Indeterminate',
  },
}

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
    children: 'Auto Focus',
  },
}
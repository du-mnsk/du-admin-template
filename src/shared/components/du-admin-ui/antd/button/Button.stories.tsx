import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Button"으로 표시
if (Antd.Button) {
  Antd.Button.displayName = 'Antd.Button'
}

const meta = {
  title: 'Common/Antd.Button',
  component: Antd.Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    block: {
      control: 'boolean',
      description: '전체 너비 사용 여부',
    },
    children: {
      control: 'text',
      description: '버튼 내용(ReactNode | string)',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    danger: {
      control: 'boolean',
      description: '위험한 액션인지 여부',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    ghost: {
      control: 'boolean',
      description: 'Ghost 버튼 여부',
    },
    href: {
      control: 'text',
      description: '링크 주소',
    },
    htmlType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML 버튼 타입',
    },
    icon: {
      description: '아이콘(ReactNode)',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    shape: {
      control: 'select',
      options: ['default', 'circle', 'round'],
      description: '버튼 모양',
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: '버튼 크기',
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: '링크 타겟',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'],
      description: '버튼 타입',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
  args: { onClick: () => {alert('clicked')} },
} satisfies Meta<typeof Antd.Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
}

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
}

export const Ghost: Story = {
  args: {
    type: 'ghost',
    children: 'Ghost Button',
  },
}

export const Dashed: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
  },
}

export const Link: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
  },
}

export const Text: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
  },
}

export const Danger: Story = {
  args: {
    danger: true,
    children: 'Danger Button',
  },
}

export const DangerPrimary: Story = {
  args: {
    type: 'primary',
    danger: true,
    children: 'Danger Primary Button',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
}

export const Block: Story = {
  args: {
    block: true,
    children: 'Block Button',
  },
}

export const WithIcon: Story = {
  args: {
    type: 'primary',
    children: 'Button with Icon',
  },
  render: (args) => (
    <Antd.Button {...args}>
      <span>🔍</span> {args.children}
    </Antd.Button>
  ),
}

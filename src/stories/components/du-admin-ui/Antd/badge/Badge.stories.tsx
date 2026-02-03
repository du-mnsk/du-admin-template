import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from 'antd'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Badge"로 표시
if (Antd.Badge) {
  Antd.Badge.displayName = 'Antd.Badge'
}

const meta = {
  title: 'Common/Antd/Antd.Badge',
  component: Antd.Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '클래스명',
    },
    color: {
      control: 'color',
      description: '뱃지 색상',
    },
    count: {
      control: 'number',
      description: '뱃지에 표시할 숫자(number | ReactNode)',
    },
    dot: {
      control: 'boolean',
      description: '점으로 표시할지 여부',
    },
    offset: {
      control: 'object',
      description: '뱃지 위치 오프셋 [x, y] ([number, number])',
    },
    overflowCount: {
      control: 'number',
      description: '최대 표시 숫자',
    },
    showZero: {
      control: 'boolean',
      description: '0을 표시할지 여부',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: '뱃지 크기',
    },
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning'],
      description: '뱃지 상태',
    },
    text: {
      control: 'text',
      description: '뱃지의 텍스트(string | ReactNode)',
    },
    title: {
      control: 'text',
      description: '마우스 호버시 뜨는 텍스트',
    },
    children: {
      description: '자식 요소(ReactNode)',
    },
  },
} satisfies Meta<typeof Antd.Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    count: 5,
    children: <span><Avatar shape="square" size="large" /></span>,
  },
}

export const WithNumber: Story = {
  args: {
    count: 25,
    children: <span><Avatar shape="square" size="large" /></span>,
  },
}

export const Dot: Story = {
  args: {
    dot: true,
    children: <span><Avatar shape="square" size="large" /></span>,
  },
}

export const OverflowCount: Story = {
  args: {
    count: 100,
    overflowCount: 99,
    children: <span><Avatar shape="square" size="large" /></span>,
  },
}

export const ShowZero: Story = {
  args: {
    count: 0,
    showZero: true,
    children: <span><Avatar shape="square" size="large" /></span>,
  },
}

export const StatusSuccess: Story = {
  args: {
    status: 'success',
    text: 'Success',
  },
}

export const StatusError: Story = {
  args: {
    status: 'error',
    text: 'Error',
  },
}

export const StatusWarning: Story = {
  args: {
    status: 'warning',
    text: 'Warning',
  },
}

export const StatusProcessing: Story = {
  args: {
    status: 'processing',
    text: 'Processing',
  },
}

export const CustomColor: Story = {
  args: {
    count: 5,
    color: '#52c41a',
    children: <span>Custom Color</span>,
  },
}

export const WithButton: Story = {
  render: () => (
    <Antd.Badge count={5}>
      <Antd.Button>Button with Badge</Antd.Button>
    </Antd.Badge>
  ),
}
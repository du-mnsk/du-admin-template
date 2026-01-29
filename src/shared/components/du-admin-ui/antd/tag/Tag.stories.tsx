import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Tag"로 표시
if (Antd.Tag) {
  Antd.Tag.displayName = 'Antd.Tag'
}

const meta = {
  title: 'Common/Antd.Tag',
  component: Antd.Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    closable: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부',
    },
    color: {
      control: 'text',
      description: '태그 색상',
    },
    icon: {
      description: '아이콘(ReactNode)',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    children: {
      control: 'text',
      description: '태그 내용(ReactNode)',
    },
    onClose: {
      action: 'closed',
      description: '닫기 버튼 클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Tag',
  },
}

export const Closable: Story = {
  args: {
    closable: true,
    children: 'Closable Tag',
  },
}

export const WithColor: Story = {
  args: {
    color: 'blue',
    children: 'Blue Tag',
  },
}

export const Red: Story = {
  args: {
    color: 'red',
    children: 'Red Tag',
  },
}

export const Success: Story = {
  args: {
    color: 'success',
    children: 'Success Tag',
  },
}

export const Processing: Story = {
  args: {
    color: 'processing',
    children: 'Processing Tag',
  },
}

export const Error: Story = {
  args: {
    color: 'error',
    children: 'Error Tag',
  },
}

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'Warning Tag',
  },
}

export const DefaultColor: Story = {
  args: {
    color: 'default',
    children: 'Default Tag',
  },
}

export const CustomColor: Story = {
  args: {
    color: '#f50',
    children: 'Custom Color Tag',
  },
}

export const MultipleTags: Story = {
  args: {},
  render: () => (
    <>
      <Antd.Tag color="blue">Tag 1</Antd.Tag>
      <Antd.Tag color="green">Tag 2</Antd.Tag>
      <Antd.Tag color="orange">Tag 3</Antd.Tag>
      <Antd.Tag color="red">Tag 4</Antd.Tag>
    </>
  ),
}
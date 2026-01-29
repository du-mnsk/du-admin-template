import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.DescriptionsItem"로 표시
if (Antd.DescriptionsItem) {
  Antd.DescriptionsItem.displayName = 'Antd.DescriptionsItem'
}

const meta = {
  title: 'Common/Antd.DescriptionsItem',
  component: Antd.DescriptionsItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '레이블(ReactNode | string)',
    },
    span: {
      control: 'number',
      description: '열 개수 (1부터 시작)',
    },
    contentStyle: {
      control: 'object',
      description: '내용 스타일(CSSProperties)',
    },
    labelStyle: {
      control: 'object',
      description: '레이블 스타일(CSSProperties)',
    },
    children: {
      description: '내용(ReactNode)',
    },
  },
} satisfies Meta<typeof Antd.DescriptionsItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Antd.Descriptions title="User Info" bordered>
      <Antd.DescriptionsItem {...args} label="UserName">
        Zhou Maomao
      </Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
    </Antd.Descriptions>
  ),
  args: {
    children: '',
  },
}

export const WithSpan: Story = {
  render: () => (
    <Antd.Descriptions title="User Info" bordered>
      <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Address" span={2}>
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
    </Antd.Descriptions>
  ),
  args: {
    children: '',
  },
}

export const WithCustomLabelStyle: Story = {
  render: () => (
    <Antd.Descriptions title="User Info" bordered>
      <Antd.DescriptionsItem
        label="UserName"
        labelStyle={{ fontWeight: 'bold', color: '#1890ff' }}
      >
        Zhou Maomao
      </Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
    </Antd.Descriptions>
  ),
  args: {
    children: '',
  },
}

export const WithCustomContentStyle: Story = {
  render: () => (
    <Antd.Descriptions title="User Info" bordered>
      <Antd.DescriptionsItem
        label="UserName"
        contentStyle={{ color: '#52c41a', fontWeight: 'bold' }}
      >
        Zhou Maomao
      </Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
    </Antd.Descriptions>
  ),
  args: {
    children: '',
  },
}

export const WithReactNodeLabel: Story = {
  render: () => (
    <Antd.Descriptions title="User Info" bordered>
      <Antd.DescriptionsItem
        label={
          <span style={{ color: '#1890ff' }}>
            <strong>User</strong> Name
          </span>
        }
      >
        Zhou Maomao
      </Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
    </Antd.Descriptions>
  ),
  args: {
    children: '',
  },
}

export const WithReactNodeContent: Story = {
  render: () => (
    <Antd.Descriptions title="User Info" bordered>
      <Antd.DescriptionsItem label="UserName">
        <span style={{ color: '#52c41a', fontWeight: 'bold' }}>Zhou Maomao</span>
      </Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Status">
        <Antd.Tag color="success">Active</Antd.Tag>
      </Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
    </Antd.Descriptions>
  ),
  args: {
    children: '',
  },
}

export const FullSpan: Story = {
  render: () => (
    <Antd.Descriptions title="User Info" bordered column={3}>
      <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Address" span={3}>
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Description" span={2}>
        This is a long description that spans across multiple columns
      </Antd.DescriptionsItem>
    </Antd.Descriptions>
  ),
  args: {
    children: '',
  },
}

export const VerticalLayout: Story = {
  render: () => (
    <Antd.Descriptions title="User Info" bordered layout="vertical">
      <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
      <Antd.DescriptionsItem label="Address" span={2}>
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Antd.DescriptionsItem>
    </Antd.Descriptions>
  ),
  args: {
    children: '',
  },
}

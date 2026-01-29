import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Descriptions"로 표시
if (Antd.Descriptions) {
  Antd.Descriptions.displayName = 'Antd.Descriptions'
}

const meta = {
  title: 'Common/Antd.Descriptions',
  component: Antd.Descriptions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bordered: {
      control: 'boolean',
      description: '테두리 표시 여부',
    },
    colon: {
      control: 'boolean',
      description: '콜론 표시 여부',
    },
    column: {
      control: 'number',
      description: '열 개수 (number | { xs: number, sm: number, md: number, lg: number, xl: number, xxl: number })',
    },
    contentStyle: {
      control: 'object',
      description: '내용 스타일(CSSProperties)',
    },
    extra: {
      description: '추가 요소(ReactNode)',
    },
    labelStyle: {
      control: 'object',
      description: '레이블 스타일(CSSProperties)',
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '레이아웃',
    },
    size: {
      control: 'select',
      options: ['default', 'middle', 'small'],
      description: '크기',
    },
    title: {
      control: 'text',
      description: '제목(ReactNode | string)',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    children: {
      description: 'DescriptionsItem 컴포넌트들(ReactNode)',
    },
  },
} satisfies Meta<typeof Antd.Descriptions>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'User Info',
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Antd.DescriptionsItem>
      </>
    ),
  },
}

export const Bordered: Story = {
  args: {
    title: 'User Info',
    bordered: true,
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Antd.DescriptionsItem>
      </>
    ),
  },
}

export const WithoutColon: Story = {
  args: {
    title: 'User Info',
    colon: false,
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
      </>
    ),
  },
}

export const Vertical: Story = {
  args: {
    title: 'User Info',
    bordered: true,
    layout: 'vertical',
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Antd.DescriptionsItem>
      </>
    ),
  },
}

export const Small: Story = {
  args: {
    title: 'User Info',
    bordered: true,
    size: 'small',
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
      </>
    ),
  },
}

export const Middle: Story = {
  args: {
    title: 'User Info',
    bordered: true,
    size: 'middle',
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
      </>
    ),
  },
}

export const WithColumn: Story = {
  args: {
    title: 'User Info',
    bordered: true,
    column: 2,
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Address" span={2}>
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Antd.DescriptionsItem>
      </>
    ),
  },
}

export const WithExtra: Story = {
  args: {
    title: 'User Info',
    bordered: true,
    extra: <a href="#">Edit</a>,
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
      </>
    ),
  },
}

export const WithCustomStyles: Story = {
  args: {
    title: 'User Info',
    bordered: true,
    labelStyle: { backgroundColor: '#f0f0f0', fontWeight: 'bold' },
    contentStyle: { backgroundColor: '#fafafa' },
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
      </>
    ),
  },
}

export const ResponsiveColumn: Story = {
  args: {
    title: 'User Info',
    bordered: true,
    column: {
      xxl: 4,
      xl: 3,
      lg: 3,
      md: 2,
      sm: 2,
      xs: 1,
    },
    children: (
      <>
        <Antd.DescriptionsItem label="UserName">Zhou Maomao</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Telephone">1810000000</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Live">Hangzhou, Zhejiang</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Remark">empty</Antd.DescriptionsItem>
        <Antd.DescriptionsItem label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Antd.DescriptionsItem>
      </>
    ),
  },
}

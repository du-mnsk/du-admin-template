import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ColumnsType } from 'antd/es/table'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Table"로 표시
if (Antd.Table) {
  Antd.Table.displayName = 'Antd.Table'
}

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => (
          <Antd.Tag color="blue" key={tag}>
            {tag}
          </Antd.Tag>
        ))}
      </>
    ),
  },
]

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['developer', 'nice'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['designer'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['developer'],
  },
]

const meta = {
  title: 'Common/Antd.Table',
  component: Antd.Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bordered: {
      control: 'boolean',
      description: '테두리 표시 여부',
    },
    columns: {
      control: 'object',
      description: '테이블 컬럼 설정',
    },
    dataSource: {
      control: 'object',
      description: '테이블 데이터 소스',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    pagination: {
      control: 'object',
      description: '페이지네이션 설정',
    },
    rowKey: {
      control: 'text',
      description: '행 키 필드',
    },
    scroll: {
      control: 'object',
      description: '스크롤 설정',
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: '테이블 크기',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    onChange: {
      action: 'changed',
      description: '테이블 변경 이벤트 핸들러',
    },
    onRow: {
      description: '행 설정 함수',
    },
  },
} satisfies Meta<typeof Antd.Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    columns,
    dataSource,
  },
}

export const WithPagination: Story = {
  args: {
    columns,
    dataSource: Array.from({ length: 50 }, (_, i) => ({
      key: `${i + 1}`,
      name: `Name ${i + 1}`,
      age: 20 + i,
      address: `Address ${i + 1}`,
      tags: ['developer'],
    })),
    pagination: {
      pageSize: 10,
    },
  },
}

export const Loading: Story = {
  args: {
    columns,
    dataSource,
    loading: true,
  },
}

export const Bordered: Story = {
  args: {
    columns,
    dataSource,
    bordered: true,
  },
}

export const Small: Story = {
  args: {
    columns,
    dataSource,
    size: 'small',
  },
}

export const Middle: Story = {
  args: {
    columns,
    dataSource,
    size: 'middle',
  },
}

export const Large: Story = {
  args: {
    columns,
    dataSource,
    size: 'large',
  },
}

export const WithoutPagination: Story = {
  args: {
    columns,
    dataSource,
    pagination: false,
  },
}

export const WithScroll: Story = {
  args: {
    columns,
    dataSource: Array.from({ length: 20 }, (_, i) => ({
      key: `${i + 1}`,
      name: `Name ${i + 1}`,
      age: 20 + i,
      address: `Address ${i + 1}`,
      tags: ['developer'],
    })),
    scroll: {
      y: 240,
    },
  },
}

export const WithHorizontalScroll: Story = {
  args: {
    columns: [
      ...columns,
      {
        title: 'Column 4',
        dataIndex: 'col4',
        key: 'col4',
      },
      {
        title: 'Column 5',
        dataIndex: 'col5',
        key: 'col5',
      },
      {
        title: 'Column 6',
        dataIndex: 'col6',
        key: 'col6',
      },
    ],
    dataSource: dataSource.map((item) => ({
      ...item,
      col4: 'Column 4',
      col5: 'Column 5',
      col6: 'Column 6',
    })),
    scroll: {
      x: 800,
    },
  },
}

export const WithRowSelection: Story = {
  args: {
    columns,
    dataSource,
    rowSelection: {
      type: 'checkbox',
    },
  },
}

export const WithRadioSelection: Story = {
  args: {
    columns,
    dataSource,
    rowSelection: {
      type: 'radio',
    },
  },
}

export const WithOnRowClick: Story = {
  args: {
    columns,
    dataSource,
    onRow: (record) => ({
      onClick: () => {
        alert(`Clicked row: ${record.name}`)
      },
    }),
  },
}

export const Empty: Story = {
  args: {
    columns,
    dataSource: [],
  },
}

export const CustomPagination: Story = {
  args: {
    columns,
    dataSource: Array.from({ length: 100 }, (_, i) => ({
      key: `${i + 1}`,
      name: `Name ${i + 1}`,
      age: 20 + i,
      address: `Address ${i + 1}`,
      tags: ['developer'],
    })),
    pagination: {
      pageSize: 5,
      showSizeChanger: true,
      showTotal: (total) => `Total ${total} items`,
    },
  },
}

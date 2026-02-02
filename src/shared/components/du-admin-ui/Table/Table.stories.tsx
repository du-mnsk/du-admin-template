import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import Table, { type TableProps } from '@/shared/components/du-admin-ui/Table'

const meta = {
  title: 'Common/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    rowKey: {
      control: 'text',
      description: '행의 고유 키',
    },
    data: {
      control: 'object',
      description: '테이블 데이터',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    pagination: {
      control: 'object',
      description: '페이지네이션 설정',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const sampleData = [
  { id: 1, name: '홍길동', age: 30, email: 'hong@example.com' },
  { id: 2, name: '김철수', age: 25, email: 'kim@example.com' },
  { id: 3, name: '이영희', age: 28, email: 'lee@example.com' },
]

const sampleDataWithImages = [
  {
    id: 1,
    name: '상품 1',
    price: 10000,
    imageUrl: 'https://picsum.photos/200/300?random=1',
  },
  {
    id: 2,
    name: '상품 2',
    price: 20000,
    imageUrl: 'https://picsum.photos/200/300?random=2',
  },
  {
    id: 3,
    name: '상품 3',
    price: 30000,
    imageUrl: 'https://picsum.photos/200/300?random=3',
  },
]

export const Default: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Column title="이름" dataIndex="name" />
      <Table.Column title="나이" dataIndex="age" />
      <Table.Column title="이메일" dataIndex="email" />
    </Table>
  ),
}

export const WithPagination: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
      total: 100,
      pageSizeOptions: ['10', '20', '50', '100'],
    },
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Column title="이름" dataIndex="name" />
      <Table.Column title="나이" dataIndex="age" />
      <Table.Column title="이메일" dataIndex="email" />
    </Table>
  ),
}

export const WithSearchFilter: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Column title="이름" dataIndex="name" searchFilter />
      <Table.Column title="나이" dataIndex="age" />
      <Table.Column title="이메일" dataIndex="email" searchFilter />
    </Table>
  ),
}

export const Loading: Story = {
  args: {
    rowKey: 'id',
    data: [],
    loading: true,
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Column title="이름" dataIndex="name" />
      <Table.Column title="나이" dataIndex="age" />
      <Table.Column title="이메일" dataIndex="email" />
    </Table>
  ),
}

export const WithRowSelection: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
  },
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    return (
      <div>
        <p>Selected: {selectedRowKeys.join(', ')}</p>
        <Table
          rowKey="id"
          data={sampleData}
          loading={false}
          rowSelection={{
            selectedRowKeys,
            onChange: (keys, selectedRows) => {
              setSelectedRowKeys([...keys])
              // eslint-disable-next-line no-console
              console.log('Selected rows:', selectedRows)
            },
          }}
        >
          <Table.Column title="이름" dataIndex="name" />
          <Table.Column title="나이" dataIndex="age" />
          <Table.Column title="이메일" dataIndex="email" />
        </Table>
      </div>
    )
  },
}

export const WithSummary: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
    summaryValues: ['합계', 83, '-'],
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Column title="이름" dataIndex="name" />
      <Table.Column title="나이" dataIndex="age" />
      <Table.Column title="이메일" dataIndex="email" />
    </Table>
  ),
}

export const DisabledTopSection: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
    disabledTopSection: true,
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Column title="이름" dataIndex="name" />
      <Table.Column title="나이" dataIndex="age" />
      <Table.Column title="이메일" dataIndex="email" />
    </Table>
  ),
}

export const WithImagePreview: Story = {
  args: {
    rowKey: 'id',
    data: sampleDataWithImages,
    loading: false,
    previewImageId: 'imageUrl',
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Column title="상품명" dataIndex="name" />
      <Table.Column title="가격" dataIndex="price" />
      <Table.Column title="이미지" dataIndex="imageUrl" />
    </Table>
  ),
}

export const WithOnSelectedRows: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
  },
  render: () => {
    const [selectedCount, setSelectedCount] = useState(0)
    return (
      <div>
        <p style={{ marginBottom: 16 }}>
          선택된 행 수: {selectedCount} (onSelectedRows 사용)
        </p>
        <Table
          rowKey="id"
          data={sampleData}
          loading={false}
          onSelectedRows={(selectedKeys) => {
            setSelectedCount(selectedKeys.length)
            // eslint-disable-next-line no-console
            console.log('Selected keys:', selectedKeys)
          }}
        >
          <Table.Column title="이름" dataIndex="name" />
          <Table.Column title="나이" dataIndex="age" />
          <Table.Column title="이메일" dataIndex="email" />
        </Table>
      </div>
    )
  },
}

export const WithRangeFilter: Story = {
  args: {
    rowKey: 'id',
    data: sampleDataWithImages,
    loading: false,
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Column title="상품명" dataIndex="name" />
      <Table.Column
        title="가격"
        dataIndex="price"
        searchRangeFilter
        searchRangeFilterProps={{
          min: 0,
          max: 50000,
          step: 1000,
          defaultValue: [0, 50000],
        }}
      />
      <Table.Column title="이미지" dataIndex="imageUrl" />
    </Table>
  ),
}

export const WithMonthFilter: Story = {
  args: {
    rowKey: 'id',
    data: [
      { id: 1, name: '주문 1', date: '2024-01-15', amount: 10000 },
      { id: 2, name: '주문 2', date: '2024-02-20', amount: 20000 },
      { id: 3, name: '주문 3', date: '2024-03-10', amount: 30000 },
    ],
    loading: false,
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Column title="주문명" dataIndex="name" />
      <Table.Column title="날짜" dataIndex="date" searchMonthFilter />
      <Table.Column title="금액" dataIndex="amount" />
    </Table>
  ),
}

export const WithOnClickRow: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
  },
  render: () => {
    const [clickedRow, setClickedRow] = useState<any>(null)
    return (
      <div>
        {clickedRow && (
          <p style={{ marginBottom: 16, padding: 8, background: '#f0f0f0' }}>
            클릭된 행: {clickedRow.name} ({clickedRow.email})
          </p>
        )}
        <Table
          rowKey="id"
          data={sampleData}
          loading={false}
          onClickRow={(record) => {
            setClickedRow(record)
            // eslint-disable-next-line no-console
            console.log('Clicked row:', record)
          }}
        >
          <Table.Column title="이름" dataIndex="name" />
          <Table.Column title="나이" dataIndex="age" />
          <Table.Column title="이메일" dataIndex="email" />
        </Table>
      </div>
    )
  },
}

export const WithTopSection: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
    >
      <Table.Top>
        <button
          type="button"
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log('추가 버튼 클릭')
          }}
          style={{ padding: '4px 12px', cursor: 'pointer' }}
        >
          추가 버튼
        </button>
      </Table.Top>
      <Table.Column title="이름" dataIndex="name" />
      <Table.Column title="나이" dataIndex="age" />
      <Table.Column title="이메일" dataIndex="email" />
    </Table>
  ),
}
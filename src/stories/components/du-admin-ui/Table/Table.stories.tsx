import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { FilterValue, TablePaginationConfig } from 'antd/lib/table/interface'
import dayjs from 'dayjs'

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
  { id: 4, name: '박민수', age: 32, email: 'park@example.com' },
  { id: 5, name: '최지영', age: 27, email: 'choi@example.com' },
  { id: 6, name: '정수진', age: 29, email: 'jung@example.com' },
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
  {
    id: 4,
    name: '상품 4',
    price: 15000,
    imageUrl: 'https://picsum.photos/200/300?random=4',
  },
  {
    id: 5,
    name: '상품 5',
    price: 40000,
    imageUrl: 'https://picsum.photos/200/300?random=5',
  },
  {
    id: 6,
    name: '상품 6',
    price: 25000,
    imageUrl: 'https://picsum.photos/200/300?random=6',
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
  render: (args: TableProps<any>) => {
    const [filters, setFilters] = useState<Record<string, FilterValue | null>>({})
    const [loading, setLoading] = useState(false)

    // 필터링된 데이터 계산
    const filteredData = useMemo(() => {
      if (!filters || Object.keys(filters).length === 0) {
        return sampleData
      }

      return sampleData.filter((item) => {
        // 이름 필터
        if (filters.name && Array.isArray(filters.name) && filters.name.length > 0) {
          const searchValue = (filters.name[0] as string).toLowerCase()
          if (!item.name.toLowerCase().includes(searchValue)) {
            return false
          }
        }

        // 이메일 필터
        if (filters.email && Array.isArray(filters.email) && filters.email.length > 0) {
          const searchValue = (filters.email[0] as string).toLowerCase()
          if (!item.email.toLowerCase().includes(searchValue)) {
            return false
          }
        }

        return true
      })
    }, [filters])

    const handleChange = (
      _pagination: TablePaginationConfig,
      newFilters: Record<string, FilterValue | null>,
    ) => {
      // 서버 요청 시뮬레이션
      setLoading(true)
      setTimeout(() => {
        setFilters(newFilters)
        setLoading(false)
      }, 300)
    }

    return (
      <Table
        {...args}
        data={filteredData}
        loading={loading}
        onChange={handleChange}
      >
        <Table.Column title="이름" dataIndex="name" searchFilter />
        <Table.Column title="나이" dataIndex="age" />
        <Table.Column title="이메일" dataIndex="email" searchFilter />
      </Table>
    )
  },
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
  render: (args: TableProps<any>) => {
    const [filters, setFilters] = useState<Record<string, FilterValue | null>>({})
    const [loading, setLoading] = useState(false)

    // 필터링된 데이터 계산
    const filteredData = useMemo(() => {
      if (!filters || !filters.price || !Array.isArray(filters.price) || filters.price.length === 0) {
        return sampleDataWithImages
      }

      try {
        const rangeStr = filters.price[0] as string
        const [min, max] = JSON.parse(rangeStr) as [number, number]

        return sampleDataWithImages.filter((item) => {
          return item.price >= min && item.price <= max
        })
      } catch {
        return sampleDataWithImages
      }
    }, [filters])

    const handleChange = (
      _pagination: TablePaginationConfig,
      newFilters: Record<string, FilterValue | null>,
    ) => {
      // 서버 요청 시뮬레이션
      setLoading(true)
      setTimeout(() => {
        setFilters(newFilters)
        setLoading(false)
      }, 300)
    }

    return (
      <Table
        {...args}
        data={filteredData}
        loading={loading}
        onChange={handleChange}
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
    )
  },
}

const sampleOrderData = [
  { id: 1, name: '주문 1', date: '2024-01-15', amount: 10000 },
  { id: 2, name: '주문 2', date: '2024-02-20', amount: 20000 },
  { id: 3, name: '주문 3', date: '2024-03-10', amount: 30000 },
  { id: 4, name: '주문 4', date: '2024-01-25', amount: 15000 },
  { id: 5, name: '주문 5', date: '2024-02-05', amount: 25000 },
  { id: 6, name: '주문 6', date: '2024-03-20', amount: 35000 },
]

export const WithMonthFilter: Story = {
  args: {
    rowKey: 'id',
    data: sampleOrderData,
    loading: false,
  },
  render: (args: TableProps<any>) => {
    const [filters, setFilters] = useState<Record<string, FilterValue | null>>({})
    const [loading, setLoading] = useState(false)

    // 필터링된 데이터 계산
    const filteredData = useMemo(() => {
      if (!filters || !filters.date || !Array.isArray(filters.date) || filters.date.length === 0) {
        return sampleOrderData
      }

      const selectedMonth = filters.date[0] as string // YYYY-MM 형식

      return sampleOrderData.filter((item) => {
        const itemMonth = dayjs(item.date).format('YYYY-MM')
        return itemMonth === selectedMonth
      })
    }, [filters])

    const handleChange = (
      _pagination: TablePaginationConfig,
      newFilters: Record<string, FilterValue | null>,
    ) => {
      // 서버 요청 시뮬레이션
      setLoading(true)
      setTimeout(() => {
        setFilters(newFilters)
        setLoading(false)
      }, 300)
    }

    return (
      <Table
        {...args}
        data={filteredData}
        loading={loading}
        onChange={handleChange}
      >
        <Table.Column title="주문명" dataIndex="name" />
        <Table.Column title="날짜" dataIndex="date" searchMonthFilter />
        <Table.Column title="금액" dataIndex="amount" />
      </Table>
    )
  },
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
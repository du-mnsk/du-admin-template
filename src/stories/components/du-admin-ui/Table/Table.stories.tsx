import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { FilterValue, TablePaginationConfig } from 'antd/lib/table/interface'
import dayjs from 'dayjs'

import Table, { type TableProps } from '@/shared/components/du-admin-ui/Table'
import { renderCommas } from '@/shared/utils/number'

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
const sampleDataAgeTotal = sampleData.reduce((sum, row) => sum + row.age, 0)

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
    <Table {...args}>
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
    <Table {...args}>
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
      <Table {...args} data={filteredData} loading={loading} onChange={handleChange}>
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
    <Table {...args}>
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

// export const WithSummary: Story = {
//   args: {
//     rowKey: 'id',
//     data: sampleData,
//     loading: false,
//     summaryValues: ['합계', 83, '-'],
//   },
//   render: (args: TableProps<any>) => (
//     <Table {...args}>
//       <Table.Column title="이름" dataIndex="name" />
//       <Table.Column title="나이" dataIndex="age" />
//       <Table.Column title="이메일" dataIndex="email" />
//     </Table>
//   ),
// }

export const WithSummary: Story = {
  args: {
    rowKey: 'id',
    data: sampleData,
    loading: false,
    // 첫 컬럼은 "합계" 고정 → 나머지 2개 컬럼(나이, 이메일)만 값 전달
    summaryValues: [sampleDataAgeTotal, '-'],
  },
  render: (args: TableProps<any>) => (
    <Table {...args}>
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
    <Table {...args}>
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
    <Table {...args}>
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
        <p style={{ marginBottom: 16 }}>선택된 행 수: {selectedCount} (onSelectedRows 사용)</p>
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
      if (
        !filters ||
        !filters.price ||
        !Array.isArray(filters.price) ||
        filters.price.length === 0
      ) {
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
      <Table {...args} data={filteredData} loading={loading} onChange={handleChange}>
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
      <Table {...args} data={filteredData} loading={loading} onChange={handleChange}>
        <Table.Column title="주문명" dataIndex="name" />
        <Table.Column title="날짜" dataIndex="date" searchMonthFilter />
        <Table.Column title="금액" dataIndex="amount" />
      </Table>
    )
  },
}

interface PageViewJoinRow {
  StatHour: string
  PageView: number
  JoinSKT: number
  JoinKT: number
  JoinLGUP: number
  JoinTotal: number
  NetChange: number
}

const samplePageViewJoinData: PageViewJoinRow[] = [
  {
    StatHour: '00',
    PageView: 5200,
    JoinSKT: 45,
    JoinKT: 32,
    JoinLGUP: 28,
    JoinTotal: 105,
    NetChange: 150,
  },
  {
    StatHour: '01',
    PageView: 4800,
    JoinSKT: 38,
    JoinKT: 29,
    JoinLGUP: 22,
    JoinTotal: 89,
    NetChange: -80,
  },
  {
    StatHour: '02',
    PageView: 3100,
    JoinSKT: 21,
    JoinKT: 18,
    JoinLGUP: 15,
    JoinTotal: 54,
    NetChange: -120,
  },
  {
    StatHour: '03',
    PageView: 2800,
    JoinSKT: 19,
    JoinKT: 14,
    JoinLGUP: 12,
    JoinTotal: 45,
    NetChange: 0,
  },
  {
    StatHour: '04',
    PageView: 6100,
    JoinSKT: 52,
    JoinKT: 41,
    JoinLGUP: 35,
    JoinTotal: 128,
    NetChange: 210,
  },
  {
    StatHour: '05',
    PageView: 7200,
    JoinSKT: 61,
    JoinKT: 48,
    JoinLGUP: 40,
    JoinTotal: 149,
    NetChange: 95,
  },
]

const getPageViewJoinSummary = (pageData: readonly PageViewJoinRow[]) => (
  <Table.Summary.Row>
    <Table.Summary.Cell index={0} align="center">
      합계
    </Table.Summary.Cell>
    <Table.Summary.Cell index={1} align="center">
      {renderCommas(pageData.reduce((sum, row) => sum + row.PageView, 0))}
    </Table.Summary.Cell>
    <Table.Summary.Cell index={2} align="center">
      {renderCommas(pageData.reduce((sum, row) => sum + row.JoinSKT, 0))}
    </Table.Summary.Cell>
    <Table.Summary.Cell index={3} align="center">
      {renderCommas(pageData.reduce((sum, row) => sum + row.JoinKT, 0))}
    </Table.Summary.Cell>
    <Table.Summary.Cell index={4} align="center">
      {renderCommas(pageData.reduce((sum, row) => sum + row.JoinLGUP, 0))}
    </Table.Summary.Cell>
    <Table.Summary.Cell index={5} align="center">
      {renderCommas(pageData.reduce((sum, row) => sum + row.JoinTotal, 0))}
    </Table.Summary.Cell>
  </Table.Summary.Row>
)

export const WithRowClassName: Story = {
  args: {
    rowKey: 'StatHour',
    data: samplePageViewJoinData,
    loading: false,
    disabledTopSection: true,
  },
  render: (args: TableProps<any>) => (
    <Table
      {...args}
      rowClassName={(record) => {
        const n = Number(record.NetChange)
        if (n > 0) return 'color-success-light'
        if (n < 0) return 'color-warning-light'
        return ''
      }}
      summary={(pageData) => getPageViewJoinSummary(pageData)}
    >
      <Table.Column title="시간" dataIndex="StatHour" align="center" width={80} />
      <Table.Column title="페이지뷰" dataIndex="PageView" align="center" render={renderCommas} />
      <Table.ColumnGroup title="가입">
        <Table.Column title="SKT" dataIndex="JoinSKT" align="center" render={renderCommas} />
        <Table.Column title="KT" dataIndex="JoinKT" align="center" render={renderCommas} />
        <Table.Column title="LGU" dataIndex="JoinLGUP" align="center" render={renderCommas} />
        <Table.Column title="소계" dataIndex="JoinTotal" align="center" render={renderCommas} />
      </Table.ColumnGroup>
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
    <Table {...args}>
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

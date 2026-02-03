import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table as AntdTableOriginal } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

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
  children?: DataType[]
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
  title: 'Common/Antd/Antd.Table',
  component: Antd.Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Table Props
    bordered: {
      control: 'boolean',
      description: '테두리 표시 여부',
    },
    columns: {
      control: 'object',
      description: '테이블 컬럼 설정(ColumnsType[])',
    },
    components: {
      control: 'object',
      description: '컴포넌트 커스터마이징',
    },
    dataSource: {
      control: 'object',
      description: '테이블 데이터 소스(object[])',
    },
    expandable: {
      control: 'object',
      description: '확장 가능한 행 설정',
    },
    footer: {
      description: '테이블 푸터',
    },
    getPopupContainer: {
      description: '팝업 컨테이너 설정((triggerNode: HTMLElement) => HTMLElement)',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    locale: {
      control: 'object',
      description: '로케일 설정',
    },
    pagination: {
      control: 'object',
      description: '페이지네이션 설정',
    },
    rowClassName: {
      description: '행 클래스명 함수',
    },
    rowKey: {
      control: 'text',
      description: '행 키 필드',
    },
    rowSelection: {
      control: 'object',
      description: '행 선택 설정',
    },
    scroll: {
      control: 'object',
      description: '스크롤 설정',
    },
    showHeader: {
      control: 'boolean',
      description: '헤더 표시 여부',
    },
    showSorterTooltip: {
      control: 'boolean',
      description: '정렬 툴팁 표시 여부(boolean | Tooltip props)',
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: '테이블 크기',
    },
    sortDirections: {
      control: 'object',
      description: '정렬 방향(string[])',
    },
    sticky: {
      control: 'boolean',
      description: '고정 헤더',
    },
    summary: {
      description: '요약 행((currentData) => ReactNode)',
    },
    tableLayout: {
      control: 'select',
      options: ['auto', 'fixed'],
      description: '테이블 레이아웃',
    },
    title: {
      description: '테이블 제목',
    },
    onChange: {
      action: 'changed',
      description: '테이블 변경 이벤트 핸들러',
    },
    onHeaderRow: {
      description: '헤더 행 설정 함수',
    },
    onRow: {
      description: '행 설정 함수',
    },
  },
} satisfies Meta<typeof Antd.Table>

export default meta
type Story = StoryObj<typeof meta>

// 기본 사용법
export const Default: Story = {
  args: {
    columns,
    dataSource,
  },
}

// 페이지네이션 
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
      position: ['topRight', 'bottomRight'],
    },
  },
}

// 로딩 상태
export const Loading: Story = {
  args: {
    columns,
    dataSource,
    loading: true,
  },
}

// 테두리
export const Bordered: Story = {
  args: {
    columns,
    dataSource,
    bordered: true,
  },
}

// 크기: Small
export const Small: Story = {
  args: {
    columns,
    dataSource,
    size: 'small',
  },
}

// 크기: Middle
export const Middle: Story = {
  args: {
    columns,
    dataSource,
    size: 'middle',
  },
}

// 크기: Large
export const Large: Story = {
  args: {
    columns,
    dataSource,
    size: 'large',
  },
}

// 페이지네이션 없음
export const WithoutPagination: Story = {
  args: {
    columns,
    dataSource,
    pagination: false,
  },
}

// 헤더 숨김
export const WithoutHeader: Story = {
  args: {
    columns,
    dataSource,
    showHeader: false,
  },
}

// 제목과 푸터
export const WithTitleAndFooter: Story = {
  args: {
    columns,
    dataSource,
    title: () => 'User List',
    footer: () => 'Total: 3 users',
  },
}

// 수직 스크롤
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

// 스크롤 변경 시 첫 행으로 이동
export const ScrollToFirstRowOnChange: Story = {
  args: {
    columns,
    dataSource: Array.from({ length: 50 }, (_, i) => ({
      key: `${i + 1}`,
      name: `Name ${i + 1}`,
      age: 20 + i,
      address: `Address ${i + 1}`,
      tags: ['developer'],
    })),
    scroll: {
      y: 240,
      scrollToFirstRowOnChange: true,
    },
    pagination: {
      pageSize: 10,
    },
  },
}

// 행 선택: Checkbox
export const WithRowSelection: Story = {
  args: {
    columns,
    dataSource,
    rowSelection: {
      type: 'checkbox',
    },
  },
}

// 행 선택: Radio
export const WithRadioSelection: Story = {
  args: {
    columns,
    dataSource,
    rowSelection: {
      type: 'radio',
    },
  },
}

// 페이지네이션 이동 혹은 필터링된 행 선택 유지 (preserveSelectedRowKeys)
export const PreserveSelectedRowKeys: Story = {
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(['1'])
    const [data, setData] = useState(dataSource)

    return (
      <div>
        <Antd.Button
          onClick={() => {
            setData(dataSource.filter((item) => item.key !== '1'))
          }}
          style={{ marginBottom: 16 }}
        >
          Remove first row
        </Antd.Button>
        <Antd.Table
          columns={columns}
          dataSource={data}
          rowSelection={{
            selectedRowKeys,
            preserveSelectedRowKeys: true,
            onChange: (keys) => {
              setSelectedRowKeys(keys)
            },
          }}
        />
      </div>
    )
  },
}

// 전체 선택 체크박스 숨김
export const HideSelectAll: Story = {
  args: {
    columns,
    dataSource,
    rowSelection: {
      hideSelectAll: true,
    },
  },
}

// 체크박스 스크롤 시에도 맨 왼쪽 고정정(방향 변경 가능)
export const FixedSelectionColumn: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      ...columns.slice(1),
    ],
    dataSource,
    scroll: { x: 800 },
    rowSelection: {
      fixed: true,
    },
  },
}

// 정렬 기능
export const WithSorter: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        defaultSortOrder: 'descend',
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
    ],
    dataSource,
  },
}

// 필터 기능
export const WithFilter: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'John', value: 'John' },
          { text: 'Jim', value: 'Jim' },
          { text: 'Joe', value: 'Joe' },
        ],
        onFilter: (value, record) => record.name.indexOf(value as string) === 0,
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
    ],
    dataSource,
  },
}

// 필터 검색
export const WithFilterSearch: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterSearch: true,
        filters: [
          { text: 'John', value: 'John' },
          { text: 'Jim', value: 'Jim' },
          { text: 'Joe', value: 'Joe' },
        ],
        onFilter: (value, record) => record.name.indexOf(value as string) === 0,
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
    ],
    dataSource,
  },
}

// 고정 컬럼
export const WithFixedColumns: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        width: 100,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 100,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 200,
      },
      {
        title: 'Column 1',
        dataIndex: 'col1',
        key: 'col1',
        width: 150,
      },
      {
        title: 'Column 2',
        dataIndex: 'col2',
        key: 'col2',
        width: 150,
      },
      {
        title: 'Action',
        key: 'action',
        fixed: 'right',
        width: 100,
        render: () => <Antd.Button size="small">Action</Antd.Button>,
      },
    ],
    dataSource: dataSource.map((item, index) => ({
      ...item,
      col1: `Column 1-${index + 1}`,
      col2: `Column 2-${index + 1}`,
    })),
    scroll: { x: 1500 },
  },
}            

// 컬럼 정렬 및 필터 리셋
export const FilterResetToDefaultFilteredValue: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'John', value: 'John' },
          { text: 'Jim', value: 'Jim' },
          { text: 'Joe', value: 'Joe' },
        ],
        defaultFilteredValue: ['John'],
        filterResetToDefaultFilteredValue: true,
        onFilter: (value, record) => record.name.indexOf(value as string) === 0,
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
    ],
    dataSource,
  },
}

// 컬럼 정렬 및 필터 상태 제어
export const ControlledSorterAndFilter: Story = {
  render: () => {
    const [sortedInfo, setSortedInfo] = useState<any>({})
    const [filteredInfo, setFilteredInfo] = useState<any>({})

    const handleChange: TableProps<DataType>['onChange'] = (_pagination, filters, sorter) => {
      setFilteredInfo(filters)
      setSortedInfo(sorter)
    }

    const columns: ColumnsType<DataType> = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
        filters: [
          { text: 'John', value: 'John' },
          { text: 'Jim', value: 'Jim' },
          { text: 'Joe', value: 'Joe' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ]

    return (
      <div>
        <Antd.Button
          onClick={() => {
            setSortedInfo({})
            setFilteredInfo({})
          }}
          style={{ marginBottom: 16 }}
        >
          Clear filters and sorters
        </Antd.Button>
        <Antd.Table columns={columns} dataSource={dataSource} onChange={handleChange} />
      </div>
    )
  },
}

// 컬럼 정렬 및 필터 리셋
export const ResetFiltersAndSorters: Story = {
  render: () => {
    const [sortedInfo, setSortedInfo] = useState<any>({})
    const [filteredInfo, setFilteredInfo] = useState<any>({})

    const handleChange: TableProps<DataType>['onChange'] = (_pagination, filters, sorter) => {
      setFilteredInfo(filters)
      setSortedInfo(sorter)
    }

    const columns: ColumnsType<DataType> = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
        filters: [
          { text: 'John', value: 'John' },
          { text: 'Jim', value: 'Jim' },
          { text: 'Joe', value: 'Joe' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ]

    return (
      <div>
        <Antd.Button
          onClick={() => {
            setSortedInfo({})
            setFilteredInfo({})
          }}
          style={{ marginBottom: 16 }}
        >
          Reset
        </Antd.Button>
        <Antd.Table columns={columns} dataSource={dataSource} onChange={handleChange} />
      </div>
    )
  },
}

// 컬럼 정렬 및 필터 다중 정렬
export const MultipleSorter: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: {
          compare: (a, b) => a.name.localeCompare(b.name),
          multiple: 1,
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: {
          compare: (a, b) => a.age - b.age,
          multiple: 2,
        },
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sorter: {
          compare: (a, b) => a.address.localeCompare(b.address),
          multiple: 3,
        },
      },
    ],
    dataSource,
  },
}

// 컬럼 정렬 및 필터 ellipsis
export const WithEllipsis: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
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
        ellipsis: true,
      },
    ],
    dataSource: dataSource.map((item) => ({
      ...item,
      address: 'Very long address text that should be ellipsed when it exceeds the column width',
    })),
  },
}

// 컬럼 정렬 및 필터 정렬
export const ColumnAlign: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        align: 'left',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        align: 'center',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        align: 'right',
      },
    ],
    dataSource,
  },
}

// 컬럼 정렬 및 필터 colSpan
export const WithColSpan: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        colSpan: 2,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        colSpan: 0,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        colSpan: 2,
      },
    ],
    dataSource,
  },
}

// 확장 가능한 행
export const Expandable: Story = {
  args: {
    columns: columns.slice(0, 3),
    dataSource,
    expandable: {
      expandedRowRender: (record) => (
        <p style={{ margin: 0 }}>More information about {record.name}</p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    },
  },
}

// 확장 가능한 행: 기본 확장
export const DefaultExpandAllRows: Story = {
  args: {
    columns: columns.slice(0, 3),
    dataSource,
    expandable: {
      expandedRowRender: (record) => (
        <p style={{ margin: 0 }}>More information about {record.name}</p>
      ),
      defaultExpandAllRows: true,
    },
  },
}

// 행 클릭
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


// 행 키
export const CustomRowKey: Story = {
  args: {
    columns,
    dataSource: dataSource.map((item) => ({
      ...item,
      id: item.key,
    })),
    rowKey: 'id',
  },
}

// 빈 데이터
export const Empty: Story = {
  args: {
    columns,
    dataSource: [],
  },
}

// 커스텀 페이지네이션
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

// 요약 행
export const WithSummary: Story = {
  args: {
    columns: [
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
    ],
    dataSource,
    summary: (pageData) => {
      const totalAge = pageData.reduce((sum, record) => sum + record.age, 0)
      return (
        <AntdTableOriginal.Summary fixed>
          <AntdTableOriginal.Summary.Row>
            <AntdTableOriginal.Summary.Cell index={0}>Total</AntdTableOriginal.Summary.Cell>
            <AntdTableOriginal.Summary.Cell index={1}>
              <span style={{ color: '#ff4d4f' }}>{totalAge}</span>
            </AntdTableOriginal.Summary.Cell>
            <AntdTableOriginal.Summary.Cell index={2} />
          </AntdTableOriginal.Summary.Row>
        </AntdTableOriginal.Summary>
      )
    },
  },
}

// 테이블 레이아웃
export const TableLayout: Story = {
  args: {
    columns,
    dataSource,
    tableLayout: 'fixed',
  },
}

// onChange 이벤트
export const WithOnChange: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ],
    dataSource,
    onChange: (pagination, filters, sorter, extra) => {
      // eslint-disable-next-line no-console
      console.log('Table changed:', { pagination, filters, sorter, extra })
    },
  },
}

// onHeaderRow
export const WithOnHeaderRow: Story = {
  args: {
    columns,
    dataSource,
    onHeaderRow: () => ({
      onClick: () => {
        alert('Header row clicked')
      },
    }),
  },
}

// onCell
export const WithOnCell: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        onCell: (record) => ({
          onClick: () => {
            alert(`Cell clicked: ${record.name}`)
          },
        }),
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
    ],
    dataSource,
  },
}

// onHeaderCell
export const WithOnHeaderCell: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        onHeaderCell: () => ({
          onClick: () => {
            alert('Header cell clicked')
          },
        }),
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
    ],
    dataSource,
  },
}

// onFilterDropdownOpenChange
export const WithOnFilterDropdownOpenChange: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'John', value: 'John' },
          { text: 'Jim', value: 'Jim' },
          { text: 'Joe', value: 'Joe' },
        ],
        onFilter: (value, record) => record.name.indexOf(value as string) === 0,
        onFilterDropdownOpenChange: (visible) => {
          // eslint-disable-next-line no-console
          console.log('Filter dropdown open change:', visible)
        },
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
    ],
    dataSource,
  },
}

// onSelect
export const WithOnSelect: Story = {
  args: {
    columns,
    dataSource,
    rowSelection: {
      onSelect: (record, selected, selectedRows) => {
        // eslint-disable-next-line no-console
        console.log('Row selected:', record, selected, selectedRows)
      },
    },
  },
}

// onSelectAll: 전체 선택/해제 동작이 발생할 때 호출되는 콜백 함수
export const WithOnSelectAll: Story = {
  args: {
    columns,
    dataSource,
    rowSelection: {
      onSelectAll: (selected, selectedRows, changeRows) => {
        // eslint-disable-next-line no-console
        console.log('Select all:', selected, selectedRows, changeRows)
      },
    },
  },
}

// rowSelection onChange
export const RowSelectionOnChange: Story = {
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    return (
      <div>
        <p>Selected: {selectedRowKeys.join(', ')}</p>
        <Antd.Table
          columns={columns}
          dataSource={dataSource}
          rowSelection={{
            selectedRowKeys,
            onChange: (keys, selectedRows, info) => {
              setSelectedRowKeys([...keys])
              // eslint-disable-next-line no-console
              console.log('Selection changed:', keys, selectedRows, info)
            },
          }}
        />
      </div>
    )
  },
}

// sticky
export const Sticky: Story = {
  args: {
    columns,
    dataSource: Array.from({ length: 50 }, (_, i) => ({
      key: `${i + 1}`,
      name: `Name ${i + 1}`,
      age: 20 + i,
      address: `Address ${i + 1}`,
      tags: ['developer'],
    })),
    scroll: { y: 400 },
    sticky: true,
  },
}

// shouldCellUpdate
export const ShouldCellUpdate: Story = {
  render: () => {
    const [count, setCount] = useState(0)
    return (
      <div>
        <Antd.Button onClick={() => setCount(count + 1)} style={{ marginBottom: 16 }}>
          Re-render (Count: {count})
        </Antd.Button>
        <Antd.Table
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              shouldCellUpdate: (record, prevRecord) => record.name !== prevRecord.name,
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
          ]}
          dataSource={dataSource}
        />
      </div>
    )
  },
}

// filterMode
export const FilterMode: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterMode: 'tree',
        filterSearch: true,
        filters: [
          {
            text: 'John',
            value: 'John',
            children: [
              { text: 'John Brown', value: 'John Brown' },
              { text: 'John Doe', value: 'John Doe' },
            ],
          },
          {
            text: 'Jim',
            value: 'Jim',
            children: [
              { text: 'Jim Green', value: 'Jim Green' },
            ],
          },
        ],
        onFilter: (value, record) => {
          const values = Array.isArray(value) ? value : [value]
          return values.some((v) => record.name.includes(v as string))
        },
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
    ],
    dataSource,
  },
}

// width
export const ColumnWidth: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 100,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 80,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 200,
      },
    ],
    dataSource,
  },
}

// className
export const ColumnClassName: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        className: 'name-column',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        className: 'age-column',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        className: 'address-column',
      },
    ],
    dataSource,
  },
}

// columnTitle, columnWidth (rowSelection)
export const SelectionColumnWidth: Story = {
  args: {
    columns,
    dataSource,
    rowSelection: {
      columnTitle: 'Select',
      columnWidth: 80,
    },
  },
}

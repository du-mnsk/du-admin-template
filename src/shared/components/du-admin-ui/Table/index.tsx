import React, {
  type Attributes,
  Children,
  cloneElement,
  isValidElement,
  type JSXElementConstructor,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  useEffect,
  useState,
} from 'react'
import { PictureFilled, SearchOutlined } from '@ant-design/icons'
import { Col, Image, Row, Slider, Space, Table as AntdTable, type TablePaginationConfig } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { ColumnType } from 'antd/lib/table'
import type { FilterValue, SorterResult, TableRowSelection } from 'antd/lib/table/interface'
import dayjs from 'dayjs'
import type { PanelRender,TableComponents } from 'rc-table/lib/interface'
import type { TableProps as RcTableProps } from 'rc-table/lib/Table'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

export interface Pagination {
  current?: number
  pageSize?: number
  total?: number
  pageSizeOptions?: string[] | number[]
}

export interface TableProps<T> {
  id?: string
  rowKey: string
  children?: React.ReactNode
  data?: any[]
  pagination?: Pagination
  loading?: boolean
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<any> | SorterResult<any>[],
  ) => void
  onSelectedRows?: (selectedRows: any[]) => void
  onClickRow?: (record: T, index: number | undefined) => void
  disabledRowSelection?: boolean | undefined
  disabledTopSection?: boolean | undefined
  previewImageId?: string | undefined
  components?: TableComponents<T>
  summaryValues?: (number | string)[] | undefined
  rowSelection?: TableRowSelection<any> | undefined
  scroll?: (RcTableProps<T>['scroll'] & { scrollToFirstRowOnChange?: boolean }) | undefined
  footer?: PanelRender<T>
}

export interface TableTopWrapperProps {
  children: React.ReactNode
}

export interface TableTopSectionProps {
  total: number | undefined
  children?: React.ReactNode
}

interface TableColumnProps extends ColumnType<any> {
  searchFilter?: boolean | undefined
  searchRangeFilter?: boolean | undefined
  searchRangeFilterProps?: SearchRangeFilterProps | undefined
  searchMonthFilter?: boolean | undefined
  filterMode?: 'menu' | undefined
  alias?: string
  children?: React.ReactNode
}

interface SearchRangeFilterProps {
  min: number
  max: number
  step: number
  defaultValue: [number, number]
}

const TableTopSection = (props: TableTopSectionProps) => {
  return (
    <Row align="middle" justify="space-between">
      {typeof props.total === 'number' && <Col>총: {props.total?.toLocaleString()} 건</Col>}
      {props.children}
    </Row>
  )
}

function Table<T>({
  id,
  rowKey,
  data,
  loading = false,
  children,
  pagination,
  onChange,
  onSelectedRows,
  onClickRow,
  disabledRowSelection,
  disabledTopSection,
  previewImageId,
  components,
  summaryValues,
  rowSelection,
  scroll,
  footer,
}: TableProps<T>) {
  const [tableData, setTableData] = useState<{
    data: T[]
    pagination?: Pagination
    loading: boolean
  }>({
    data: data as T[],
    pagination: pagination,
    loading: loading,
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [columns, setColumns] = useState<ColumnsType<T>>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([])
  const [previewImage, setPreviewImage] = useState('')
  const [visiblePreview, setVisiblePreview] = useState(false)

  const ColumnSearchProps = (dataIndex: string): ColumnType<T> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Antd.Input
          id={`table-search-filter-input-${dataIndex}`}
          placeholder="검색"
          value={selectedKeys[0] as string}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Antd.Button
            onClick={() => {
              setSelectedKeys([])
              confirm()
            }}
            size="small"
            type="text"
            style={{ width: 90 }}
          >
            초기화
          </Antd.Button>
          <Antd.Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            검색
          </Antd.Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    /*onFilter: (value, record) => {},*/
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(
          () =>
            (
              document.getElementById(`table-search-filter-input-${dataIndex}`) as HTMLInputElement
            )?.select(),
          100,
        )
      }
    },
  })

  const ColumnSearchRangeProps =
    ({ min, max, step = 1, defaultValue = [min, max] }: SearchRangeFilterProps) =>
    (dataIndex: string): ColumnType<T> => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        const parseRange = (): [number, number] => {
          if (typeof selectedKeys[0] === 'string') {
            try {
              return JSON.parse(selectedKeys[0]) as [number, number]
            } catch {
              return defaultValue
            }
          }
          return defaultValue
        }

        const clamp = (value: number) => Math.min(Math.max(value, min), max)

        const roundToStep = (value: number) => Math.round(value / step) * step

        const handleSliderChange = (value: [number, number]) => {
          setSelectedKeys([JSON.stringify(value)] as React.Key[])
        }

        const handleInputChange = (value: string, index: 0 | 1) => {
          const newRange = [...parseRange()] as [number, number]

          if (/^(\d+(\.\d*)?)?$/.test(value)) {
            if (value === '') {
              newRange[index] = 0
            } else {
              newRange[index] = parseFloat(value)
            }
            setSelectedKeys([JSON.stringify(newRange)] as React.Key[])
          }
        }

        const handleInputBlur = (index: 0 | 1) => {
          const newRange = [...parseRange()] as [number, number]

          newRange[index] = clamp(roundToStep(newRange[index]))
          setSelectedKeys([JSON.stringify(newRange)] as React.Key[])
        }

        const range = parseRange()

        return (
          <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
            <Slider
              range
              min={min}
              max={max}
              step={step}
              value={range}
              onChange={handleSliderChange}
            />

            <Space style={{ marginTop: 8 }}>
              <Antd.Input
                id={`table-search-filter-input-${dataIndex}`}
                placeholder={String(min)}
                value={range[0].toString()}
                type="number"
                step={step}
                onChange={(e) => handleInputChange(e.target.value, 0)}
                onBlur={() => handleInputBlur(0)}
                onPressEnter={() => handleInputBlur(0)}
                style={{ width: 90 }}
              />
              ~
              <Antd.Input
                placeholder={String(max)}
                value={range[1].toString()}
                type="number"
                step={step}
                onChange={(e) => handleInputChange(e.target.value, 1)}
                onBlur={() => handleInputBlur(1)}
                onPressEnter={() => handleInputBlur(1)}
                style={{ width: 90 }}
              />
            </Space>

            <Space style={{ marginTop: 8 }}>
              <Antd.Button
                onClick={() => {
                  setSelectedKeys([])
                  confirm()
                }}
                size="small"
                type="text"
                style={{ width: 90 }}
              >
                초기화
              </Antd.Button>
              <Antd.Button
                type="primary"
                onClick={() => confirm()}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                검색
              </Antd.Button>
            </Space>
          </div>
        )
      },
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(
            () =>
              (
                document.getElementById(
                  `table-search-filter-input-${dataIndex}`,
                ) as HTMLInputElement
              )?.select(),
            100,
          )
        }
      },
    })

  const ColumnMonthPickerProps = (dataIndex: string): ColumnType<any> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      const handleMonthChange = (date: dayjs.Dayjs | null) => {
        if (date) {
          setSelectedKeys([date.format('YYYY-MM')] as React.Key[])
        } else {
          setSelectedKeys([])
        }
      }

      const handleClear = () => {
        setSelectedKeys([])
      }

      return (
        <div style={{ padding: 8 }}>
          <Antd.DatePicker
            picker="month"
            style={{ width: '100%' }}
            placeholder="월 선택"
            value={selectedKeys.length > 0 ? dayjs(selectedKeys[0] as string, 'YYYY-MM') : null}
            onChange={handleMonthChange}
            allowClear
          />
          <Space style={{ marginTop: 8 }}>
            <Antd.Button
              onClick={() => {
                handleClear()
                confirm() // 필터 초기화 후 확정
              }}
              size="small"
              style={{ width: 90 }}
            >
              초기화
            </Antd.Button>
            <Antd.Button
              type="primary"
              onClick={() => confirm()} // 검색 버튼 클릭 시 확정
              size="small"
              style={{ width: 90 }}
            >
              검색
            </Antd.Button>
          </Space>
        </div>
      )
    },
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(
          () =>
            (
              document.getElementById(`table-search-filter-input-${dataIndex}`) as HTMLInputElement
            )?.select(),
          100,
        )
      }
    },
  })

  const handlePreviewImage = (e: MouseEvent<HTMLElement>, src: string) => {
    e.stopPropagation()
    setPreviewImage(src)
    setVisiblePreview(true)
  }

  const renderPreviewImage = (value: string) => {
    return (
      <PictureFilled
        style={{ fontSize: '4em', color: '#b3cbe1' }}
        onClick={(e) => handlePreviewImage(e, value)}
      />
    )
  }

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
    onSelectedRows && onSelectedRows(newSelectedRowKeys)
  }

  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // }

  // function convertColumns(type: string | JSXElementConstructor<any>, children: ReactNode) {
  //   const dataIndexList = columns.map((c: ColumnType<any>) => c.dataIndex as string)
  //   return Children.toArray(children).some((child: ReactNode) => {
  //     if (isValidElement(child) && (child as ReactElement).type === type) {
  //       let colProps = child.props as TableColumnProps
  //       const dataIndex = colProps.dataIndex as string
  //       if (!dataIndexList.includes(dataIndex)) {
  //         if (!!colProps.searchFilter) {
  //           colProps = {
  //             ...colProps,
  //             ...ColumnSearchProps(colProps.dataIndex as string),
  //             filterMode: 'menu',
  //           }
  //         }
  //         if (!!previewImageId && previewImageId === colProps.dataIndex) {
  //           colProps = {
  //             ...colProps,
  //             render: renderPreviewImage,
  //             align: 'center',
  //           }
  //         }

  //         if (!!colProps.children) {
  //           colProps = {
  //             ...colProps,
  //             children: Children.toArray(colProps.children).map((child: any) => child.props),
  //           }
  //         }
  //         columns.push(colProps)
  //         setColumns([...columns])
  //       }
  //     }
  //   })
  // }

  function renderColumns(type: string | JSXElementConstructor<any>, children: ReactNode) {
    if (!children) return []

    const dataIndexList = columns.map((c: ColumnType<any>) => c.dataIndex as string)
    const newColumns: any[] = []
    for (const child of Children.toArray(children)) {
      if (isValidElement(child) && (child as ReactElement).type === type) {
        let colProps = child.props as TableColumnProps
        const dataIndex = colProps.dataIndex as string
        if (!dataIndexList.includes(dataIndex)) {
          if (!!colProps.searchFilter) {
            colProps = {
              ...colProps,
              ...ColumnSearchProps(colProps.dataIndex as string),
              filterMode: 'menu',
            }
          }
          if (!!previewImageId && previewImageId === colProps.dataIndex) {
            colProps = {
              ...colProps,
              render: renderPreviewImage,
              align: 'center',
            }
          }
          if (!!colProps.searchRangeFilter && !!colProps.searchRangeFilterProps) {
            colProps = {
              ...colProps,
              ...ColumnSearchRangeProps({
                min: colProps.searchRangeFilterProps.min,
                max: colProps.searchRangeFilterProps.max,
                step: colProps.searchRangeFilterProps.step, // step을 다른 값으로도 지정할 수 있습니다.
                defaultValue: colProps.searchRangeFilterProps.defaultValue, // 초기값을 설정할 수 있습니다.
              })(colProps.dataIndex as string),
              filterMode: 'menu',
            }
          }
          if (colProps.searchMonthFilter) {
            colProps = {
              ...colProps,
              ...ColumnMonthPickerProps(colProps.dataIndex as string),
              filterMode: 'menu',
            }
          }

          if (!!colProps.children) {
            colProps = {
              ...colProps,
              children: Children.toArray(colProps.children).map((child: any) => child.props),
            }
          }
          newColumns.push(colProps)
        }
      }
    }
    return newColumns
  }

  function convertItem<P>(child: ReactNode, props?: Partial<P> & Attributes) {
    return cloneElement<P>(child as ReactElement, props)
  }

  function getTopItem(type: string | JSXElementConstructor<any>, children: ReactNode) {
    return Children.toArray(children).find((child: ReactNode) => {
      if (isValidElement(child) && (child as ReactElement).type === type) {
        return convertItem(child)
      }
    })
  }

  useEffect(() => {
    setTableData({
      loading: loading,
      pagination: pagination,
      data: data as T[],
    })
  }, [loading, pagination, data])

  // useEffect(() => {
  //   children && convertColumns(Table.Column, children)
  // }, [children])

  useEffect(() => {
    setSelectedRowKeys([])
  }, [tableData.data])

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
  ) => {
    const tableColumns = renderColumns(Table.Column, children) as TableColumnProps[]

    Object.keys(filters).forEach((filterKey) => {
      const fKey = filterKey.includes('.')
        ? filterKey.substring(filterKey.lastIndexOf('.') + 1)
        : filterKey

      const findColumn = tableColumns.find((c: TableColumnProps) => c.dataIndex === fKey)

      if (!findColumn) return

      let filterVal = filters[filterKey]

      // searchFilter가 있는 컬럼에서 쉼표로 구분된 복수 검색 처리
      if (
        findColumn.searchFilter &&
        findColumn.dataIndex === 'CouponNumber' &&
        Array.isArray(filterVal) &&
        typeof filterVal[0] === 'string'
      ) {
        const raw = (filterVal[0] as string).trim()

        if (raw) {
          const splitted = raw
            .split(',')
            .map((v) => v.trim())
            .filter((v) => v.length > 0)

          filterVal = splitted.length > 0 ? splitted : null
        } else {
          filterVal = null
        }

        filters[filterKey] = filterVal
      }

      // alias가 있으면 필터 키 변경
      if (findColumn.alias) {
        delete filters[filterKey]
        filters[`${findColumn.alias}.${fKey}`] = filterVal
      }
    })

    // sorter column add alias (기존 로직)
    if (!Array.isArray(sorter)) {
      const findSorterColumn = tableColumns.find(
        (c: TableColumnProps) => c.dataIndex === sorter.field,
      )

      if (findSorterColumn?.alias) {
        sorter.field = `${findSorterColumn.alias}.${findSorterColumn.dataIndex}`
      }
    }

    onChange?.(pagination, filters, sorter)
    setSelectedRowKeys([])
  }

  const summary = () => {
    return (
      <>
        <AntdTable.Summary.Row>
          <AntdTable.Summary.Cell index={0} key={0} align="center">
            합계
          </AntdTable.Summary.Cell>
          {summaryValues?.map((val, i) => (
            <AntdTable.Summary.Cell index={i + 1} key={i + 1} align="center">
              {val}
            </AntdTable.Summary.Cell>
          ))}
        </AntdTable.Summary.Row>
      </>
    )
  }

  return (
    <>
      <Antd.Table
        id={id}
        rowKey={rowKey}
        columns={renderColumns(Table.Column, children)}
        rowSelection={
          !disabledRowSelection
            ? rowSelection ?? { selectedRowKeys, onChange: onSelectChange }
            : undefined
        }
        dataSource={tableData.data}
        pagination={
          !!tableData.pagination
            ? {
                ...tableData.pagination,
                showSizeChanger: !!tableData.pagination,
              }
            : false
        }
        loading={tableData.loading}
        components={components}
        onChange={handleTableChange}
        onRow={
          onClickRow &&
          ((record, index) => {
            return {
              onClick: () => {
                onClickRow && onClickRow(record, index)
              },
            }
          })
        }
        bordered
        title={
          disabledTopSection
            ? undefined
            : () => (
                <TableTopSection
                  total={!!tableData.pagination ? tableData.pagination.total : data?.length}
                >
                  {getTopItem(Table.Top, children)}
                </TableTopSection>
              )
        }
        scroll={scroll}
        summary={!!tableData.data?.length ? summaryValues && summary : undefined}
        footer={footer}
      />
      <Image
        style={{
          display: 'none',
        }}
        src={previewImage}
        preview={{
          visible: visiblePreview,
          scaleStep: 1,
          src: previewImage,
          onVisibleChange: (value) => {
            setVisiblePreview(value)
          },
        }}
      />
    </>
  )
}

const column: React.FC<TableColumnProps> = () => {
  return <></>
}

Table.Column = column

// eslint-disable-next-line react/display-name
Table.Top = (props: TableTopWrapperProps) => {
  return <>{props.children}</>
}

export default Table

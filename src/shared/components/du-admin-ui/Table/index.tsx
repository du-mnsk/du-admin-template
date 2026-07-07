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
  useMemo,
  useState,
} from 'react'
import { PictureFilled, SearchOutlined } from '@ant-design/icons'
import {
  Col,
  Image,
  Row,
  Slider,
  Space,
  Table as AntdTable,
  type TablePaginationConfig,
} from 'antd'
import type { ColumnType } from 'antd/lib/table'
import type { FilterValue, SorterResult, TableRowSelection } from 'antd/lib/table/interface'
import dayjs from 'dayjs'
import type { PanelRender, TableComponents } from 'rc-table/lib/interface'
import type { TableProps as RcTableProps } from 'rc-table/lib/Table'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// Constants
const INPUT_FOCUS_DELAY = 100 // ms
const PREVIEW_ICON_SIZE = '4em'
const FILTERED_ICON_COLOR = '#1890ff'
const PREVIEW_ICON_COLOR = '#b3cbe1'

const FILTER_STYLES = {
  dropdown: { padding: 8 },
  input: { marginBottom: 8, display: 'block' },
  button: { width: 90 },
  space: { marginTop: 8 },
} as const

const TABLE_TEXT = {
  TOTAL: '총',
  UNIT: '건',
  SUMMARY: '합계',
  SEARCH: '검색',
  RESET: '초기화',
  SEARCH_PLACEHOLDER: '검색',
  MONTH_PLACEHOLDER: '월 선택',
} as const

// 특정 컬럼에서 쉼표로 구분된 복수 검색을 지원하는 컬럼명
const MULTI_SEARCH_COLUMNS = ['CouponNumber'] as const

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
  data?: T[]
  pagination?: Pagination
  loading?: boolean
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
  ) => void
  onSelectedRows?: (selectedRowKeys: React.Key[]) => void
  onClickRow?: (record: T, index: number | undefined) => void
  disabledTopSection?: boolean | undefined
  previewImageId?: string | undefined
  components?: TableComponents<T>
  summaryValues?: (number | string)[] | undefined
  rowSelection?: TableRowSelection<T> | undefined
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

interface TableColumnProps<T = any> extends ColumnType<T> {
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

// Helper Components
const FilterButtons = ({ onReset, onConfirm }: { onReset: () => void; onConfirm: () => void }) => (
  <Space style={FILTER_STYLES.space}>
    <Antd.Button onClick={onReset} size="small" type="text" style={FILTER_STYLES.button}>
      {TABLE_TEXT.RESET}
    </Antd.Button>
    <Antd.Button
      type="primary"
      onClick={onConfirm}
      icon={<SearchOutlined />}
      size="small"
      style={FILTER_STYLES.button}
    >
      {TABLE_TEXT.SEARCH}
    </Antd.Button>
  </Space>
)

const TableTopSection = (props: TableTopSectionProps) => {
  return (
    <Row align="middle" justify="space-between">
      {typeof props.total === 'number' && (
        <Col>
          {TABLE_TEXT.TOTAL}: {props.total?.toLocaleString()} {TABLE_TEXT.UNIT}
        </Col>
      )}
      {props.children}
    </Row>
  )
}

// Type Guards
function isTableColumnElement<T>(child: ReactNode): child is ReactElement<TableColumnProps<T>> {
  return isValidElement(child) && (child as ReactElement).type === Table.Column
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
  disabledTopSection,
  previewImageId,
  components,
  summaryValues,
  rowClassName,
  rowSelection,
  scroll,
  footer,
}: TableProps<T>) {
  const [previewImage, setPreviewImage] = useState('')
  const [visiblePreview, setVisiblePreview] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  // Filter Props Functions
  const ColumnSearchProps = (dataIndex: string): ColumnType<T> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={FILTER_STYLES.dropdown} onKeyDown={(e) => e.stopPropagation()}>
        <Antd.Input
          id={`table-search-filter-input-${dataIndex}`}
          placeholder={TABLE_TEXT.SEARCH_PLACEHOLDER}
          value={selectedKeys[0] as string}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={FILTER_STYLES.input}
        />
        <FilterButtons
          onReset={() => {
            setSelectedKeys([])
            confirm()
          }}
          onConfirm={() => confirm()}
        />
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? FILTERED_ICON_COLOR : undefined }} />
    ),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          const input = document.getElementById(
            `table-search-filter-input-${dataIndex}`,
          ) as HTMLInputElement
          input?.select()
        }, INPUT_FOCUS_DELAY)
      }
    },
  })

  const ColumnSearchRangeProps =
    ({ min, max, step = 1, defaultValue = [min, max] }: SearchRangeFilterProps) =>
    (dataIndex: string): ColumnType<T> => {
      const parseRange = (selectedKeys: React.Key[]): [number, number] => {
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

      return {
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
          const handleSliderChange = (value: [number, number]) => {
            setSelectedKeys([JSON.stringify(value)] as React.Key[])
          }

          const handleInputChange = (value: string, index: 0 | 1) => {
            const currentRange = parseRange(selectedKeys)
            const newRange = [...currentRange] as [number, number]

            if (/^(\d+(\.\d*)?)?$/.test(value)) {
              newRange[index] = value === '' ? 0 : parseFloat(value)
              setSelectedKeys([JSON.stringify(newRange)] as React.Key[])
            }
          }

          const handleInputBlur = (index: 0 | 1) => {
            const currentRange = parseRange(selectedKeys)
            const newRange = [...currentRange] as [number, number]
            newRange[index] = clamp(roundToStep(newRange[index]))
            setSelectedKeys([JSON.stringify(newRange)] as React.Key[])
          }

          const range = parseRange(selectedKeys)

          return (
            <div style={FILTER_STYLES.dropdown} onKeyDown={(e) => e.stopPropagation()}>
              <Slider
                range
                min={min}
                max={max}
                step={step}
                value={range}
                onChange={handleSliderChange}
              />

              <Space style={FILTER_STYLES.space}>
                <Antd.Input
                  id={`table-search-filter-input-${dataIndex}`}
                  placeholder={String(min)}
                  value={range[0].toString()}
                  type="number"
                  step={step}
                  onChange={(e) => handleInputChange(e.target.value, 0)}
                  onBlur={() => handleInputBlur(0)}
                  onPressEnter={() => handleInputBlur(0)}
                  style={FILTER_STYLES.button}
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
                  style={FILTER_STYLES.button}
                />
              </Space>

              <FilterButtons
                onReset={() => {
                  setSelectedKeys([])
                  confirm()
                }}
                onConfirm={() => confirm()}
              />
            </div>
          )
        },
        filterIcon: (filtered: boolean) => (
          <SearchOutlined style={{ color: filtered ? FILTERED_ICON_COLOR : undefined }} />
        ),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              const input = document.getElementById(
                `table-search-filter-input-${dataIndex}`,
              ) as HTMLInputElement
              input?.select()
            }, INPUT_FOCUS_DELAY)
          }
        },
      }
    }

  const ColumnMonthPickerProps = (dataIndex: string): ColumnType<T> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
      const handleMonthChange = (date: dayjs.Dayjs | null) => {
        if (date) {
          setSelectedKeys([date.format('YYYY-MM')] as React.Key[])
        } else {
          setSelectedKeys([])
        }
      }

      return (
        <div style={FILTER_STYLES.dropdown}>
          <Antd.DatePicker
            picker="month"
            style={{ width: '100%' }}
            placeholder={TABLE_TEXT.MONTH_PLACEHOLDER}
            value={selectedKeys.length > 0 ? dayjs(selectedKeys[0] as string, 'YYYY-MM') : null}
            onChange={handleMonthChange}
            allowClear
          />
          <FilterButtons
            onReset={() => {
              setSelectedKeys([])
              confirm()
            }}
            onConfirm={() => confirm()}
          />
        </div>
      )
    },
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? FILTERED_ICON_COLOR : undefined }} />
    ),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          const input = document.getElementById(
            `table-search-filter-input-${dataIndex}`,
          ) as HTMLInputElement
          input?.select()
        }, INPUT_FOCUS_DELAY)
      }
    },
  })

  // Image Preview Handlers
  const handlePreviewImage = (e: MouseEvent<HTMLElement>, src: string) => {
    e.stopPropagation()
    setPreviewImage(src)
    setVisiblePreview(true)
  }

  const renderPreviewImage = (value: string) => {
    return (
      <PictureFilled
        style={{ fontSize: PREVIEW_ICON_SIZE, color: PREVIEW_ICON_COLOR }}
        onClick={(e) => handlePreviewImage(e, value)}
      />
    )
  }

  // Column Processing
  const renderColumns = useMemo((): ColumnType<T>[] => {
    if (!children) return []

    const newColumns: ColumnType<T>[] = []
    const processedDataIndexes = new Set<string>()

    for (const child of Children.toArray(children)) {
      if (!isTableColumnElement<T>(child)) continue

      const colProps = child.props as TableColumnProps<T>
      const dataIndex = colProps.dataIndex as string

      if (!dataIndex || processedDataIndexes.has(dataIndex)) continue

      processedDataIndexes.add(dataIndex)
      let enhancedProps: ColumnType<T> = { ...colProps }

      // Apply search filter
      if (colProps.searchFilter) {
        enhancedProps = {
          ...enhancedProps,
          ...ColumnSearchProps(dataIndex),
          filterMode: 'menu',
        }
      }

      // Apply preview image
      if (previewImageId && previewImageId === dataIndex) {
        enhancedProps = {
          ...enhancedProps,
          render: renderPreviewImage,
          align: 'center',
        }
      }

      // Apply range filter
      if (colProps.searchRangeFilter && colProps.searchRangeFilterProps) {
        enhancedProps = {
          ...enhancedProps,
          ...ColumnSearchRangeProps({
            min: colProps.searchRangeFilterProps.min,
            max: colProps.searchRangeFilterProps.max,
            step: colProps.searchRangeFilterProps.step,
            defaultValue: colProps.searchRangeFilterProps.defaultValue,
          })(dataIndex),
          filterMode: 'menu',
        }
      }

      // Apply month filter
      if (colProps.searchMonthFilter) {
        enhancedProps = {
          ...enhancedProps,
          ...ColumnMonthPickerProps(dataIndex),
          filterMode: 'menu',
        }
      }

      // Process nested children
      if (colProps.children) {
        const nestedChildren = Children.toArray(colProps.children).map((child: ReactNode) =>
          isValidElement(child) ? child.props : child,
        )
        // ColumnType<T>에 children이 없을 수 있으므로 타입 단언 사용
        ;(enhancedProps as any).children = nestedChildren
      }

      newColumns.push(enhancedProps)
    }

    return newColumns
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, previewImageId])

  // Helper Functions
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

  // Filter Processing
  const processFilters = (
    filters: Record<string, FilterValue | null>,
    columns: TableColumnProps<T>[],
  ): Record<string, FilterValue | null> => {
    const processedFilters = { ...filters }

    Object.keys(processedFilters).forEach((filterKey) => {
      const fKey = filterKey.includes('.')
        ? filterKey.substring(filterKey.lastIndexOf('.') + 1)
        : filterKey

      const findColumn = columns.find((c: TableColumnProps<T>) => c.dataIndex === fKey)
      if (!findColumn) return

      let filterVal = processedFilters[filterKey]

      // Handle multi-search columns (comma-separated values)
      if (
        findColumn.searchFilter &&
        MULTI_SEARCH_COLUMNS.includes(
          findColumn.dataIndex as (typeof MULTI_SEARCH_COLUMNS)[number],
        ) &&
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
        processedFilters[filterKey] = filterVal
      }

      // Apply alias if exists
      if (findColumn.alias) {
        delete processedFilters[filterKey]
        processedFilters[`${findColumn.alias}.${fKey}`] = filterVal
      }
    })

    return processedFilters
  }

  // Sorter Processing
  const processSorter = (
    sorter: SorterResult<T> | SorterResult<T>[],
    columns: TableColumnProps<T>[],
  ): SorterResult<T> | SorterResult<T>[] => {
    if (Array.isArray(sorter)) {
      return sorter.map((s) => {
        const findColumn = columns.find((c: TableColumnProps<T>) => c.dataIndex === s.field)
        if (findColumn?.alias) {
          return {
            ...s,
            field: `${findColumn.alias}.${findColumn.dataIndex}`,
          }
        }
        return s
      })
    }

    const findColumn = columns.find((c: TableColumnProps<T>) => c.dataIndex === sorter.field)
    if (findColumn?.alias) {
      return {
        ...sorter,
        field: `${findColumn.alias}.${findColumn.dataIndex}`,
      }
    }

    return sorter
  }

  // Table Change Handler
  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
  ) => {
    const tableColumns = renderColumns.map((col) => col as unknown as TableColumnProps<T>)
    const processedFilters = processFilters(filters, tableColumns)
    const processedSorter = processSorter(sorter, tableColumns)

    onChange?.(pagination, processedFilters, processedSorter)
    setSelectedRowKeys([])
  }

  // Summary Renderer
  const summary = () => {
    return (
      <>
        <AntdTable.Summary.Row>
          <AntdTable.Summary.Cell index={0} key={0} align="center">
            {TABLE_TEXT.SUMMARY}
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

  // Pagination Config
  const paginationConfig = pagination
    ? {
        ...pagination,
        showSizeChanger: true,
      }
    : false

  // Row Handler
  const rowProps = onClickRow
    ? (record: T, index: number | undefined) => ({
        onClick: () => onClickRow(record, index),
      })
    : undefined

  // Title Renderer
  const titleRenderer = disabledTopSection
    ? undefined
    : () => (
        <TableTopSection total={pagination?.total ?? data?.length}>
          {getTopItem(Table.Top, children)}
        </TableTopSection>
      )

  // Row Selection Handler
  const handleSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
    onSelectedRows?.(newSelectedRowKeys)
  }

  // Determine rowSelection prop
  const finalRowSelection = rowSelection
    ? rowSelection
    : onSelectedRows
      ? {
          selectedRowKeys,
          onChange: handleSelectChange,
        }
      : undefined

  // Reset selected rows when data changes
  useEffect(() => {
    if (data) {
      setSelectedRowKeys([])
    }
  }, [data])

  return (
    <>
      <Antd.Table
        id={id}
        rowKey={rowKey}
        columns={renderColumns}
        rowSelection={finalRowSelection}
        dataSource={data}
        pagination={paginationConfig}
        loading={loading}
        components={components}
        onChange={handleTableChange}
        onRow={rowProps}
        bordered
        title={titleRenderer}
        scroll={scroll}
        rowClassName={rowClassName}
        summary={data?.length && summaryValues ? summary : undefined}
        footer={footer}
      />
      <Image
        alt="이미지 미리보기"
        style={{ display: 'none' }}
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

const column: React.FC<TableColumnProps<any>> = () => {
  return <></>
}

Table.Column = column
Table.ColumnGroup = AntdTable.ColumnGroup
Table.Summary = AntdTable.Summary

// eslint-disable-next-line react/display-name
Table.Top = (props: TableTopWrapperProps) => {
  return <>{props.children}</>
}

export default Table

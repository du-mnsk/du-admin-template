/**
 * UI Template / Detail
 *
 * ## 스토리북에 컴포넌트 추가하는 방법
 *
 * ### 1) 레이아웃만 바꿔서 추가 (Row/Col + TemplateLayout)
 * - 아래처럼 layout 상수를 하나 만들고, 새 Story에서 사용하면 됨.
 * - form.type: 'input' | 'select' | 'textarea' | 'datepicker' | 'switch' | 'checkbox' | 'radio' | ...
 *
 * ```ts
 * const myLayout: LayoutConfig = {
 *   rows: [
 *     { cols: [ { span: 12, form: { type: 'input', name: 'a', label: '필드 A' } }, { span: 12, form: { type: 'select', name: 'b', label: '필드 B' } } ] },
 *     { cols: [ { span: 24, form: { type: 'textarea', name: 'c', label: '메모' } } ] },
 *   ],
 * }
 * export const MyDetail: Story = { render: () => <DetailTemplateRenderer layout={myLayout} /> }
 * ```
 *
 * ### 2) 새로운 Form 컴포넌트 타입을 추가하려면
 * - types.ts: FormFieldType에 새 타입 추가 (예: 'colorpicker')
 * - TemplateLayout.tsx: FormCell의 switch에 case 추가 → 해당 위치에 컴포넌트 렌더
 * - 스토리에서 layout의 form.type에 새 타입 사용
 */
import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Col, Row, Space } from 'antd'
import type { FormInstance } from 'antd/es/form/Form'

import Form from '@/shared/components/du-admin-ui/Form'
import type { ColConfig, FormFieldType, LayoutConfig } from '@/shared/components/ui-template'
import { TemplateCard, TemplateLayout } from '@/shared/components/ui-template'

const meta = {
  title: 'UI Template/Detail',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj

const layoutSingleColumn: LayoutConfig = {
  rows: [
    {
      cols: [
        {
          span: 24,
          form: { type: 'input', name: 'title', label: '제목', placeholder: '제목을 입력하세요.' },
        },
      ],
    },
    {
      cols: [
        {
          span: 24,
          form: { type: 'select', name: 'status', label: '상태' },
        },
      ],
    },
    {
      cols: [
        {
          span: 24,
          form: { type: 'textarea', name: 'content', label: '내용', placeholder: '내용을 입력하세요.' },
        },
      ],
    },
    {
      cols: [
        {
          span: 24,
          form: { type: 'datepicker', name: 'regDate', label: '등록일' },
        },
      ],
    },
  ],
}

const layoutDoubleColumn: LayoutConfig = {
  rows: [
    {
      cols: [
        { span: 24, md: 12, form: { type: 'input', name: 'title', label: '제목' } },
        { span: 24, md: 12, form: { type: 'select', name: 'category', label: '카테고리' } },
      ],
    },
    {
      cols: [
        { span: 24, md: 12, form: { type: 'uploadDragger', name: 'startDate', label: '쿠폰이미지' } },
        {
          span: 24,
          md: 12,
          rows: [
            {
              cols: [
                { span: 24, form: { type: 'input', name: 'imageFileName', label: '이미지 파일명' } },
                { span: 24, form: { type: 'input', name: 'imageLink', label: '이미지 링크' } },
              ],
            },
          ],
        },
      ],
    },
    {
      cols: [
        { span: 24, md: 12, form: { type: 'datepicker', name: 'startDate', label: '시작일' } },
        { span: 24, md: 12, form: { type: 'datepicker', name: 'endDate', label: '만료일' } },
      ],
    },
  ],
}

const layoutTripleColumn: LayoutConfig = {
  rows: [
    {
      cols: [
        { span: 24, md: 8, form: { type: 'input', name: 'field1', label: '필드1' } },
        { span: 24, md: 8, form: { type: 'select', name: 'field2', label: '필드2' } },
        { span: 24, md: 8, form: { type: 'datepicker', name: 'field3', label: '필드3' } },
        { span: 24, md: 8, form: { type: 'input', name: 'field4', label: '필드4' } },
        { span: 24, md: 8, form: { type: 'select', name: 'field5', label: '필드5' } },
        { span: 24, md: 8, form: { type: 'datepicker', name: 'field6', label: '필드6' } },
      ],
    },
    {
      cols: [
        { span: 24, md: 8, form: { type: 'switch', name: 'switch1', label: '스위치' } },
        { span: 24, md: 8, form: { type: 'radio', name: 'radio1', label: '라디오' } },
        { span: 24, md: 8, form: { type: 'checkbox', name: 'check1', label: '체크박스' } },
        { span: 24, md: 8, form: { type: 'textarea', name: 'field7', label: '필드7' } },
        { span: 24, md: 8, form: { type: 'textarea', name: 'field8', label: '필드8' } },
        { span: 24, md: 8, form: { type: 'colorpicker', name: 'field9', label: '필드9' } },
      ],
    },
  ],
}

function DetailTemplateRenderer({ layout }: { layout: LayoutConfig }) {
  const [form] = Form.useForm()
  const isNew = true

  return (
    <TemplateCard title={`상세 템플릿 ${isNew ? '등록' : '수정'}`}>
      <Form
        form={form as FormInstance}
        name="DetailTemplateForm"
        initialValues={{}}
        onFinish={() => {}}
        confirmFinish={false}
      >
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Col>
              <span style={{ display: 'inline-block', marginBottom: 6, fontSize: 16, fontWeight: 500 }}>
                기본 정보
              </span>
            </Col>
            <Col>
              <Space>
                <Button type="ghost">목록</Button>
                <Button type="primary" htmlType="submit">
                  {isNew ? '신규등록' : '수정'}
                </Button>
                <Button type="primary" htmlType="button" danger>
                  삭제
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row style={{ marginTop: 10 }}>
            <TemplateLayout config={layout} form={form} />
          </Row>
        </Col>
      </Form>
    </TemplateCard>
  )
}

export const Detail_SingleColumn: Story = {
  render: () => <DetailTemplateRenderer layout={layoutSingleColumn} />,
}
export const Detail_DoubleColumn: Story = {
  render: () => <DetailTemplateRenderer layout={layoutDoubleColumn} />,
}
export const Detail_TripleColumn: Story = {
  render: () => <DetailTemplateRenderer layout={layoutTripleColumn} />,
}

/** Control에서 Row/Col을 자유롭게 추가·삭제하고, 각 셀에 컴포넌트 지정. layout 객체를 편집하면 됨. */
export interface EditableLayoutCell {
  span: number
  type?: FormFieldType
  disabled?: boolean
  rows?: EditableLayoutRow[]
  style?: CSSProperties
  className?: string
  titleButton?: { text: string }
}
export interface EditableLayoutRow {
  cols: EditableLayoutCell[]
  gutter?: [number, number]
  columnFromBreakpoint?: 'sm' | 'md' | 'lg' | 'xl'
}
export interface EditableLayout {
  rows: EditableLayoutRow[]
}

const defaultEditableLayout: EditableLayout = {
  rows: [
    {
      columnFromBreakpoint: 'md',
      cols: [
        { span: 8, type: 'input' },
        { span: 16, type: 'input' },
      ],
    },
    {
      columnFromBreakpoint: 'md',
      cols: [
        { span: 8, type: 'select' },
        { span: 8, type: 'select' },
        { span: 8, type: 'select' },
      ],
    },
    {
      columnFromBreakpoint: 'md',
      cols: [
        { span: 8, type: 'select' },
        { span: 8, type: 'datepicker' },
        { span: 8, type: 'datepicker' },
      ],
    },
    {
      columnFromBreakpoint: 'md',
      cols: [
        { span: 8, type: 'input' },
        { span: 8, type: 'input', disabled: true },
      ],
    },
    {
      columnFromBreakpoint: 'md',
      cols: [{ span: 24, type: 'textarea', titleButton: { text: '불러오기' } }],
    },
    {
      columnFromBreakpoint: 'md',
      cols: [
        {
          span: 8,
          style: { display: 'flex', flexFlow: 'column', justifyContent: 'space-between' },
          rows: [
            { cols: [{ span: 24, type: 'uploadDragger' }] },
            { cols: [{ span: 24, type: 'input' }] },
          ],
        },
        {
          span: 16,
          rows: [
            {
              cols: [
                { span: 24, type: 'input' },
                { span: 24, type: 'input' },
                { span: 24, type: 'input' },
              ],
            },
          ],
        },
      ],
    },
    {
      columnFromBreakpoint: 'md',
      cols: [
        { span: 8, type: 'input' },
        { span: 8, type: 'input' },
        { span: 8, type: 'input' },
      ],
    },
    {
      columnFromBreakpoint: 'md',
      gutter: [0, 12],
      cols: [
        { span: 24, type: 'textarea', titleButton: { text: '메모 저장' } },
        { span: 24, type: 'tableList' },
      ],
    },
  ],
}

function pathToLabel(path: string): string {
  const parts = path.split('_').map(Number)
  const labels: string[] = []
  for (let i = 0; i + 1 < parts.length; i += 2) {
    labels.push(`Row ${parts[i] + 1} Col ${parts[i + 1] + 1}`)
  }
  return labels.join(' · ')
}

function editableCellToColConfig(cell: EditableLayoutCell, path: string): ColConfig {
  const span = Math.min(24, Math.max(1, cell.span ?? 24))
  const responsive = span < 24 ? { span: 24 as const, md: span } : undefined
  const styleClassName = {
    ...(cell.style != null && { style: cell.style }),
    ...(cell.className != null && { className: cell.className }),
  }
  if (cell.rows?.length) {
    const rows = cell.rows.map((r, ri) => ({
      cols: (r.cols || [])
        .map((c, ci) => editableCellToColConfig(c, `${path}_${ri}_${ci}`))
        .filter((c) => c.span > 0),
    }))
    return { span, ...responsive, rows, ...styleClassName }
  }
  if (cell.type === 'none' || !cell.type) {
    return { span, ...responsive, form: undefined, ...styleClassName }
  }
  return {
    span,
    ...responsive,
    form: {
      type: cell.type,
      name: `field_${path}`,
      label: pathToLabel(path),
      ...(cell.disabled !== undefined && { disabled: cell.disabled }),
      ...(cell.titleButton != null && { titleButton: cell.titleButton }),
    },
    ...styleClassName,
  }
}

function buildLayoutFromEditable(editable: EditableLayout): LayoutConfig {
  const placeholder: LayoutConfig = {
    rows: [
      {
        cols: [
          {
            span: 24,
            form: {
              type: 'input',
              name: 'placeholder',
              label: '레이아웃을 추가해보세요 (Control에서 layout 편집)',
            },
          },
        ],
      },
    ],
  }
  if (!editable?.rows?.length) return placeholder

  const rows = editable.rows
    .map((row, rowIdx) => ({
      cols: (row.cols || [])
        .map((cell, colIdx) => editableCellToColConfig(cell, `${rowIdx}_${colIdx}`))
        .filter((c) => c.span > 0),
      ...(row.gutter != null && { gutter: row.gutter }),
      ...(row.columnFromBreakpoint != null && { columnFromBreakpoint: row.columnFromBreakpoint }),
    }))
    .filter((r) => r.cols.length > 0)

  return rows.length ? { rows } : placeholder
}

export const Detail_Custom: Story = {
  args: {
    layout: defaultEditableLayout,
  },
  argTypes: {
    layout: {
      control: 'object',
      description:
        'rows: Row 배열. 각 row는 cols: { span, type, disabled? }[]. span 1~24. type: none | input | select | textarea | datepicker | switch | checkbox | radio | tableList | ... . disabled: true 시 해당 필드 비활성화.',
    },
  },
  render: (args: { layout?: EditableLayout }) => (
    <DetailTemplateRenderer layout={buildLayoutFromEditable(args.layout ?? defaultEditableLayout)} />
  ),
}

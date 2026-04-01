import './TemplateLayout.css'

import { useState } from 'react'
import { Col, Row } from 'antd'
import type { FormInstance } from 'antd/es/form/Form'
import type { UploadRequestOption } from 'rc-upload/lib/interface'

import { Antd } from '@/shared/components/du-admin-ui/Antd'
import Form from '@/shared/components/du-admin-ui/Form'
import { ROW_GUTTER } from '@/styles/themes/constants'

import type { ColConfig, LayoutConfig, RowConfig } from './types'

function UploadReplaceDraggerCell({ name, label }: { name: string; label: string }) {
  const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>(undefined)
  return (
    <Form.UploadReplaceDragger
      colSetProps={{ defaultColSize: 24 }}
      formItemProps={{ name, label }}
      description="이미지 업로드"
      imgPath="story"
      previewImage=""
      imgUploadRequest={uploadRequest}
      setImgUploadRequest={setUploadRequest}
      allowType="image/png"
    />
  )
}

function UploadCertFileCell({ name, label }: { name: string; label: string }) {
  const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>(undefined)
  return (
    <Form.UploadCertFile
      colSetProps={{ defaultColSize: 24 }}
      formItemProps={{ name, label }}
      description="인증서 파일"
      imgPath="story"
      uploadRequest={uploadRequest}
      setUploadRequest={setUploadRequest}
    />
  )
}

function FormCell({
  col,
  form: _form,
}: {
  col: ColConfig
  form: FormInstance
}) {
  if (!col.form || col.form.type === 'none') {
    return null
  }

  const { type, name, label, placeholder, items = [], disabled, titleButton } = col.form
  const formItemProps = titleButton
    ? {
        name,
        label: (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span>{label}</span>
            <Antd.Button style={{ display: 'flex', justifyContent: 'center' }} size="small" type="primary">
              {titleButton.text}
            </Antd.Button>
          </div>
        ),
      }
    : { name, label }
  const baseChildrenProps = {
    placeholder: placeholder ?? (type === 'input' ? '입력하세요.' : '선택하세요.'),
    ...(disabled !== undefined && { disabled }),
  }
  const fullWidthCol = { colSetProps: { defaultColSize: 24 } as const }

  switch (type) {
    case 'input':
      return (
        <Form.Input
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
          childrenProps={{ ...baseChildrenProps, style: { width: '100%' } }}
        />
      )
    case 'select':
      return (
        <Form.Select
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
          childrenProps={{ ...baseChildrenProps, style: { width: '100%' } }}
          items={items.map((i) => ({ text: i.text, value: i.value }))}
        />
      )
    case 'textarea':
      return (
        <Form.TextArea
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
          childrenProps={{ ...baseChildrenProps, rows: 4 }}
        />
      )
    case 'datepicker':
      return (
        <Form.DatePicker
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
          childrenProps={{ style: { width: '100%' } }}
        />
      )
    case 'switch':
      return (
        <Form.Switch
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
        />
      )
    case 'checkbox':
      return (
        <Form.Checkbox
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
          items={items.map((i) => ({ label: i.text, value: i.value }))}
        />
      )
    case 'radio':
      return (
        <Form.Radio
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
          items={items.map((i) => ({ text: i.text, value: i.value }))}
        />
      )
    case 'colorpicker':
      return (
        <Form.ColorPicker
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
          childrenProps={{ ...baseChildrenProps }}
        />
      )
    case 'uploadReplaceDragger':
      return <UploadReplaceDraggerCell name={name} label={label} />
    case 'uploadCertFile':
      return <UploadCertFileCell name={name} label={label} />
    case 'uploadDragger':
      return (
        <Form.UploadDragger
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
          imgPath="story"
          previewImage=""
          description="이미지 업로드"
        />
      )
    case 'editor':
      return (
        <Form.Editor
          colSetProps={fullWidthCol.colSetProps}
          formItemProps={formItemProps}
        />
      )
    case 'title':
      return (
        <Form.Title colSetProps={fullWidthCol.colSetProps} formItemProps={formItemProps}>
          {label}
        </Form.Title>
      )
    case 'tableList':
      return (
        <Form.Item name={name} label={label}>
          <Antd.Table size="small" dataSource={[]} columns={[{ title: '목록', dataIndex: 'label' }]} pagination={false} />
        </Form.Item>
      )
    default:
      return null
  }
}

function TemplateLayoutRow({
  rowConfig,
  form,
}: {
  rowConfig: RowConfig
  form: FormInstance
}) {
  const gutter = rowConfig.gutter ?? ROW_GUTTER.form
  const columnClass =
    rowConfig.columnFromBreakpoint === 'sm'
      ? 'template-layout-column-sm'
      : rowConfig.columnFromBreakpoint === 'md'
        ? 'template-layout-column-md'
        : rowConfig.columnFromBreakpoint === 'lg'
          ? 'template-layout-column-lg'
          : rowConfig.columnFromBreakpoint === 'xl'
            ? 'template-layout-column-xl'
            : ''

  return (
    <div className={`template-layout-row ${columnClass}`.trim()}>
      <Row gutter={Array.isArray(gutter) ? gutter : [gutter?.md ?? 10, 0]}>
        {rowConfig.cols.map((col, colIdx) => {
          const span = col.span
          const colProps = {
            key: colIdx,
            span: col.xs ?? span,
            ...(col.sm != null && { sm: col.sm }),
            ...(col.md != null && { md: col.md }),
            ...(col.lg != null && { lg: col.lg }),
            ...(col.xl != null && { xl: col.xl }),
            ...(col.xxl != null && { xxl: col.xxl }),
            style: col.style,
            className: col.className,
          }
          if (col.rows?.length) {
            return (
              <Col {...colProps} key={colIdx}>
                {col.rows.map((nestedRow, rIdx) => (
                  <TemplateLayoutRow key={rIdx} rowConfig={nestedRow} form={form} />
                ))}
              </Col>
            )
          }
          return (
            <Col {...colProps} key={colIdx}>
              <FormCell col={col} form={form} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export interface TemplateLayoutProps {
  config: LayoutConfig
  form: FormInstance
}

export function TemplateLayout({ config, form }: TemplateLayoutProps) {
  return (
    <>
      {config.rows.map((row, rowIdx) => (
        <TemplateLayoutRow key={rowIdx} rowConfig={row} form={form} />
      ))}
    </>
  )
}

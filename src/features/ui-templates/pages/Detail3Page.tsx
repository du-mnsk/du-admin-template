import { Button, Col, Row, Space } from 'antd'
import type { FormInstance } from 'antd/es/form/Form'

import Form from '@/shared/components/du-admin-ui/Form'
import { TemplateCard } from '@/shared/components/ui-template'
import { ROW_GUTTER } from '@/styles/themes/constants'

const CATEGORY_ITEMS = [
  { text: '카테고리 1', value: 'cat1' },
  { text: '카테고리 2', value: 'cat2' },
  { text: '카테고리 3', value: 'cat3' },
]

const RADIO_ITEMS = [
  { text: '옵션 A', value: 'a' },
  { text: '옵션 B', value: 'b' },
  { text: '옵션 C', value: 'c' },
]

const CHECKBOX_ITEMS = [
  { label: '항목 1', value: '1' },
  { label: '항목 2', value: '2' },
  { label: '항목 3', value: '3' },
]

const Detail3Page = () => {
  const [form] = Form.useForm()
  const isNew = true

  const handleFinish = (values: unknown) => {
    void values
  }

  const handleMoveList = () => {
    // 목록 이동
  }

  return (
    <TemplateCard
      title="상세 3"
      loading={false}
    >
      <Form
        form={form as FormInstance}
        name="Detail3Form"
        initialValues={{
          title: '',
          category: '',
          useYn: true,
          startDate: undefined,
          content: '',
          radio: 'a',
          checkbox: [],
        }}
        onFinish={handleFinish}
        confirmFinish={false}
      >
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Col>
              <span
                style={{
                  display: 'inline-block',
                  marginBottom: 6,
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                기본 정보
              </span>
            </Col>
            <Col>
              <Space>
                <Button type="ghost" onClick={handleMoveList}>
                  목록
                </Button>
                <Button type="primary" htmlType="submit">
                  {isNew ? '등록' : '수정'}
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row style={{ marginTop: 10 }} gutter={ROW_GUTTER.form}>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'title', label: '제목' }}
                  childrenProps={{ placeholder: '제목을 입력하세요.' }}
                />
                <Form.Switch
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'useYn', label: '사용 여부' }}
                />
              </Row>
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Select
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'category', label: '카테고리' }}
                  childrenProps={{ placeholder: '선택하세요.' }}
                  items={CATEGORY_ITEMS}
                />
                <Form.Radio
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'radio', label: '옵션' }}
                  items={RADIO_ITEMS}
                />
              </Row>
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.DatePicker
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'startDate', label: '시작일' }}
                />
                <Form.Checkbox
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'checkbox', label: '선택 항목' }}
                  items={CHECKBOX_ITEMS}
                />
              </Row>
            </Col>
            <Col xs={24} md={24}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.TextArea
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'content', label: '내용' }}
                  childrenProps={{ placeholder: '내용을 입력하세요.' }}
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Form>
    </TemplateCard>
  )
}

export default Detail3Page

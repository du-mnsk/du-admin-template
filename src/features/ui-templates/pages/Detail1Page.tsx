import { Button, Col, Row, Space } from 'antd'
import type { FormInstance } from 'antd/es/form/Form'

import Form from '@/shared/components/du-admin-ui/Form'
import { TemplateCard } from '@/shared/components/ui-template'

const CATEGORY_ITEMS = [
  { text: '카테고리 1', value: 'cat1' },
  { text: '카테고리 2', value: 'cat2' },
]

const Detail1Page = () => {
  const [form] = Form.useForm<{ title: string; category: string; useYn: string }>()
  const isNew = true

  const handleFinish = (values: unknown) => {
    void values
  }

  const handleMoveList = () => {
    // 목록 이동
  }

  return (
    <TemplateCard
      title={`상세 1 ${isNew ? '등록' : '수정'}`}
      loading={false}
    >
      <Form
        form={form as FormInstance}
        name="Detail1Form"
        initialValues={{ title: '', category: '', useYn: 'Y' }}
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
                  {isNew ? '신규등록' : '수정'}
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row style={{ marginTop: 10 }}>
            <Form.Input
              colSetProps={{ defaultColSize: 24 }}
              formItemProps={{ name: 'title', label: '제목' }}
              childrenProps={{ placeholder: '제목을 입력하세요.' }}
            />
            <Form.Select
              colSetProps={{ defaultColSize: 24 }}
              formItemProps={{ name: 'category', label: '카테고리' }}
              childrenProps={{ placeholder: '선택하세요.' }}
              items={CATEGORY_ITEMS}
            />
              <Form.TextArea              
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'memo', label: '메모' }}
                  childrenProps={{ placeholder: '메모를 입력하세요.', rows: 4, showCount: true, maxLength: 500}}
                />
          </Row>
        </Col>
      </Form>
    </TemplateCard>
  )
}

export default Detail1Page

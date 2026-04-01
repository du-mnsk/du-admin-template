import { Button, Col, Row, Space } from 'antd'
import type { FormInstance } from 'antd/es/form/Form'

import Form from '@/shared/components/du-admin-ui/Form'
import { NoticeBox, TemplateCard } from '@/shared/components/ui-template'
import { ROW_GUTTER } from '@/styles/themes/constants'

const Detail2Page = () => {
  const [form] = Form.useForm<{ title: string; content: string }>()
  const isNew = false

  const handleFinish = (values: unknown) => {
    void values
  }

  const handleMoveList = () => {
    // 목록 이동
  }

  return (
    <TemplateCard title={`상세 2`}>
      <Form
        form={form as FormInstance}
        name="Detail2Form"
        initialValues={{ title: '샘플 제목', content: '' }}
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
          <Row style={{ marginTop: 0 }} gutter={ROW_GUTTER.form}>
            <Col xs={24} md={12}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'groupName', label: '필드명' }}
                  childrenProps={{ placeholder: '필드명을 입력하세요.' }}
                />
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'groupName', label: '필드명' }}
                  childrenProps={{ placeholder: '필드명을 입력하세요.' }}
                />
              </Row>
            </Col>
            <Col xs={24} md={12}>
              <Row>
                <Form.DatePicker
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'startDt', label: '시작일' }}
                />
                <Form.DatePicker
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'endDt', label: '종료일' }}
                />
              </Row>
            </Col>
            <Col xs={24} md={12}>
              <Row gutter={ROW_GUTTER.form}>
               <Form.UploadDragger
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'imageFile', label: '이미지'}}
                  imgPath="ui-template"
                  description="이미지를 선택해주세요."
                  allowType="image/png"
                  maxWidth="400px"
                  maxHeight="300px"
                />
                  <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'imagePath', label: '이미지 경로' }}
                  childrenProps={{ placeholder: '필드명을 입력하세요.' }}
                />
              </Row>
            </Col>
            <Col xs={24} md={12}>
              <Row gutter={ROW_GUTTER.form}>
              <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'groupName', label: '필드명' }}
                  childrenProps={{ placeholder: '필드명을 입력하세요.' }}
                />
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'groupName', label: '필드명' }}
                  childrenProps={{ placeholder: '필드명을 입력하세요.' }}
                />
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'groupName', label: '필드명' }}
                  childrenProps={{ placeholder: '필드명을 입력하세요.' }}
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Form>
    </TemplateCard>
  )
}

export default Detail2Page

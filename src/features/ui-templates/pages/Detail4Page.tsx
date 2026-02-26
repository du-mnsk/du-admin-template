/**
 * 상세 4 - defaultEditableLayout 구조 (Row/Col + Form 직접 사용)
 * - 1행: 8+16 input 2개
 * - 2행: 8+8+8 select 3개
 * - 3행: 8+8+8 select, datepicker, datepicker
 * - 4행: 8+8 input, input(disabled)
 * - 5행: 24 textarea + 타이틀 버튼(불러오기)
 * - 6행: 8(업로드+input) + 16(input 3개)
 * - 7행: 8+8+8 input 3개
 * - 8행: gutter [0,12], textarea(메모 저장), tableList
 */
import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { Button, Col, Row, Space, Table } from 'antd'
import type { FormInstance } from 'antd/es/form/Form'
import type { UploadRequestOption } from 'rc-upload/lib/interface'

import { Antd } from '@/shared/components/du-admin-ui/Antd'
import Form from '@/shared/components/du-admin-ui/Form'
import { TemplateCard } from '@/shared/components/ui-template'
import { ROW_GUTTER } from '@/styles/themes/constants'

const SORT_ORDER_ITEMS = [
  { text: '1', value: '1' },
  { text: '2', value: '2' },
  { text: '3', value: '3' },
]

const SHOW_YN_ITEMS = [
  { text: '노출', value: 'Y' },
  { text: '비노출', value: 'N' },
]

const BRAND_ITEMS = [
  { text: 'A', value: 'A' },
  { text: 'B', value: 'B' },
]

const PERIOD_ITEMS = [
  { text: '일반', value: 'normal' },
  { text: '이벤트', value: 'event' },
]

const Detail4Page = () => {
  const [form] = Form.useForm()
  const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>(undefined)
  const isNew = false

  const handleFinish = (values: unknown) => {
    void values
  }

  const handleMoveList = () => {
    // 목록 이동
  }

  return (
    <TemplateCard title="상세 4" loading={false}>
      <Form
        form={form as FormInstance}
        name="Detail4Form"
        initialValues={{
          groupName: '',
          name: '',
          sortOrder: '1',
          showYn: 'Y',
          brand: 'A',
          periodType: 'normal',
          startDt: undefined,
          endDt: undefined,
          code: '',
          memo: '',
          imagePath: '',
          regDt: '2025-02-19 10:00',
          updateDt: '2025-02-19 14:00',
          remark: '',
          managerName: '',
          phone: '',
          email: '',
          memo2: '',
          registeredName: '',
        }}
        onFinish={handleFinish}
        confirmFinish={false}
      >
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Col>
              <span
                style={{ display: 'inline-block', marginBottom: 6, fontSize: 16, fontWeight: 500 }}
              >
                상품 정보
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
          <Row style={{ marginTop: 10 }} gutter={ROW_GUTTER.form}>
            {/* 1행: 8 + 16 */}
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'groupName', label: '그룹명' }}
                  childrenProps={{ placeholder: '그룹명을 입력하세요.' }}
                />
              </Row>
            </Col>
            <Col xs={24} md={16}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'name', label: '이름' }}
                  childrenProps={{ placeholder: '이름을 입력하세요.' }}
                />
              </Row>
            </Col>
          </Row>
          <Row gutter={ROW_GUTTER.form}>
            {/* 2행: 8 + 8 + 8 select 3개 */}
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Select
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'sortOrder', label: '노출순서' }}
                  childrenProps={{ placeholder: '선택하세요.' }}
                  items={SORT_ORDER_ITEMS}
                />
              </Row>
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Select
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'showYn', label: '노출여부' }}
                  childrenProps={{ placeholder: '선택하세요.' }}
                  items={SHOW_YN_ITEMS}
                />
              </Row>
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Select
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'brand', label: '브랜드' }}
                  childrenProps={{ placeholder: '선택하세요.' }}
                  items={BRAND_ITEMS}
                />
              </Row>
            </Col>
          </Row>
          <Row gutter={ROW_GUTTER.form}>
            {/* 3행: 8 select + 8 datepicker + 8 datepicker */}
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Select
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'periodType', label: '기간구분' }}
                  childrenProps={{ placeholder: '선택하세요.' }}
                  items={PERIOD_ITEMS}
                />
              </Row>
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.DatePicker
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'startDt', label: '시작일' }}
                />
              </Row>
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.DatePicker
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'endDt', label: '종료일' }}
                />
              </Row>
            </Col>
          </Row>
          <Row gutter={ROW_GUTTER.form}>
            {/* 4행: 8 input + 8 input(disabled) */}
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'code', label: '코드(ID)' }}
                  childrenProps={{ placeholder: '코드를 입력하세요.' }}
                />
              </Row>
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'registeredName', label: '이름(읽기전용)' }}
                  childrenProps={{ placeholder: '이름', disabled: true }}
                />
              </Row>
            </Col>
          </Row>
          <Row gutter={ROW_GUTTER.form}>
            {/* 5행: 24 textarea + 타이틀 버튼(불러오기) */}
            <Col span={24}>
              <Form.TextArea
                colSetProps={{ defaultColSize: 24 }}
                formItemProps={{
                  name: 'memo',
                  label: (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <span>메모</span>
                      <Antd.Button size="small" type="primary">
                        불러오기
                      </Antd.Button>
                    </div>
                  ),
                }}
                childrenProps={{ placeholder: '메모를 입력하세요.' }}
              />
            </Col>
          </Row>
          <Row gutter={ROW_GUTTER.form}>
            {/* 6행: 8(업로드+input) + 16(input 3개) */}
            <Col
              xs={24}
              md={8}
              style={{ display: 'flex', flexFlow: 'column', justifyContent: 'space-between' }}
            >
              <Row gutter={ROW_GUTTER.form}>
                <Form.UploadReplaceDragger
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'imageFile', label: '이미지' }}
                  imgPath="ui-template"
                  imgUploadRequest={uploadRequest}
                  setImgUploadRequest={
                    setUploadRequest as Dispatch<SetStateAction<UploadRequestOption | undefined>>
                  }
                />
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'imagePath', label: '이미지 경로' }}
                  childrenProps={{ placeholder: '이미지를 선택해주세요.', disabled: true }}
                />
              </Row>
            </Col>
            <Col xs={24} md={16}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'regDt', label: '등록일' }}
                  childrenProps={{ disabled: true }}
                />
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'updateDt', label: '수정일' }}
                  childrenProps={{ disabled: true }}
                />
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'remark', label: '비고' }}
                  childrenProps={{ placeholder: '비고를 입력하세요.' }}
                />
              </Row>
            </Col>
          </Row>
          <Row gutter={ROW_GUTTER.form}>
            {/* 7행: 8 + 8 + 8 input 3개 */}
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'managerName', label: '담당자' }}
                  childrenProps={{ placeholder: '담당자를 입력하세요.' }}
                />
              </Row>
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'phone', label: '연락처' }}
                  childrenProps={{ placeholder: '연락처를 입력하세요.' }}
                />
              </Row>
            </Col>
            <Col xs={24} md={8}>
              <Row gutter={ROW_GUTTER.form}>
                <Form.Input
                  colSetProps={{ defaultColSize: 24 }}
                  formItemProps={{ name: 'email', label: '이메일' }}
                  childrenProps={{ placeholder: '이메일을 입력하세요.' }}
                />
              </Row>
            </Col>
          </Row>
          <Row gutter={[0, 12]}>
            {/* 8행: gutter [0,12], 24 textarea(메모 저장), 24 tableList */}
            <Col span={24}>
              <Form.TextArea
                colSetProps={{ defaultColSize: 24 }}
                formItemProps={{
                  name: 'memo2',
                  label: (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <span>추가 메모</span>
                      <Antd.Button size="small" type="primary">
                        메모 저장
                      </Antd.Button>
                    </div>
                  ),
                }}
                childrenProps={{ placeholder: '추가 메모를 입력하세요.' }}
              />
            </Col>
            <Col span={24}>
              <Form.Item name="tableList" label="목록">
                <Table
                  size="small"
                  dataSource={[]}
                  columns={[{ title: '목록', dataIndex: 'label' }]}
                  pagination={false}
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Form>
    </TemplateCard>
  )
}

export default Detail4Page

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Col, Row } from 'antd'

import { NoticeBox, TemplateCard } from '@/shared/components/ui-template'
import { ROW_GUTTER } from '@/styles/themes/constants'

const meta = {
  title: 'UI Template/TemplateCard',
  component: TemplateCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TemplateCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '기본 카드',
    children: (
      <Row gutter={ROW_GUTTER.section}>
        <Col span={12}>Col 12</Col>
        <Col span={12}>Col 12</Col>
        <Col span={24}>Col 24 (한 줄 전체)</Col>
      </Row>
    ),
  },
}

export const Row_Multiple: Story = {
  args: {
    title: 'Row 여러 개 구분',
    children: (
      <>
        <Row gutter={ROW_GUTTER.section} style={{ marginBottom: 16 }}>
          <Col span={24}>Row 1: Col 24</Col>
        </Row>
        <Row gutter={ROW_GUTTER.section} style={{ marginBottom: 16 }}>
          <Col span={12}>Row 2: Col 12</Col>
          <Col span={12}>Col 12</Col>
        </Row>
        <Row gutter={ROW_GUTTER.section}>
          <Col span={8}>Row 3: Col 8</Col>
          <Col span={8}>Col 8</Col>
          <Col span={8}>Col 8</Col>
        </Row>
      </>
    ),
  },
}

export const Col_Multiple_Components: Story = {
  args: {
    title: 'Col 여러 개 구분 후 컴포넌트 추가',
    children: (
      <Row gutter={ROW_GUTTER.section}>
        <Col span={12}>
          <NoticeBox>
            <p>좌측 Col 12. 이 위치에 안내, 폼, 버튼 등을 넣을 수 있습니다.</p>
          </NoticeBox>
        </Col>
        <Col span={12}>
          <NoticeBox>
            <p>우측 Col 12. 레이아웃이 깨지지 않습니다.</p>
          </NoticeBox>
        </Col>
        <Col span={24}>
          <NoticeBox>
            <p>아래 Col 24. 한 줄 전체를 쓰는 블록도 추가 가능합니다.</p>
          </NoticeBox>
        </Col>
      </Row>
    ),
  },
}

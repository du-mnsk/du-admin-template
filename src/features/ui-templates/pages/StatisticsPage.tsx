/**
 * 통계 페이지 UI 템플릿
 * - 공통 어드민 UI 가이드 §5.1: 상단 조건(RangePicker, Select, 검색) + 본문 차트/테이블
 * - Row gutter={[0, 20]} 또는 [10, 20], Col span={24}
 * - API 연동 없음, UI 노출만 목적
 */
import { Col, Row, Space } from 'antd'

import { Antd } from '@/shared/components/du-admin-ui/Antd'
import { TemplateCard } from '@/shared/components/ui-template'
import { ROW_GUTTER } from '@/styles/themes/constants'

const statisticsTableData = [
  { key: '1', date: '2025-02-01', join: 120, leave: 10 },
  { key: '2', date: '2025-02-02', join: 135, leave: 8 },
  { key: '3', date: '2025-02-03', join: 98, leave: 12 },
]

const statisticsColumns = [
  { title: '일자', dataIndex: 'date', key: 'date' },
  { title: '가입', dataIndex: 'join', key: 'join' },
  { title: '해지', dataIndex: 'leave', key: 'leave' },
]

const StatisticsPage = () => {
  const handleSearch = () => {
    // 검색
  }

  return (
    <TemplateCard title="통계 (Statistics)" loading={false}>
      {/* 상단: 조건 영역 */}
      <Row gutter={ROW_GUTTER.section} style={{ marginBottom: 20 }}>
        <Col>
          <Space wrap>
            <Antd.RangePicker format="YYYY-MM-DD" placeholder={['시작일', '종료일']} />
            <Antd.Select placeholder="조건 선택" style={{ width: 160 }}>
              <Antd.SelectOption value="all">전체</Antd.SelectOption>
              <Antd.SelectOption value="opt1">옵션 1</Antd.SelectOption>
            </Antd.Select>
            <Antd.Button type="primary" onClick={handleSearch}>
              검색
            </Antd.Button>
          </Space>
        </Col>
      </Row>

      {/* 본문: 차트/테이블 패널 */}
      <Row gutter={ROW_GUTTER.verticalOnly}>
        <Col span={24}>
          <Antd.Card title="요약 차트" size="small">
            <div
              style={{
                height: 200,
                background: '#f5f5f5',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
              }}
            >
              차트 영역 (ECharts 등 연동 시 Chart 컴포넌트 사용)
            </div>
          </Antd.Card>
        </Col>
        <Col span={24}>
          <Antd.Card title="요약 테이블" size="small">
            <Antd.Table
              dataSource={statisticsTableData}
              columns={statisticsColumns}
              pagination={false}
              size="small"
              bordered
            />
          </Antd.Card>
        </Col>
      </Row>
    </TemplateCard>
  )
}

export default StatisticsPage

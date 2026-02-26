import { Col, Row } from 'antd'

import { Antd } from '@/shared/components/du-admin-ui/Antd'
import Table from '@/shared/components/du-admin-ui/Table'
import { ROW_GUTTER } from '@/styles/themes/constants'

const dashboardStats = [
  { title: '오늘 가입', value: '1,234', sub: '전일 대비 +12%' },
  { title: '오늘 해지', value: '56', sub: '전일 대비 -5%' },
  { title: '누적 가입', value: '98,765', sub: '' },
  { title: '활성 회원', value: '87,654', sub: '' },
]

const DashboardPage = () => {
  const handleRefresh = () => {
    console.log('새로고침')
  }

  return (
    <>
      <Antd.Card>
        <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
          <Col>
            <span style={{ color: '#666', fontSize: 14 }}>
              집계 기준: 2025-02-19 14:00
            </span>
          </Col>
          <Col>
            <Antd.Button type="ghost" onClick={handleRefresh}>
              새로고침
            </Antd.Button>
          </Col>
        </Row>

        <Row gutter={ROW_GUTTER.panel} justify="space-between">
          {dashboardStats.map((stat, i) => (
            <Col key={i} xs={24} sm={12} lg={12}>
              <Antd.Card size="small" title={stat.title}>
                <div style={{ fontSize: 24, fontWeight: 600 }}>{stat.value}</div>
                {stat.sub ? (
                  <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{stat.sub}</div>
                ) : null}
              </Antd.Card>
            </Col>
          ))}
        </Row>

        <Row gutter={ROW_GUTTER.panel} style={{ marginTop: 16 }}>
          <Col span={24} lg={12}>
            <Antd.Card title="최근 공지" size="small">
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>공지 샘플 1</li>
                <li>공지 샘플 2</li>
                <li>공지 샘플 3</li>
              </ul>
            </Antd.Card>
          </Col>
          <Col span={24} lg={12}>
            <Antd.Card title="요약 테이블" size="small">
              <Table data={[]} rowKey="key" />
              <Table.Column title="Name" dataIndex="name" key="name" />
              <Table.Column title="Age" dataIndex="Age" key="Age" />
              <Table.Column title="Address" dataIndex="Address" key="Address" />
            </Antd.Card>
          </Col>
        </Row>
      </Antd.Card>
    </>
  )
}

export default DashboardPage

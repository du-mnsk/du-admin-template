import type { Meta, StoryObj } from '@storybook/react-vite'
import { Col, Row, Space, Typography } from 'antd'
import dayjs from 'dayjs'

import { listTemplate1MockData } from '@/features/ui-templates/mockData'
import type { ListTemplate1Row } from '@/features/ui-templates/types'
import { Antd } from '@/shared/components/du-admin-ui/Antd'
import Table from '@/shared/components/du-admin-ui/Table'
import { NoticeBoxDefault, TemplateCard } from '@/shared/components/ui-template'
import { renderDtms } from '@/shared/utils/date'
import { renderCommas } from '@/shared/utils/number'

type Row1Content = 'none' | 'notice' | 'buttons' | 'noticeAndButtons'

interface ListTemplateArgs {
  row1Content: Row1Content
}

const meta = {
  title: 'UI Template/List',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    row1Content: 'noticeAndButtons' as Row1Content,
  },
  argTypes: {
    row1Content: {
      control: 'select',
      options: ['none', 'notice', 'buttons', 'noticeAndButtons'] as Row1Content[],
      description: '버튼 / 안내+버튼',
    },
  },
} satisfies Meta<ListTemplateArgs>

export default meta
type Story = StoryObj<ListTemplateArgs>

const renderRepeatFlag = (v: string) => (v === 'Y' ? '반복' : '미반복')
const renderShowFlag = (v: string) => (v === 'Y' ? '노출' : '비노출')

export const ListTemplate: Story = {
  args: {
    row1Content: 'noticeAndButtons',
  },
  render: (args: ListTemplateArgs) => {
    const showNotice =
      args.row1Content === 'notice' || args.row1Content === 'noticeAndButtons'
    const showButtons =
      args.row1Content === 'buttons' || args.row1Content === 'noticeAndButtons'

    return (
      <TemplateCard
        title={
          <Row justify="space-between">
            <Col>
              <span>목록 템플릿 (List)</span>
            </Col>
            <Col>
              <Typography.Text style={{ fontSize: 13 }}>
                {renderDtms(dayjs())} 기준
              </Typography.Text>
            </Col>
          </Row>
        }
      >
        {showNotice && (
          <Row style={{ marginBottom: 12 }}>
            <Col span={24}>
              <NoticeBoxDefault />
            </Col>
          </Row>
        )}
        <Row>
          <Col span={24}>
            <Table<ListTemplate1Row>
              rowKey="regDt"
              data={listTemplate1MockData}
              loading={false}
              pagination={{
                pageSize: 10,
                current: 1,
                total: listTemplate1MockData.length,
              }}
              onChange={() => {}}
              onClickRow={() => {}}
            >
              <Table.Top>
                {showButtons ? (
                  <>
                    <Col>
                      <Space size={10}>
                        <Antd.Button type="ghost">신규 등록</Antd.Button>
                        <Antd.Button type="primary">일괄 액션</Antd.Button>
                      </Space>
                    </Col>
                    <Col span={24}>
                      <Row style={{ marginTop: 8 }}>
                        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                          선택 시 일괄 액션 버튼이 활성화됩니다. 행 클릭 시 상세로 이동할 수 있습니다.
                        </Typography.Text>
                      </Row>
                    </Col>
                  </>
                ) : (
                  <Col />
                )}
              </Table.Top>
              <Table.Column title="반복여부" dataIndex="repeatFlag" align="center" render={renderRepeatFlag} width={100} />
              <Table.Column title="노출여부" dataIndex="showFlag" align="center" render={renderShowFlag} width={100} />
              <Table.Column title="그룹명" dataIndex="group" width={120} />
              <Table.Column title="순서" dataIndex="number" render={(v: number) => renderCommas(v)} width={80} />
              <Table.Column title="이름" dataIndex="name" width={200} />
              <Table.Column title="코드" dataIndex="code" width={140} />
              <Table.Column
                title="등록일"
                dataIndex="regDt"
                align="center"
                render={(v: string) => (v ? renderDtms(dayjs(v)) : '-')}
                width={160}
              />
            </Table>
          </Col>
        </Row>
      </TemplateCard>
    )
  },
}


/** Row 1 위치에 버튼만 */
export const List: Story = {
  ...ListTemplate,
  args: { row1Content: 'buttons' },
}

/** Row 1 위치에 안내사항 + 버튼 */
export const List_NoticeAndButtons: Story = {
  ...ListTemplate,
  args: { row1Content: 'noticeAndButtons' },
}

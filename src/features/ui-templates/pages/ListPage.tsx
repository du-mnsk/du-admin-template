/**
 * 목록 페이지 UI 템플릿 (List) - Coupon 리스트와 동일 구조
 * - Card title: 페이지명 + 기준 시간
 * - 안내사항 박스(NoticeBox) → Table.Top(버튼) → 다수 Table.Column(검색/정렬/필터)
 * - API 연동 없음, UI 노출만 목적
 */
import { useState } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import type { TablePaginationConfig } from 'antd/es/table'
import type { FilterValue, SorterResult } from 'antd/lib/table/interface'
import dayjs from 'dayjs'
import styled from 'styled-components'

import { Antd } from '@/shared/components/du-admin-ui/Antd'
import Table from '@/shared/components/du-admin-ui/Table'
import { NoticeBox, TemplateCard } from '@/shared/components/ui-template'
import { renderDtms } from '@/shared/utils/date'
import { renderCommas } from '@/shared/utils/number'

import {
  listMockData,
  listRepeatFlagFilters,
  listShowFlagFilters,
  listStatusFilters,
} from '../mockData'
import type { ListPageRow } from '../types'

const PAGE_SIZE = 50

const renderRepeatFlag = (v: string) => (v === 'Y' ? '반복' : '미반복')
const renderShowFlag = (v: string) => (v === 'Y' ? '노출' : '비노출')

const ListPage = () => {
  const pageViewTime = dayjs(new Date())
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const handleChangeTable = (
    pagination: TablePaginationConfig,
    _filters: Record<string, FilterValue | null>,
    _sorter: SorterResult<ListPageRow> | SorterResult<ListPageRow>[],
  ) => {
    void pagination
  }

  const handleClickRow = (_record: ListPageRow) => {
    // 행 클릭 시 상세 이동
  }

  const handleClickRegister = () => {
    // 신규 등록
  }

  const handleBatchAction = () => {
    void selectedRowKeys
  }

  const pagination: TablePaginationConfig = {
    pageSize: PAGE_SIZE,
    current: 1,
    total: listMockData.length,
    showSizeChanger: true,
    showTotal: (total) => `총 ${total}건`,
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => setSelectedRowKeys(keys),
  }

  return (
    <TemplateCard
      title={
        <Row justify="space-between">
          <Col>
            <span>목록 (List)</span>
          </Col>
          <Col>
            <S.PageViewTime>{renderDtms(pageViewTime)} 기준</S.PageViewTime>
          </Col>
        </Row>
      }
      loading={false}
    >
      <Col span={24} style={{ marginBottom: 20 }}>
        <Row>
          <NoticeBox>
            <p>안내사항이 있을 경우 상단에 이 박스로 노출합니다.</p>
            <ul>
              <li>여러 줄의 안내 문구를 넣을 수 있습니다.</li>
              <li>필요 시 목록 형태로 구분하여 작성합니다.</li>
            </ul>
            <p>추가 안내가 있다면 아래와 같이 구분해서 표시할 수 있습니다.</p>
            <ul>
              <li>검색/필터/정렬은 컬럼 헤더를 활용합니다.</li>
              <li>컬럼이 많을 경우 가로 스크롤이 생깁니다.</li>
            </ul>
          </NoticeBox>
        </Row>
      </Col>
      <Table<ListPageRow>
        rowKey="regDt"
        data={listMockData}
        loading={false}
        pagination={pagination}
        onChange={handleChangeTable}
        onClickRow={handleClickRow}
        rowSelection={rowSelection}
        scroll={{ x: 2200 }}
      >
        <Table.Top>
          <Col>
            <Space size={10}>
              <Antd.Button type="ghost" onClick={handleClickRegister}>
                신규 등록
              </Antd.Button>
              <Antd.Button
                type="primary"
                disabled={selectedRowKeys.length === 0}
                onClick={handleBatchAction}
              >
                일괄 액션
              </Antd.Button>
            </Space>
          </Col>
          <Col span={24}>
            <Row style={{ marginTop: 8 }}>
              <span style={{ color: '#666', fontSize: 12 }}>
                선택 시 일괄 액션 버튼이 활성화됩니다. 행 클릭 시 상세로 이동할 수 있습니다.
              </span>
            </Row>
          </Col>
        </Table.Top>
        <Table.Column
          title="반복여부"
          dataIndex="repeatFlag"
          align="center"
          render={renderRepeatFlag}
          filters={listRepeatFlagFilters}
          width={110}
          ellipsis
          sorter
        />
        <Table.Column
          title="노출여부"
          dataIndex="showFlag"
          align="center"
          render={renderShowFlag}
          filters={listShowFlagFilters}
          width={110}
          ellipsis
          sorter
        />
        <Table.Column
          title="노출상태"
          dataIndex="showState"
          align="center"
          width={110}
          ellipsis
          sorter
        />
        <Table.Column title="그룹명" dataIndex="group" width={200} searchFilter sorter />
        <Table.Column
          title="순서"
          dataIndex="number"
          align="center"
          render={(v: number) => renderCommas(v)}
          width={80}
          ellipsis
        />
        <Table.Column title="이름" dataIndex="name" width={300} ellipsis searchFilter sorter />
        <Table.Column
          title="코드"
          dataIndex="code"
          align="center"
          searchFilter
          width={180}
          ellipsis
          sorter
        />
        <Table.Column
          title="발급수"
          dataIndex="issuedCnt"
          align="right"
          render={(v: number) => renderCommas(v)}
          width={100}
          sorter
        />
        <Table.Column
          title="시작일"
          dataIndex="startDt"
          align="center"
          render={(v: string) => (v ? renderDtms(dayjs(v)) : '-')}
          width={180}
          ellipsis
          sorter
        />
        <Table.Column
          title="종료일"
          dataIndex="endDt"
          align="center"
          render={(v: string) => (v ? renderDtms(dayjs(v)) : '-')}
          width={180}
          ellipsis
          sorter
        />
        <Table.Column
          title="등록일"
          dataIndex="regDt"
          align="center"
          render={(v: string) => (v ? renderDtms(dayjs(v)) : '-')}
          width={180}
          ellipsis
          sorter
        />
        <Table.Column
          title="상태"
          dataIndex="status"
          align="center"
          width={100}
          filters={listStatusFilters}
          render={(v: string) => (v === 'Y' ? '노출' : '비노출')}
        />
        <Table.Column title="카테고리" dataIndex="category" width={120} sorter />
      </Table>
    </TemplateCard>
  )
}

const S = {
  PageViewTime: styled(Typography.Text)`
    font-weight: 500;
    font-size: 13px;
  `,
}

export default ListPage

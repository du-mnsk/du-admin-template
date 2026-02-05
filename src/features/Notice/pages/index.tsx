import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'
import { Col, Space } from 'antd'
import type { TablePaginationConfig } from 'antd/es/table'
import type { FilterValue, SorterResult } from 'antd/lib/table/interface'
import styled from 'styled-components'

import {
  SelectNoticeCountQueryOption,
  SelectNoticeListQueryOption,
} from '@/features/Notice/api'
import { NoticeContentsTypeItems } from '@/features/Notice/constants'
import type { Notice } from '@/features/Notice/types'
import type { ListApiRequest } from '@/shared/api/dmrsApi'
import { Antd } from '@/shared/components/du-admin-ui/Antd'
import Table from '@/shared/components/du-admin-ui/Table'
import { useCustomQuery } from '@/shared/hooks/useCustomQuery'
import { renderDtm } from '@/shared/utils/date'
import { convertFilterToQuery, convertSorterToQuery } from '@/shared/utils/query'
import { renderFromSelectItem } from '@/shared/utils/render'

const NoticePage = () => {
  const navigate = useNavigate()
  const [param, setParam] = useState<ListApiRequest>({
    offset: 0,
    limit: 10,
    where: '',
    order: ' Order By StartTime DESC ',
  })

  const {
    data: noticeTableData,
    isLoading: noticeTableDataIsLoading,
  } = useCustomQuery<Notice[]>(SelectNoticeListQueryOption(param))

  const {
    data: noticeListCnt,
    isLoading: noticeListCntIsLoading,
  } = useCustomQuery<number>(SelectNoticeCountQueryOption(param))

  const handleTableRowOnClick = (rowData: Notice) => {
    navigate(`${rowData.Idx}`)
  }

  const handleChangeTable = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<any> | SorterResult<any>[],
  ) => {
    const movePage = pagination.current || 0
    const pageSize = pagination.pageSize || 10
    const filterStr = convertFilterToQuery(filters)
    const orderStr = convertSorterToQuery(sorter) || ' Order By RegDT DESC '

    setParam({
      limit: pageSize,
      offset: (movePage - 1) * pageSize,
      where: filterStr,
      order: orderStr,
    })
  }

  const handleClickRegister = () => {
    navigate('0')
  }

  const pagination: TablePaginationConfig = {
    pageSize: param.limit,
    current: Math.floor(param.offset / param.limit) + 1,
    total: noticeListCnt,
  }

  const isLoading = noticeTableDataIsLoading || noticeListCntIsLoading || false

  return (
    <S.Wrapper>
      <Antd.Card title="공지사항 관리">
        <Table<Notice>
          data={noticeTableData}
          loading={isLoading}
          rowKey="Idx"
          pagination={pagination}
          onChange={handleChangeTable}
          onClickRow={handleTableRowOnClick}
        >
          <Table.Top>
            <Col>
              <Space size={10}>
                <Antd.Button type="ghost" onClick={handleClickRegister}>
                  신규 등록
                </Antd.Button>
              </Space>
            </Col>
          </Table.Top>
          <Table.Column
            title="상태"
            dataIndex="ShowFlag"
            sorter
            render={(value: string | number) => renderFromSelectItem(value, NoticeContentsTypeItems)}
            filters={NoticeContentsTypeItems.map((item) => ({
              text: item.text,
              value: item.value,
            }))}
          />
          <Table.Column title="제목" dataIndex="Title" />
          <Table.Column title="게시일" dataIndex="StartTime" render={renderDtm} />
          <Table.Column title="만료일" dataIndex="EndTime" render={renderDtm} />
          <Table.Column title="등록일" dataIndex="RegDT" render={renderDtm} />
        </Table>
      </Antd.Card>
    </S.Wrapper>
  )
}

export const noticeListLoader = (queryClient: QueryClient) => async () => {
  const params: ListApiRequest = {
    offset: 0,
    limit: 10,
    where: '',
    order: '',
  }
  return Promise.allSettled([
    await queryClient.ensureQueryData(SelectNoticeListQueryOption(params)),
    await queryClient.ensureQueryData(SelectNoticeCountQueryOption(params)),
  ])
}

const S = {
  Wrapper: styled.div``,
}

export default NoticePage

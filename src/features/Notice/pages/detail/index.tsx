import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'
import { Col } from 'antd'
import dayjs from 'dayjs'
import styled from 'styled-components'

import {
  DeleteNoticeQueryOption,
  InsertNoticeQueryOption,
  SelectNoticeDetailQueryOption,
  UpdateNoticeQueryOption,
} from '@/features/Notice/api'
import { NoticeContentsTypeItems } from '@/features/Notice/constants'
import type { Notice } from '@/features/Notice/types'
import type { DmrsCuidBody, DmrsResponse } from '@/shared/api/api.types'
import { Antd } from '@/shared/components/du-admin-ui/Antd'
import Form from '@/shared/components/du-admin-ui/Form'
import { useCustomMutation } from '@/shared/hooks/useCustomMutation'
import { useCustomQuery } from '@/shared/hooks/useCustomQuery'
import { notificationController } from '@/shared/utils/notificationController'

const NoticeDetailPage = () => {
  const [form] = Form.useForm<Notice>()
  const navigate = useNavigate()
  const { Idx } = useParams()
  const isNew = Idx === '0'
  const [changeValues, setChangeValues] = useState<Notice | undefined>(undefined)

  const { data: detailData, isLoading } = useCustomQuery<Notice | undefined>(
    SelectNoticeDetailQueryOption(Number(Idx ?? 0)),
  )

  const { mutateAsync: saveNotice } = useCustomMutation<Notice, DmrsCuidBody>(
    InsertNoticeQueryOption(),
  )
  const { mutateAsync: modifyNotice } = useCustomMutation<Notice, DmrsCuidBody>(
    UpdateNoticeQueryOption(),
  )
  const { mutateAsync: removeNotice } = useCustomMutation<number, DmrsCuidBody>(
    DeleteNoticeQueryOption(parseInt(Idx || '0', 10)),
  )

  const handleChangeValues = (values: Notice) => {
    setChangeValues({ ...changeValues, ...values })
  }

  const handleSubmit = async (values: Notice) => {
    const notice: Notice = {
      Idx: isNew ? 0 : values.Idx,
      Title: values.Title,
      ShowFlag: values.ShowFlag,
      Contents: values.Contents,
      StartTime: values.StartTime ? (typeof values.StartTime === 'number' ? values.StartTime : values.StartTime.unix()) : undefined,
      EndTime: values.EndTime ? (typeof values.EndTime === 'number' ? values.EndTime : values.EndTime.unix()) : undefined,
      RegDT: Date.now(),
    }
    try {
      if (isNew) {
        const response: DmrsResponse<DmrsCuidBody> = await saveNotice(notice)
        if (response.Header.ErrCode === 0 && response.Body.RowsAffected === 1) {
          notificationController.success({ message: '정상적으로 등록되었습니다.' })
          handleMoveListPage()
        } else {
          notificationController.error({
            message: `공지사항 등록에 실패했습니다.`,
            description: response.Header.ErrMsg,
          })
        }
      } else {
        const response: DmrsResponse<DmrsCuidBody> = await modifyNotice(notice)
        if (response.Header.ErrCode === 0 && response.Body.RowsAffected === 1) {
          notificationController.success({ message: '정상적으로 수정되었습니다.' })
          handleMoveListPage()
        } else {
          notificationController.error({
            message: `공지사항 수정에 실패했습니다.`,
            description: response.Header.ErrMsg,
          })
        }
      }
    } catch (error) {
      notificationController.error({
        message: `공지사항 ${isNew ? '등록' : '수정'}에 실패했습니다.`,
      })
    }
  }

  const handleMoveListPage = () => {
    navigate('/notice')
  }

  const handleRemove = async () => {
    // const noticeId = !!detailData?.Idx && Number(detailData.Idx)
    // if (noticeId) {
    //   try {
    //     const response = await removeNotice(noticeId)
    //     if (!!response.Body.RowsAffected) {
    //       notificationController.success({ message: '정상적으로 삭제되었습니다.' })
    //       handleMoveListPage()
    //     } else {
    //       notificationController.error({ message: '삭제가 실패되었습니다.' })
    //     }
    //   } catch (error) {
    //     notificationController.error({ message: '공지사항 삭제에 실패했습니다.' })
    //   }
    // }
  }

  const validateEndTime = useCallback(
    (_: any, value: any) => {
      const startTime = form.getFieldValue('StartTime')
      if (startTime !== undefined && startTime.isAfter(value)) {
        return Promise.reject(new Error('기간이 올바르지 않습니다.'))
      }
      return Promise.resolve()
    },
    [form],
  )

  const setInitialData = useCallback(
    (detailData: Notice) => {
      const { Idx, Title, Contents, RegDT, ShowFlag, StartTime, EndTime } = detailData

      form.setFieldsValue({
        Idx: Idx ?? 0,
        Title: Title || '',
        ShowFlag: ShowFlag || 0,
        Contents: Contents || '',
        StartTime: StartTime ? dayjs.unix(StartTime as number) : 0,
        EndTime: EndTime ? dayjs.unix(EndTime as number) : 0,
        RegDT: RegDT ? dayjs.unix(RegDT as number) : dayjs(),
      })
    },
    [form],
  )

  useEffect(() => {
    if (detailData) {
      setInitialData(detailData)
    }
  }, [detailData, setInitialData])

  const cardTitle = `공지사항 관리 ${isNew ? '등록' : '상세'}`

  const FormFooter = (
    <>
      <Col span={4}>
        <Antd.Button block type="ghost" onClick={handleMoveListPage}>
          목록
        </Antd.Button>
      </Col>
      {!isNew && (
        <Col span={4}>
          <Antd.Button block type="primary" danger onClick={handleRemove}>
            삭제
          </Antd.Button>
        </Col>
      )}
      <Col span={4}>
        <Antd.Button block type="primary" htmlType="submit" disabled={!isNew && !handleChangeValues}>
          {!isNew ? '수정' : '신규등록'}
        </Antd.Button>
      </Col>
    </>
  )

  return (
    <S.Wrapper>
      <Antd.Card title={cardTitle}>
        <Form
          name="noticeForm"
          form={form}
          onFinish={handleSubmit}
          onValuesChange={handleChangeValues}
          footer={FormFooter}
        >
          <Form.Input
            formItemProps={{
              name: 'Title',
              label: '제목',
              rules: [
                { required: true, message: '제목을 입력해주세요' },
                { min: 2, message: '2자 이상 입력해주세요.' },
                { max: 50, message: '최대 50자까지 입력 가능합니다.' },
              ],
            }}
            childrenProps={{
              placeholder: '제목을 입력해주세요.',
              maxLength: 50,
              showCount: true,
            }}
            colSetProps={{ defaultColSize: 'fill' }}
          />
          <Form.Select
            formItemProps={{
              name: 'ShowFlag',
              label: '상태',
              rules: [{ required: true, message: '상태를 선택해주세요' }],
            }}
            childrenProps={{
              placeholder: '상태를 선택해주세요',
            }}
            items={NoticeContentsTypeItems}
            colSetProps={{ defaultColSize: 'fill' }}
          />
          <Form.TextArea
            formItemProps={{
              name: 'Contents',
              label: '내용',
              rules: [
                {
                  required: true,
                  message: '내용을 입력해주세요.',
                },
                {
                  max: 10240,
                  message: '최대 10240자까지 입력 가능합니다.',
                },
              ],
            }}
            childrenProps={{
              placeholder: '내용을 입력해주세요.',
            }}
            colSetProps={{ defaultColSize: 'fill' }}
          />
          <Form.DatePicker
            formItemProps={{
              name: 'StartTime',
              label: '게시일',
              rules: [{ required: true, message: '게시일을 선택해주세요.' }],
            }}
            childrenProps={{
              format: 'YYYY-MM-DD HH:mm:ss',
              showTime: true,
            }}
          />
          <Form.DatePicker
            formItemProps={{
              name: 'EndTime',
              label: '만료일',
              rules: [{ validator: validateEndTime }],
            }}
            childrenProps={{
              format: 'YYYY-MM-DD HH:mm:ss',
              showTime: true,
            }}
          />
          <Form.Input
            formItemProps={{
              name: 'Idx',
              label: '식별자',
              hidden: true,
            }}
          />
        </Form>
      </Antd.Card>
    </S.Wrapper>
  )
}

export const noticeDetailLoader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: any }) => {
    if (params?.Idx === '0') return null

    return Promise.allSettled([
      await queryClient.ensureQueryData(SelectNoticeDetailQueryOption(Number(params?.Idx || '0'))),
    ])
  }

const S = {
  Wrapper: styled.div``,
}

export default NoticeDetailPage

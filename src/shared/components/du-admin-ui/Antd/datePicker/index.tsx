import React from 'react'
import type { PickerDateProps } from 'antd/es/date-picker/generatePicker';
import generatePicker from 'antd/es/date-picker/generatePicker'
import type { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import styled from 'styled-components'

 const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig)

export interface AntdDatePickerProps extends Omit<PickerDateProps<Dayjs>, 'picker'> {
  className?: string
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year'
}

export const AntdRangePicker = DatePicker.RangePicker

export const AntdDatePicker: React.FC<AntdDatePickerProps> = ({ className, ...props }) => {
  return <S.DatePicker className={className} {...props} />
}

const S = {
  DatePicker: styled(DatePicker)``,
}

/** 사용중인 DatePicker 속성들
 * allowClear: boolean //날짜 선택 초기화 여부
 * disabledDate: (current: Dayjs) => boolean //날짜 선택 비활성화 조건
 * format: string //날짜 형식
 * inputReadOnly: boolean
 * locale: string //날짜 선택 로케일
 * picker: string //날짜 선택 유형(date, week, month, quarter, year)
 * showTime: boolean | { format: string, minuteStep: number, defaultValue: Dayjs } //시간 선택 여부
 * style: CSSProperties
 */
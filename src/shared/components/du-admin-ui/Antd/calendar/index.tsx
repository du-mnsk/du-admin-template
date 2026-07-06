import React from 'react'
import type { CalendarProps } from 'antd'
import generateCalendar from 'antd/es/calendar/generateCalendar'
import type { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'
import styled from 'styled-components'

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig)

export interface AntdCalendarProps extends CalendarProps<Dayjs> {
  className?: string
}

export const AntdCalendar: React.FC<AntdCalendarProps> = ({ className, ...props }) => {
  return <S.Calendar className={className} {...props} />
}

const S = {
  Calendar: styled(Calendar)``,
}
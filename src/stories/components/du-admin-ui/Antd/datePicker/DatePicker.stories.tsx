import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dayjs, { Dayjs } from 'dayjs'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.DatePicker"로 표시
if (Antd.DatePicker) {
  Antd.DatePicker.displayName = 'Antd.DatePicker'
}

const meta = {
  title: 'Common/Antd/Antd.DatePicker',
  component: Antd.DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // 공통 API
    allowClear: {
      control: 'boolean',
      description: '날짜 선택 초기화 버튼 표시 여부',
    },
    autoFocus: {
      control: 'boolean',
      description: '자동 포커스 여부',
    },
    bordered: {
      control: 'boolean',
      description: '테두리 표시 여부',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    dateRender: {
      description: '날짜 셀 커스텀 렌더링 함수((currentDate: Dayjs, today: Dayjs) => ReactNode)',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    disabledDate: {
      description: '비활성화할 날짜 함수((current: Dayjs) => boolean)',
    },
    getPopupContainer: {
      description: '팝업이 렌더링될 컨테이너 함수((triggerNode: HTMLElement) => HTMLElement)',
    },
    inputReadOnly: {
      control: 'boolean',
      description: '입력 필드 읽기 전용 여부',
    },
    locale: {
      control: 'object',
      description: '로케일 설정',
    },
    mode: {
      control: 'select',
      options: ['time', 'date', 'month', 'year', 'decade'],
      description: '패널 모드',
    },
    nextIcon: {
      description: '다음 아이콘 커스텀 렌더링(ReactNode)',
    },
    open: {
      control: 'boolean',
      description: '팝업 열림 상태',
    },
    panelRender: {
      description: '패널 커스텀 렌더링 함수((panelNode: ReactNode, info: { mode: PanelMode }) => ReactNode)',
    },
    picker: {
      control: 'select',
      options: ['date', 'week', 'month', 'quarter', 'year'],
      description: '날짜 선택 유형',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더',
    },
    placement: {
      control: 'select',
      options: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      description: '팝업 위치',
    },
    popupStyle: {
      control: 'object',
      description: '팝업 스타일(CSSProperties)',
    },
    prevIcon: {
      description: '이전 아이콘 커스텀 렌더링(ReactNode)',
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: '입력 크기',
    },
    status: {
      control: 'select',
      options: ['error', 'warning'],
      description: '입력 상태',
    },
    style: {
      control: 'object',
      description: '인라인 스타일(CSSProperties)',
    },
    suffixIcon: {
      description: '접미사 아이콘(ReactNode)',
    },
    superNextIcon: {
      description: '슈퍼 다음 아이콘 커스텀 렌더링(ReactNode)',
    },
    superPrevIcon: {
      description: '슈퍼 이전 아이콘 커스텀 렌더링(ReactNode)',
    },
    onOpenChange: {
      action: 'open-changed',
      description: '팝업 열림 상태 변경 이벤트 핸들러',
    },
    onPanelChange: {
      action: 'panel-changed',
      description: '패널 변경 이벤트 핸들러',
    },
    // DatePicker 전용 API
    defaultPickerValue: {
      description: '기본 패널 날짜(Dayjs)',
    },
    defaultValue: {
      description: '기본 선택 날짜(Dayjs)',
    },
    disabledTime: {
      description: '비활성화할 시간 함수((date: Dayjs) => DisabledTime)',
    },
    format: {
      control: 'text',
      description: '날짜 형식',
    },
    renderExtraFooter: {
      description: '패널 하단 추가 푸터 렌더링 함수((mode: PanelMode) => ReactNode)',
    },
    showNow: {
      control: 'boolean',
      description: '"오늘" 버튼 표시 여부',
    },
    showTime: {
      control: 'boolean',
      description: '시간 선택 표시 여부 (boolean | { format: string, minuteStep: number, defaultValue: Dayjs })',
    },
    showToday: {
      control: 'boolean',
      description: '"오늘" 버튼 표시 여부',
    },
    value: {
      description: '선택된 날짜(Dayjs)',
    },
    onChange: {
      action: 'changed',
      description: '날짜 변경 이벤트 핸들러',
    },
    onOk: {
      action: 'ok',
      description: '확인 버튼 클릭 이벤트 핸들러',
    },
    // picker=month 전용
    monthCellRender: {
      description: '[picker=month 전용] 월 셀 커스텀 렌더링 함수((currentDate: Dayjs) => ReactNode)',
    },
  },
} satisfies Meta<typeof Antd.DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: '날짜를 선택하세요',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: dayjs('2024-01-01'),
  },
}

export const AllowClear: Story = {
  args: {
    allowClear: true,
    defaultValue: dayjs('2024-01-01'),
  },
}

export const WithFormat: Story = {
  args: {
    format: 'YY-MM-DD',
    defaultValue: dayjs('2024-01-01'),
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: dayjs('2026-01-31'),
  },
}

export const WithValue: Story = {
  args: {
    value: dayjs('2024-12-25'),
  },
  render: function WithValueStory(args) {
    const [value, setValue] = useState<Dayjs | null>(
      args.value instanceof Date ? dayjs(args.value) : args.value || dayjs('2024-12-25')
    )
    
    return (
      <Antd.DatePicker
        {...args}
        value={value}
        onChange={(date, dateString) => {
          setValue(date)
          args.onChange?.(date, dateString)
        }}
      />
    )
  },
}

export const WithDefaultPickerValue: Story = {
  args: {
    defaultPickerValue: dayjs('2024-06-01'),
  },
}

export const WithDisabledDate: Story = {
  args: {
    disabledDate: (current) => {
      return current && current < dayjs().startOf('day')
    },
  },
}

export const WithDateRender: Story = {
  args: {
    dateRender: (currentDate) => {
      if (currentDate.date() === 1) {
        return <div style={{ color: 'red' }}>1일</div>
      }
      return null
    },
  },
}

export const ShowTime: Story = {
  args: {
    showTime: true,
    format: 'YYYY-MM-DD HH:mm:ss',
  },
}

export const ShowTimeWithOptions: Story = {
  args: {
    showTime: {
      format: 'HH:mm',
      minuteStep: 15,
      defaultValue: dayjs('00:00', 'HH:mm'),
    },
    format: 'YYYY-MM-DD HH:mm',
  },
}

export const ShowToday: Story = {
  args: {
    showToday: true,
  },
}

export const ShowNow: Story = {
  args: {
    showNow: true,
    showTime: true,
  },
}

export const WithDisabledTime: Story = {
  args: {
    showTime: true,
    disabledTime: (date) => {
      return {
        disabledHours: () => [0, 1, 2, 3, 4, 5, 22, 23],
        disabledMinutes: () => [],
        disabledSeconds: () => [],
      }
    },
  },
}

export const WithRenderExtraFooter: Story = {
  args: {
    renderExtraFooter: () => <div style={{ padding: '8px', textAlign: 'center' }}>추가 푸터</div>,
  },
}

export const WithSize: Story = {
  args: {
    size: 'large',
  },
}

export const WithStatus: Story = {
  args: {
    status: 'error',
  },
}

export const WithBordered: Story = {
  args: {
    bordered: false,
  },
}

export const InputReadOnly: Story = {
  args: {
    inputReadOnly: true,
    defaultValue: dayjs('2024-01-01'),
  },
}

export const WithMode: Story = {
  args: {
    mode: 'year',
  },
}

export const WithOpen: Story = {
  args: {
    open: true,
  },
  render: function WithOpenStory(args) {
    const [open, setOpen] = useState(true)
    
    return (
      <Antd.DatePicker
        {...args}
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen)
          args.onOpenChange?.(isOpen)
        }}
      />
    )
  },
}

export const WithPlacement: Story = {
  args: {
    placement: 'topLeft',
  },
}

// picker=year
export const YearPicker: Story = {
  args: {
    picker: 'year',
    format: 'YYYY',
    defaultValue: dayjs('2024'),
  },
}

export const YearPickerWithValue: Story = {
  args: {
    picker: 'year',
    format: 'YYYY',
    value: dayjs('2024'),
  },
  render: function YearPickerWithValueStory(args) {
    const [value, setValue] = useState<Dayjs | null>(
      args.value instanceof Date ? dayjs(args.value) : args.value || dayjs('2024')
    )
    
    return (
      <Antd.DatePicker
        {...args}
        value={value}
        onChange={(date, dateString) => {
          setValue(date)
          args.onChange?.(date, dateString)
        }}
      />
    )
  },
}

export const YearPickerWithDefaultPickerValue: Story = {
  args: {
    picker: 'year',
    format: 'YYYY',
    defaultPickerValue: dayjs('2020'),
  },
}

// picker=month
export const MonthPicker: Story = {
  args: {
    picker: 'month',
    format: 'YYYY-MM',
    defaultValue: dayjs('2024-01'),
  },
}

export const MonthPickerWithValue: Story = {
  args: {
    picker: 'month',
    format: 'YYYY-MM',
    value: dayjs('2024-01'),
  },
  render: function MonthPickerWithValueStory(args) {
    const [value, setValue] = useState<Dayjs | null>(
      args.value instanceof Date ? dayjs(args.value) : args.value || dayjs('2024-01')
    )
    
    return (
      <Antd.DatePicker
        {...args}
        value={value}
        onChange={(date, dateString) => {
          setValue(date)
          args.onChange?.(date, dateString)
        }}
      />
    )
  },
}

export const MonthPickerWithDefaultPickerValue: Story = {
  args: {
    picker: 'month',
    format: 'YYYY-MM',
    defaultPickerValue: dayjs('2024-06'),
  },
}

export const MonthPickerWithMonthCellRender: Story = {
  args: {
    picker: 'month',
    format: 'YYYY-MM',
    monthCellRender: (currentDate) => {
      if (currentDate.month() === 0) {
        return <div style={{ color: 'red' }}>1월</div>
      }
      return null
    },
  },
}

// picker=week
export const WeekPicker: Story = {
  args: {
    picker: 'week',
    format: 'YYYY-wo',
    defaultValue: dayjs('2024-01-01'),
  },
}

export const WeekPickerWithValue: Story = {
  args: {
    picker: 'week',
    format: 'YYYY-wo',
    value: dayjs('2024-01-01'),
  },
  render: function WeekPickerWithValueStory(args) {
    const [value, setValue] = useState<Dayjs | null>(
      args.value instanceof Date ? dayjs(args.value) : args.value || dayjs('2024-01-01')
    )
    
    return (
      <Antd.DatePicker
        {...args}
        value={value}
        onChange={(date, dateString) => {
          setValue(date)
          args.onChange?.(date, dateString)
        }}
      />
    )
  },
}

export const WeekPickerWithDefaultPickerValue: Story = {
  args: {
    picker: 'week',
    format: 'YYYY-wo',
    defaultPickerValue: dayjs('2024-06-01'),
  },
}

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import dayjs, { Dayjs } from 'dayjs'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Calendar"로 표시
if (Antd.Calendar) {
  Antd.Calendar.displayName = 'Antd.Calendar'
}

const meta = {
  title: 'Common/Antd.Calendar',
  component: Antd.Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '클래스명',
    },
    dateCellRender: {
      description: '날짜 셀 렌더링 함수((date: Dayjs) => ReactNode)',
    },
    dateFullCellRender: {
      description: '전체 날짜 셀 렌더링 함수((date: Dayjs) => ReactNode)',
    },
    defaultValue: {
      description: '기본 선택 날짜(Dayjs)',
    },
    disabledDate: {
      description: '비활성화할 날짜 함수((current: Dayjs) => boolean)',
    },
    fullscreen: {
      control: 'boolean',
      description: '전체 화면 모드 여부',
    },
    headerRender: {
      description: '헤더 렌더링 함수((config: HeaderRenderConfig) => ReactNode)',
    },
    locale: {
      control: 'object',
      description: '로케일 설정',
    },
    mode: {
      control: 'select',
      options: ['month', 'year'],
      description: '캘린더 모드',
    },
    monthCellRender: {
      description: '월 셀 렌더링 함수((date: Dayjs) => ReactNode)',
    },
    monthFullCellRender: {
      description: '전체 월 셀 렌더링 함수((date: Dayjs) => ReactNode)',
    },
    onChange: {
      action: 'changed',
      description: '날짜 변경 이벤트 핸들러',
    },
    onPanelChange: {
      action: 'panel-changed',
      description: '패널 변경 이벤트 핸들러',
    },
    onSelect: {
      action: 'selected',
      description: '날짜 선택 이벤트 핸들러',
    },
    validRange: {
      description: '유효한 날짜 범위 [Dayjs, Dayjs]',
    },
    value: {
      description: '선택된 날짜(Dayjs)',
    },
  },
} satisfies Meta<typeof Antd.Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  
}

export const NotFullscreen: Story = {
  args: {
    fullscreen: false,
  },
}

export const YearMode: Story = {
  args: {
    mode: 'year',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: dayjs('2024-01-01'),
  },
}

export const WithValue: Story = {
  args: {
    value: dayjs('2024-12-25'),
  },
  render: function WithValueStory(args) {
    const [value, setValue] = useState<Dayjs>(
      args.value instanceof Date ? dayjs(args.value) : args.value || dayjs('2024-12-25')
    )
    
    return (
      <Antd.Calendar
        {...args}
        value={value}
        onSelect={(date) => {
          setValue(date)
          args.onSelect?.(date)
        }}
        onChange={(date) => {
          setValue(date)
          args.onChange?.(date)
        }}
      />
    )
  },
}

export const WithValidRange: Story = {
  args: {
    value: dayjs('2024-01-01'),
    validRange: [dayjs('2024-01-01'), dayjs('2024-12-15')],
  },
  render: function WithValidRangeStory(args) {
    const [value, setValue] = useState<Dayjs>(
      args.value instanceof Date ? dayjs(args.value) : args.value || dayjs('2024-01-01')
    )
    
    return (
      <Antd.Calendar
        {...args}
        value={value}
        onSelect={(date) => {
          setValue(date)
          args.onSelect?.(date)
        }}
        onChange={(date) => {
          setValue(date)
          args.onChange?.(date)
        }}
      />
    )
  },
}

export const WithDisabledDate: Story = {
  args: {
    disabledDate: (current) => {
      return current && current < dayjs().startOf('day')
    },
  },
}

export const WithDateCellRender: Story = {
  args: {
    dateCellRender: (date) => {
      if (date.date() === 1) {
        return <div style={{ color: 'red' }}>1일</div>
      }
      return null
    },
  },
}

export const CustomHeader: Story = {
  args: {
    headerRender: ({ value, type, onChange, onTypeChange }) => (
      <div style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <span>{value.format('YYYY년 MM월')}</span>
      </div>
    ),
  },
}

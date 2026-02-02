import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Pagination"로 표시
if (Antd.Pagination) {
  Antd.Pagination.displayName = 'Antd.Pagination'
}

const meta = {
  title: 'Common/Antd.Pagination',
  component: Antd.Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: 'number',
      description: '현재 페이지 번호',
    },
    defaultCurrent: {
      control: 'number',
      description: '기본 현재 페이지 번호',
    },
    defaultPageSize: {
      control: 'number',
      description: '기본 페이지 크기',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    hideOnSinglePage: {
      control: 'boolean',
      description: '단일 페이지일 때 숨김 여부',
    },
    itemRender: {
      description: '페이지 항목 커스텀 렌더링 함수',
    },
    pageSize: {
      control: 'number',
      description: '페이지 크기',
    },
    pageSizeOptions: {
      control: 'object',
      description: '페이지 크기 옵션 배열(string[])',
    },
    responsive: {
      control: 'boolean',
      description: '반응형 여부',
    },
    showLessItems: {
      control: 'boolean',
      description: '적은 항목 표시 여부',
    },
    showQuickJumper: {
      control: 'boolean',
      description: '빠른 이동 표시 여부',
    },
    showSizeChanger: {
      control: 'boolean',
      description: '페이지 크기 변경 표시 여부',
    },
    showTitle: {
      control: 'boolean',
      description: '제목 표시 여부',
    },
    showTotal: {
      description: '총 항목 수 표시 함수((total: number, range: [number, number]) => ReactNode)',
    },
    simple: {
      control: 'boolean',
      description: '간단한 모드 여부',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: '페이지네이션 크기',
    },
    total: {
      control: 'number',
      description: '총 항목 수',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    onChange: {
      action: 'changed',
      description: '페이지 변경 이벤트 핸들러',
    },
    onShowSizeChange: {
      action: 'show-size-changed',
      description: '페이지 크기 변경 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    total: 50,
  },
}

export const WithCurrent: Story = {
  args: {
    current: 1,
    total: 50,
  },
  render: function WithCurrentStory(args) {
    const [current, setCurrent] = useState(1)
    
    return (
      <Antd.Pagination
        {...args}
        current={current}
        onChange={(page) => {
          setCurrent(page)
        }}
      />
    )
  },
}

export const WithDefaultCurrent: Story = {
  args: {
    defaultCurrent: 3,
    total: 50,
  },
}

export const WithPageSize: Story = {
  args: {
    pageSize: 20,
    total: 50,
  },
  render: function WithPageSizeStory(args) {
    const [pageSize, setPageSize] = useState(20)
    
    return (
      <Antd.Pagination
        {...args}
        pageSize={pageSize}
        onShowSizeChange={(current, size) => {
          setPageSize(size)
          args.onShowSizeChange?.(current, size)
        }}
      />
    )
  },
}

export const WithDefaultPageSize: Story = {
  args: {
    defaultPageSize: 20,
    total: 50,
  },
}

export const ShowSizeChanger: Story = {
  args: {
    showSizeChanger: true,
    total: 200,
  },
}

export const ShowQuickJumper: Story = {
  args: {
    showQuickJumper: true,
    total: 200,
  },
}

export const ShowTotal: Story = {
  args: {
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    total: 200,
  },
}

export const WithPageSizeOptions: Story = {
  args: {
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100'],
    total: 200,
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    total: 50,
  },
}

export const Simple: Story = {
  args: {
    simple: true,
    total: 50,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    total: 50,
  },
}

export const HideOnSinglePage: Story = {
  args: {
    hideOnSinglePage: true,
    total: 5,
    pageSize: 10,
  },
}

export const Responsive: Story = {
  args: {
    responsive: true,
    total: 200,
  },
}

export const ShowLessItems: Story = {
  args: {
    showLessItems: true,
    total: 200,
  },
}

export const LargeTotal: Story = {
  args: {
    total: 1000,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `Total ${total} items`,
  },
}

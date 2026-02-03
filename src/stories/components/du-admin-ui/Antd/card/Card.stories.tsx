import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Card"로 표시
if (Antd.Card) {
  Antd.Card.displayName = 'Antd.Card'
}

const meta = {
  title: 'Common/Antd/Antd.Card',
  component: Antd.Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    actions: {
      description: '카드 액션 리스트(ReactNode[])',
    },
    activeTabKey: {
      control: 'text',
      description: '현재 활성화된 탭 키',
    },
    autoHeight: {
      control: 'boolean',
      description: '자동 높이 설정 여부',
    },
    bordered: {
      control: 'boolean',
      description: '테두리 표시 여부',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    cover: {
      description: '카드 커버 이미지(ReactNode)',
    },
    defaultActiveTabKey: {
      control: 'text',
      description: '기본 활성화된 탭 키',
    },
    extra: {
      description: '헤더 우측 추가 요소(ReactNode)',
    },
    headStyle: {
      control: 'object',
      description: '헤더 스타일(CSSProperties)',
    },
    bodyStyle: {
      control: 'object',
      description: '본문 스타일(CSSProperties)',
    },
    hoverable: {
      control: 'boolean',
      description: '호버 효과 여부',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: '카드 크기',
    },
    tabBarExtraContent: {
      description: '탭 바 추가 콘텐츠(ReactNode)',
    },
    tabList: {
      control: 'object',
      description: '탭 리스트',
    },
    tabProps: {
      control: 'object',
      description: '탭 props',
    },
    title: {
      control: 'text',
      description: '카드 제목(ReactNode | string)',
    },
    type: {
      control: 'select',
      options: ['default', 'inner'],
      description: '카드 타입',
    },
    children: {
      description: '카드 내용(ReactNode)',
    },
    onTabChange: {
      action: 'tab-changed',
      description: '탭 변경 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'Card content',
  },
}

export const WithBorder: Story = {
  args: {
    title: 'Card with Border',
    bordered: true,
    children: 'This card has a border',
  },
}

export const Small: Story = {
  args: {
    title: 'Small Card',
    size: 'small',
    children: 'This is a small card',
  },
}

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    hoverable: true,
    children: 'Hover over this card to see the effect',
  },
}

export const Loading: Story = {
  args: {
    title: 'Loading Card',
    loading: true,
    children: 'This card is loading',
  },
}

export const WithExtra: Story = {
  args: {
    title: 'Card with Extra',
    extra: <a href="#">More</a>,
    children: 'This card has an extra element in the header',
  },
}

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    actions: [
      <span key="setting">Setting</span>,
      <span key="edit">Edit</span>,
      <span key="more">More</span>,
    ],
    children: 'This card has action buttons at the bottom',
  },
}

export const WithCover: Story = {
  args: {
    title: 'Card with Cover',
    cover: (
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
    ),
    children: 'This card has a cover image',
  },
}

export const WithTabs: Story = {
  args: {
    title: 'Card with Tabs',
    tabList: [
      {
        key: 'tab1',
        tab: 'Tab 1',
      },
      {
        key: 'tab2',
        tab: 'Tab 2',
      },
    ],
    children: 'Content of Tab 1',
  },
}

export const FullExample: Story = {
  args: {
    title: 'Full Card',
    extra: <a href="#">More</a>,
    hoverable: true,
    actions: [
      <span key="setting">Setting</span>,
      <span key="edit">Edit</span>,
    ],
    children: (
      <div>
        <p>This is a full featured card with:</p>
        <ul>
          <li>Title</li>
          <li>Extra element</li>
          <li>Hover effect</li>
          <li>Actions</li>
        </ul>
      </div>
    ),
  },
}

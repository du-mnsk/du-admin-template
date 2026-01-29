import { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Tabs"로 표시
if (Antd.Tabs) {
  Antd.Tabs.displayName = 'Antd.Tabs'
}

const meta = {
  title: 'Common/Antd.Tabs',
  component: Antd.Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeKey: {
      control: 'text',
      description: '활성 탭 키',
    },
    addIcon: {
      description: '추가 아이콘(ReactNode)',
    },
    animated: {
      control: 'boolean',
      description: '애니메이션 활성화 여부 (boolean | { inkBar: boolean, tabPane: boolean })',
    },
    centered: {
      control: 'boolean',
      description: '탭을 중앙에 배치 여부',
    },
    defaultActiveKey: {
      control: 'text',
      description: '기본 활성 탭 키',
    },
    hideAdd: {
      control: 'boolean',
      description: '추가 버튼 숨김 여부',
    },
    items: {
      control: 'object',
      description: '탭 항목 배열(TabItem[])',
    },
    moreIcon: {
      description: '더보기 아이콘(ReactNode)',
    },
    popupClassName: {
      control: 'text',
      description: '팝업 클래스명',
    },
    renderTabBar: {
      action: 'renderTabBar',
      description: '탭 바 렌더링 함수',
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: '탭 크기',
    },
    tabBarExtraContent: {
      description: '탭 바 추가 내용(ReactNode)',
    },
    tabBarGutter: {
      control: 'number',
      description: '탭 바 간격',
    },
    tabBarStyle: {
      control: 'object',
      description: '탭 바 스타일(CSSProperties)',
    },
    tabPosition: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: '탭 위치',
    },
    destroyInactiveTabPane: {
      control: 'boolean',
      description: '비활성 탭 패널 제거 여부',
    },
    type: {
      control: 'select',
      options: ['line', 'card', 'editable-card'],
      description: '탭 타입',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    children: {
      description: 'TabPane 컴포넌트들(ReactNode)',
    },
    onChange: {
      action: 'changed',
      description: '탭 변경 이벤트 핸들러',
    },
    onEdit: {
      action: 'edited',
      description: '탭 편집 이벤트 핸들러',
    },
    onTabClick: {
      action: 'tab-clicked',
      description: '탭 클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabItems = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
]

export const Default: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} />,
}

/** TabPane 사용은 비추천: 탭 아이템을 따로 관리하는 것이 좋습니다. */
export const WithChildren: Story = {
  args: {},
  render: () => (
    <Antd.Tabs>
      <Antd.TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </Antd.TabPane>
      <Antd.TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </Antd.TabPane>
      <Antd.TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </Antd.TabPane>
    </Antd.Tabs>
  ),
}

export const WithDefaultActiveKey: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} defaultActiveKey="2"/>,
}

export const WithActiveKey: Story = {
  args: {},
  render: function WithActiveKeyStory(args) {
    const [activeKey, setActiveKey] = useState<string>('1')
    
    return (
      <Antd.Tabs
        activeKey={activeKey}
        items={tabItems}
        onChange={(key) => {
          setActiveKey(key)
          args.onChange?.(key)
        }}
      />
    )
  },
}

export const Card: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} type="card"/>,
}

export const EditableCard: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} type="editable-card"/>,
}

export const Small: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} size="small"/>,
}

export const Large: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} size="large"/>,
}

export const Centered: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} centered/>,
}

export const TabPositionLeft: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} tabPosition="left"/>,
}

export const TabPositionRight: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} tabPosition="right"/>,
}

export const TabPositionBottom: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} tabPosition="bottom"/>,
}

export const WithTabBarExtraContent: Story = {
  args: {},
  render: () => (
    <Antd.Tabs
      tabBarExtraContent={<Antd.Button size="small">Extra</Antd.Button>}
      items={tabItems}
    />
  ),
}

export const WithDisabledTab: Story = {
  args: {},
  render: () => (
    <Antd.Tabs
      items={[
        {
          key: '1',
          label: 'Tab 1',
          children: 'Content of Tab Pane 1',
        },
        {
          key: '2',
          label: 'Tab 2 (Disabled)',
          disabled: true,
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Tab 3',
          children: 'Content of Tab Pane 3',
        },
      ]}
    />
  ),
}

export const Animated: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} animated/>,
}

/** animated={{ inkBar: true, tabPane: false }} → 표시줄만 애니메이션, 콘텐츠는 즉시 전환<br/> */
/** animated={{ inkBar: false, tabPane: true }} → 표시줄은 즉시 이동, 콘텐츠만 애니메이션 */
export const AnimatedInkBarOnly: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} animated={{ inkBar: true, tabPane: false }} />,
}

export const WithTabBarGutter: Story = {
  args: {},
  render: () => <Antd.Tabs items={tabItems} tabBarGutter={100} />,
}

export const WithIcon: Story = {
  args: {},
  render: () => (
    <Antd.Tabs
      items={[
        {
          key: '1',
          label: (
            <span>
              <MailOutlined />
              <span style={{ marginLeft: 8 }}>Tab 1</span>
            </span>
          ),
          children: 'Content of Tab Pane 1',
        },
        {
          key: '2',
          label: (
            <span>
              <AppstoreOutlined />
              <span style={{ marginLeft: 8 }}>Tab 2</span>
            </span>
          ),
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: (
            <span>
              <SettingOutlined />
              <span style={{ marginLeft: 8 }}>Tab 3</span>
            </span>
          ),
          children: 'Content of Tab Pane 3',
        },
      ]}
    />
  ),
}

export const WithOnTabClick: Story = {
  args: {},
  render: (args) => (
    <Antd.Tabs
      items={tabItems}
      onTabClick={(key, e) => {
        alert(`Tab clicked: ${key}`)
        args.onTabClick?.(key, e)
      }}
    />
  ),
}

import { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MenuProps } from 'antd'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Menu"로 표시
if (Antd.Menu) {
  Antd.Menu.displayName = 'Antd.Menu'
}

const menuItems: MenuProps['items'] = [
  {
    key: '1',
    label: 'Navigation One',
    icon: <MailOutlined />,
  },
  {
    key: '2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
  },
  {
    key: '3',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
  },
]

const menuItemsWithSubMenu: MenuProps['items'] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: '1',
        label: 'Option 1',
      },
      {
        key: '2',
        label: 'Option 2',
      },
      {
        key: '3',
        label: 'Option 3',
      },
      {
        key: '4',
        label: 'Option 4',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '7',
            label: 'Option 7',
          },
          {
            key: '8',
            label: 'Option 8',
          },
        ],
      },
    ],
  },
  {
    key: '9',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
  },
]

const meta = {
  title: 'Common/Antd/Antd.Menu',
  component: Antd.Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpenKeys: {
      control: 'object',
      description: '기본으로 열려있는 서브메뉴 키 배열',
    },
    defaultSelectedKeys: {
      control: 'object',
      description: '기본으로 선택된 메뉴 키 배열',
    },
    expandIcon: {
      control: 'object',
      description: '열림 아이콘 컴포넌트(ReactNode | (props: SubMenuProps & { isSubMenu: boolean }) => ReactNode)',
    },
    forceSubMenuRender: {
      control: 'boolean',
      description: '서브메뉴 강제 렌더링 여부',
    },
    inlineCollapsed: {
      control: 'boolean',
      description: '인라인 모드에서 메뉴 접힘 여부',
    },
    inlineIndent: {
      control: 'number',
      description: '인라인 모드에서 메뉴 들여쓰기 크기',
    },
    items: {
      control: 'object',
      description: '메뉴 항목 배열(MenuItemType[])',
    },
    mode: {
      control: 'select',
      options: ['vertical', 'horizontal', 'inline'],
      description: '메뉴 모드',
    },
    multiple: {
      control: 'boolean',
      description: '다중 선택 허용 여부',
    },
    openKeys: {
      control: 'object',
      description: '열려있는 서브메뉴 키 배열',
    },
    overflowedIndicator: {
      control: 'object',
      description: '오버플로우 아이콘 컴포넌트(ReactNode)',
    },
    selectable: {
      control: 'boolean',
      description: '선택 가능 여부',
    },
    selectedKeys: {
      control: 'object',
      description: '선택된 메뉴 키 배열(string[])',
    },
    style: {
      control: 'object',
      description: '인라인 스타일(CSSProperties)',
    },
    subMenuCloseDelay: {
      control: 'number',
      description: '서브메뉴 닫기 지연 시간(초)',
    },
    subMenuOpenDelay: {
      control: 'number',
      description: '서브메뉴 열기 지연 시간(초)',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: '메뉴 테마',
    },
    triggerSubMenuAction: {
      control: 'select',
      options: ['click', 'hover'],
      description: '서브메뉴 트리거 액션',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    children: {
      description: 'MenuItem 컴포넌트들(ReactNode)',
    },
    onClick: {
      action: 'clicked',
      description: '메뉴 항목 클릭 이벤트 핸들러',
    },
    onDeselect: {
      action: 'deselected',
      description: '메뉴 항목 선택 해제 이벤트 핸들러',
    },
    onOpenChange: {
      action: 'open-changed',
      description: '서브메뉴 열림 상태 변경 이벤트 핸들러',
    },
    onSelect: {
      action: 'selected',
      description: '메뉴 항목 선택 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: menuItems,
  },
}

/** MenuItem 비추천. items 속성 사용 권장 */
export const WithChildren: Story = {
  args: {},
  render: () => (
    <Antd.Menu>
      <Antd.MenuItem key="1" icon={<MailOutlined />}>
        Navigation One
      </Antd.MenuItem>
      <Antd.MenuItem key="2" icon={<AppstoreOutlined />}>
        Navigation Two
      </Antd.MenuItem>
      <Antd.MenuItem key="3" icon={<SettingOutlined />}>
        Navigation Three
      </Antd.MenuItem>
    </Antd.Menu>
  ),
}

export const Horizontal: Story = {
  args: {
    mode: 'horizontal',
    items: menuItems,
  },
}

export const Inline: Story = {
  args: {
    mode: 'inline',
    items: menuItemsWithSubMenu,
  },
}

export const WithSubMenu: Story = {
  args: {
    mode: 'inline',
    items: menuItemsWithSubMenu,
  },
}

export const WithDefaultSelectedKeys: Story = {
  args: {
    items: menuItems,
    defaultSelectedKeys: ['1'],
  },
}

export const WithSelectedKeys: Story = {
  args: {
    items: menuItems,
    selectedKeys: ['1'],
  },
  render: function WithSelectedKeysStory(args) {
    const [selectedKeys, setSelectedKeys] = useState<string[]>(['1'])
    
    return (
      <Antd.Menu
        {...args}
        selectedKeys={selectedKeys}
        onSelect={({ key }) => {
          setSelectedKeys([key])
          args.onSelect?.({ key } as any)
        }}
      />
    )
  },
}

export const WithDefaultOpenKeys: Story = {
  args: {
    mode: 'inline',
    items: menuItemsWithSubMenu,
    defaultOpenKeys: ['sub1'],
  },
}

export const WithOpenKeys: Story = {
  args: {
    mode: 'inline',
    items: menuItemsWithSubMenu,
    openKeys: ['sub1'],
  },
  render: function WithOpenKeysStory(args) {
    const [openKeys, setOpenKeys] = useState<string[]>(['sub1'])
    
    return (
      <Antd.Menu
        {...args}
        openKeys={openKeys}
        onOpenChange={(keys) => {
          setOpenKeys(keys)
          args.onOpenChange?.(keys)
        }}
      />
    )
  },
}

export const Multiple: Story = {
  args: {
    items: menuItems,
    multiple: true,
  },
  render: function MultipleStory(args) {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    
    return (
      <Antd.Menu
        {...args}
        selectedKeys={selectedKeys}
        onSelect={({ key, selectedKeys: keys }) => {
          setSelectedKeys(keys || [])
          args.onSelect?.({ key } as any)
        }}
      />
    )
  },
}

export const NotSelectable: Story = {
  args: {
    items: menuItems,
    selectable: false,
  },
}

export const WithOnClick: Story = {
  args: {
    items: menuItems,
    onClick: ({ key }) => {
      alert(`Menu item clicked: ${key}`)
    },
  },
}

export const WithDisabledItem: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Navigation One',
        icon: <MailOutlined />,
      },
      {
        key: '2',
        label: 'Navigation Two (Disabled)',
        icon: <AppstoreOutlined />,
        disabled: true,
      },
      {
        key: '3',
        label: 'Navigation Three',
        icon: <SettingOutlined />,
      },
    ],
  },
}

export const WithDangerItem: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Navigation One',
        icon: <MailOutlined />,
      },
      {
        key: '2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
      },
      {
        key: '3',
        label: 'Danger Item',
        icon: <SettingOutlined />,
        danger: true,
      },
    ],
  },
}

export const WithDivider: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'Navigation One',
        icon: <MailOutlined />,
      },
      {
        key: '2',
        label: 'Navigation Two',
        icon: <AppstoreOutlined />,
      },
      {
        type: 'divider',
      },
      {
        key: '3',
        label: 'Navigation Three',
        icon: <SettingOutlined />,
      },
    ],
  },
}

export const TriggerSubMenuActionHover: Story = {
  args: {
    mode: 'inline',
    items: menuItemsWithSubMenu,
    triggerSubMenuAction: 'hover',
  },
}

export const TriggerSubMenuActionClick: Story = {
  args: {
    mode: 'inline',
    items: menuItemsWithSubMenu,
    triggerSubMenuAction: 'click',
  },
}

export const InlineCollapsed: Story = {
  args: {
    mode: 'inline',
    items: menuItemsWithSubMenu,
    inlineCollapsed: true,
  },
}

export const WithCustomStyle: Story = {
  args: {
    items: menuItems,
    style: {
      width: 256,
      border: '1px solid #f0f0f0',
    },
  },
}

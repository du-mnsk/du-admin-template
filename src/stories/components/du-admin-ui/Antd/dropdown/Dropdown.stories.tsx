import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MenuProps } from 'antd'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Dropdown"로 표시
if (Antd.Dropdown) {
  Antd.Dropdown.displayName = 'Antd.Dropdown'
}

const menuItems: MenuProps['items'] = [
  {
    key: '1',
    label: '1st menu item',
  },
  {
    key: '2',
    label: '2nd menu item',
  },
  {
    key: '3',
    label: '3rd menu item',
  },
]

const meta = {
  title: 'Common/Antd/Antd.Dropdown',
  component: Antd.Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    arrow: {
      control: 'boolean',
      description: '화살표 표시 여부',
    },
    autoAdjustOverflow: {
      control: 'boolean',
      description: '자동으로 overflow 조정 여부',
    },
    autoFocus: {
      control: 'boolean',
      description: '자동 포커스 여부',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    destroyPopupOnHide: {
      control: 'boolean',
      description: '숨김 시 팝업 제거 여부',
    },
    dropdownRender: {
      description: '드롭다운 커스텀 렌더링 함수((menu: ReactNode) => ReactNode)',
    },
    getPopupContainer: {
      description: '팝업이 렌더링될 컨테이너 함수((triggerNode: HTMLElement) => HTMLElement)',
    },
    menu: {
      control: 'object',
      description: '메뉴 설정(MenuProps)',
    },
    open: {
      control: 'boolean',
      description: '드롭다운 열림 상태',
    },
    overlayClassName: {
      control: 'text',
      description: '오버레이 클래스명',
    },
    overlayStyle: {
      control: 'object',
      description: '오버레이 스타일(CSSProperties)',
    },
    placement: {
      control: 'select',
      options: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
      description: '드롭다운 위치',
    },
    trigger: {
      control: 'object',
      description: '트리거 이벤트 배열(Array<"click" | "hover" | "contextMenu">)',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    children: {
      description: '트리거 요소(ReactNode)',
    },
    onOpenChange: {
      action: 'open-changed',
      description: '드롭다운 열림 상태 변경 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    menu: { items: menuItems },
    children: <a onClick={(e) => e.preventDefault()}>Hover me</a>,
  },
}

export const WithClickTrigger: Story = {
  args: {
    menu: { items: menuItems },
    trigger: ['click'],
    children: <a onClick={(e) => e.preventDefault()}>Click me</a>,
  },
}

export const WithContextMenuTrigger: Story = {
  args: {
    menu: { items: menuItems },
    trigger: ['contextMenu'],
    children: (
      <div style={{ padding: '20px', border: '1px solid #d9d9d9', borderRadius: '4px' }}>
        Right click me
      </div>
    ),
  },
}

export const WithMultipleTriggers: Story = {
  args: {
    menu: { items: menuItems },
    trigger: ['click', 'contextMenu'],
    children: <a onClick={(e) => e.preventDefault()}>Left click or right click me</a>,
  },
}

export const WithPlacement: Story = {
  args: {
    menu: { items: menuItems },
    placement: 'topLeft',
    children: <a onClick={(e) => e.preventDefault()}>Top Left</a>,
  },
}

export const WithArrow: Story = {
  args: {
    menu: { items: menuItems },
    arrow: true,
    children: <a onClick={(e) => e.preventDefault()}>With Arrow</a>,
  },
}

export const Disabled: Story = {
  args: {
    menu: { items: menuItems },
    disabled: true,
    children: <a onClick={(e) => e.preventDefault()}>Disabled</a>,
  },
}

export const WithButton: Story = {
  args: {
    menu: { items: menuItems },
    children: <Antd.Button>Button Dropdown</Antd.Button>,
  },
}

export const WithMenuItems: Story = {
  args: {
    menu: {
      items: [
        {
          key: '1',
          label: '1st menu item',
        },
        {
          key: '2',
          label: '2nd menu item',
        },
        {
          key: '3',
          label: '3rd menu item',
          disabled: true,
        },
        {
          type: 'divider',
        },
        {
          key: '4',
          label: '4th menu item',
          danger: true,
        },
      ],
    },
    children: <a onClick={(e) => e.preventDefault()}>Menu Items</a>,
  },
}

export const WithOverlayStyle: Story = {
  args: {
    menu: { items: menuItems },
    overlayStyle: {
      minWidth: '200px',
      backgroundColor: '#f0f0f0',
    },
    children: <a onClick={(e) => e.preventDefault()}>Custom Style</a>,
  },
}

export const WithOverlayClassName: Story = {
  args: {
    menu: { items: menuItems },
    overlayClassName: 'custom-dropdown',
    children: <a onClick={(e) => e.preventDefault()}>Custom Class</a>,
  },
}

export const WithOnClick: Story = {
  args: {
    menu: {
      items: [
        {
          key: '1',
          label: '1st menu item',
        },
        {
          key: '2',
          label: '2nd menu item',
        },
        {
          key: '3',
          label: '3rd menu item',
          onClick: ({ key }) => {
            alert(`3rd menu item onClick: ${key}`)
          },
        },
      ],
      onClick: ({ key }) => {
        alert(`common onClick: ${key}`)
      },
    },
    children: <a onClick={(e) => e.preventDefault()}>With onClick</a>,
  },
}

export const WithSubMenu: Story = {
  args: {
    menu: {
      items: [
        {
          key: '1',
          label: '1st menu item',
        },
        {
          key: '2',
          label: '2nd menu item',
        },
        {
          key: 'sub1',
          label: 'Submenu',
          children: [
            {
              key: '3',
              label: '3rd menu item',
            },
            {
              key: '4',
              label: '4th menu item',
            },
          ],
        },
      ],
    },
    children: <a onClick={(e) => e.preventDefault()}>With Submenu</a>,
  },
}

export const DestroyPopupOnHide: Story = {
  args: {
    menu: { items: menuItems },
    destroyPopupOnHide: true,
    children: <a onClick={(e) => e.preventDefault()}>Destroy on Hide</a>,
  },
}

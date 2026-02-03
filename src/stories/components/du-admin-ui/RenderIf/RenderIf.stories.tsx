import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import { RenderIf, type RenderIfProps,RenderSwitch, type RenderSwitchProps } from '@/shared/components/du-admin-ui/RenderIf'

const meta = {
  title: 'Common/RenderIf',
  component: RenderIf,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    when: {
      control: 'boolean',
      description: '렌더링 조건',
    },
    children: {
      control: false,
      description: '조건이 true일 때 렌더링할 내용',
    },
  },
} satisfies Meta<typeof RenderIf>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    when: true,
    children: <div style={{ padding: 16, backgroundColor: '#f0f0f0', borderRadius: 4 }}>조건이 true일 때 표시되는 내용입니다.</div>,
  },
  render: (args: RenderIfProps) => {
    const [show, setShow] = useState(true)
    return (
      <div>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: 16 }}>
          {show ? '숨기기' : '보이기'}
        </Button>
        <RenderIf when={show}>
          {args.children}
        </RenderIf>
      </div>
    )
  },
}

export const RenderSwitchExample: Story = {
  args: {
    when: true,
    children: [
      <div key="active" style={{ padding: 16, backgroundColor: '#f6ffed', borderRadius: 4 }}>
        활성 상태입니다.
      </div>,
      <div key="inactive" style={{ padding: 16, backgroundColor: '#fff1f0', borderRadius: 4 }}>
        비활성 상태입니다.
      </div>,
    ],
  },
  render: (args) => {
    const [isActive, setIsActive] = useState(true)
    return (
      <div>
        <Button onClick={() => setIsActive(!isActive)} style={{ marginBottom: 16 }}>
          {isActive ? '비활성화' : '활성화'}
        </Button>
        <RenderSwitch when={isActive}>
          {args.children as [React.ReactNode, React.ReactNode]}
        </RenderSwitch>
      </div>
    )
  },
}

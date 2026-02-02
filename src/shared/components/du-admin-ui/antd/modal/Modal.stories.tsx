import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Modal"로 표시
if (Antd.Modal) {
  Antd.Modal.displayName = 'Antd.Modal'
}

const meta = {
  title: 'Common/Antd.Modal',
  component: Antd.Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    afterClose: {
      description: '모달이 완전히 닫힌 후 실행되는 콜백 함수',
    },
    bodyStyle: {
      control: 'object',
      description: '모달 본문 스타일(CSSProperties)',
    },
    cancelButtonProps: {
      control: 'object',
      description: '취소 버튼 props',
    },
    cancelText: {
      control: 'text',
      description: '취소 버튼 텍스트(ReactNode)',
    },
    centered: {
      control: 'boolean',
      description: '모달을 화면 중앙에 배치 여부',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    closable: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부',
    },
    closeIcon: {
      description: '커스텀 닫기 아이콘(ReactNode)',
    },
    confirmLoading: {
      control: 'boolean',
      description: '확인 버튼 로딩 상태',
    },
    destroyOnClose: {
      control: 'boolean',
      description: '닫을 때 자식 요소 제거 여부',
    },
    focusTriggerAfterClose: {
      control: 'boolean',
      description: '닫을 때 포커스 초기화 여부',
    },
    footer: {
      description: '푸터 내용(ReactNode | null)',
    },
    forceRender: {
      control: 'boolean',
      description: '강제 렌더링 여부',
    },
    getContainer: {
      description: '모달이 렌더링될 컨테이너(HTMLElement | () => HTMLElement | false)',
    },
    keyboard: {
      control: 'boolean',
      description: '키보드 이벤트 허용 여부',
    },
    isLoading: {
      control: 'boolean',
      description: '로딩 상태 (커스텀 prop)',
    },
    mask: {
      control: 'boolean',
      description: '마스크 표시 여부',
    },
    maskClosable: {
      control: 'boolean',
      description: '마스크 클릭 시 닫기 여부',
    },
    maskStyle: {
      control: 'object',
      description: '마스크 스타일(CSSProperties)',
    },
    modalRender: {
      description: '모달 렌더링 함수((node: ReactNode) => ReactNode)',
    },
    okButtonProps: {
      control: 'object',
      description: '확인 버튼 props',
    },
    okText: {
      control: 'text',
      description: '확인 버튼 텍스트',
    },
    okType: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'link', 'text'],
      description: '확인 버튼 타입',
    },
    open: {
      control: 'boolean',
      description: '모달 열림 상태',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '모달 크기 (커스텀 prop)',
    },
    style: {
      control: 'object',
      description: '인라인 스타일(CSSProperties)',
    },
    title: {
      control: 'text',
      description: '제목(ReactNode)',
    },
    width: {
      control: 'text',
      description: '모달 너비',
    },
    wrapClassName: {
      control: 'text',
      description: '모달 래퍼 클래스명',
    },
    zIndex: {
      control: 'number',
      description: 'z-index 값',
    },
    onCancel: {
      action: 'cancelled',
      description: '취소 버튼 클릭 이벤트 핸들러',
    },
    onOk: {
      action: 'ok',
      description: '확인 버튼 클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Basic Modal',
    children: <p>Some contents...</p>,
    open: false,
  },
  render: function DefaultStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const Small: Story = {
  args: {
    title: 'Small Modal',
    size: 'small',
    children: <p>Small modal content...</p>,
    open: false,
  },
  render: function SmallStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Small Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const Medium: Story = {
  args: {
    title: 'Medium Modal',
    size: 'medium',
    children: <p>Medium modal content...</p>,
    open: false,
  },
  render: function MediumStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Medium Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const Large: Story = {
  args: {
    title: 'Large Modal',
    size: 'large',
    children: <p>Large modal content...</p>,
    open: false,
  },
  render: function LargeStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Large Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const Centered: Story = {
  args: {
    title: 'Centered Modal',
    centered: true,
    children: <p>Centered modal content...</p>,
    open: false,
  },
  render: function CenteredStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Centered Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const WithoutFooter: Story = {
  args: {
    title: 'Modal Without Footer',
    footer: null,
    children: <p>Modal without footer...</p>,
    open: false,
  },
  render: function WithoutFooterStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const CustomFooter: Story = {
  args: {
    title: 'Modal With Custom Footer',
    footer: [
      <Antd.Button key="back">Return</Antd.Button>,
      <Antd.Button key="submit" type="primary">
        Submit
      </Antd.Button>,
    ],
    children: <p>Modal with custom footer...</p>,
    open: false,
  },
  render: function CustomFooterStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const WithLoading: Story = {
  args: {
    title: 'Modal With Loading',
    isLoading: true,
    children: <p>Loading content...</p>,
    open: false,
  },
  render: function WithLoadingStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const ConfirmLoading: Story = {
  args: {
    title: 'Modal With Confirm Loading',
    confirmLoading: true,
    children: <p>Modal content...</p>,
    open: false,
  },
  render: function ConfirmLoadingStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setTimeout(() => {
              setOpen(false)
              args.onOk?.({ key: 'ok' } as any)
            }, 2000)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const NotClosable: Story = {
  args: {
    title: 'Modal Not Closable',
    closable: false,
    children: <p>This modal cannot be closed by clicking X...</p>,
    open: false,
  },
  render: function NotClosableStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const MaskNotClosable: Story = {
  args: {
    title: 'Modal Mask Not Closable',
    maskClosable: false,
    children: <p>Cannot close by clicking mask...</p>,
    open: false,
  },
  render: function MaskNotClosableStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const DestroyOnClose: Story = {
  args: {
    title: 'Modal Destroy On Close',
    destroyOnClose: true,
    children: <p>Content will be destroyed when closed...</p>,
    open: false,
  },
  render: function DestroyOnCloseStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

export const CustomWidth: Story = {
  args: {
    title: 'Modal With Custom Width',
    width: 1000,
    children: <p>Wide modal content...</p>,
    open: false,
  },
  render: function CustomWidthStory(args) {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <Antd.Button onClick={() => setOpen(true)}>Open Modal</Antd.Button>
        <Antd.Modal
          {...args}
          open={open}
          onOk={() => {
            setOpen(false)
            args.onOk?.({ key: 'ok' } as any)
          }}
          onCancel={() => {
            setOpen(false)
            args.onCancel?.({ key: 'cancel' } as any)
          }}
        />
      </>
    )
  },
}

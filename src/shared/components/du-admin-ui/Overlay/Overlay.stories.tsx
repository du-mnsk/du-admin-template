import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'
import styled from 'styled-components'

import Overlay from '@/shared/components/du-admin-ui/Overlay'

const meta = {
  title: 'Common/Overlay',
  component: Overlay,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    show: {
      control: 'boolean',
      description: '오버레이 표시 여부',
    },
  },
} satisfies Meta<typeof Overlay>

export default meta
type Story = StoryObj<typeof meta>

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  background: white;
  padding: 20px;
  border-radius: 4px;
`

export const Default: Story = {
  args: {
    show: false,
  },
  render: () => {
    const [show, setShow] = useState(false)
    return (
      <Container>
        <Overlay show={show} />
        <Content>
          <h3>오버레이 예제</h3>
          <p>버튼을 클릭하여 오버레이를 토글하세요.</p>
          <Button type="primary" onClick={() => setShow(!show)}>
            {show ? '오버레이 숨기기' : '오버레이 표시'}
          </Button>
        </Content>
      </Container>
    )
  },
}

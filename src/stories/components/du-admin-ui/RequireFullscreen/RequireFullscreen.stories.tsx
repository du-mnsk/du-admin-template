import { useRef } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'
import styled from 'styled-components'

import { RequireFullscreen } from '@/shared/components/du-admin-ui/RequireFullscreen'

const meta = {
  title: 'Common/RequireFullscreen',
  component: RequireFullscreen,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: false,
      description: '전체화면으로 표시할 요소의 ref',
    },
    children: {
      control: false,
      description: '렌더 함수 (isFullscreen: boolean) => ReactNode',
    },
  },
} satisfies Meta<typeof RequireFullscreen>

export default meta
type Story = StoryObj<typeof meta>

const FullscreenContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 2px solid #1890ff;
  border-radius: 8px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

export const Default: Story = {
  args: {
    component: { current: null },
    children: () => <div>test</div>,
  },
  render: (args) => {
    const containerRef = useRef<HTMLDivElement>(null)
    return (
      <RequireFullscreen component={containerRef}>
        {(isFullscreen) => (
          <FullscreenContainer ref={containerRef}>
            <Button
              type="primary"
              onClick={(e) => {
                e.stopPropagation()
                if (containerRef.current) {
                  isFullscreen
                    ? document.exitFullscreen()
                    : containerRef.current.requestFullscreen()
                }
              }}
            >
              {isFullscreen ? '전체화면 종료' : '전체화면 시작'}
            </Button>
          </FullscreenContainer>
        )}
      </RequireFullscreen>
    )
  },
}
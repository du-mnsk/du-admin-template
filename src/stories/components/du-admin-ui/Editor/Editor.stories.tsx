import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import Editor from '@/shared/components/du-admin-ui/Editor'

const meta = {
  title: 'Common/Editor',
  component: Editor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: '에디터 초기 값',
    },
    onChange: {
      action: 'changed',
      description: '값 변경 시 호출되는 콜백 함수',
    },
  },
} satisfies Meta<typeof Editor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return <Editor value={value} onChange={setValue} />
  },
}

export const WithInitialValue: Story = {
  render: () => {
    const [value, setValue] = useState('<p>초기 내용입니다.</p><p><strong>굵은 텍스트</strong></p>')
    return <Editor value={value} onChange={setValue} />
  },
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div>
        <Editor value={value} onChange={setValue} />
        <div style={{ marginTop: 16 }}>
          <Button
            type="primary"
            onClick={() => {
              console.log('Editor value:', value)
            }}
          >
            값 확인
          </Button>
        </div>
      </div>
    )
  },
}

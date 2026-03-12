import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, message } from 'antd'

import { VerificationCodeInput } from '@/shared/components/du-admin-ui/VerificationCodeInput'

const meta = {
  title: 'Common/VerificationCodeInput',
  component: VerificationCodeInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: 'number',
      description: '인증 코드 길이',
    },
    autoFocus: {
      control: 'boolean',
      description: '자동 포커스',
    },
    onlyNumber: {
      control: 'boolean',
      description: '숫자만 입력 허용',
    },
    validChars: {
      control: 'text',
      description: '유효한 문자 집합',
    },
  },
} satisfies Meta<typeof VerificationCodeInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    length: 6,
    autoFocus: true,
  },
}

export const OnlyNumber: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div>
        <VerificationCodeInput
          length={6}
          onlyNumber={true}
          autoFocus={true}
          onChange={setValue}
          onComplete={(val) => {
            message.success(`입력 완료: ${val}`)
          }}
        />
        <div style={{ marginTop: 16 }}>입력된 값: {value}</div>
      </div>
    )
  },
}

export const WithAlphanumeric: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div>
        <VerificationCodeInput
          length={6}
          autoFocus={true}
          onChange={setValue}
          onComplete={(val) => {
            message.success(`입력 완료: ${val}`)
          }}
        />
        <div style={{ marginTop: 16 }}>입력된 값: {value}</div>
      </div>
    )
  },
}

export const CustomLength: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div>
        <VerificationCodeInput
          length={4}
          autoFocus={true}
          onlyNumber={true}
          onChange={setValue}
          onComplete={(val) => {
            message.success(`4자리 입력 완료: ${val}`)
          }}
        />
        <div style={{ marginTop: 16 }}>입력된 값: {value}</div>
      </div>
    )
  },
}

export const LongCode: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div>
        <VerificationCodeInput
          length={8}
          autoFocus={true}
          onlyNumber={true}
          onChange={setValue}
          onComplete={(val) => {
            message.success(`8자리 입력 완료: ${val}`)
          }}
        />
        <div style={{ marginTop: 16 }}>입력된 값: {value}</div>
      </div>
    )
  },
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [isComplete, setIsComplete] = useState(false)
    
    return (
      <div>
        <VerificationCodeInput
          length={6}
          autoFocus={true}
          onlyNumber={true}
          onChange={(val) => {
            setValue(val)
            setIsComplete(false)
          }}
          onComplete={(val) => {
            setValue(val)
            setIsComplete(true)
            message.success(`인증 코드 입력 완료: ${val}`)
          }}
        />
        <div style={{ marginTop: 16 }}>
          <p>입력된 값: {value || '(없음)'}</p>
          <p>완료 여부: {isComplete ? '완료' : '진행 중'}</p>
          <Button
            type="primary"
            disabled={!isComplete}
            onClick={() => {
              message.info(`인증 코드 확인: ${value}`)
            }}
            style={{ marginTop: 8 }}
          >
            인증 확인
          </Button>
        </div>
      </div>
    )
  },
}

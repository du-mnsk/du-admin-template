import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import Form from '@/shared/components/du-admin-ui/Form'

// 스토리북에서 컴포넌트 이름을 "Form.Input"로 표시
if (Form.Input) {
  (Form.Input as any).displayName = 'Form.Input'
}

const meta = {
  title: 'Common/Form/Form.Input',
  component: Form.Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    colSetProps: {
      control: 'object',
      description: 'Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)',
    },
    formItemProps: {
      control: 'object',
      description: 'Form.Item에 전달할 props (name, label, rules 등)',
    },
    childrenProps: {
      control: 'object',
      description: 'Input에 전달할 props (placeholder, type, maxLength 등)',
    },
  },
} satisfies Meta<typeof Form.Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'input', label: '입력' }}
        childrenProps={{ placeholder: '입력하세요.' }}
      />
    </Form>
  ),
}

export const Required: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'input',
          label: '필수 입력',
          rules: [{ required: true, message: '입력해주세요.' }],
        }}
        childrenProps={{ placeholder: '필수 입력 필드' }}
      />
    </Form>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Form name="input-form" initialValues={{ input: '기본 값' }}>
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'input', label: '기본 값' }}
        childrenProps={{ placeholder: '입력하세요.' }}
      />
    </Form>
  ),
}

export const WithMaxLength: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'input', label: '최대 길이' }}
        childrenProps={{ placeholder: '최대 10자까지 입력 가능', maxLength: 10 }}
      />
    </Form>
  ),
}

export const WithShowCount: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'input', label: '글자 수 표시' }}
        childrenProps={{ placeholder: '글자 수가 표시됩니다', maxLength: 20, showCount: true }}
      />
    </Form>
  ),
}

export const WithPrefix: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'input', label: '접두사' }}
        childrenProps={{ prefix: 'https://', placeholder: 'example.com' }}
      />
    </Form>
  ),
}

export const WithSuffix: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'input', label: '접미사' }}
        childrenProps={{ suffix: '.com', placeholder: 'example' }}
      />
    </Form>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Form name="input-form" initialValues={{ input: '비활성화된 입력' }}>
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'input', label: '비활성화' }}
        childrenProps={{ disabled: true, placeholder: '입력할 수 없습니다' }}
      />
    </Form>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <Form name="input-form" initialValues={{ input: '읽기 전용 입력' }}>
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'input', label: '읽기 전용' }}
        childrenProps={{ readOnly: true, placeholder: '읽기 전용입니다' }}
      />
    </Form>
  ),
}

export const TypePassword: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'password', label: '비밀번호' }}
        childrenProps={{ type: 'password', placeholder: '비밀번호를 입력하세요' }}
      />
    </Form>
  ),
}

export const TypeNumber: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'number', label: '숫자' }}
        childrenProps={{ type: 'number', placeholder: '숫자를 입력하세요' }}
      />
    </Form>
  ),
}

export const TypeEmail: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'email',
          label: '이메일',
          rules: [{ type: 'email', message: '올바른 이메일을 입력하세요.' }],
        }}
        childrenProps={{ type: 'email', placeholder: '이메일을 입력하세요' }}
      />
    </Form>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'input',
          label: '유효성 검사',
          rules: [
            { required: true, message: '입력해주세요.' },
            { min: 3, message: '최소 3자 이상 입력하세요.' },
          ],
        }}
        childrenProps={{ placeholder: '최소 3자 이상 입력하세요' }}
      />
    </Form>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{ name: 'input', label: '전체 너비' }}
        childrenProps={{ placeholder: '전체 너비 입력 필드' }}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'input',
          label: '도움말',
          help: '이 필드에 대한 도움말입니다.',
        }}
        childrenProps={{ placeholder: '입력하세요.' }}
      />
    </Form>
  ),
}

export const WithTooltip: Story = {
  render: () => (
    <Form name="input-form">
      <Form.Input
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'input',
          label: '툴팁',
          tooltip: '이 필드에 대한 툴팁입니다.',
        }}
        childrenProps={{ placeholder: '입력하세요.' }}
      />
    </Form>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [form] = Form.useForm()

    return (
      <Form name="input-form" form={form} style={{ display: 'flex', alignItems: 'center'}}>
        <Form.Input
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'input', label: '상호작용' }}
          childrenProps={{ placeholder: '입력하고 제출해보세요' }}
        />
        <Button
          type="primary"
          onClick={() => {
            form.validateFields().then((values) => {
              console.log('Form values:', values)
            })
          }}
        >
          제출
        </Button>
      </Form>
    )
  },
}

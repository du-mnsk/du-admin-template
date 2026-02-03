import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import Form from '@/shared/components/du-admin-ui/Form'

// 스토리북에서 컴포넌트 이름을 "Form.TextArea"로 표시
if (Form.TextArea) {
  (Form.TextArea as any).displayName = 'Form.TextArea'
}

const meta = {
  title: 'Common/Form/Form.TextArea',
  component: Form.TextArea,
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
      description: 'TextArea에 전달할 props (placeholder, rows, showCount 등)',
    },
  },
} satisfies Meta<typeof Form.TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Form name="textarea-form">
      <Form.TextArea
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'textarea', label: '텍스트 영역' }}
        childrenProps={{ placeholder: '텍스트를 입력하세요.' }}
      />
    </Form>
  ),
}

export const Required: Story = {
  render: () => (
    <Form name="textarea-form">
      <Form.TextArea
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'textarea',
          label: '필수 입력',
          rules: [{ required: true, message: '입력해주세요.' }],
        }}
        childrenProps={{ placeholder: '필수 입력 필드' }}
      />
    </Form>
  ),
}

export const WithRows: Story = {
  render: () => (
    <Form name="textarea-form">
      <Form.TextArea
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'textarea', label: '여러 줄' }}
        childrenProps={{ placeholder: '텍스트를 입력하세요.', rows: 4 }}
      />
    </Form>
  ),
}

export const WithShowCount: Story = {
  render: () => (
    <Form name="textarea-form">
      <Form.TextArea
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'textarea', label: '글자 수 표시' }}
        childrenProps={{ placeholder: '글자 수가 표시됩니다.', showCount: true }}
      />
    </Form>
  ),
}

export const WithMaxLength: Story = {
  render: () => (
    <Form name="textarea-form">
      <Form.TextArea
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'textarea', label: '최대 길이' }}
        childrenProps={{ placeholder: '최대 100자까지 입력 가능', maxLength: 100, showCount: true }}
      />
    </Form>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Form name="textarea-form" initialValues={{ textarea: '기본 텍스트입니다.' }}>
      <Form.TextArea
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'textarea', label: '기본 값' }}
        childrenProps={{ placeholder: '텍스트를 입력하세요.', rows: 4 }}
      />
    </Form>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Form name="textarea-form" initialValues={{ textarea: '비활성화된 텍스트' }}>
      <Form.TextArea
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'textarea', label: '비활성화' }}
        childrenProps={{ disabled: true, placeholder: '입력할 수 없습니다', rows: 4 }}
      />
    </Form>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <Form name="textarea-form">
      <Form.TextArea
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'textarea',
          label: '유효성 검사',
          rules: [
            { required: true, message: '입력해주세요.' },
            { min: 10, message: '최소 10자 이상 입력하세요.' },
          ],
        }}
        childrenProps={{ placeholder: '최소 10자 이상 입력하세요', rows: 4, showCount: true }}
      />
    </Form>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Form name="textarea-form">
      <Form.TextArea
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{ name: 'textarea', label: '전체 너비' }}
        childrenProps={{ placeholder: '전체 너비 텍스트 영역', rows: 4 }}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  render: () => (
    <Form name="textarea-form">
      <Form.TextArea
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'textarea',
          label: '도움말',
          help: '이 필드에 대한 도움말입니다.',
        }}
        childrenProps={{ placeholder: '텍스트를 입력하세요.', rows: 4 }}
      />
    </Form>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [form] = Form.useForm()

    return (
      <Form name="textarea-form" form={form}>
        <Form.TextArea
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'textarea', label: '상호작용' }}
          childrenProps={{ placeholder: '입력하고 제출해보세요', rows: 4 }}
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

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import Form from '@/shared/components/du-admin-ui/Form'

// 스토리북에서 컴포넌트 이름을 "Form.Radio"로 표시
if (Form.Radio) {
  (Form.Radio as any).displayName = 'Form.Radio'
}

const meta = {
  title: 'Common/Form/Form.Radio',
  component: Form.Radio,
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
      description: 'RadioGroup에 전달할 props (defaultValue 등)',
    },
    items: {
      control: 'object',
      description: 'Radio 아이템 배열',
    },
  },
} satisfies Meta<typeof Form.Radio>

export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  { text: '라디오 1', value: 'radio1' },
  { text: '라디오 2', value: 'radio2' },
  { text: '라디오 3', value: 'radio3' },
]

export const Default: Story = {
  render: () => (
    <Form name="radio-form">
      <Form.Radio
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'radio', label: '라디오' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const Required: Story = {
  render: () => (
    <Form name="radio-form">
      <Form.Radio
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'radio',
          label: '필수 선택',
          rules: [{ required: true, message: '선택해주세요.' }],
        }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Form name="radio-form" initialValues={{ radio: 'radio1' }}>
      <Form.Radio
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'radio', label: '기본 값' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Form name="radio-form" initialValues={{ radio: 'radio1' }}>
      <Form.Radio
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'radio', label: '비활성화' }}
        childrenProps={{ disabled: true }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <Form name="radio-form">
      <Form.Radio
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'radio',
          label: '유효성 검사',
          rules: [{ required: true, message: '선택해주세요.' }],
        }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  render: () => (
    <Form name="radio-form">
      <Form.Radio
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'radio',
          label: '도움말',
          help: '이 필드에 대한 도움말입니다.',
        }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [form] = Form.useForm()

    return (
      <Form name="radio-form" form={form}>
        <Form.Radio
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'radio', label: '상호작용' }}
          items={defaultItems}
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

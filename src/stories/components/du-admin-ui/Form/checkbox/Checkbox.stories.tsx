import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import Form from '@/shared/components/du-admin-ui/Form'

// 스토리북에서 컴포넌트 이름을 "Form.Checkbox"로 표시
if (Form.Checkbox) {
  (Form.Checkbox as any).displayName = 'Form.Checkbox'
}

const meta = {
  title: 'Common/Form/Form.Checkbox',
  component: Form.Checkbox,
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
      description: 'CheckboxGroup에 전달할 props (defaultValue 등)',
    },
    items: {
      control: 'object',
      description: 'Checkbox 아이템 배열',
    },
    span: {
      control: 'number',
      description: 'Checkbox 아이템 간격',
    },
  },
} satisfies Meta<typeof Form.Checkbox>

export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  { label: '체크박스 1', value: 1 },
  { label: '체크박스 2', value: 2 },
  { label: '체크박스 3', value: 3 },
]

export const Default: Story = {
  render: () => (
    <Form name="checkbox-form">
      <Form.Checkbox
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'checkbox', label: '체크박스' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const Required: Story = {
  render: () => (
    <Form name="checkbox-form">
      <Form.Checkbox
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'checkbox',
          label: '필수 선택',
          rules: [{ required: true, message: '최소 하나 이상 선택해주세요.' }],
        }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Form name="checkbox-form" initialValues={{ checkbox: [1, 2] }}>
      <Form.Checkbox
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'checkbox', label: '기본 값' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithSpan: Story = {
  render: () => (
    <Form name="checkbox-form">
      <Form.Checkbox
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{ name: 'checkbox', label: '간격 설정' }}
        childrenProps={{ style: {width: '100%'} }}
        items={defaultItems}
        span={8}
      />
    </Form>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Form name="checkbox-form" initialValues={{ checkbox: [1] }}>
      <Form.Checkbox
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'checkbox', label: '비활성화' }}
        childrenProps={{ disabled: true }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <Form name="checkbox-form">
      <Form.Checkbox
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'checkbox',
          label: '유효성 검사',
          rules: [
            { required: true, message: '선택해주세요.' },
            {
              validator: (_, value) => {
                if (value && value.length >= 2) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('최소 2개 이상 선택해주세요.'))
              },
            },
          ],
        }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  render: () => (
    <Form name="checkbox-form">
      <Form.Checkbox
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'checkbox',
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
      <Form name="checkbox-form" form={form}>
        <Form.Checkbox
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'checkbox', label: '상호작용' }}
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

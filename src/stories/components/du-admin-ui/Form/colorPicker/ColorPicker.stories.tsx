import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import Form from '@/shared/components/du-admin-ui/Form'

// 스토리북에서 컴포넌트 이름을 "Form.ColorPicker"로 표시
if (Form.ColorPicker) {
  (Form.ColorPicker as any).displayName = 'Form.ColorPicker'
}

const meta = {
  title: 'Common/Form/Form.ColorPicker',
  component: Form.ColorPicker,
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
      description: 'Input에 전달할 props (placeholder 등)',
    },
  },
} satisfies Meta<typeof Form.ColorPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Form name="colorpicker-form">
      <Form.ColorPicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'color', label: '색상' }}
        childrenProps={{ placeholder: '색상을 선택하세요.' }}
      />
    </Form>
  ),
}

export const Required: Story = {
  render: () => (
    <Form name="colorpicker-form">
      <Form.ColorPicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'color',
          label: '필수 색상',
          rules: [{ required: true, message: '색상을 선택해주세요.' }],
        }}
        childrenProps={{ placeholder: '색상을 선택하세요.' }}
      />
    </Form>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Form name="colorpicker-form" initialValues={{ color: '#1890ff' }}>
      <Form.ColorPicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'color', label: '기본 값' }}
        childrenProps={{ placeholder: '색상을 선택하세요.' }}
      />
    </Form>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Form name="colorpicker-form" initialValues={{ color: '#1890ff' }}>
      <Form.ColorPicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'color', label: '비활성화' }}
        childrenProps={{ disabled: true, placeholder: '색상을 선택할 수 없습니다' }}
      />
    </Form>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <Form name="colorpicker-form">
      <Form.ColorPicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'color',
          label: '유효성 검사',
          rules: [
            { required: true, message: '색상을 선택해주세요.' },
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.resolve()
                }
                // 예: 특정 색상만 허용
                const allowedColors = ['#1890ff', '#52c41a', '#faad14', '#f5222d']
                if (!allowedColors.includes(value)) {
                  return Promise.reject(new Error('허용된 색상만 선택할 수 있습니다.'))
                }
                return Promise.resolve()
              },
            },
          ],
        }}
        childrenProps={{ placeholder: '색상을 선택하세요.' }}
      />
    </Form>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Form name="colorpicker-form">
      <Form.ColorPicker
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{ name: 'color', label: '전체 너비' }}
        childrenProps={{ placeholder: '색상을 선택하세요.' }}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  render: () => (
    <Form name="colorpicker-form">
      <Form.ColorPicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'color',
          label: '도움말',
          help: '이 필드에 대한 도움말입니다.',
        }}
        childrenProps={{ placeholder: '색상을 선택하세요.' }}
      />
    </Form>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [form] = Form.useForm()

    return (
      <Form name="colorpicker-form" form={form}>
        <Form.ColorPicker
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'color', label: '상호작용' }}
          childrenProps={{ placeholder: '색상을 선택하고 제출해보세요' }}
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

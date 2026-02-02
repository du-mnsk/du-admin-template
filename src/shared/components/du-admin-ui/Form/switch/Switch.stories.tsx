import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import Form from '@/shared/components/du-admin-ui/Form'

// 스토리북에서 컴포넌트 이름을 "Form.Switch"로 표시
if (Form.Switch) {
  (Form.Switch as any).displayName = 'Form.Switch'
}

const meta = {
  title: 'Common/Form.Switch',
  component: Form.Switch,
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
      description: 'Switch에 전달할 props (defaultChecked, checkedChildren 등)',
    },
  },
} satisfies Meta<typeof Form.Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Form name="switch-form">
      <Form.Switch
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'switch', label: '스위치' }}
      />
    </Form>
  ),
}

export const WithDefaultChecked: Story = {
  render: () => (
    <Form name="switch-form" initialValues={{ switch: true }}>
      <Form.Switch
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'switch', label: '기본 체크' }}
        childrenProps={{ defaultChecked: true }}
      />
    </Form>
  ),
}

export const WithBothChildren: Story = {
  render: () => (
    <Form name="switch-form">
      <Form.Switch
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'switch', label: '양쪽 텍스트' }}
        childrenProps={{ checkedChildren: 'ON', unCheckedChildren: 'OFF' }}
      />
    </Form>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Form name="switch-form" initialValues={{ switch: true }}>
      <Form.Switch
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'switch', label: '비활성화' }}
        childrenProps={{ disabled: true, defaultChecked: true }}
      />
    </Form>
  ),
}

export const Loading: Story = {
  render: () => (
    <Form name="switch-form" initialValues={{ switch: true }}>
      <Form.Switch
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'switch', label: '로딩' }}
        childrenProps={{ loading: true, defaultChecked: true }}
      />
    </Form>
  ),
}

export const Small: Story = {
  render: () => (
    <Form name="switch-form">
      <Form.Switch
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'switch', label: '작은 크기' }}
        childrenProps={{ size: 'small', checkedChildren: 'ON', unCheckedChildren: 'OFF' }}
      />
    </Form>
  ),
}

export const Required: Story = {
  render: () => (
    <Form name="switch-form">
      <Form.Switch
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'switch',
          label: '필수',
          rules: [{ required: true, message: '스위치를 켜주세요.' }],
        }}
        childrenProps={{ checkedChildren: 'ON', unCheckedChildren: 'OFF' }}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  render: () => (
    <Form name="switch-form">
      <Form.Switch
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'switch',
          label: '도움말',
          help: '이 필드에 대한 도움말입니다.',
        }}
        childrenProps={{ checkedChildren: 'ON', unCheckedChildren: 'OFF' }}
      />
    </Form>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [form] = Form.useForm()

    return (
      <Form name="switch-form" form={form}>
        <Form.Switch
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'switch', label: '상호작용' }}
          childrenProps={{ checkedChildren: 'ON', unCheckedChildren: 'OFF' }}
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

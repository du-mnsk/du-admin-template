import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'
import dayjs from 'dayjs'

import Form from '@/shared/components/du-admin-ui/Form'

// 스토리북에서 컴포넌트 이름을 "Form.DatePicker"로 표시
if (Form.DatePicker) {
  (Form.DatePicker as any).displayName = 'Form.DatePicker'
}

const meta = {
  title: 'Common/Form/Form.DatePicker',
  component: Form.DatePicker,
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
      description: 'DatePicker에 전달할 props (format, showTime 등)',
    },
  },
} satisfies Meta<typeof Form.DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Form name="datepicker-form">
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'date', label: '날짜' }}
        childrenProps={{ format: 'YYYY-MM-DD HH:mm' }}
      />
    </Form>
  ),
}

export const Required: Story = {
  render: () => (
    <Form name="datepicker-form">
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'date',
          label: '필수 날짜',
          rules: [{ required: true, message: '날짜를 선택해주세요.' }],
        }}
        childrenProps={{ format: 'YYYY-MM-DD HH:mm' }}
      />
    </Form>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Form name="datepicker-form" initialValues={{ date: dayjs() }}>
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'date', label: '기본 값' }}
        childrenProps={{ format: 'YYYY-MM-DD HH:mm' }}
      />
    </Form>
  ),
}

export const DateOnly: Story = {
  render: () => (
    <Form name="datepicker-form">
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'date', label: '날짜만' }}
        childrenProps={{ format: 'YYYY-MM-DD', picker: 'date' }}
      />
    </Form>
  ),
}

export const WithTime: Story = {
  render: () => (
    <Form name="datepicker-form">
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'date', label: '날짜 및 시간' }}
        childrenProps={{ format: 'YYYY-MM-DD HH:mm', showTime: true }}
      />
    </Form>
  ),
}

export const MonthPicker: Story = {
  render: () => (
    <Form name="datepicker-form">
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'date', label: '월' }}
        childrenProps={{ format: 'YYYY-MM', picker: 'month' }}
      />
    </Form>
  ),
}

export const YearPicker: Story = {
  render: () => (
    <Form name="datepicker-form">
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'date', label: '년' }}
        childrenProps={{ format: 'YYYY', picker: 'year' }}
      />
    </Form>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Form name="datepicker-form" initialValues={{ date: dayjs() }}>
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'date', label: '비활성화' }}
        childrenProps={{ disabled: true, format: 'YYYY-MM-DD HH:mm' }}
      />
    </Form>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <Form name="datepicker-form">
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'date',
          label: '유효성 검사',
          rules: [
            { required: true, message: '날짜를 선택해주세요.' },
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.resolve()
                }
                if (value.isAfter(dayjs())) {
                  return Promise.reject(new Error('미래 날짜는 선택할 수 없습니다.'))
                }
                return Promise.resolve()
              },
            },
          ],
        }}
        childrenProps={{ format: 'YYYY-MM-DD HH:mm' }}
      />
    </Form>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Form name="datepicker-form">
      <Form.DatePicker
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{ name: 'date', label: '전체 너비' }}
        childrenProps={{ format: 'YYYY-MM-DD HH:mm' }}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  render: () => (
    <Form name="datepicker-form">
      <Form.DatePicker
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'date',
          label: '도움말',
          help: '이 필드에 대한 도움말입니다.',
        }}
        childrenProps={{ format: 'YYYY-MM-DD HH:mm' }}
      />
    </Form>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [form] = Form.useForm()

    return (
      <Form name="datepicker-form" form={form}>
        <Form.DatePicker
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'date', label: '상호작용' }}
          childrenProps={{ format: 'YYYY-MM-DD HH:mm' }}
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

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import Form from '@/shared/components/du-admin-ui/Form'

// 스토리북에서 컴포넌트 이름을 "Form.Select"로 표시
if (Form.Select) {
  (Form.Select as any).displayName = 'Form.Select'
}

const meta = {
  title: 'Common/Form/Form.Select',
  component: Form.Select,
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
      description: 'Select에 전달할 props (placeholder, allowClear 등)',
    },
    items: {
      control: 'object',
      description: 'Select 옵션 목록',
    },
  },
} satisfies Meta<typeof Form.Select>

export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  { text: '옵션 1', value: 'option1' },
  { text: '옵션 2', value: 'option2' },
  { text: '옵션 3', value: 'option3' },
]

export const Default: Story = {
  render: () => (
    <Form name="select-form">
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'select', label: '선택' }}
        childrenProps={{ placeholder: '선택하세요.' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const Required: Story = {
  render: () => (
    <Form name="select-form">
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'select',
          label: '필수 선택',
          rules: [{ required: true, message: '선택해주세요.' }],
        }}
        childrenProps={{ placeholder: '필수 선택 필드' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Form name="select-form" initialValues={{ select: 'option1' }}>
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'select', label: '기본 값' }}
        childrenProps={{ placeholder: '선택하세요.' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const AllowClear: Story = {
  render: () => (
    <Form name="select-form" initialValues={{ select: 'option1' }}>
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'select', label: '초기화 가능' }}
        childrenProps={{ placeholder: '선택하세요.', allowClear: true }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Form name="select-form">
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'select', label: '다중 선택' }}
        childrenProps={{ placeholder: '여러 개 선택하세요.', mode: 'multiple' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithDisabledItems: Story = {
  render: () => (
    <Form name="select-form">
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'select', label: '비활성화 옵션' }}
        childrenProps={{ placeholder: '선택하세요.' }}
        items={[
          { text: '옵션 1', value: 'option1' },
          { text: '옵션 2 (비활성화)', value: 'option2', disabled: true },
          { text: '옵션 3', value: 'option3' },
        ]}
      />
    </Form>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Form name="select-form" initialValues={{ select: 'option1' }}>
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'select', label: '비활성화' }}
        childrenProps={{ disabled: true, placeholder: '선택할 수 없습니다' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithSearch: Story = {
  render: () => {
    const manyItems = Array.from({ length: 10 }, (_, i) => ({
      text: `옵션 ${i + 1}`,
      value: `option${i + 1}`,
    }))

    return (
      <Form name="select-form">
        <Form.Select
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'select', label: '검색 가능' }}
          childrenProps={{ placeholder: '검색하여 선택하세요.', showSearch: true }}
          items={manyItems}
        />
      </Form>
    )
  },
}

export const WithValidation: Story = {
  render: () => (
    <Form name="select-form">
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'select',
          label: '유효성 검사',
          rules: [{ required: true, message: '선택해주세요.' }],
        }}
        childrenProps={{ placeholder: '선택하세요.' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Form name="select-form">
      <Form.Select
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{ name: 'select', label: '전체 너비' }}
        childrenProps={{ placeholder: '전체 너비 선택 필드' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  render: () => (
    <Form name="select-form">
      <Form.Select
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'select',
          label: '도움말',
          help: '이 필드에 대한 도움말입니다.',
        }}
        childrenProps={{ placeholder: '선택하세요.' }}
        items={defaultItems}
      />
    </Form>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [form] = Form.useForm()

    return (
      <Form name="select-form" form={form}>
        <Form.Select
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'select', label: '상호작용' }}
          childrenProps={{ placeholder: '선택하고 제출해보세요' }}
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

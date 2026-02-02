import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from 'antd'

import Form from '@/shared/components/du-admin-ui/Form'

// 스토리북에서 컴포넌트 이름을 "Form.Editor"로 표시
if (Form.Editor) {
  (Form.Editor as any).displayName = 'Form.Editor'
}

const meta = {
  title: 'Common/Form.Editor',
  component: Form.Editor,
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
  },
} satisfies Meta<typeof Form.Editor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Form name="editor-form">
      <Form.Editor
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{ name: 'editor', label: '에디터' }}
      />
    </Form>
  ),
}

export const Required: Story = {
  render: () => (
    <Form name="editor-form">
      <Form.Editor
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{
          name: 'editor',
          label: '필수 입력',
          rules: [{ required: true, message: '내용을 입력해주세요.' }],
        }}
      />
    </Form>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Form name="editor-form" initialValues={{ editor: '<p>기본 내용입니다.</p>' }}>
      <Form.Editor
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{ name: 'editor', label: '기본 값' }}
      />
    </Form>
  ),
}

export const WithValidation: Story = {
  render: () => (
    <Form name="editor-form">
      <Form.Editor
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{
          name: 'editor',
          label: '유효성 검사',
          rules: [
            { required: true, message: '내용을 입력해주세요.' },
            {
              validator: (_, value) => {
                if (!value) {
                  return Promise.resolve()
                }
                // HTML 태그 제거 후 길이 체크
                const textContent = value.replace(/<[^>]*>/g, '')
                if (textContent.length < 10) {
                  return Promise.reject(new Error('최소 10자 이상 입력해주세요.'))
                }
                return Promise.resolve()
              },
            },
          ],
        }}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  render: () => (
    <Form name="editor-form">
      <Form.Editor
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{
          name: 'editor',
          label: '도움말',
          help: '이 필드에 대한 도움말입니다.',
        }}
      />
    </Form>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [form] = Form.useForm()

    return (
      <Form name="editor-form" form={form}>
        <Form.Editor
          colSetProps={{ defaultColSize: 24 }}
          formItemProps={{ name: 'editor', label: '상호작용' }}
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

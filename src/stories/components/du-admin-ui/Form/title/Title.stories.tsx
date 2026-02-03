import type { Meta, StoryObj } from '@storybook/react-vite'

import Form from '@/shared/components/du-admin-ui/Form'
import type { FormTitleProps } from '@/shared/components/du-admin-ui/Form/title'

// 스토리북에서 컴포넌트 이름을 "Form.Title"로 표시
if (Form.Title) {
  (Form.Title as any).displayName = 'Form.Title'
}

const meta = {
  title: 'Common/Form/Form.Title',
  component: Form.Title,
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
      description: 'Form.Item에 전달할 props',
    },
    children: {
      control: 'text',
      description: '제목 텍스트 또는 ReactNode',
    },
  },
} satisfies Meta<typeof Form.Title>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    colSetProps: { defaultColSize: 24 },
    formItemProps: { name: 'title' },
    children: '기본 제목',
  },
  render: (args: FormTitleProps) => (
    <Form name="title-form">
      <Form.Title {...args} />
    </Form>
  ),
}
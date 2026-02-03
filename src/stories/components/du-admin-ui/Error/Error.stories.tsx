import { MemoryRouter } from 'react-router-dom'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Error } from '@/shared/components/du-admin-ui/Error'

const meta = {
  title: 'Common/Error',
  component: Error,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    img: {
      control: 'text',
      description: '에러 이미지 URL',
    },
    msg: {
      control: 'text',
      description: '에러 메시지',
    },
  },
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/071/772/027/small/error-404-not-found-3d-icon-png.png',
    msg: '페이지를 찾을 수 없습니다.',
  },
}
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImagePreviewButton } from '@/shared/components/du-admin-ui/ImagePreviewButton'

const meta = {
  title: 'Common/ImagePreviewButton',
  component: ImagePreviewButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: '미리보기할 이미지 URL',
    },
  },
} satisfies Meta<typeof ImagePreviewButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    image: 'https://in.bemypet.kr/app/uploads/sites/14/2024/03/AdobeStock_270164041-scaled.jpeg',
  },
}

export const WithoutImage: Story = {
  args: {
    image: undefined,
  },
}

export const EmptyString: Story = {
  args: {
    image: '',
  },
}

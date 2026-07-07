import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImagePreviewButton } from '@/shared/components/du-admin-ui/ImagePreviewButton'

const SAMPLE_IMAGE =
  'https://in.bemypet.kr/app/uploads/sites/14/2024/03/AdobeStock_270164041-scaled.jpeg'

const meta = {
  title: 'Common/ImagePreviewButton',
  component: ImagePreviewButton,
  parameters: {
    layout: 'padded',
    controls: {
      include: ['image', 'label'],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: '미리보기할 이미지 URL',
    },
    label: {
      control: 'text',
      description: '링크 텍스트 (미입력 시 "보기")',
    },
  },
} satisfies Meta<typeof ImagePreviewButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    image: SAMPLE_IMAGE,
  },
}

export const WithCustomLabel: Story = {
  args: {
    image: SAMPLE_IMAGE,
    label: '이미지 확인',
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

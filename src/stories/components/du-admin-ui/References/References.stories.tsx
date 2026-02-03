import type { Meta, StoryObj } from '@storybook/react-vite'

import { References } from '@/shared/components/du-admin-ui/References'

const meta = {
  title: 'Common/References',
  component: References,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    year: {
      control: 'number',
      description: '저작권 연도',
    },
  },
} satisfies Meta<typeof References>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    year: new Date().getFullYear(),
  },
}

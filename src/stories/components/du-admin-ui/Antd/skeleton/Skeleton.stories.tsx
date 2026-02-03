import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Skeleton"로 표시
if (Antd.Skeleton) {
  Antd.Skeleton.displayName = 'Antd.Skeleton'
}

const meta = {
  title: 'Common/Antd/Antd.Skeleton',
  component: Antd.Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: '애니메이션 활성화 여부',
    },
    avatar: {
      control: 'boolean',
      description: '아바타 표시 여부 (boolean | SkeletonAvatarProps)',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태 여부',
    },
    paragraph: {
      control: 'boolean',
      description: '단락 표시 여부 (boolean | SkeletonParagraphProps)',
    },
    round: {
      control: 'boolean',
      description: '둥근 모서리 여부',
    },
    title: {
      control: 'boolean',
      description: '제목 표시 여부 (boolean | SkeletonTitleProps)',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
  },
} satisfies Meta<typeof Antd.Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    active: true,
    title: true,
    paragraph: true,
    style: {width: '100px', height: '100px'}
  },
}

export const WithAvatar: Story = {
  args: {
    avatar: true,
    title: true,
    paragraph: true,
    style: {width: '200px', height: '100px'}
  },
}

export const Round: Story = {
  args: {
    round: true,
    title: true,
    paragraph: true,
    style: {width: '100px', height: '100px'}
  },
}

export const CustomParagraph: Story = {
  args: {
    title: true,
    paragraph: {
      rows: 4,
      width: ['100%', '80%', '60%'],
    },
    style: {width: '200px', height: '100px'}
  },
}

export const CustomAvatar: Story = {
  args: {
    avatar: {
      size: 'large',
      shape: 'square',
    },
    title: true,
    paragraph: true,
    style: {width: '200px', height: '100px'}
  },
}

export const CustomTitle: Story = {
  args: {
    title: {
      width: '60%',
    },
    paragraph: true,
    style: {width: '200px', height: '100px'}
  },
}

export const MultipleRows: Story = {
  args: {
    title: true,
    paragraph: {
      rows: 6,
    },
    style: {width: '200px', height: '100px'}
  },
}
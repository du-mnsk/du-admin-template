import type { Meta, StoryObj } from '@storybook/react-vite'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.Carousel"로 표시
if (Antd.Carousel) {
  Antd.Carousel.displayName = 'Antd.Carousel'
}

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const meta = {
  title: 'Common/Antd.Carousel',
  component: Antd.Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    autoplay: {
      control: 'boolean',
      description: '자동 재생 여부',
    },
    autoplaySpeed: {
      control: 'number',
      description: '자동 재생 속도(ms)',
    },
    className: {
      control: 'text',
      description: '클래스명',
    },
    dotPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: '점 위치',
    },
    dots: {
      control: 'boolean',
      description: '점 표시 여부',
    },
    easing: {
      control: 'select',
      options: ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInOutQuad', 'easeInOutQuart', 'easeInOutQuint', 'easeInOutSine', 'easeInOutExpo', 'easeInOutCirc'],
      description: '전환 애니메이션',
    },
    effect: {
      control: 'select',
      options: ['scrollx', 'fade'],
      description: '전환 효과',
    },
    infinite: {
      control: 'boolean',
      description: '무한 루프 여부',
    },
    speed: {
      control: 'number',
      description: '전환 속도(ms)',
    },
    vertical: {
      control: 'boolean',
      description: '세로 방향 여부',
    },
    afterChange: {
      action: 'after-changed',
      description: '변경 후 이벤트 핸들러',
    },
    beforeChange: {
      action: 'before-changed',
      description: '변경 전 이벤트 핸들러',
    },
    children: {
      description: '슬라이드 아이템들(ReactNode)',
    },
  },
} satisfies Meta<typeof Antd.Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Antd.Carousel {...args}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Antd.Carousel>
    </div>
  ),
}

export const Autoplay: Story = {
  args: {
    autoplay: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Antd.Carousel {...args}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Antd.Carousel>
    </div>
  ),
}

export const WithoutDots: Story = {
  args: {
    dots: false,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Antd.Carousel {...args}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Antd.Carousel>
    </div>
  ),
}

export const FadeEffect: Story = {
  args: {
    effect: 'fade',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Antd.Carousel {...args}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Antd.Carousel>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: (args) => (
    <div style={{ width: '400px', height: '200px' }}>
      <Antd.Carousel {...args}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Antd.Carousel>
    </div>
  ),
}

export const DotPositionTop: Story = {
  args: {
    dotPosition: 'top',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Antd.Carousel {...args}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Antd.Carousel>
    </div>
  ),
}

export const DotPositionRight: Story = {
  args: {
    dotPosition: 'right',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Antd.Carousel {...args}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Antd.Carousel>
    </div>
  ),
}

export const CustomSpeed: Story = {
  args: {
    speed: 500,
    autoplay: true,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Antd.Carousel {...args}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Antd.Carousel>
    </div>
  ),
}

export const WithImages: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Antd.Carousel {...args}>
        <div>
          <img
            src="https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-hunt_23-2149167099.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Slide 1"
            style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/adorable-domestic-kitty-with-copy-space_23-2149167137.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Slide 2"
            style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/cute-grey-cat_1339-7477.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Slide 3"
            style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img
            src="https://images.mypetlife.co.kr/content/uploads/2022/06/20150426/cat-christmas-lights-cute-ginger-cat-lying-near-window-play-with-lights_8353-5956.jpg"
            alt="Slide 4"
            style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          />
        </div>
      </Antd.Carousel>
    </div>
  ),
}

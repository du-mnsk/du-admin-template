import type { Meta, StoryObj } from '@storybook/react-vite'

import Chart from '@/shared/components/du-admin-ui/Chart'

const meta = {
  title: 'Common/Chart',
  component: Chart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    option: {
      control: 'object',
      description: 'ECharts 옵션 객체',
    },
    height: {
      control: 'number',
      description: '차트 높이 (픽셀 또는 "auto")',
    },
  },
} satisfies Meta<typeof Chart>

export default meta
type Story = StoryObj<typeof meta>

const defaultOption = {
  title: {
    text: '샘플 차트',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
    },
  ],
}

export const Default: Story = {
  args: {
    option: defaultOption,
    height: 400,
  },
}

export const LineChart: Story = {
  args: {
    option: {
      title: {
        text: '라인 차트',
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330],
          type: 'line',
        },
      ],
    },
    height: 400,
  },
}

export const PieChart: Story = {
  args: {
    option: {
      title: {
        text: '파이 차트',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    },
    height: 400,
  },
}

export const LoadingChart: Story = {
  args: {
    height: 400,
  },
}

export const AutoHeight: Story = {
  args: {
    option: defaultOption,
    height: 'auto',
  },
}

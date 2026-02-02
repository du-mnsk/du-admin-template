import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio } from 'antd'

import Panel from '@/shared/components/du-admin-ui/Panel'

const meta = {
  title: 'Common/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '패널 제목',
    },
    fileTitle: {
      control: 'text',
      description: '다운로드 파일명',
    },
    showExtraDownloadBtn: {
      control: 'boolean',
      description: '추가 다운로드 버튼 표시 여부',
    },
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

const sampleTable = (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#f0f0f0' }}>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>이름</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>나이</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>직업</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>홍길동</td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>30</td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>개발자</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>김철수</td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>25</td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>디자이너</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>이영희</td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>28</td>
        <td style={{ border: '1px solid #ddd', padding: '8px' }}>기획자</td>
      </tr>
    </tbody>
  </table>
)

export const Default: Story = {
  render: () => <Panel title="기본 패널">{sampleTable}</Panel>,
}

export const WithRadio: Story = {
  render: () => (
    <Panel
      title="라디오 버튼 포함"
      radio={
        <Radio.Group defaultValue="option1" style={{ marginLeft: 16 }}>
          <Radio.Button value="option1">옵션 1</Radio.Button>
          <Radio.Button value="option2">옵션 2</Radio.Button>
        </Radio.Group>
      }
    >
      {sampleTable}
    </Panel>
  ),
}

export const WithExtraDownloadBtn: Story = {
  render: () => (
    <Panel
      title="추가 다운로드 버튼"
      showExtraDownloadBtn={true}
      callbackFn={async () => {
        console.log('추가 다운로드 버튼 클릭')
      }}
    >
      {sampleTable}
    </Panel>
  ),
}

export const CustomFileTitle: Story = {
  render: () => (
    <Panel title="커스텀 파일명" fileTitle="커스텀_파일명">
      {sampleTable}
    </Panel>
  ),
}

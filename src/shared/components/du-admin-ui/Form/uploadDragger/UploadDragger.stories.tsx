import type { Meta, StoryObj } from '@storybook/react-vite'

import Form from '@/shared/components/du-admin-ui/Form'
import type { FormUploadDraggerProps } from '@/shared/components/du-admin-ui/Form/uploadDragger'

// 스토리북에서 컴포넌트 이름을 "Form.UploadDragger"로 표시
if (Form.UploadDragger) {
  (Form.UploadDragger as any).displayName = 'Form.UploadDragger'
}

const meta = {
  title: 'Common/Form.UploadDragger',
  component: Form.UploadDragger,
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
    name: {
      control: 'text',
      description: '필드 이름',
    },
    label: {
      control: 'text',
      description: '라벨 텍스트',
    },
    required: {
      control: 'boolean',
      description: '필수 여부',
    },
    rules: {
      control: 'object',
      description: '유효성 검사 규칙',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    description: {
      control: 'text',
      description: '설명 텍스트',
    },
    maxWidth: {
      control: 'text',
      description: '최대 너비',
    },
    maxHeight: {
      control: 'text',
      description: '최대 높이',
    },
    allowType: {
      control: 'select',
      options: ['image/png', 'image/jpeg'],
      description: '허용 파일 타입',
    },
    imgPath: {
      control: 'text',
      description: '이미지 경로',
    },
    previewImage: {
      control: 'text',
      description: '미리보기 이미지 URL',
    },
  },
} satisfies Meta<typeof Form.UploadDragger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imgPath: '/upload',
    previewImage: '',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'upload', label: '이미지 업로드' }}
        name="upload"
        label="이미지를 드래그하거나 클릭하여 업로드하세요"
        description="PNG, JPG 파일만 업로드 가능합니다"
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

export const Required: Story = {
  args: {
    imgPath: '/upload',
    previewImage: '',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'upload',
          label: '필수 업로드',
          rules: [{ required: true, message: '이미지를 업로드해주세요.' }],
        }}
        name="upload"
        label="이미지를 업로드하세요"
        description="PNG, JPG 파일만 업로드 가능합니다"
        required
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

export const WithPreview: Story = {
  args: {
    imgPath: '/upload',
    previewImage: 'https://via.placeholder.com/400x300',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'upload', label: '미리보기' }}
        name="upload"
        label="이미지를 업로드하세요"
        description="PNG, JPG 파일만 업로드 가능합니다"
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

export const WithMaxSize: Story = {
  args: {
    imgPath: '/upload',
    previewImage: '',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'upload', label: '최대 크기 제한' }}
        name="upload"
        label="이미지를 업로드하세요"
        description="PNG, JPG 파일만 업로드 가능합니다"
        maxWidth="400px"
        maxHeight="300px"
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

export const Disabled: Story = {
  args: {
    imgPath: '/upload',
    previewImage: '',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'upload', label: '비활성화' }}
        name="upload"
        label="이미지를 업로드하세요"
        description="PNG, JPG 파일만 업로드 가능합니다"
        disabled
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

export const WithValidation: Story = {
  args: {
    imgPath: '/upload',
    previewImage: '',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'upload',
          label: '유효성 검사',
          rules: [{ required: true, message: '이미지를 업로드해주세요.' }],
        }}
        name="upload"
        label="이미지를 업로드하세요"
        description="PNG, JPG 파일만 업로드 가능합니다"
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

export const FullWidth: Story = {
  args: {
    imgPath: '/upload',
    previewImage: '',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 24 }}
        formItemProps={{ name: 'upload', label: '전체 너비' }}
        name="upload"
        label="이미지를 업로드하세요"
        description="PNG, JPG 파일만 업로드 가능합니다"
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

export const WithHelp: Story = {
  args: {
    imgPath: '/upload',
    previewImage: '',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{
          name: 'upload',
          label: '도움말',
          help: '이 필드에 대한 도움말입니다.',
        }}
        name="upload"
        label="이미지를 업로드하세요"
        description="PNG, JPG 파일만 업로드 가능합니다"
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

export const PNGOnly: Story = {
  args: {
    imgPath: '/upload',
    previewImage: '',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'upload', label: 'PNG만 허용' }}
        name="upload"
        label="PNG 이미지를 업로드하세요"
        description="PNG 파일만 업로드 가능합니다"
        allowType="image/png"
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

export const JPEGOnly: Story = {
  args: {
    imgPath: '/upload',
    previewImage: '',
  },
  render: (args: FormUploadDraggerProps) => (
    <Form name="upload-form">
      <Form.UploadDragger
        colSetProps={{ defaultColSize: 12 }}
        formItemProps={{ name: 'upload', label: 'JPEG만 허용' }}
        name="upload"
        label="JPEG 이미지를 업로드하세요"
        description="JPEG 파일만 업로드 가능합니다"
        allowType="image/jpeg"
        imgPath={args.imgPath}
        previewImage={args.previewImage}
      />
    </Form>
  ),
}

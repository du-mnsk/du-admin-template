import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { UploadRequestOption } from 'rc-upload/lib/interface'

import Form from '@/shared/components/du-admin-ui/Form'
import type { FormUploadCertFileProps } from '@/shared/components/du-admin-ui/Form/uploadCertFile'

// 스토리북에서 컴포넌트 이름을 "Form.UploadCertFile"로 표시
if (Form.UploadCertFile) {
  (Form.UploadCertFile as any).displayName = 'Form.UploadCertFile'
}

const meta = {
  title: 'Common/Form.UploadCertFile',
  component: Form.UploadCertFile,
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
    allowTypes: {
      control: 'object',
      description: '허용 파일 타입 배열',
    },
    downloadURL: {
      control: 'text',
      description: '다운로드 URL',
    },
  },
} satisfies Meta<typeof Form.UploadCertFile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imgPath: '/upload',
    uploadRequest: undefined,
    setUploadRequest: () => {},
  },
  render: (args: FormUploadCertFileProps) => {
    const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

    return (
      <Form name="upload-form">
        <Form.UploadCertFile
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'upload', label: '인증서 파일 업로드' }}
          name="upload"
          label="인증서 파일을 업로드하세요"
          description="PNG, JPG, PDF 파일만 업로드 가능합니다"
          allowTypes={['image/png', 'image/jpeg', 'application/pdf']}
          downloadURL=""
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
          imgPath={args.imgPath}
        />
      </Form>
    )
  },
}

export const Required: Story = {
  args: {
    imgPath: '/upload',
    uploadRequest: undefined,
    setUploadRequest: () => {},
  },
  render: (args: FormUploadCertFileProps) => {
    const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

    return (
      <Form name="upload-form">
        <Form.UploadCertFile
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{
            name: 'upload',
            label: '필수 업로드',
            rules: [{ required: true, message: '파일을 업로드해주세요.' }],
          }}
          name="upload"
          label="인증서 파일을 업로드하세요"
          description="PNG, JPG, PDF 파일만 업로드 가능합니다"
          required
          allowTypes={['image/png', 'image/jpeg', 'application/pdf']}
          downloadURL=""
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
          imgPath={args.imgPath}
        />
      </Form>
    )
  },
}

export const WithDownloadURL: Story = {
  args: {
    imgPath: '/upload',
    uploadRequest: undefined,
    setUploadRequest: () => {},
  },
  render: (args: FormUploadCertFileProps) => {
    const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

    return (
      <Form name="upload-form">
        <Form.UploadCertFile
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'upload', label: '다운로드 가능' }}
          name="upload"
          label="인증서 파일을 업로드하세요"
          description="PNG, JPG, PDF 파일만 업로드 가능합니다"
          allowTypes={['image/png', 'image/jpeg', 'application/pdf']}
          downloadURL="https://example.com/certificate.pdf"
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
          imgPath={args.imgPath}
        />
      </Form>
    )
  },
}

export const ImageOnly: Story = {
  args: {
    imgPath: '/upload',
    uploadRequest: undefined,
    setUploadRequest: () => {},
  },
  render: (args: FormUploadCertFileProps) => {
    const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

    return (
      <Form name="upload-form">
        <Form.UploadCertFile
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'upload', label: '이미지만 허용' }}
          name="upload"
          label="이미지 파일을 업로드하세요"
          description="PNG, JPG 파일만 업로드 가능합니다"
          allowTypes={['image/png', 'image/jpeg']}
          downloadURL=""
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
          imgPath={args.imgPath}
        />
      </Form>
    )
  },
}

export const PDFOnly: Story = {
  args: {
    imgPath: '/upload',
    uploadRequest: undefined,
    setUploadRequest: () => {},
  },
  render: (args: FormUploadCertFileProps) => {
    const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

    return (
      <Form name="upload-form">
        <Form.UploadCertFile
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'upload', label: 'PDF만 허용' }}
          name="upload"
          label="PDF 파일을 업로드하세요"
          description="PDF 파일만 업로드 가능합니다"
          allowTypes={['application/pdf']}
          downloadURL=""
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
          imgPath={args.imgPath}
        />
      </Form>
    )
  },
}

export const Disabled: Story = {
  args: {
    imgPath: '/upload',
    uploadRequest: undefined,
    setUploadRequest: () => {},
  },
  render: (args: FormUploadCertFileProps) => {
    const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

    return (
      <Form name="upload-form">
        <Form.UploadCertFile
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{ name: 'upload', label: '비활성화' }}
          name="upload"
          label="인증서 파일을 업로드하세요"
          description="PNG, JPG, PDF 파일만 업로드 가능합니다"
          disabled
          allowTypes={['image/png', 'image/jpeg', 'application/pdf']}
          downloadURL=""
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
          imgPath={args.imgPath}
        />
      </Form>
    )
  },
}

export const WithValidation: Story = {
  args: {
    imgPath: '/upload',
    uploadRequest: undefined,
    setUploadRequest: () => {},
  },
  render: (args: FormUploadCertFileProps) => {
    const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

    return (
      <Form name="upload-form">
        <Form.UploadCertFile
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{
            name: 'upload',
            label: '유효성 검사',
            rules: [{ required: true, message: '파일을 업로드해주세요.' }],
          }}
          name="upload"
          label="인증서 파일을 업로드하세요"
          description="PNG, JPG, PDF 파일만 업로드 가능합니다"
          allowTypes={['image/png', 'image/jpeg', 'application/pdf']}
          downloadURL=""
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
          imgPath={args.imgPath}
        />
      </Form>
    )
  },
}

export const FullWidth: Story = {
  args: {
    imgPath: '/upload',
    uploadRequest: undefined,
    setUploadRequest: () => {},
  },
  render: (args: FormUploadCertFileProps) => {
    const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

    return (
      <Form name="upload-form">
        <Form.UploadCertFile
          colSetProps={{ defaultColSize: 24 }}
          formItemProps={{ name: 'upload', label: '전체 너비' }}
          name="upload"
          label="인증서 파일을 업로드하세요"
          description="PNG, JPG, PDF 파일만 업로드 가능합니다"
          allowTypes={['image/png', 'image/jpeg', 'application/pdf']}
          downloadURL=""
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
          imgPath={args.imgPath}
        />
      </Form>
    )
  },
}

export const WithHelp: Story = {
  args: {
    imgPath: '/upload',
    uploadRequest: undefined,
    setUploadRequest: () => {},
  },
  render: (args: FormUploadCertFileProps) => {
    const [uploadRequest, setUploadRequest] = useState<UploadRequestOption | undefined>()

    return (
      <Form name="upload-form">
        <Form.UploadCertFile
          colSetProps={{ defaultColSize: 12 }}
          formItemProps={{
            name: 'upload',
            label: '도움말',
            help: '이 필드에 대한 도움말입니다.',
          }}
          name="upload"
          label="인증서 파일을 업로드하세요"
          description="PNG, JPG, PDF 파일만 업로드 가능합니다"
          allowTypes={['image/png', 'image/jpeg', 'application/pdf']}
          downloadURL=""
          uploadRequest={uploadRequest}
          setUploadRequest={setUploadRequest}
          imgPath={args.imgPath}
        />
      </Form>
    )
  },
}

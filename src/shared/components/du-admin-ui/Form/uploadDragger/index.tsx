import { useEffect, useState } from 'react'
import { InboxOutlined } from '@ant-design/icons'
import { Col, Image, Row, Typography, Upload, type UploadProps  } from 'antd'
import type { Rule } from 'antd/lib/form'
import type { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'

import { FormFieldWrapper, type FormFieldWrapperProps } from '@/shared/components/du-admin-ui/Form/fieldWrapper'
import {
  DraggerDescription,
  DraggerIconWrapper,
  DraggerImage,
  DraggerTitle,
} from '@/shared/components/du-admin-ui/Form/styled'
import { notificationController } from '@/shared/utils/notificationController'
import { requestRegisterImage } from '@/shared/utils/tempUtils'

/**
 * 이미지 파일을 업로드하는 컴포넌트
 * 이미지를 올리는 즉시 업로드 됨
 */

export type ImageFileAllowedTypes = 'image/png' | 'image/jpeg'

export interface FormUploadDraggerProps extends FormFieldWrapperProps {
  name?: string
  label?: string
  required?: boolean
  rules?: Rule[]
  disabled?: boolean
  description?: string
  maxWidth?: string
  maxHeight?: string
  allowType?: ImageFileAllowedTypes
  imgPath: string
  previewImage?: string | UploadChangeParam<UploadFile<any>>
}

const validateFileType = ({ type }: UploadFile, allowedTypes: ImageFileAllowedTypes) => {
  return type && allowedTypes.includes(type)
}

const FormUploadDragger = (props: FormUploadDraggerProps) => {
  const [previewImage, setPreviewImage] = useState('')
  const [visiblePreview, setVisiblePreview] = useState(false)

  useEffect(() => {
    setPreviewImage(props.previewImage as string)
  }, [props.previewImage])

  const getUploadProps = (id: string) => {
    const uploadProps: UploadProps = {
      id: id,
      name: 'file',
      multiple: false,
      showUploadList: false,
      maxCount: 1,
      customRequest: (request) => requestRegisterImage(request, props.imgPath),
      accept: '.jpg,.jpeg,.png',
      onChange: (info: UploadChangeParam<UploadFile<any>>) => {
        const { status, response } = info.file
        if (status === 'done') {
          setPreviewImage(`${import.meta.env.VITE_IMAGE_SERVER_URL}/${response.Filepath}`)
        } else if (status === 'error') {
          notificationController.error({ message: '파일 업로드 실패' })
        }
      },
      beforeUpload: (file: UploadFile) => {
        return props.allowType && validateFileType(file, props.allowType)
      },
      onRemove: () => {
        setPreviewImage('')
      },
    }

    return uploadProps
  }

  return (
    <>
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        className: 'upload-dragger-item',
        label: (
          <Row justify="space-between">
              <Col>{props.formItemProps?.label}</Col>
              {previewImage && (
                <Col>
                  <Typography.Link onClick={() => setVisiblePreview(true)}>
                    미리보기
                  </Typography.Link>
                </Col>
              )}
            </Row>
        ),
        children: (
          <Upload.Dragger
            className={previewImage ? 'image-set' : ''}
            {...getUploadProps(props?.name as string)}
            style={
              previewImage
                ? { maxWidth: props?.maxWidth, maxHeight: props?.maxHeight, overflowY: 'hidden' }
                : {}
            }
            disabled={props?.disabled}
          >
            {!previewImage ? (
              <>
                <DraggerIconWrapper>
                  <InboxOutlined />
                </DraggerIconWrapper>
                <DraggerTitle>{props.label}</DraggerTitle>
                <DraggerDescription>{props.description}</DraggerDescription>
              </>
            ) : (
              <DraggerImage src={previewImage} />
            )}
          </Upload.Dragger>
        ),
      }}
    />
      {!!previewImage && (
        <Image
          style={{
            display: 'none',
          }}
          src={previewImage}
          preview={{
            visible: visiblePreview,
            scaleStep: 1,
            src: previewImage,
            onVisibleChange: (value) => {
              setVisiblePreview(value)
            },
          }}
        />
      )}
    </>
  )
}
export default FormUploadDragger

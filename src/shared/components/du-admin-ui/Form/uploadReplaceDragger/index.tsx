import React, { useEffect, useState } from 'react'
import { InboxOutlined } from '@ant-design/icons'
import { Col, Image, Row, Typography, Upload, type UploadProps } from 'antd'
import type { UploadFile } from 'antd/lib/upload/interface'
import type { UploadRequestOption } from 'rc-upload/lib/interface'

import { FormFieldWrapper } from '@/shared/components/du-admin-ui/Form/fieldWrapper'
import {
  DraggerDescription,
  DraggerIconWrapper,
  DraggerImage,
  DraggerTitle,
} from '@/shared/components/du-admin-ui/Form/styled'
import { type FormUploadDraggerProps,type ImageFileAllowedTypes} from '@/shared/components/du-admin-ui/Form/uploadDragger'

/**
 * 이미지 파일을 업로드하는 컴포넌트
 * 올리는 즉시 X
 * 폼 제출시 업로드
 */

export interface FormUploadReplaceDraggerProps extends FormUploadDraggerProps {
  imgUploadRequest: UploadRequestOption | undefined
  setImgUploadRequest: React.Dispatch<React.SetStateAction<UploadRequestOption<any> | undefined>>
}

const validateFileType = ({ type }: UploadFile, allowedTypes: ImageFileAllowedTypes) => {
  return type && allowedTypes.includes(type)
}

const FormUploadReplaceDragger = (props: FormUploadReplaceDraggerProps) => {
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
      customRequest: (request) => props.setImgUploadRequest(request),
      accept: '.jpg,.jpeg,.png',
      beforeUpload: (file: UploadFile) => {
        setPreviewImage(window.URL.createObjectURL(file as unknown as Blob))
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
          valuePropName: props.formItemProps?.valuePropName ?? 'fileList',
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
              {...getUploadProps(props.name as string)}
              style={
                previewImage
                  ? { maxWidth: props.maxWidth, maxHeight: props.maxHeight, overflowY: 'hidden' }
                  : {}
              }
              disabled={props.disabled}
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
export default FormUploadReplaceDragger

import React, { useEffect, useState } from 'react'
import { InboxOutlined } from '@ant-design/icons'
import { Col, Row, Space, Typography, Upload, type UploadProps } from 'antd'
import type { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'
import type { UploadRequestOption } from 'rc-upload/lib/interface'

import { FormFieldWrapper } from '@/shared/components/du-admin-ui/Form/fieldWrapper'
import {
  DraggerDescription,
  DraggerIconWrapper,
  DraggerTitle,
} from '@/shared/components/du-admin-ui/Form/styled'
import type { FormUploadDraggerProps } from '@/shared/components/du-admin-ui/Form/uploadDragger'
import { notificationController } from '@/shared/utils/notificationController'
import { downloadFile } from '@/shared/utils/tempUtils'

/**
 * 이전 컴포넌트명:FormUploadTelecomCert
 * 인증서 파일을 업로드하는 컴포넌트(이미지, pdf 파일)
 */

export type TelecomCertAllowedTypes = 'image/png' | 'image/jpeg' | 'application/pdf'

interface FormUploadCertFileProps extends FormUploadDraggerProps {
  allowTypes?: TelecomCertAllowedTypes[]
  downloadURL?: string | UploadChangeParam<UploadFile<any>>
  uploadRequest: UploadRequestOption | undefined
  setUploadRequest: React.Dispatch<React.SetStateAction<UploadRequestOption<any> | undefined>>
}

const validateFileType = ({ type }: UploadFile, allowedTypes: TelecomCertAllowedTypes[]) => {
  return type && allowedTypes.some((v) => v.includes(type))
}

const FormUploadCertFile = (props: FormUploadCertFileProps) => {
  const [downloadURL, setDownloadURL] = useState('')

  useEffect(() => {
    setDownloadURL(props.downloadURL as string)
  }, [props.downloadURL])

  const getUploadProps = (id: string) => {
    const uploadProps: UploadProps = {
      action: undefined,
      id: id,
      name: 'file',
      multiple: false,
      maxCount: 1,
      customRequest: (request) => props.setUploadRequest(request),
      accept: '.png,.jpg,.jpeg,.pdf',
      iconRender: () => {
        return ''
      },
      beforeUpload: (file: UploadFile) => {
        const acceptable = props.allowTypes && validateFileType(file, props.allowTypes)
        if (!acceptable) {
          notificationController.warning({ message: '지원되지 않는 파일형식입니다.' })
        }
        return acceptable || Upload.LIST_IGNORE
      },
      onRemove: () => {
        props.setUploadRequest(undefined)
      },
    }

    return uploadProps
  }

  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        className: 'upload-dragger-item',
        label: (
            <Row justify="space-between">
              <Col>{props.formItemProps?.label}</Col>
              <Col>
                <Space>
                  {downloadURL && (
                    <Typography.Link
                      onClick={() =>
                        downloadFile(downloadURL, {
                          filename: downloadURL.substring(downloadURL.lastIndexOf('/') + 1),
                        })
                      }
                    >
                      다운로드
                    </Typography.Link>
                  )}
                </Space>
              </Col>
            </Row>
        ),
        children: (
              <Upload.Dragger {...getUploadProps(props.name as string)} disabled={props.disabled}>
                {!downloadURL ? (
                  <>
                    <DraggerIconWrapper>
                      <InboxOutlined />
                    </DraggerIconWrapper>
                    <DraggerTitle>{props.label}</DraggerTitle>
                    <DraggerDescription>{props.description}</DraggerDescription>
                  </>
                ) : (
                  <span>{downloadURL.substring(downloadURL.lastIndexOf('/') + 1)}</span>
                )}
              </Upload.Dragger>
        )
      }}
    />
  )
}
export default FormUploadCertFile

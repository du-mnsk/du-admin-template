import React, { type MouseEvent, useState } from 'react'
import { Image, Typography } from 'antd'
import styled from 'styled-components'

import type { AntdButtonProps } from '@/shared/components/du-admin-ui/Antd/button'

export interface ImagePreviewButtonProps extends AntdButtonProps {
  image?: string
}

export const ImagePreviewButton: React.FC<ImagePreviewButtonProps> = (
  props: ImagePreviewButtonProps,
) => {
  const [visiblePreview, setVisiblePreview] = useState<boolean>(false)

  const handleClickImage = (event: MouseEvent<unknown>) => {
    setVisiblePreview(true)
    event.preventDefault()
    event.stopPropagation()
  }

  if (props.image === undefined || props.image === '') {
    return <></>
  }

  return (
    <>
      <Typography.Link onClick={(e) => handleClickImage(e)}>보기</Typography.Link>
      <S.PreviewImage
        src={props.image}
        preview={{
          visible: visiblePreview,
          scaleStep: 1,
          src: props.image,
          onVisibleChange: (value) => {
            setVisiblePreview(value)
          },
        }}
      />
    </>
  )
}

const S = {
  PreviewImage: styled(Image)`
    display: none;
  `,
}
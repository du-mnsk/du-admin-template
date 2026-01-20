import React from 'react'
import type { ModalProps as AntModalProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Modal/Modal.styles'
import { Skeleton } from '@/shared/components/du-admin-ui/antd/Skeleton/Skeleton'

interface ModalSizes {
  small: string
  medium: string
  large: string
}

const modalSizes: ModalSizes = {
  small: '400px',
  medium: '600px',
  large: '800px',
}

interface ModalProps extends AntModalProps {
  size?: 'small' | 'medium' | 'large'
  loading?: boolean | undefined
}

export const Modal: React.FC<ModalProps> = ({ loading, size = 'medium', children, ...props }) => {
  const modalSize = Object.entries(modalSizes).find((sz) => sz[0] === size)?.[1]

  return (
    <S.Modal getContainer={false} width={modalSize} {...props}>
      {loading ? <Skeleton active /> : children}
    </S.Modal>
  )
}

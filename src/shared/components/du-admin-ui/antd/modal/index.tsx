import React from 'react'
import  { Modal, type ModalProps } from 'antd'
import styled from 'styled-components'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

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

interface AntdModalProps extends ModalProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean | undefined
}

export const AntdModal: React.FC<AntdModalProps> = ({ className, isLoading, size = 'medium', children, ...props }) => {

  return (
    <S.Modal
      className={className}
      getContainer={false}
      width={props.width ? props.width : modalSizes[size]}
      {...props}
    >
      {isLoading ? <Antd.Skeleton active /> : children}
    </S.Modal>
  )
}

const S = {
  Modal: styled(Modal)``,
}
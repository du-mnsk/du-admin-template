import React from 'react'
import { Skeleton, type SkeletonProps } from 'antd'
import styled from 'styled-components'

/*export const {
  Button: SkeletonButton,
  Input: SkeletonInput,
  Avatar: SkeletonAvatar,
  Image: SkeletonImage,
} = AntdSkeleton*/

export interface AntdSkeletonProps extends SkeletonProps {
  className?: string
}

export const AntdSkeleton: React.FC<AntdSkeletonProps> = ({className, ...props}) => {
  return <S.Skeleton className={className} {...props} />
}


const S = {
  Skeleton: styled(Skeleton)``
}
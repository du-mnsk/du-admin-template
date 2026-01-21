import React from 'react'
import type { SkeletonProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Skeleton/Skeleton.styles'

/*export const {
  Button: SkeletonButton,
  Input: SkeletonInput,
  Avatar: SkeletonAvatar,
  Image: SkeletonImage,
} = AntdSkeleton*/

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <S.Skeleton {...props} />
}

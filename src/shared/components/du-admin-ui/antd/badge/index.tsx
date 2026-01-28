import React from 'react'
import { Badge, type BadgeProps } from 'antd'
import styled from 'styled-components'

export interface AntdBadgeProps extends BadgeProps {
  className?: string
}

export const AntdBadge: React.FC<AntdBadgeProps> = ({ className, children, ...props }) => (
  <S.Badge className={className} {...props}>
    {children}
  </S.Badge>
)

const S = {
  Badge: styled(Badge)``
}
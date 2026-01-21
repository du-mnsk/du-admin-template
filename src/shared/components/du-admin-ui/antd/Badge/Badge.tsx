import React from 'react'
import type { BadgeProps as AntBadgeProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Badge/Badge.styles'

//TODO: 추후 수정
export type NotificationType = 'info' | 'mention' | 'success' | 'warning' | 'error'

export interface BadgeProps extends AntBadgeProps {
  className?: string
  severity?: NotificationType
}

export const Badge: React.FC<BadgeProps> = ({ className, severity, children, ...props }) => (
  <S.Badge className={className} {...(severity && { severity })} {...props}>
    {children}
  </S.Badge>
)

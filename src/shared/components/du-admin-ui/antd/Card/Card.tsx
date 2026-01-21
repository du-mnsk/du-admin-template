import React from 'react'
import type { CardProps as AntCardProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Card/Card.styles'
import { useResponsive } from '@/shared/hooks/useResponsive'

interface DefaultPadding {
  mobile: [number, number]
  tablet: [number, number]
  desktop: [number, number]
}

const defaultPaddings: DefaultPadding = {
  mobile: [30, 16],
  tablet: [40, 30],
  desktop: [50, 60],
}

export interface CardProps extends AntCardProps {
  className?: string
  padding?: string | number | [number, number]
  autoHeight?: boolean
}

export const Card: React.FC<CardProps> = ({
  className,
  padding,
  size,
  autoHeight = true,
  children,
  ...props
}) => {
  const { isTablet, isDesktop } = useResponsive()

  return (
    <S.Card
      size={size ? size : isTablet ? 'default' : 'small'}
      className={className}
      bordered={false}
      $padding={
        padding || padding === 0
          ? padding
          : (isDesktop && defaultPaddings.desktop) ||
            (isTablet && defaultPaddings.tablet) ||
            defaultPaddings.mobile
      }
      $autoHeight={autoHeight}
      {...props}
    >
      {children}
    </S.Card>
  )
}

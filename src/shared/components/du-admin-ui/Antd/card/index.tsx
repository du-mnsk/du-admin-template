import React from 'react'
import { Card, type CardProps } from 'antd'
import styled from 'styled-components'

import { useResponsive } from '@/shared/hooks/useResponsive'
import { FONT_SIZE, FONT_WEIGHT, media } from '@/styles/themes/constants'

interface CardInternalProps {
  $autoHeight: boolean
}

export interface AntdCardProps extends CardProps {
  className?: string
  autoHeight?: boolean
}

export const AntdCard: React.FC<AntdCardProps> = ({
  className,
  autoHeight = true,
  children,
  ...props
}) => {
  const { isTablet } = useResponsive()

  return (
    <S.Card
      size={props.size ? props.size : isTablet ? 'small' : 'default'}
      className={className}
      bordered={props.bordered ? props.bordered : false}
      $autoHeight={autoHeight}
      {...props}
    >
      {children}
    </S.Card>
  )
}

const S = {
  Card: styled(Card)<CardInternalProps>`
    display: flex;
    flex-direction: column;

    ${(props) => props.$autoHeight && 'height: 100%'};

    box-shadow: var(--box-shadow);

    .ant-card-head {
      border-bottom: 0;

      font-weight: ${FONT_WEIGHT.bold};

      .ant-card-head-title {
        white-space: unset;
        overflow: unset;
        padding-bottom: 0;
      }

      @media only screen and (${media.xl}) {
        font-size: ${FONT_SIZE.xxl};

        .ant-card-head-title {
          padding-bottom: 0.25rem;
        }
      }
    }

    .ant-descriptions-item-label,
    .ant-descriptions-item-content {
      @media (max-width: 767px) {
        padding: 8px 10px;
        font-size: ${FONT_SIZE.xs};
      }
    }
  `,
}

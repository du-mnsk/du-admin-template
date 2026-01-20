import React from 'react'
import type { ButtonProps as AntButtonProps } from 'antd'

import type { Severity } from '@/shared/components/du-admin-ui/antd/Button/Button.styles'
import * as S from '@/shared/components/du-admin-ui/antd/Button/Button.styles'

export interface ButtonProps extends AntButtonProps {
  className?: string
  severity?: Severity
  noStyle?: boolean
}

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, severity, noStyle, children, ...props }, ref) => (
    <S.Button ref={ref} className={className} $noStyle={noStyle} {...props} $severity={severity}>
      {children}
    </S.Button>
  ),
)
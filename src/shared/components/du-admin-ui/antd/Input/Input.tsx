import React from 'react'
import { Input as AntInput, type InputProps as AntInputProps, type InputRef } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Input/Input.styles'

export interface InputProps extends AntInputProps {
  className?: string
}

export const TextArea = AntInput.TextArea

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<InputRef, InputProps>(
  ({ className, children, ...props }, ref) => (
    <S.Input ref={ref} className={className} {...props}>
      {children}
    </S.Input>
  ),
)

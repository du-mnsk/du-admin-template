import React from 'react'
import {Input, type InputRef } from 'antd'
import type { PasswordProps } from 'antd/lib/input'
import styled from 'styled-components'

interface AntdInputPasswordProps extends PasswordProps {
  className?: string
}

// eslint-disable-next-line react/display-name
export const AntdInputPassword = React.forwardRef<InputRef, AntdInputPasswordProps>(
  ({ className, children, ...props }, ref) => (
    <S.InputPassword ref={ref} className={className} {...props}>
      {children}
    </S.InputPassword>
  ),
)

const S = {
  InputPassword: styled(Input.Password)`
    .ant-input-password-icon.anticon {
      color: var(--disabled-color);
      &:hover {
        color: var(--text-main-color);
      }
    }
  `
}
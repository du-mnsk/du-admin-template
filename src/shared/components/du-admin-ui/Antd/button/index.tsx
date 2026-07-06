import React from 'react'
import { Button, type ButtonProps } from 'antd'
import styled, { css } from 'styled-components'

export interface AntdButtonProps extends ButtonProps {
  className?: string
}

// eslint-disable-next-line react/display-name
export const AntdButton = React.forwardRef<HTMLElement, AntdButtonProps>(
  ({ className, children, ...props }, ref) => (
    <S.Button ref={ref} className={className} {...props}>
      {children}
    </S.Button>
  ),
)

const S = {
  Button: styled(Button)`
    &[disabled],
    &[disabled]:active,
    &[disabled]:focus,
    &[disabled]:hover {
      color: var(--disabled-color);
    }
    ${(props) =>
      !props.danger &&
      css`
        ${props.type === 'text' &&
        css`
          &:hover {
            background: transparent;
            color: var(--secondary-color);
          }
        `}

        ${props.type === 'ghost' &&
        css`
          &:hover {
            color: var(--secondary-color);

            border-color: var(--secondary-color);
          }
        `}

        ${props.type === 'primary' &&
        css`
          background: var(--primary-color);

          &:hover {
            background: var(--secondary-color);

            border-color: var(--secondary-color);
          }
        `}

        ${props.type === 'link' &&
        css`
          & span,
          a {
            text-decoration: underline;
          }
        `};
      `
    }
  `
}
import React, { type ComponentProps } from 'react'
import { Select as AntSelect } from 'antd'
import type { RefSelectProps } from 'antd/lib/select'

import * as S from '@/shared/components/du-admin-ui/antd/Select/Select.styles'

export const Option = AntSelect.Option

export interface SelectProps extends ComponentProps<typeof AntSelect>, S.SelectProps {
  className?: string
}

// eslint-disable-next-line react/display-name
export const Select = React.forwardRef<RefSelectProps, SelectProps>(
  ({ className, width, children, ...props }, ref) => (
    <S.Select
      getPopupContainer={(triggerNode) => triggerNode}
      ref={ref}
      className={className}
      width={width}
      {...props}
    >
      {children}
    </S.Select>
  ),
)

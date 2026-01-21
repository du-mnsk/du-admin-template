import React from 'react'
import type { DropDownProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Dropdown/Dropdown.styles'

export const Dropdown: React.FC<DropDownProps> = ({ children, ...props }) => {
  return (
    <S.Dropdown getPopupContainer={(triggerNode) => triggerNode} {...props}>
      {children}
    </S.Dropdown>
  )
}

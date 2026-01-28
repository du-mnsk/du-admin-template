import React from 'react'
import { Dropdown, type DropdownProps } from 'antd'
import styled from 'styled-components'

export interface AntdDropdownProps extends DropdownProps {
  className?: string
}

export const AntdDropdown: React.FC<AntdDropdownProps> = ({ className, children, ...props }) => {
  return (
    <S.Dropdown className={className} getPopupContainer={(triggerNode) => triggerNode} {...props}>
      {children}
    </S.Dropdown>
  )
}

const S = {
  Dropdown : styled(Dropdown)``,
}
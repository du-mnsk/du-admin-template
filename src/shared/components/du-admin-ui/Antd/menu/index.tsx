import React from 'react'
import { Menu, type MenuProps } from 'antd'
import styled from 'styled-components'

export interface AntdMenuProps extends MenuProps {
  className?: string
}

export const AntdMenuItem = Menu.Item

export const AntdMenu: React.FC<AntdMenuProps> = ({ className, children, ...props }) => {
  return <S.Menu className={className} {...props}>{children}</S.Menu>
}


const S = {
  Menu: styled(Menu)``,
}
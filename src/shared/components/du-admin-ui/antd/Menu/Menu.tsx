import React from 'react'
import { Menu as AntdMenu, type MenuProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Menu/Menu.styles'

export const MenuItem = AntdMenu.Item

export const Menu: React.FC<MenuProps> = ({ children, ...props }) => {
  return <S.Menu {...props}>{children}</S.Menu>
}

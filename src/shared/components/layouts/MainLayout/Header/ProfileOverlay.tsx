import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, Menu, Typography } from 'antd'
import styled from 'styled-components'

import { MenuItem as MenuItemBase } from '@/shared/components/du-admin-ui/antd/Menu/Menu'
import { BORDER_RADIUS, media } from '@/styles/themes/constants'

export const ProfileOverlay: React.FC = ({ ...props }) => {
  return (
    <DropdownMenu selectable={false} {...props}>
      <MenuItem>
        <Text>
          <Link to="/logout">로그아웃</Link>
        </Text>
      </MenuItem>
    </DropdownMenu>
  )
}
const DropdownMenu = styled(Menu)`
  line-height: 1.5715;

  border-radius: ${BORDER_RADIUS};

  &.ant-dropdown-menu {
    box-shadow: var(--box-shadow);
  }
`
const Text = styled(Typography.Text)`
  font-size: 0.875rem;
  font-weight: 600;

  & > a {
    display: block;
  }

  @media only screen and ${media.md} {
    font-size: 1rem;
  }
`

export const MenuItem = styled(MenuItemBase)`
  height: 50px;
`

export const ItemsDivider = styled(Divider).withConfig({
  shouldForwardProp: (prop) => !['eventKey', 'warnKey'].includes(prop),
})`
  margin: 0;
`

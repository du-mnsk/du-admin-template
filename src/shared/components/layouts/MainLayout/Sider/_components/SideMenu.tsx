import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu as AntMenu } from 'antd'
import styled from 'styled-components'

import type { IRoute } from '@/routes/types'
import type { MainLayoutProps } from '@/shared/components/layouts/MainLayout'
import useLocalStorage from '@/shared/hooks/useLocalStorage'
import useRouter from '@/shared/hooks/useRouter'
import { FONT_SIZE } from '@/styles/themes/constants'

import { type AuthInfo, DomainType } from '../../tempTypes'

const SideMenu = (props: MainLayoutProps) => {
  const { handleToggleSider, siderToggleState } = props
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  //TODO: COUPONPROVIDER 추가
  const { subRoutes, mainRoute } =
    useRouter()
  const { sessionValue: auth } = useLocalStorage<AuthInfo>('auth')

  const showRoutes: IRoute[] = []
  // if (auth?.Type === DomainType.TOGETHER) {
  //   showRoutes = togetherAuthRoutes
  // } else if (auth?.Type === DomainType.COUPONPROVIDER) {
  //   showRoutes = couponProviderAuthRoutes
  // } else if (auth) {
  //   showRoutes = authRoutes.filter(
  //     (route: IRoute, idx: number) => route.path === 'dashboard' || auth.AuthType[idx - 1] == '1',
  //   )
  // }

  useEffect(() => {
    subRoutes && setOpenKeys(subRoutes.map((r:IRoute) => r.pageId))
    mainRoute && setSelectedKeys([mainRoute.pageId])
  }, [subRoutes, mainRoute])


  const getMenuList = (navList: IRoute[], path = '') => {
    return navList.map((nav) => {
      const isSubMenu = !!nav.child?.length && nav.level === 1
      return isSubMenu ? (
        <Menu.SubMenu
          key={nav.pageId}
          title={nav.title}
          icon={nav.icon}
          onTitleClick={({ key }) => {
            if (siderToggleState) {
              handleToggleSider()
            }
            if (openKeys.includes(key)) {
              const idx = openKeys.findIndex((k: string) => k === key) // findIndex = find + indexOf
              idx > -1 && openKeys.splice(idx, 1)
              setOpenKeys([...openKeys])
            } else {
              setOpenKeys(openKeys.concat([key]))
            }
          }}
          popupClassName="d-none"
        >
          {nav.child && getMenuList(nav.child, `${path}/${nav.path}`)}
        </Menu.SubMenu>
      ) : (
        !nav.title.includes('확인중') && (
          <Menu.Item key={nav.pageId} title={nav.title} icon={nav.icon}>
            <Link to={`${path}/${nav.path}`}>{`${nav.title}`}</Link>
          </Menu.Item>
        )
      )
    })
  }

  return (
    <Menu mode="inline" selectedKeys={selectedKeys} openKeys={openKeys}>
      {getMenuList(showRoutes)}
    </Menu>
  )
}

export default SideMenu

export const Menu = styled(AntMenu)`
  background: transparent;

  font-weight: bold;

  a {
    width: 100%;
    display: block;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    font-size: ${FONT_SIZE.xs};
  }

  .ant-menu-item-icon {
    width: 1.25rem;
  }

  .ant-menu-submenu-expand-icon,
  .ant-menu-submenu-arrow,
  span[role='img'],
  a,
  .ant-menu-item,
  .ant-menu-submenu {
    color: var(--text-sider-secondary-color);
    fill: var(--text-sider-secondary-color);
  }

  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover {
    .ant-menu-submenu-expand-icon,
    .ant-menu-submenu-arrow,
    span[role='img'],
    a,
    .ant-menu-item-icon,
    .ant-menu-title-content {
      color: var(--text-sider-secondary-color);
      fill: var(--text-sider-primary-color);
    }
  }

  .ant-menu-submenu-selected {
    color: var(--text-sider-secondary-color);

    .ant-menu-submenu-expand-icon,
            /*.ant-menu-submenu-arrow,*/
        span[role='img'] {
      color: var(--text-sider-secondary-color);
      fill: var(--text-sider-primary-color);
    }
  }

  .ant-menu-item-selected,
  .ant-menu-item-selected:hover {
    .ant-menu-submenu-expand-icon,
    .ant-menu-submenu-arrow,
    span[role='img'],
    .ant-menu-item-icon,
    a {
      color: var(--text-sider-primary-color);
      fill: var(--text-sider-primary-color);
    }
  }

  .ant-menu-item-active,
  .ant-menu-submenu-active .ant-menu-submenu-title {
  }
`

import { Fragment, useMemo } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

import Overlay from '@/shared/components/du-admin-ui/Overlay'
import { RenderIf } from '@/shared/components/du-admin-ui/RenderIf'
import { type MainLayoutProps } from '@/shared/components/layouts/MainLayout'
import SideMenu from '@/shared/components/layouts/MainLayout/Sider/_component/SideMenu'
import { SiderLogo } from '@/shared/components/layouts/MainLayout/Sider/_component/SiderLogo'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { LAYOUT, media } from '@/styles/themes/constants'

const Sider = (props: MainLayoutProps) => {
  const { siderToggleState, handleToggleSider } = props
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive()

  const isCollapsible = useMemo(() => mobileOnly || tabletOnly, [mobileOnly, tabletOnly])

  

  return (
    <Fragment>
      <SiderWrap
        trigger={null}
        collapsed={siderToggleState}
        collapsedWidth={mobileOnly ? 0 : 80}
        collapsible={isCollapsible}
        width={260}
      >
        <SiderLogo {...props} />
        <SideMenuWrap>
          <SideMenu {...props} />
        {isCollapsible && !siderToggleState && (
          <SiderUserActionsWrap>
            <SiderUserLink href="/mypage">비밀번호 변경</SiderUserLink>
            <SiderUserLink href="/logout">
              로그아웃
            </SiderUserLink>
          </SiderUserActionsWrap>
        )}
        </SideMenuWrap>
      </SiderWrap>
      <RenderIf when={mobileOnly}>
        <Overlay onClick={props.handleToggleSider} show={!siderToggleState} />
      </RenderIf>
    </Fragment>
  )
}

export default Sider


const SiderWrap = styled(Layout.Sider)`
  position: fixed;
  overflow: visible;
  left: 0;
  z-index: 101;
  min-height: 100vh;
  max-height: 100vh;
  color: var(--text-secondary-color);

  @media only screen and (${media.md}) {
    // right: unset;
    left: 0;
  }

  @media only screen and (${media.xl}) {
    //position: unset;
    // right: unset;
    left: 0px;
  }
`
const SiderUserActionsWrap = styled.div`
  padding:16px 12px;
  padding-left: 24px;
  display: flex;
  flex-flow:column;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`

const SiderUserLink = styled.a<{ $danger?: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 2rem;
  color: var(--text-sider-secondary-color, rgba(255, 255, 255, 0.65));
  text-decoration: none;
  padding: 2px 0;

  &:hover {
    color: var(--text-sider-primary-color, #fff);
  }
`

const SideMenuWrap = styled.div`
  padding-bottom: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - ${LAYOUT.mobile.headerHeight});

  @media only screen and (${media.md}) {
    max-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  }
`

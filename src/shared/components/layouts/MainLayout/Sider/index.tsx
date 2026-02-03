import { Fragment, useMemo } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

import { type MainLayoutProps } from '@/shared/components/layouts/MainLayout'
import SideMenu from '@/shared/components/layouts/MainLayout/Sider/_components/SideMenu'
import { SiderLogo } from '@/shared/components/layouts/MainLayout/Sider/_components/SiderLogo'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { LAYOUT, media } from '@/styles/themes/constants'

const Sider = (props: MainLayoutProps) => {
  const { siderToggleState } = props
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive()

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly])


  return (
    <Fragment>
      <SiderWrap
        trigger={null}
        collapsed={siderToggleState}
        collapsedWidth={isDesktop || tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
      >
        <SiderLogo {...props} />
        <SideMenuWrap>
          <SideMenu {...props} />
        </SideMenuWrap>
      </SiderWrap>
      {/* <RenderIf when={mobileOnly}>
        <Overlay onClick={handleToggleSider} show={!siderToggleState} />
      </RenderIf> */}
    </Fragment>
  )
}

export default Sider


const SiderWrap = styled(Layout.Sider)`
  position: fixed;
  overflow: visible;
  // right: 0;
  z-index: 5;
  min-height: 100vh;
  max-height: 100vh;

  color: var(--text-secondary-color);

  @media only screen and ${media.minMd} {
    // right: unset;
    left: 0;
  }

  @media only screen and ${media.minXl} {
    //position: unset;
    // right: unset;
    left: 0px;
  }
`
const SideMenuWrap = styled.div`
  padding-bottom: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - ${LAYOUT.mobile.headerHeight});

  @media only screen and ${media.minMd} {
    max-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
`


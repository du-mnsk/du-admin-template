import { MenuOutlined } from '@ant-design/icons'
import { Col, Layout, Row } from 'antd'
import styled from 'styled-components'

import logo from '@/assets/logo.png'
import { Antd } from '@/shared/components/du-admin-ui/Antd'
import type { MainLayoutProps } from '@/shared/components/layouts/MainLayout'
import { HeaderFullscreen } from '@/shared/components/layouts/MainLayout/Header/_components/HeaderFullscreen'
import { ProfileDropdown } from '@/shared/components/layouts/MainLayout/Header/_components/ProfileDropdown'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { LAYOUT, media } from '@/styles/themes/constants'

const Header = (props: MainLayoutProps) => {
  const { handleToggleSider, isPopupWindow } = props
  const { mobileOnly, tabletOnly } = useResponsive()
  const showHamburger = !isPopupWindow && (mobileOnly || tabletOnly)

  return (
    <HeaderWrap>
      <Row justify="space-between" align="middle">
        {/* TODO: logo 수정 */}
        <Col style={{ minWidth: '179px' }}>
          <img src={logo} alt="admin_logo" width={180}/>
        </Col>
        <Col>
          <Row align="middle" justify="end" gutter={[10, 10]}>
            <Col>
              <Row gutter={[{ xxl: 10 }, { xxl: 10 }]} align="middle" justify="space-around">
                <Col>
                  <HeaderFullscreen />
                </Col>
              </Row>
            </Col>
            {!showHamburger && (
              <Col>
                <ProfileDropdown />
              </Col>
            )}
            {showHamburger && (
              <Col>
                <Antd.Button
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={handleToggleSider}
                  aria-label="메뉴 열기"
                />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </HeaderWrap>
  )
}
export default Header


const HeaderWrap = styled(Layout.Header)`
  line-height: 1.5;

  @media only screen and (${media.md}) {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }
`

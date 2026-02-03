import { Col, Layout, Row } from 'antd'
import styled from 'styled-components'

import logo from '@/assets/logo.png'
import { HeaderFullscreen } from '@/shared/components/layouts/MainLayout/Header/_components/HeaderFullscreen'
import { ProfileDropdown } from '@/shared/components/layouts/MainLayout/Header/_components/ProfileDropdown'
import { LAYOUT, media } from '@/styles/themes/constants'

const Header = () => {
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
            <Col>
              <ProfileDropdown />
            </Col>
          </Row>
        </Col>
      </Row>
    </HeaderWrap>
  )
}
export default Header


const HeaderWrap = styled(Layout.Header)`
  line-height: 1.5;

  @media only screen and ${media.minMd} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }
`

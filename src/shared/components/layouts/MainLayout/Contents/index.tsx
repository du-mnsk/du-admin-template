import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components'

import Footer from '@/shared/components/layouts/MainLayout/Footer/index'
import { LAYOUT, media } from '@/styles/themes/constants'


const Contents = () => {
  return (
    <ContentsWrap>
      <Outlet />
      <Footer />
    </ContentsWrap>
  )
}
export default Contents


const ContentsWrap = styled(Layout.Content)`
  padding: ${LAYOUT.mobile.paddingVertical} ${LAYOUT.mobile.paddingHorizontal};
  /* overflow: auto; */
  /* mainLayout에서 window.scrollTo 사용하기 위해 주석*/
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media only screen and (${media.minMd}) {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
  }
`

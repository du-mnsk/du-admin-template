import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import styled, { css } from 'styled-components'

import Contents from '@/shared/components/layouts/MainLayout/Contents/index'
import Header from '@/shared/components/layouts/MainLayout/Header'
import Sider from '@/shared/components/layouts/MainLayout/Sider'
import useLocalStorage from '@/shared/hooks/useLocalStorage'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { media } from '@/styles/themes/constants'

export interface MainLayoutProps {
  siderToggleState: boolean
  isPopupWindow: boolean
  handleToggleSider: () => void
}

const MainLayout = () => {
  const navigate = useNavigate()
  const { isTablet, mobileOnly, tabletOnly } = useResponsive()
  const { pathname } = useLocation()
  const [siderToggleState, setSiderToggleState] = useState<boolean>(!isTablet)
  const prevNarrowRef = useRef(mobileOnly || tabletOnly)

  const isNarrow = mobileOnly || tabletOnly
  useEffect(() => {
    if (isNarrow && !prevNarrowRef.current) {
      setSiderToggleState(true)
    }
    prevNarrowRef.current = isNarrow
  }, [isNarrow])

  const { sessionValue: auth } = useLocalStorage<any>('auth')
  // const accessToken = localStorage.getItem('accessToken') // JWT 방식사용시 추가

  const handleToggleSider = () => setSiderToggleState(!siderToggleState)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  //TODO: 로그인 체크 추가 (현재 페이지 접근을 위해 임시 주석)
  // useEffect(() => {
  //   !auth && !accessToken && navigate('/login')
  // }, [navigate, pathname, auth, accessToken])

  const props: MainLayoutProps = {
    siderToggleState,
    isPopupWindow: window.name?.startsWith('popup'),
    handleToggleSider,
  }

  return (
    <LayoutMaster>
      {!props.isPopupWindow && <Sider {...props} />}
      <LayoutMain $isPopupWindow={props.isPopupWindow} $siderToggleState={props.siderToggleState}>
        <Header {...props} />
        <Contents />
      </LayoutMain>
    </LayoutMaster>
  )
}
export default MainLayout

const LayoutMaster = styled(Layout)`
  height: 100%;
  min-height: 100vh;
`

const LayoutMain = styled(Layout)<{
  $isPopupWindow: boolean
  $siderToggleState: boolean
}>`
  margin-left: 0;

  @media only screen and (${media.md}) {
    ${(props) =>
      props.$isPopupWindow
        ? css`
            margin-left: 0px;
          `
        : props.$siderToggleState
          ? css`
              margin-left: 80px;
            `
          : css`
              margin-left: 260px;
            `}
  }

  @media only screen and (${media.xl}) {
    ${(props) =>
      props.$isPopupWindow
        ? css`
            margin-left: 0px;
          `
        : props.$siderToggleState
          ? css`
              margin-left: 80px;
            `
          : css`
              margin-left: 260px;
            `}
  }
`

import React from 'react'
import { Col, type MenuProps, Row } from 'antd'
import styled from 'styled-components'

import { Antd } from "@/shared/components/du-admin-ui/Antd"
import useLocalStorage from '@/shared/hooks/useLocalStorage'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { media } from '@/styles/themes/constants'

const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn > span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    @media only screen and (${media.minMd}) {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`

export const ProfileDropdownHeader = styled(HeaderActionWrapper)`
  cursor: pointer;

  @media only screen and (${media.minMd}) {
    border-radius: 50px;
    padding: 0.3125rem 0.2rem;
  }
`

export const ProfileDropdownMenu = styled.a`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 2rem;

  @media only screen and (${media.minMd}) {
    font-size: 1rem;
  }
`

const items: MenuProps['items'] = [
  {
    key: '1',
    danger: false,
    label: (
      <ProfileDropdownMenu target="_self" href="/mypage">
        비밀번호 변경
      </ProfileDropdownMenu>
    ),
  },
  {
    key: '2',
    danger: true,
    label: (
      <ProfileDropdownMenu target="_self" href="/logout">
        로그아웃
      </ProfileDropdownMenu>
    ),
  },
]

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive()
  const { sessionValue: auth } = useLocalStorage<any>('auth')

  return auth ? (
    <Antd.Dropdown menu={{ items }} trigger={['click']} overlayStyle={{ minWidth: '125px' }}>
      <ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
        {isTablet && (
          <Col>
            <span>{`${auth?.UserName} [${auth?.UserID}]`}</span>
          </Col>
        )}
      </ProfileDropdownHeader>
    </Antd.Dropdown>
  ) : null
}

import React, { useEffect, useRef } from 'react'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import styled from 'styled-components'

import { Antd } from '@/shared/components/du-admin-ui/Antd'
import { RequireFullscreen } from '@/shared/components/du-admin-ui/RequireFullscreen'
import { media } from '@/styles/themes/constants'

export const HeaderFullscreen: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    rootRef.current = document.getElementById('root')
  }, [])

  return (
    <RequireFullscreen component={rootRef}>
      {(isFullscreen) => (
        <HeaderActionWrapper>
          <Antd.Button
            type={isFullscreen ? 'ghost' : 'text'}
            icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          />
        </HeaderActionWrapper>
      )}
    </RequireFullscreen>
  )
}
const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn > span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    @media only screen and (${media.md}) {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`

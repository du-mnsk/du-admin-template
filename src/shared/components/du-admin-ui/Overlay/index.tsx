import { useEffect } from 'react'
import styled, { css } from 'styled-components'

interface OverlayProps {
  show: boolean
  onClick?: () => void
}

const OverlayWrap = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 0;
  height: 0;

  ${(props) =>
    props.$show &&
    css`
      backdrop-filter: blur(6px);
      width: 100vw;
      height: 100vh;
    `}
`

export default function Overlay({ show, onClick }: OverlayProps) {
  useEffect(() => {
    if (show) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [show])

  return <OverlayWrap $show={show} onClick={onClick} role="presentation" />
}

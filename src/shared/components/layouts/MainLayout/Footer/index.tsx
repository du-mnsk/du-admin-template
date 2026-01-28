import { Layout } from 'antd'
import styled from 'styled-components'

import { References } from '@/shared/components/du-admin-ui/References'

const Footer = () => {
  return (
    <FooterWrap>
      <References year={2026} />
    </FooterWrap>
  )
}
export default Footer

const FooterWrap = styled(Layout.Footer)`
  flex-grow: 1;
  align-content: end;
`
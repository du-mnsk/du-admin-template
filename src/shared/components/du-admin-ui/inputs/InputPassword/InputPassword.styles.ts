import { Input as AntInput } from 'antd'
import styled from 'styled-components'

export const InputPassword = styled(AntInput.Password)`
  .ant-input-password-icon.anticon {
    color: var(--disabled-color);
    &:hover {
      color: var(--text-main-color);
    }
  }
`

import type { SwitchProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Switch/Switch.styles'

export const Switch: React.FC<SwitchProps> = (props) => {
  return <S.Switch {...props} />
}

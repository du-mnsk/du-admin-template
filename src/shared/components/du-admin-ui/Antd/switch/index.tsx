import { Switch, type SwitchProps } from 'antd'
import styled from 'styled-components'


export interface AntdSwitchProps extends SwitchProps {
  className?: string
}

export const AntdSwitch: React.FC<AntdSwitchProps> = ({className, ...props}) => {
  return <S.Switch className={className} {...props} />
}

/** 사용중인 Switch 속성들
 * checkedChildren: React.ReactNode //체크된 상태 표시 텍스트
 * unCheckedChildren: React.ReactNode //체크되지 않은 상태 표시 텍스트
 * defaultChecked: boolean //초기 체크 상태
 * disabled: boolean //비활성화 여부
 */

const S = {
  Switch: styled(Switch)``
}
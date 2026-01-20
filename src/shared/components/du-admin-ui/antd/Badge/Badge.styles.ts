import { Badge as AntBadge } from 'antd'
import styled from 'styled-components'

import type { NotificationType } from '@/shared/components/du-admin-ui/antd/Badge/Badge'
import { defineColorBySeverity } from '@/shared/utils/tempUtils'


interface BadgeProps {
  severity?: NotificationType
}

export const Badge = styled(AntBadge)<BadgeProps>`
  color: inherit;

  & .ant-badge-count {
    background: ${(props) => defineColorBySeverity(props.severity)};
  }
`

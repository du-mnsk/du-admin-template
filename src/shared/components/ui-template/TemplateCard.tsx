
import type { ReactNode } from 'react'
import { Card } from 'antd'

import { CARD_BODY_PADDING } from '@/styles/themes/constants'

export interface TemplateCardProps {
  title?: ReactNode
  children: ReactNode
  loading?: boolean
}

export function TemplateCard({
  title,
  children,
  loading = false,
}: TemplateCardProps) {
  return (
    <Card title={title} loading={loading} bodyStyle={{ padding: 0 }}>
      <div style={{ padding: `${CARD_BODY_PADDING}px` }}>
        {children}
      </div>
    </Card>
  )
}

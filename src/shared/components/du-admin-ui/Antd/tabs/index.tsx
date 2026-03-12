import React from 'react'
import { Tabs, type TabsProps } from 'antd'
import styled from 'styled-components'

export interface AntdTabsProps extends TabsProps {
  className?: string
}

export const AntdTabPane = Tabs.TabPane

export const AntdTabs: React.FC<AntdTabsProps> = ({ className, children, ...props }) => {
  return <S.Tabs className={className} {...props}>{children}</S.Tabs>
}

const S = {
  Tabs: styled(Tabs)``
}
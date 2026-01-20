import { Tabs as AntdTabs, type TabsProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Tabs/Tabs.styles'

export const TabPane = AntdTabs.TabPane

export const Tabs: React.FC<TabsProps> = ({ children, ...props }) => {
  return <S.Tabs {...props}>{children}</S.Tabs>
}

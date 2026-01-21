import { DashboardOutlined } from '@ant-design/icons'

import DashboardPage from '@/features/dashboard/pages/DashboadPage'
import type { IRoute } from '@/routes/types'

const togetherRoutes: IRoute[] = [
  {
    pageId: '100000000',
    title: '대시보드',
    path: 'dashboard',
    element: <DashboardPage />,
    icon: <DashboardOutlined />,
    level: 1,
  },
]
export default togetherRoutes

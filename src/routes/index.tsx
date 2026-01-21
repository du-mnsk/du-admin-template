import { DashboardOutlined } from '@ant-design/icons'

import DashboadPage from '@/features/dashboard/pages/DashboadPage'
import { type IRoute } from '@/routes/types'

const routes: IRoute[] = [
  {
    pageId: '100000000',
    title: '대시보드',
    path: 'dashboard',
    element: <DashboadPage />,
    icon: <DashboardOutlined />,
    level: 1,
  },
]

export default routes

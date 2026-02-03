import { DashboardOutlined } from '@ant-design/icons'

import DashboadPage from '@/features/dashboard/pages/DashboadPage'
import NoticePage, { noticeListLoader } from '@/features/Notice/pages'
import NoticeDetailPage, { noticeDetailLoader } from '@/features/Notice/pages/detail'
import { queryClient } from '@/routes/helper'
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
  {
    pageId: '200000000',
    title: '공지사항',
    path: 'notice',
    loader: noticeListLoader(queryClient),
    element: <NoticePage />,
    icon: <DashboardOutlined />,
    level: 1,
  },
  {
    pageId: '200100000',
    title: '공지사항 상세',
    path: 'notice/:Idx',
    loader: noticeDetailLoader(queryClient),
    element: <NoticeDetailPage />,
    level: 2,
  },
]

export default routes

import { Outlet } from 'react-router-dom'
import {
  DashboardOutlined,
  NotificationOutlined,
} from '@ant-design/icons'

import DashboadPage from '@/features/Dashboard/pages/DashboadPage'
import NoticePage, { noticeListLoader } from '@/features/Notice/pages'
import NoticeDetailPage, { noticeDetailLoader } from '@/features/Notice/pages/detail'
import { queryClient } from '@/routes/helper'
import { type IRoute } from '@/routes/types'
import uiTemplateRoutes from '@/routes/uiTemplates'

const routes: IRoute[] = [
  ...uiTemplateRoutes,
  {
    pageId: '100000000',
    title: '대시보드',
    path: 'dashboard',
    element: <DashboadPage />,
    icon: <DashboardOutlined />,
    level: 1,
  },
  {
    pageId: '300000000',
    title: '운영관리',
    path: 'operate',
    element: <Outlet />,
    icon: <NotificationOutlined />,
    level: 1,
    child: [
      {
        pageId: '300100000',
        title: '전면팝업 관리',
        path: 'popup',
        element: <Outlet />,
        level: 2,
        child: [
          { pageId: '300100100', title: '전면팝업 관리 조회', path: '', element: <NoticePage />, loader: noticeListLoader(queryClient), level: 3 },
          { pageId: '300100200', title: '전면팝업 관리 등록', path: 'new', element: <NoticeDetailPage />, loader: noticeDetailLoader(queryClient), level: 3 },
          { pageId: '300100300', title: '전면팝업 관리 상세/수정', path: ':Idx', element: <NoticeDetailPage />, loader: noticeDetailLoader(queryClient), level: 3 },
        ],
      },
      {
        pageId: '300200000',
        title: '공지사항 관리',
        path: 'notice',
        element: <Outlet />,
        level: 2,
        child: [
          { pageId: '300200100', title: '공지사항 관리', path: '', element: <NoticePage />, loader: noticeListLoader(queryClient), level: 3 },
          { pageId: '300200200', title: '공지사항 관리 상세', path: ':Idx', element: <NoticeDetailPage />, loader: noticeDetailLoader(queryClient), level: 3 },
        ],
      },
      {
        pageId: '300300000',
        title: 'FAQ 관리',
        path: 'faq',
        element: <Outlet />,
        level: 2,
        child: [
          { pageId: '300300100', title: 'FAQ 관리', path: '', element: <NoticePage />, loader: noticeListLoader(queryClient), level: 3 },
          { pageId: '300300200', title: 'FAQ 관리 상세/수정', path: ':Idx', element: <NoticeDetailPage />, loader: noticeDetailLoader(queryClient), level: 3 },
        ],
      },
      {
        pageId: '300500000',
        title: '이용 약관 관리',
        path: 'terms',
        element: <Outlet />,
        level: 2,
        child: [
          { pageId: '300500100', title: '이용 약관 관리 상세/수정', path: 'use', element: <NoticeDetailPage />, loader: noticeDetailLoader(queryClient), level: 3 },
          { pageId: '300500200', title: '서비스 약관 관리 상세/수정', path: 'service', element: <NoticeDetailPage />, loader: noticeDetailLoader(queryClient), level: 3 },
        ],
      },
    ],
  },
]

export default routes
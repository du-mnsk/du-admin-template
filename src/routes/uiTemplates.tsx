/**
 * UI 템플릿 전용 라우트 (참조용)
 * 메뉴에 노출하려면 src/routes/index.tsx 에서 이 배열을 import 후
 * routes 배열에 추가하거나, 기존 메뉴의 child 로 병합하세요.
 */
import { Outlet } from 'react-router-dom'
import { AppstoreOutlined } from '@ant-design/icons'

import {
  DashboardPage,
  Detail1Page,
  Detail2Page,
  Detail3Page,
  Detail4Page,
  ListPage,
  StatisticsPage,
} from '@/features/ui-templates'
import type { IRoute } from '@/routes/types'

const uiTemplateRoutes: IRoute[] = [
  {
    pageId: '000000000',
    title: 'UI 템플릿',
    path: 'ui-templates',
    element: <Outlet />,
    icon: <AppstoreOutlined />,
    level: 1,
    child: [
      {
        pageId: '000600000',
        title: '대시보드',
        path: 'dashboard',
        element: <DashboardPage />,
        level: 2,
      },
      {
        pageId: '000100000',
        title: '목록',
        path: 'list',
        element: <ListPage />,
        level: 2,
      },
      {
        pageId: '000200000',
        title: '상세-1',
        path: 'detail1',
        element: <Detail1Page />,
        level: 2,
      },
      {
        pageId: '000300000',
        title: '상세-2',
        path: 'detail2',
        element: <Detail2Page />,
        level: 2,
      },
      {
        pageId: '000400000',
        title: '상세-3',
        path: 'detail3',
        element: <Detail3Page />,
        level: 2,
      },
      {
        pageId: '000500000',
        title: '상세-4',
        path: 'detail4',
        element: <Detail4Page />,
        level: 2,
      },
      {
        pageId: '000700000',
        title: '통계',
        path: 'statistics',
        element: <StatisticsPage />,
        level: 2,
      },
    ],
  },
]

export default uiTemplateRoutes

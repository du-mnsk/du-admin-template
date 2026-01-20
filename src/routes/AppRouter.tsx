import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from '@/features/login/pages/LoginPage'
import routes from '@/routes'
import { getRoutes } from '@/routes/helper'
import togetherRoutes from '@/routes/together'
import MainLayout from '@/shared/components/layouts/MainLayout'
import type { AuthInfo } from '@/shared/components/layouts/MainLayout/tempTypes'
import { DomainType } from '@/shared/components/layouts/MainLayout/tempTypes'
import useLocalStorage from '@/shared/hooks/useLocalStorage'

export const AppRouter = () => {
  const { sessionValue: auth } = useLocalStorage<AuthInfo>('auth')
  const routeList =getRoutes(
    auth?.Type === DomainType.TOGETHER
      ? togetherRoutes
      // : auth?.Type === DomainType.COUPONPROVIDER
      // ? couponProviderRoutes
      : routes,
  )

  const router = createBrowserRouter([
    {
      path: 'login',
      element: <LoginPage />,
    },
    // {
    //   path: 'logout',
    //   element: <Logout />,
    // },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        ...routeList,
        //     {
        //       path: 'mypage',
        //       element: <MyPage />,
        //     },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

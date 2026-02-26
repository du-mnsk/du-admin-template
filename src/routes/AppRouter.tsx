import { createBrowserRouter, Navigate,RouterProvider } from 'react-router-dom'

import LoginPage from '@/features/Login/pages/LoginPage'
import routes from '@/routes'
import { getRoutes } from '@/routes/helper'
import togetherRoutes from '@/routes/together'
import { AuthProvider, useAuth } from '@/shared/auth/AuthProvider'
import MainLayout from '@/shared/components/layouts/MainLayout'
import { DomainType } from '@/shared/components/layouts/MainLayout/tempTypes'

export const AppRouter = () => {
  return (
    <AuthProvider>
      <AppRouterInner />
    </AuthProvider>
  )
}

const AppRouterInner = () => {
  const auth = useAuth()

  const routeList = getRoutes(
    auth?.Type === DomainType.TOGETHER ? togetherRoutes : routes,
  )

  const router = createBrowserRouter([
    {
      path: '/login', // ✅ 절대경로
      element: <LoginPage />,
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        // ✅ / 진입 시 기본 페이지
        { index: true, element: <Navigate to="dashboard" replace /> },
        ...routeList,
      ],
    },
  ])

  return <RouterProvider router={router} />
}

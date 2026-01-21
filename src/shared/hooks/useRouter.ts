//TODO: 파일 생성 후 삭제 예정
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import routes from '@/routes'
import { findSelectedMainRouteByPath, findSelectedSubRouteByPath, findSubMenuChildByPath } from '@/routes/helper'
import togetherRoutes from '@/routes/together'
import type { IRoute } from '@/routes/types'

const useRouter = () => {
  const location = useLocation()

  const [authRoutes] = useState<IRoute[]>(routes)
  const [togetherAuthRoutes] = useState<IRoute[]>(togetherRoutes)
  const [mainRoute, setMainRoute] = useState<IRoute | null>()
  const [subRoutes, setSubRoutes] = useState<IRoute[]>([])
  const [subChildRoute, setSubChildRoute] = useState<IRoute[] | null>()

  useEffect(() => {
    const main = findSelectedMainRouteByPath(location.pathname)
    const sub = findSelectedSubRouteByPath(location.pathname)
    const child = findSubMenuChildByPath(location.pathname)
    if (main) {
      setMainRoute(main)
    } else {
      setMainRoute(null)
    }

    if (sub) {
      setSubRoutes(sub)
    } else {
      setSubRoutes([])
    }

    if (child) {
      setSubChildRoute(child)
    } else {
      setSubChildRoute([])
    }
  }, [location])

  return {
    routes,
    authRoutes,
    togetherAuthRoutes,
    mainRoute,
    subRoute: subRoutes,
    subChildRoute,
  }
}

export default useRouter

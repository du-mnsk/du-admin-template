import { useMemo } from "react"
import { useLocation } from "react-router-dom"

import { findSelectedMainRouteByPath, findSelectedSubRouteByPath, findSubMenuChildByPath } from "@/routes/helper"
import type { IRoute } from "@/routes/types"


const useRouter = () => {
  const { pathname } = useLocation()

  const mainRoute = useMemo<IRoute | null>(() => {
    return findSelectedMainRouteByPath(pathname) ?? null
  }, [pathname])

  const subRoutes = useMemo<IRoute[]>(() => {
    return findSelectedSubRouteByPath(pathname) ?? []
  }, [pathname])

  const subChildRoute = useMemo<IRoute[] | null>(() => {
    const child = findSubMenuChildByPath(pathname)
    // false이거나 truthy하지 않은 경우 null 반환
    return child && Array.isArray(child) ? child : null
  }, [pathname])
  

  return {
    mainRoute,
    subRoutes,
    subChildRoute,
  }
}

export default useRouter

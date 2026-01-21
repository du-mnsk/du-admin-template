import type { RouteObject } from 'react-router-dom'
import { QueryCache, QueryClient } from '@tanstack/react-query'

import routes from '@/routes/index'
import { type IRoute, type PAGE_ID } from '@/routes/types'
// import { requestCheckSession } from '@/shared/api'

export const findSelectedSubRouteByPath = (path: string) => {
  const paths = path.split('/').filter((p) => p !== '')

  const l1 = routes.flat().filter((r) => r.path !== ':id')
  const l2 = l1
    .map((r: any) => (r?.child ? r?.child : []))
    .flat()
    .filter((r: any) => r.path !== ':id')
  const l3 = l2
    .map((r: any) => (r?.child ? r?.child : []))
    .flat()
    .filter((r: any) => r.path !== ':id')

  const flatRoutes = l1.concat(l2).concat(l3)

  const findRoutes: IRoute[] = []
  paths.some((p) => {
    const find = flatRoutes.find((r) => r.path === p)
    if (find) {
      findRoutes.push(find)
    }
  })

  return findRoutes
}

export const findSelectedMainRouteByPath = (path: string) => {
  const paths = path.split('/').filter((p) => p !== '')

  let findRoute = undefined
  let targetRoutes: IRoute[] = routes

  paths.some((p) => {
    const _findRoute = targetRoutes.find((r) => r.path === p)

    if (_findRoute) {
      findRoute = _findRoute
      targetRoutes = _findRoute.child || []
    } else {
      return false
    }
  })

  return findRoute
}

export const findSubMenuChildByPath = (path: string) => {
  const paths = path.split('/')
  if (paths.length > 4) {
    return false
  }
  const parentRoute = routes.find((r) => r.path === paths[1])
  return parentRoute && parentRoute.child
}

export const loadCheckSession = async (pageId: PAGE_ID) => {
  const auth = localStorage.getItem('auth')
  if (!auth) {
    if (pageId) {
      alert('로그인 정보가 없습니다.')
      window.location.href = `/login`
      return false
    } else return true
    // } else {
    //   return requestCheckSession()
    //     .then((response: ApiResponse<unknown>) => {
    //       if (response.Header.ErrCode == 9999) {
    //         localStorage.clear()
    //         alert('로그인 세션이 만료되었습니다.')
    //         window.location.href = `/login${
    //           window.location.pathname !== '/' ? `?redirect=${window.location.pathname}` : ''
    //         }`
    //         return false
    //       } else {
    //         const authData = auth && JSON.parse(auth)
    //         const authIndex = parseInt(pageId[0]) - 2
    //         if (
    //           authIndex >= 0 &&
    //           authData.AuthType[authIndex] == '0' &&
    //           authData.Type === DomainType.ADMIN
    //         ) {
    //           alert(`접근권한이 없습니다.`)
    //           window.location.href = `/`
    //           return false
    //         } else return true
    //       }
    //     })
    //     .catch(() => {
    //       localStorage.clear()
    //       window.location.href = `/login${
    //         window.location.pathname !== '/' ? `?redirect=${window.location.pathname}` : ''
    //       }`
    //       return false
    //     })
  }
}

export const getRoutes = (routes: IRoute[]): RouteObject[] => {
  return routes.map((prop) => {
    const route: RouteObject = {
      element: prop.element,
      path: prop.path,
      children: prop.child && getRoutes(prop.child),
      loader: async () => {
        if (!prop.element) return prop.loader ?? null

        // const validSession = await loadCheckSession(prop.pageId)
        // if (validSession) return prop.loader ?? null
        // else return null
      },
    }
    return route
  })
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta?.errorMessage) {
        console.warn(query.meta.errorMessage)
        console.warn(error)
      }
    },
  }),
  defaultOptions: { queries: { staleTime: 0 } },
})
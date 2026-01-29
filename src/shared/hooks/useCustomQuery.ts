import {
  type QueryKey,
  type QueryObserverResult,
  type RefetchOptions,
  useQuery,
  type UseQueryOptions,
} from '@tanstack/react-query'

type CustomQueryOptions<TData> = Pick<
  UseQueryOptions<TData, unknown, TData, QueryKey>,
  | 'queryKey'
  | 'queryFn'
  | 'enabled'
  | 'staleTime'
  | 'gcTime'
  | 'refetchOnWindowFocus'
  | 'refetchInterval'
  | 'refetchIntervalInBackground'
>

interface UseCustomQueryReturn<TData> {
  data?: TData
  isSuccess: boolean
  isLoading: boolean
  isFetching: boolean
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<TData, unknown>>
}

export const useCustomQuery = <TData>(
  options: CustomQueryOptions<TData>,
): UseCustomQueryReturn<TData> => {
  const { data, isSuccess, isLoading, isFetching, refetch } = useQuery(options)

  return { data, isSuccess, isLoading, isFetching, refetch }
}

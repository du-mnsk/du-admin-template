import { type MutationKey, useMutation } from '@tanstack/react-query'

import type { DmrsResponse } from '../api/api.types'

export interface UseCustomMutationOptions<T, U> {
  mutationKey: MutationKey
  mutationFn: (variables: T) => Promise<DmrsResponse<U>>
}

export interface UseCustomMutationReturn<T, U> {
  mutate: (variables: T) => void
  mutateAsync: (variables: T) => Promise<DmrsResponse<U>>
  isPending: boolean
  isSuccess: boolean
  data?: DmrsResponse<U>
}

export const useCustomMutation = <T, U>(
  options: UseCustomMutationOptions<T, U>,
): UseCustomMutationReturn<T, U> => {
  const { mutate, mutateAsync, isPending, isSuccess, data } = useMutation<
    DmrsResponse<U>,
    unknown,
    T
  >(options)

  return {
    mutate,
    mutateAsync,
    isPending,
    isSuccess,
    data,
  }
}

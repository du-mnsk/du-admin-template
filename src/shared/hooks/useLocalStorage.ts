// @app/hooks/useLocalStorage.ts

import { useCallback, useEffect, useMemo, useState } from 'react'

type LocalStorageHookOptions = {
  /**
   * 같은 탭 내 컴포넌트 동기화용 커스텀 이벤트 이름
   * (다른 탭 동기화는 window 'storage' 이벤트로 처리)
   */
  eventType?: string
}

const DEFAULT_EVENT_TYPE = 'local-storage-change'

const safeParse = <T,>(raw: string | null): T | null => {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

const safeStringify = (val: unknown): string => {
  try {
    return JSON.stringify(val)
  } catch {
    // 순환 참조 등 stringify 실패 시 null 저장
    return 'null'
  }
}

/**
 * 같은 탭 내 동기화를 위한 EventTarget 싱글턴
 * - window에 디버그용으로 노출하지 않음(전역 오염 방지)
 */
const getEventTarget = (): EventTarget | null => {
  if (typeof window === 'undefined') return null
  const w = window as unknown as { __APP_LS_EVENT_TARGET__?: EventTarget }
  if (!w.__APP_LS_EVENT_TARGET__) w.__APP_LS_EVENT_TARGET__ = new EventTarget()
  return w.__APP_LS_EVENT_TARGET__
}

interface ISessionEvent {
  key: string
}

function useLocalStorage<T = unknown>(
  key: string,
  eventTypeOrOptions: string | LocalStorageHookOptions = DEFAULT_EVENT_TYPE,
) {
  const eventType =
    typeof eventTypeOrOptions === 'string'
      ? eventTypeOrOptions
      : eventTypeOrOptions.eventType ?? DEFAULT_EVENT_TYPE

  const eventTarget = useMemo(() => getEventTarget(), [])

  const [value, setValue] = useState<T | null>(() => {
    if (typeof window === 'undefined') return null
    return safeParse<T>(localStorage.getItem(key))
  })

  const update = useCallback(
    (val: T) => {
      if (typeof window === 'undefined') return
      localStorage.setItem(key, safeStringify(val))
      setValue(val) // 호출 즉시 반영(안전)

      eventTarget?.dispatchEvent(
        new CustomEvent<ISessionEvent>(eventType, { detail: { key } }),
      )
    },
    [key, eventType, eventTarget],
  )

  const clear = useCallback(() => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
    setValue(null)

    eventTarget?.dispatchEvent(
      new CustomEvent<ISessionEvent>(eventType, { detail: { key } }),
    )
  }, [key, eventType, eventTarget])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // 같은 탭 내 동기화(커스텀 이벤트)
    const onCustom = (e: Event) => {
      const ce = e as CustomEvent<ISessionEvent>
      if (ce.detail?.key !== key) return
      setValue(safeParse<T>(localStorage.getItem(key)))
    }

    // 다른 탭/창 동기화(브라우저 기본 storage 이벤트)
    const onStorage = (e: StorageEvent) => {
      if (e.storageArea !== localStorage) return
      if (e.key !== key) return
      setValue(safeParse<T>(e.newValue))
    }

    eventTarget?.addEventListener(eventType, onCustom)
    window.addEventListener('storage', onStorage)

    return () => {
      eventTarget?.removeEventListener(eventType, onCustom)
      window.removeEventListener('storage', onStorage)
    }
  }, [key, eventType, eventTarget])

  return {
    sessionValue: value,
    updateSession: update,
    clearSession: clear,
  }
}

export default useLocalStorage

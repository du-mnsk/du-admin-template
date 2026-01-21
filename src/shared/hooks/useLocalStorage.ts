//TODO: 파일 생성 후 삭제 예정

import { useCallback, useEffect, useState } from 'react'

interface ISessionEvent<T> {
  key: string
  value: T | null
}

const eventTarget = new EventTarget()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window['eventTarget'] = eventTarget

export const getCustomEvent = <T = any>(eventType: string, key: string, val: T | null) => {
  return new CustomEvent<ISessionEvent<T>>(eventType, {
    detail: {
      key: key,
      value: val,
    },
  })
}

function useLocalStorage<T = any>(key: string, eventType = 'change-session-value') {
  const raw = localStorage.getItem(key)
  const [value, setValue] = useState<T>(raw ? JSON.parse(raw) : null)

  const update = useCallback(
    (val: T) => {
      localStorage.setItem(key, JSON.stringify(val))
      eventTarget.dispatchEvent(getCustomEvent(eventType, key, val))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  )

  const clear = () => {
    localStorage.removeItem(key)
    eventTarget.dispatchEvent(getCustomEvent(eventType, key, null))
  }

  useEffect(() => {
    const listener = (e: Event) => {
      console.error(e)
      const sessionEvent = e as CustomEvent<ISessionEvent<T>>
      if (sessionEvent.detail.key === key) {
        const valStr = localStorage.getItem(key)
        setValue(valStr ? JSON.parse(valStr) : null)
      }
    }

    eventTarget.addEventListener(eventType, listener)

    return () => {
      eventTarget.removeEventListener(eventType, listener)
    }
  })

  return {
    sessionValue: value,
    updateSession: update,
    clearSession: clear,
  }
}

export default useLocalStorage

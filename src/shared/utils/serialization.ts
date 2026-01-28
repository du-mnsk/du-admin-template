/**
 * 객체를 JSON으로 변환 후 Base64로 인코딩
 * @param data - 인코딩할 객체
 * @returns 인코딩된 데이터
 * @example
 * serialize({ name: 'DU', age: 20 }) // 'eyJuYW1lIjo...'
 *
 */
export const serialize = (data: object): string => {
  return data && btoa(JSON.stringify(data))
}

/**
 * 데이터를 Base64 문자열로 직렬화
 * @param data - 직렬화할 데이터
 * @returns 직렬화된 데이터
 * @example
 * deserialize('eyJuYW1lIjo...') // { name: 'DU', age: 20 }
 */
export const deserialize = (data: string): object => {
  return data && JSON.parse(atob(data))
}

/**
 * 데이터를 Base64+UTF-8 문자열로 직렬화
 *
 * 한글 및 특수문자를 안전하게 처리 (URL-safe)
 * @formerly utfSerialize
 * @param json - 인코딩할 객체
 * @returns Base64+UTF-8 인코딩된 문자열
 * @example
 * serializeSafe({ name: '한글' })  // 'JTdCJTIybmFtZSUyMi...'
 */
export function serializeSafe(json: object): string {
  return btoa(encodeURIComponent(JSON.stringify(json)))
}

/**
 * base64로 인코딩된 js object를 복원
 * @formerly utfDeserialize
 * @param encoded - Base64+UTF-8 인코딩된 문자열
 * @returns 복원된 객체
 * @example
 * deserializeSafe('JTdCJTIybmFtZSUyMi4uLg==')  // { name: '한글' }
 */
export function deserializeSafe(base64: string): object | null {
  try {
    return JSON.parse(decodeURIComponent(window.atob(base64)))
  } catch (e) {
    console.error(e)
    return null
  }
}

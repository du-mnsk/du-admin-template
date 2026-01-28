import type { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'
import type { RuleObject, StoreValue } from 'rc-field-form/lib/interface'

import type { ImageFileAllowedTypes } from '@/shared/components/du-admin-ui/Form/uploadDragger'

export const validMinNumber = (rule: RuleObject, value: StoreValue, minNumber: number) => {
  if ((value as number) < minNumber) {
    return Promise.reject(new Error(rule.message as string))
  } else {
    return Promise.resolve()
  }
}

export const validFileType = (rule: RuleObject, value: StoreValue, fileType: ImageFileAllowedTypes) => {
  if (!value) return Promise.resolve()
  if (typeof value === 'string') return Promise.resolve()
  const file = value as UploadChangeParam<UploadFile<any>>
  if (fileType === file.file.type) {
    return Promise.resolve()
  } else {
    return Promise.reject(new Error(rule.message as string))
  }
}

export const validEmail = (rule: RuleObject, email: StoreValue) => {
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  if (regex.test(email)) {
    return Promise.resolve()
  } else {
    return Promise.reject(new Error('이메일 형식이 올바르지 않습니다.'))
  }
}

export const validPassword = (rule: RuleObject, password: StoreValue) => {
  // 문자열에 숫자가 적어도 1개 이상 포함
  // 문자열에 영문자가 적어도 1개 이상 포함
  // 문자열에 특수문자(!@#$&%^*+=-)가 적어도 1개 이상 포함
  // 영문, 숫자, 특수문자(!@#$&%^*+=-) 조합으로 이루어진 8~15
  const regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$&%^*+=-])(?=.*[0-9]).{8,15}$/)
  if (regex.test(password)) {
    return Promise.resolve()
  } else {
    return Promise.reject(
      new Error('영문, 숫자, 특수문자(!@#&$%^*+=-) 조합으로 이루어진 8~15자 이내로 입력해주세요.'),
    )
  }
}

export const validPhoneNumber = (rule: RuleObject, phone: StoreValue) => {
  const regex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)
  if (regex.test(phone)) {
    return Promise.resolve()
  } else {
    return Promise.reject(new Error('핸드폰 번호 형식이 올바르지 않습니다.'))
  }
}

export const validUserId = (rule: RuleObject, id: StoreValue) => {
  const regex = new RegExp(/^[a-z]+[a-z0-9]{2,19}$/g)
  if (regex.test(id)) {
    return Promise.resolve()
  } else {
    return Promise.reject(new Error('영문, 숫자 조합으로 이루어진 3~20자 이내로 입력해주세요.'))
  }
}

export const validImgUrl = (rule: RuleObject, url: StoreValue) => {
  const regex = new RegExp(
    /^((?:http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:jpg|jpeg|gif|png))$/,
  )
  if (regex.test(url)) {
    return Promise.resolve()
  } else {
    return Promise.reject(new Error('이미지 URL을 입력해주세요.'))
  }
}

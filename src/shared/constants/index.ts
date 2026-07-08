export enum Telecom {
  SKT = 0,
  KT = 1,
  LGUP = 2,
}

export const TelecomItems = [
  {
    text: 'SKT',
    value: Telecom.SKT,
  },
  {
    text: 'KT',
    value: Telecom.KT,
  },
  {
    text: 'LG U+',
    value: Telecom.LGUP,
  },
]

export enum ERRORCODES_COMMON {
  SUCCESS = 0,
  ERROR = 1,
  ERROR_IMAGE_ALREADY_EXISTS = 4000003,
}

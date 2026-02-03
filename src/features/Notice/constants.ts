import type { FormSelectItem } from '@/shared/components/du-admin-ui/Form/select'

export enum NoticeContentsType {
  ON = 1,
  OFF = 0,
}

export const NoticeContentsTypeItems: FormSelectItem[] = [
  {
    text: 'ON',
    value: NoticeContentsType.ON,
  },
  {
    text: 'OFF',
    value: NoticeContentsType.OFF,
  },
]

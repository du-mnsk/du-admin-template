import 'dayjs/locale/ko'

import generatePicker from 'antd/es/date-picker/generatePicker'
import type { Dayjs } from 'dayjs'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'

export const DayjsDatePicker = generatePicker<Dayjs>(dayjsGenerateConfig)

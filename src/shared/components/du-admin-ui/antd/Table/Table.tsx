import '@/shared/components/du-admin-ui/antd/Table/Table.less'

import React from 'react'
import type { TableProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Table/Table.styles'

export const Table: React.FC<TableProps<any>> = (props) => {
  return <S.Table {...props} />
}

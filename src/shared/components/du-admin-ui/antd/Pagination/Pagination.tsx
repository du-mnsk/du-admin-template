import type { PaginationProps } from 'antd'

import * as S from '@/shared/components/du-admin-ui/antd/Pagination/Pagination.styles'

export const Pagination: React.FC<PaginationProps> = (props) => {
  return <S.Pagination {...props} />
}

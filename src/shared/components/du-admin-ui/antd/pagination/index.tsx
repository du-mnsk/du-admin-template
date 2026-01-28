import React from 'react'
import { Pagination, type PaginationProps } from 'antd'
import styled from 'styled-components'

export interface AntdPaginationProps extends PaginationProps {
  className?: string
}

export const AntdPagination: React.FC<AntdPaginationProps> = ({ className, ...props }) => {
  return <S.Pagination className={className} {...props} />
}

const S = {
  Pagination: styled(Pagination)``,
}
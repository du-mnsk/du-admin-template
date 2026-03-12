import React from 'react'
import { Tag, type TagProps } from 'antd'
import styled from 'styled-components'

export interface AntdTagProps extends TagProps {
  className?: string
}

export const AntdTag: React.FC<AntdTagProps> = ({ className, ...props }) => {
  return <S.Tag className={className} {...props} />
}

const S = {
  Tag: styled(Tag)``
}

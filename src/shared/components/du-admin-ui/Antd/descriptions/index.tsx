import React from 'react'
import { Descriptions, type DescriptionsProps } from 'antd'
import styled from 'styled-components'

export interface AntdDescriptionsProps extends DescriptionsProps {
  className?: string
}

export const AntdDescriptionsItem = Descriptions.Item

export const AntdDescriptions: React.FC<AntdDescriptionsProps> = (props) => {
  return <S.Descriptions {...props} />
}

const S = {
  Descriptions: styled(Descriptions)``
}
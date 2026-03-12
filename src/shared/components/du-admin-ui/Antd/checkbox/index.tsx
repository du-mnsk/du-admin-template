import React from 'react'
import { Checkbox, type CheckboxProps } from "antd"
import styled from "styled-components"

export interface AntdCheckboxProps extends CheckboxProps {
  className?: string
}

export const AntdCheckboxGroup = Checkbox.Group

export const AntdCheckbox: React.FC<AntdCheckboxProps> = ({ className, children, ...props }) => {
  return <S.Checkbox className={className} {...props}>{children}</S.Checkbox>
}

const S = {
  Checkbox: styled(Checkbox)``
}
import React from 'react'
import { Input, type InputProps, type InputRef } from 'antd'
import styled from 'styled-components'

export interface AntdInputProps extends InputProps {
  className?: string
}

export const AntdTextArea = Input.TextArea

// eslint-disable-next-line react/display-name
export const AntdInput = React.forwardRef<InputRef, AntdInputProps>(
  ({ className, children, ...props }, ref) => (
    <S.Input ref={ref} className={className} {...props}>
      {children}
    </S.Input>
  ),
)

const S = {
  Input: styled(Input)``
}

/** 사용중인 Input 속성들
 * defaultValue: string | number | readonly string[] | undefined
 * maxLength: number
 * showCount: boolean //입력 길이 표시 여부
 * prefix: string | undefined //입력 접두사
 * suffix: React.ReactNode //입력 접미사
 * readOnly: boolean //입력 읽기 전용 여부
 * onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
 * disabled: boolean //입력 비활성화 여부
 * onBlur: React.FocusEventHandler 
 * placeholder: string 
 * type: string //입력 타입(mdn input 문서 참조)
 */

/** 사용중인 TextArea 속성들
 * maxLength: number
 * showCount: boolean //글자수 표시 여부
 * placeholder: string
 * disabled: boolean //입력 비활성화 여부
 * style: CSSProperties
 * rows: number //줄 수
 */

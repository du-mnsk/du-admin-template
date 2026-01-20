import React, { useState } from 'react'

import * as S from '@/shared/components/du-admin-ui/VerificationCodeInput/VerificationCodeInput.styles'

interface VerificationCodeInputProps {
  autoFocus?: boolean
  validChars?: string
  length?: number
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onComplete?: (value: string) => void
  onlyNumber?: boolean
}

export const VerificationCodeInput: React.FC<VerificationCodeInputProps> = (props) => {
  const [values, setValues] = useState('')
  const handelChange = (value: string) => {
    if (props.onlyNumber) {
      const regex = /[^0-9]/g
      value = value.replace(regex, '')
    }

    setValues(value)

    props.onChange && props.onChange(value)
    value.length === props.length && props.onComplete && props.onComplete(value)
  }

  return (
    <S.CodeInput
      value={values}
      classNames={{
        container: 'container',
        character: 'character',
        characterInactive: 'character--inactive',
        characterSelected: 'character--selected',
      }}
      placeholder={''}
      {...props}
      onChange={handelChange}
    />
  )
}

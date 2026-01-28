import React, { useState } from 'react'
import VerificationInput from "react-verification-input";
import styled from 'styled-components'

import { FONT_SIZE, FONT_WEIGHT, media } from '@/styles/themes/constants'

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

const S = {
  CodeInput: styled(VerificationInput)`
    display: flex;
    gap: 0.625rem;

    .character {
      line-height: 5rem;
      font-size: ${FONT_SIZE.xxl};
      font-weight: ${FONT_WEIGHT.bold};
      color: var(--text-main-color);
      border: 3px solid var(--lightgrey);
      border-radius: 0.625rem;
      width: 3.4375rem;
      height: 5rem;
    }

    .character--inactive {
      border: 3px solid var(--lightgrey);
    }

    .character--selected {
      border: 3px solid var(--primary-color);
    }

    @media only screen and ${media.xs} {
      gap: 0.4375rem;
      .character {
        width: 2.5625rem;
        height: 3.75rem;
      }
    }

    @media only screen and ${media.md} {
      gap: 0.625rem;
      .character {
        width: 3.4375rem;
        height: 5rem;
      }
    }

    @media only screen and ${media.xl} {
      gap: 0.625rem;
      .character {
        width: 3.4375rem;
        height: 5rem;
      }
    }
  `
}
import React from 'react'
import styled from 'styled-components'

import { media } from '@/styles/themes/constants'

export interface ReferencesProps {
  year: number
}

export const References: React.FC<ReferencesProps> = ({ year }) => {
  return (
    <S.ReferencesWrapper>
      <S.Text>Copyright &copy; ${year} (주)데이터유니버스. All Rights Reserved. </S.Text>
    </S.ReferencesWrapper>
  )
}

const S = {
  ReferencesWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: nowrap;
    margin-top: 2rem;

    @media only screen and (${media.minSm}) {
      align-items: center;
    }

    @media only screen and (${media.minXl}) {
      flex-direction: row;
      justify-content: space-between;
    }
  `,
  Text: styled.span`
    display: flex;
    align-items: center;
    white-space: pre-wrap;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    @media only screen and (${media.minXl}) {
      margin-bottom: 0;
    }
  `
}
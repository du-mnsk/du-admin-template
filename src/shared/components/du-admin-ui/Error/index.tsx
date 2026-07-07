import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Typography } from 'antd'
import styled from 'styled-components'

import { BORDER_RADIUS, media } from '@/styles/themes/constants'

interface ErrorProps {
  img: string
  msg: string
}

export const Error: React.FC<ErrorProps> = ({ img, msg }) => {
  return (
    <S.Wrapper>
      <S.Image preview={false} src={img} />
      <S.ContentWrapper>
        <S.Title>common.oops</S.Title>
        <S.Text>{msg}</S.Text>
        <Link to="/" className="ant-btn ant-btn-link">
          error404.comeBack
        </Link>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.75rem 1.25rem;
    border-radius: ${BORDER_RADIUS};

    background-color: var(--background-color);

    @media only screen and (${media.md}) {
      padding: 2.5rem 6.25rem 6.25rem;
    }

    @media only screen and (${media.xl}) {
      flex-direction: row-reverse;
      justify-content: center;
      padding: 12.5rem 3.5rem;
    }
  `,
  Image: styled(Image)`
    margin-bottom: 4rem;

    @media only screen and (${media.xxl}) {
      margin-bottom: 0;
    }
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (${media.xl}) {
      margin-right: 7.5rem;
    }
  `,
  Title: styled(Typography.Text)`
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: 1rem;

    color: var(--text-main-color);

    @media only screen and (${media.md}) {
      font-size: 3rem;
      margin-bottom: 1.75rem;
    }

    @media only screen and (${media.xl}) {
      font-size: 4rem;
      margin-bottom: 2.25rem;
    }
  `,
  Text: styled(Typography.Text)`
    font-size: 0.875rem;
    margin-bottom: 1.25rem;

    @media only screen and (${media.md}) {
      font-size: 1.12rem;
      margin-bottom: 1.45rem;
    }

    @media only screen and (${media.xl}) {
      font-size: 1.5rem;
      margin-bottom: 1.8rem;
    }
  `,
}

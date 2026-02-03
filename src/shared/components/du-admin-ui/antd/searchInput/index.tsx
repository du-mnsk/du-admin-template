import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input, type InputRef, Space,Spin } from 'antd'
import type { SearchProps } from 'antd/lib/input'
import styled from 'styled-components'

import { FONT_SIZE, FONT_WEIGHT, media } from '@/styles/themes/constants'

interface AntdSearchInputProps extends SearchProps {
  className?: string
}

// eslint-disable-next-line react/display-name
export const AntdSearchInput = React.forwardRef<InputRef, AntdSearchInputProps>(
  ({ loading, ...props }, ref) => {
    return (
      <S.SearchInput
        ref={ref}
        prefix={<SearchOutlined />}
        suffix={
          <S.Space align="center">
            {loading && <Spin size="small" />}
          </S.Space>
        }
        {...props}
      />
    )
  },
)

const S = {
  SearchInput: styled(Input.Search)`
    & .ant-input-prefix {
      margin: 0.5rem;
    }

    & .ant-input-search-button {
      height: 3.54875rem;
      box-shadow: none;
    }

    &.ant-input-search-large .ant-input-search-button {
      height: 4.36125rem;
    }

    &.ant-input-search-small .ant-input-search-button {
      height: 2.4rem;
    }

    & input {
      font-weight: 600;
      background-color: var(--background-color);

      @media only screen and ${media.minMd} {
        font-size: 1rem;
      }

      &::placeholder {
        font-weight: 500;
      }
    }

    .ant-input-group-addon {
      min-width: 5.5rem;
      color: var(--primary-color);
      font-weight: ${FONT_WEIGHT.semibold};
      font-size: ${FONT_SIZE.lg};
    }

    .ant-input-search-button {
      &.ant-btn .anticon {
        color: var(--primary-color);
      }
      width: 100%;
      background-color: rgba(1, 80, 154, 0.05);
      border: 1px solid var(--border-color);
      color: var(--primary-color);
    }
  `,
  Space: styled(Space)`
    & > .ant-space-item:last-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `
}
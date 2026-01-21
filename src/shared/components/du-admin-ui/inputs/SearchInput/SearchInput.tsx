import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { type InputRef, Spin } from 'antd'

import type { InputProps } from '@/shared/components/du-admin-ui/antd/Input/Input'

import * as S from './SearchInput.styles'

interface SearchInputProps extends InputProps {
  loading?: boolean
  filter?: React.ReactNode
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => void
  enterButton?: React.ReactNode
  inputPrefixCls?: string
}

// eslint-disable-next-line react/display-name
export const SearchInput = React.forwardRef<InputRef, SearchInputProps>(
  ({ loading, filter, ...props }, ref) => {
    return (
      <S.SearchInput
        ref={ref}
        prefix={<SearchOutlined />}
        {...(filter && {
          suffix: (
            <S.Space align="center">
              {loading && <Spin size="small" />}
              {filter}
            </S.Space>
          ),
        })}
        {...props}
      />
    )
  },
)

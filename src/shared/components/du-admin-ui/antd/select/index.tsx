import React, { type ComponentProps } from 'react'
import { Select } from 'antd'
import type { RefSelectProps } from 'antd/lib/select'
import styled from 'styled-components'

import { formatCssSize } from '@/shared/utils/style'
import { BORDER_RADIUS, FONT_SIZE,FONT_WEIGHT } from '@/styles/themes/constants'

interface SelectStyleProps {
  $width?: number | string
}

export interface AntdSelectProps extends ComponentProps<typeof Select> {
  className?: string
  width?: number | string
}

export const AntdSelectOption = Select.Option

// eslint-disable-next-line react/display-name
export const AntdSelect = React.forwardRef<RefSelectProps, AntdSelectProps>(
  ({ className, width, children, ...props }, ref) => (
    <S.Select
      getPopupContainer={(triggerNode) => triggerNode}
      ref={ref}
      className={className}
      $width={width}
      {...props}
    >
      {children}
    </S.Select>
  ),
)

/** 사용중인 Select 속성들
 * allowClear: boolean //선택 초기화 여부
 * disabled: boolean //선택 비활성화 여부
 * mode: 'multiple' | 'tags' //다중 선택 모드 여부
 * loading: boolean //로딩 여부
 * listHeight: number //목록 높이
 * placeholder: string
 * style: CSSProperties
 * showSearch: boolean //검색 여부
 */

const S = {
  Select: styled(Select).withConfig({
    shouldForwardProp: (prop) => !['$width'].includes(prop),
  })<SelectStyleProps>`
    width: ${(props) => props.$width && formatCssSize(props.$width)};
    min-width: 100px;

    font-weight: ${FONT_WEIGHT.medium};

    &.ant-select-borderless {
      background: var(--secondary-background-color);

      border-radius: ${BORDER_RADIUS};
    }

    .ant-select-selection-placeholder {
      font-size: ${FONT_SIZE.xs};

      color: var(--text-main-color);
    }

    .ant-select-arrow {
      color: var(--text-main-color);
    }

    &.ant-select-multiple.ant-select-sm .ant-select-selection-item {
      height: 0.875rem;
      line-height: ${FONT_SIZE.xs};
      font-size: ${FONT_SIZE.xs};
      margin-top: 0.1875rem;
      margin-bottom: 0.1875rem;
    }

    &.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
      color: var(--disabled-color);
    }

    .ant-select-clear {
      color: var(--disabled-color);
    }
    .ant-select-selection-item-remove {
      color: var(--icon-color);
      &:hover {
        color: var(--icon-hover-color);
      }
    }
    .ant-select-item-option-disabled {
      color: var(--disabled-color);
    }
  `
}
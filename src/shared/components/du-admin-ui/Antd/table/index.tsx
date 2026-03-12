import '@/shared/components/du-admin-ui/Antd/table/Table.less'

import React from 'react'
import  { Table, type TableProps } from 'antd'
import styled from 'styled-components'

import { FONT_SIZE } from '@/styles/themes/constants'

export interface AntdTableProps<T> extends TableProps<T> {
  className?: string
}

export const AntdTable: React.FC<AntdTableProps<any>> = ({className, ...props}) => {
  return <S.Table className={className} {...props} />
}

const S = {
  Table: styled(Table)`
    & thead .ant-table-cell {
      color: var(--primary-color);
      font-size: ${FONT_SIZE.xs};
      line-height: 1.25rem;
      text-align: center;
      font-weight: bold;

      & .anticon {
        /*color: var(--primary-color);*/
      }
    }

    & tbody .ant-table-cell {
      color: var(--text-main-color);
      font-size: ${FONT_SIZE.xs};
      line-height: 1.25rem;
    }

    #member-message .ant-table-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      min-height: 53px;
    }

    #member-message td.ant-table-cell.text-overflow,
    #terms-history td.ant-table-cell.text-overflow {
      padding: 0 6px !important;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      display: -webkit-box;
      word-wrap: break-word;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      align-content: center;
    }

    & tbody .ant-table-cell img {
      height: 40px;
    }

    & tbody .ant-table-row-expand-icon {
      min-height: 1.25rem;
      min-width: 1.25rem;
      border-radius: 0.1875rem;
      margin-top: 0;
    }

    // Override default antd selector
    &
      .ant-table-thead
      > tr
      > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not(
        [colspan]
      )::before {
      background-color: var(--primary-color);
    }

    & .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next,
    .ant-pagination-item {
      min-width: 2.0625rem;
      height: 2.0625rem;
      line-height: 2.0625rem;
      border-radius: 0;
      font-size: ${FONT_SIZE.xs};
    }

    & .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link {
      border-radius: 0;
    }

    & .ant-checkbox-inner {
      border-radius: 0.1875rem;
      height: 1.25rem;
      width: 1.25rem;
      border: 1px solid var(--primary-color);
    }

    & .editable-row .ant-form-item-explain {
      position: absolute;
      top: 100%;
      font-size: 0.75rem;
    }

    .ant-table-column-sort {
      background-color: transparent;
    }

    .ant-pagination-item-container .ant-pagination-item-ellipsis {
      color: var(--disabled-color);
    }

    .ant-pagination-disabled {
      .ant-pagination-item-link,
      .ant-pagination-item a {
        color: var(--disabled-color);
      }
    }

    .ant-pagination.ant-pagination-disabled {
      .ant-pagination-item-link,
      .ant-pagination-item a {
        color: var(--disabled-color);
      }
    }

    & .ant-table-container {
      overflow-x: auto;
    }

    // 체크박스 크기 조절 [start]
    & thead .ant-table-selection-column {
      padding: 5px;

      & .ant-checkbox-inner {
        width: 1.6rem;
        height: 1.6rem;

        &::after {
          top: 44%;
          left: 27.5%;
          width: 6.71px;
          height: 12.14px;
        }
      }

      & .ant-checkbox-indeterminate > .ant-checkbox-inner::after {
        top: 50%;
        left: 50%;
        width: 14px;
        height: 14px;
      }
    }

    & tbody .ant-table-selection-column {
      padding: 5px;

      & .ant-checkbox-inner {
        width: 1.6rem;
        height: 1.6rem;

        &::after {
          top: 44%;
          left: 27.5%;
          width: 6.71px;
          height: 12.14px;
        }
      }
    }
    // 체크박스 크기 조절 [end]

    ${(props) => {
      const onRowImplementation = props.onRow && props.onRow({})
      if (onRowImplementation?.onClick) {
        return `
          tbody tr:hover {
            cursor: pointer;
          }
          `
      }
    }}
  `
}
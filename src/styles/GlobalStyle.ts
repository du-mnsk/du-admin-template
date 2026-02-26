import { createGlobalStyle } from 'styled-components'

import { resetCss } from '@/styles/resetCss'
import { BREAKPOINTS, FONT_SIZE, FONT_WEIGHT, media, mediaQuery } from '@/styles/themes/constants'

import {
  antOverrideCssVariables,
  commonThemeVariables,
  lightThemeVariables,
} from './themes/themeVariables'

export const GlobalStyle = createGlobalStyle`

  ${resetCss}
  body {
  font-family: "Pretendard Variable", Pretendard, sans-serif;
}
  [data-theme='light'],
  :root {
    ${lightThemeVariables}
  }


  :root {
    ${commonThemeVariables};
    ${antOverrideCssVariables};
  } 

  [data-no-transition] * {
    transition: none !important;
  }
  
  .range-picker {
    & .ant-picker-panels {
      @media only screen and (${mediaQuery.between(BREAKPOINTS.xs, BREAKPOINTS.md)}) {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .search-dropdown {
    box-shadow: var(--box-shadow);

    @media only screen and (${mediaQuery.between(BREAKPOINTS.xs, BREAKPOINTS.md)}) {
      width: calc(100vw - 16px);
      max-width: 600px;
    }

    @media only screen and (${media.md}) {
      max-width: 323px;
    }
  }

  a {
    color: var(--primary-color);
    &:hover,:active {
      color: var(--ant-primary-color-hover);
    }
  }
  
  .color-error-light {
    background-color: var(--notification-error-color);
  }

  .color-warning-light {
    background-color: var(--notification-warning-color);
  }

  .color-success-light {
    background-color: var(--notification-success-color);
  }
  
  .color-gray {
    background-color: var(--gray);
  }

  .color-gray-light {
    background-color: var(--background-base-color);
  }

  .d-none {
    display: none;
  }

  .ant-picker-cell {
    color: var(--text-main-color);
  }

  .ant-picker-cell-in-view .ant-picker-calendar-date-value {
    color: var(--text-main-color);
    font-weight: ${FONT_WEIGHT.bold};
  }

  .ant-picker svg {
    color: var(--text-light-color);
  }

  /* 테이블 가로 스크롤: Ant Design 5는 .ant-table-body에 스크롤 적용 */
  .ant-table-container,
  .ant-table-body {
    overflow-x: auto;
  }

  // notifications start
  .ant-notification-notice {
    width: 36rem;
    padding: 2rem;
    min-height: 6rem;
    
    .ant-notification-notice-with-icon .ant-notification-notice-message {
      margin-bottom: 0;
      margin-left: 2.8125rem;
    }

    .ant-notification-notice-with-icon .ant-notification-notice-description {
      margin-left: 4.375rem;
      margin-top: 0;
    }

    .ant-notification-notice-icon {
      font-size: 2.8125rem;
      margin-left: 0
    }

    .ant-notification-notice-close {
      top: 1.25rem;
      right: 1.25rem;
    }

    .ant-notification-notice-close-x {
      display: flex;
      font-size: 0.9375rem;
    }

    .notification-without-description {
      .ant-notification-notice-close {
        top: 1.875rem;
      }
      .ant-notification-notice-with-icon .ant-notification-notice-description  {
        margin-top: 0.625rem;
      }
    }
    
    .title {
      font-size: ${FONT_SIZE.xxl};
      height: 3rem;
      margin-left: 1.5rem;
      display: flex;
      align-items: center;
      font-weight: ${FONT_WEIGHT.bold};

      &.title-only {
        color: var(--text-main-color);
        font-size: ${FONT_SIZE.md};
        height: 2rem;
        line-height: 2rem;
        margin-left: 0.75rem;
        font-weight: ${FONT_WEIGHT.semibold};
      }
  }
  
    .description {
      color: #404040;
      font-size: ${FONT_SIZE.md};
      font-weight: ${FONT_WEIGHT.semibold};
      line-height: 1.375rem;
    }
  
    &.ant-notification-notice-success {
      border: 1px solid var(--success-color);
      background: var(--notification-success-color);
      
      .title {
        color: var(--success-color);
      }
    }
  
    &.ant-notification-notice-info {
      border: 1px solid var(--primary-color);
      background: var(--notification-primary-color);
  
      .title {
        color: var(--primary-color);
      }
    }
  
    &.ant-notification-notice-warning {
      border: 1px solid var(--warning-color);
      background: var(--notification-warning-color);
  
      .title {
        color: var(--warning-color);
      }
    }
  
    &.ant-notification-notice-error {
      border: 1px solid var(--error-color);
      background: var(--notification-error-color);
  
      .title {
        color: var(--error-color);
      }
    }
  
    .success-icon {
      color: var(--success-color);
    }
  
    .info-icon {
      color: var(--primary-color);
    }
  
    .warning-icon {
      color: var(--warning-color);
    }
  
    .error-icon {
      color: var(--error-color);
    }
  }
  
  .ant-menu-inline, .ant-menu-vertical {
    border-right: 0;
  }
  // notifications end

  .ant-table tfoot>tr>td, .ant-table tfoot>tr>th, .ant-table-tbody>tr>td, .ant-table-thead>tr>th {
    position: relative;
    padding: 12px;
    // white-space: nowrap;
  }
  
  .ant-table tfoot > tr > td {
    color: var(--text-main-color);
    font-size: 0.875rem;
    line-height: 1.25rem;
    background: var(--background-base-color);
  }
  
  .ant-table ant-table-row {
    background: var(--background-color);
  }

  .ant-upload.image-set .ant-upload {
    padding: 0;
  }
  
  .upload-dragger-item label {
    width: 100%
  }

  .upload-dragger-item label .ant-row-space-between {
    width: 100%
  }
  
  .ant-image-preview-img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    transform: scale3d(1,1,1);
    cursor: grab;
    user-select: none;
    pointer-events: auto;
    margin: auto;
  }
  
  .ant-image-preview-img-wrapper::before {
    display: inline-block;
    width: 1px;
    height: 6rem;
    margin-right: -1px;
    content: '';
  }
  
  .ant-table-pagination.ant-pagination {
    margin: 16px 0;
    align-items: center;
  }
  
  .ant-badge-status-text {
    font-size: ${FONT_SIZE.xs};
  }
  
  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0;
    min-height: 400px;
  }
  
  .ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    min-height: 400px;
  }
  
  
  textarea&.ant-input-disabled, textarea&.ant-input[disabled] {
    color: var(--disabled-color);
    // background-color: unset;
    cursor: not-allowed;
    opacity: 1;
    min-height: 300px;
  }

  .ant-select-status-success&.ant-select-has-feedback .ant-select-selector {
    border-color: var(--success-color) !important;
  }

  .ant-statistic-content {
    color: var(--heading-color);
    font-size: 16px;
  }

  .ant-descriptions-bordered .ant-descriptions-item-content, .ant-descriptions-bordered .ant-descriptions-item-label {
    padding: 3px 5px;
  }

  .ant-descriptions-bordered .ant-descriptions-item-label {
    background-color: var(--tertiary-color);
    font-weight: ${FONT_WEIGHT.bold};
    text-align: center;
  }
  
  .ant-descriptions-bordered .ant-descriptions-item-content {
    min-width: 50px;
  }

  .ant-btn {
    padding: 5px 12px;
  }

  .body-col-gap-20 > .ant-card-body > * {
    margin-top: 20px;
  }

`

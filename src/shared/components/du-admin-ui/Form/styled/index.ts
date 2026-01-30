import { Form, Typography } from 'antd'
import styled, { css } from 'styled-components'

import { FONT_SIZE, FONT_WEIGHT, media } from '@/styles/themes/constants'


export const FormTitleStyled = styled(Typography.Text)`
  font-weight: 700;
  font-size: 1rem;
  display: block;

  @media only screen and (${media.minMd}) {
    font-size: 1.125rem;
  }
`

interface FormItemProps {
  $isSuccess?: boolean
  $successText?: string
}

export const FormItem = styled(Form.Item)<FormItemProps>`
  & {
    @media (max-width: 767px) {
      font-size: ${FONT_SIZE.xs};
    }
  }

  .ant-input-affix-wrapper,
  .ant-input,
  .ant-picker {
    @media (max-width: 767px) {
      padding: 8px 10px;
      font-size: ${FONT_SIZE.xs};
    }
  }

  .ant-picker-input > input {
    @media (max-width: 767px) {
      font-size: ${FONT_SIZE.xs};
    }
  }

  .ant-form-item-label {
    @media (max-width: 767px) {
      padding: 0;
    }
  }

  .ant-form-item-label > label {
    width: 100%;
    color: var(--primary-color);
  }

  .ant-input-group-addon:first-of-type {
    font-weight: 600;
    width: 5rem;

    color: var(--primary-color);

    .anticon,
    svg {
      font-size: 1.25rem;
    }

    @media only screen and (${media.minMd}) {
      width: 5.5rem;
      font-size: 1.125rem;
    }

    @media only screen and (${media.minXl}) {
      font-size: 1.5rem;
    }
  }

  .ant-input-suffix .ant-btn {
    padding: 0;
    width: unset;
    height: unset;
    line-height: 1;
  }

  .ant-form-item-explain-error {
    display: flex;
    margin: 0.5rem 0;
    line-height: 1;

    &:before {
      content: 'X';
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      margin: 0 0.25rem;
      color: var(--text-secondary-color);
      background: var(--error-color);
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      font-size: 0.5rem;
    }

    &:not(:first-of-type) {
      display: none;
    }
  }

  ${(props) =>
    props.$isSuccess &&
    css`
      .ant-input {
        &,
        &:hover {
          border-color: var(--success-color);
        }
      }

      .ant-form-item-control-input {
        display: block;

        &::after {
          content: '✓ ${props.$successText}';
          color: var(--success-color);
        }
      }
    `}
  &.ant-form-item-has-feedback .ant-form-item-children-icon {
    display: none;
  }

  .ant-picker-suffix {
    font-size: 1rem;
  }

  .ant-select-arrow {
    font-size: 1rem;
    width: unset;
    height: unset;
    top: 50%;
  }

  .ant-select-selector {
    @media (max-width: 767px) {
      display: flex;
      align-items: center;
      height: 40px !important;
      font-size: ${FONT_SIZE.xs};
    }
  }

  &.ant-form-item-has-error .ant-input,
  &.ant-form-item-has-error .ant-input-affix-wrapper,
  &.ant-form-item-has-error .ant-input:hover,
  &.ant-form-item-has-error .ant-input-affix-wrapper:hover {
    border-color: var(--error-color);
  }

  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input-affix-wrapper,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input:hover,
  &.ant-form-item-has-success.ant-form-item-has-feedback .ant-input-affix-wrapper:hover {
    border-color: var(--success-color);
  }

  &.ant-form-item-with-help {
    margin-bottom: 32px;
  }
`

export const DraggerIconWrapper = styled.div`
  font-size: 4rem;
  color: var(--primary-color);
`
export const DraggerTitle = styled.div`
  font-size: ${FONT_SIZE.xl};
  font-weight: ${FONT_WEIGHT.bold};
`
export const DraggerDescription = styled.div`
  font-size: ${FONT_SIZE.md};
  padding: 0 1rem;
`

export const DraggerImage = styled.img`
  max-width: 100%;
  object-fit: contain;
  margin: 0px auto;
`

export const DraggerFileItem = styled.span`
  width: 100%;
  max-width: 720px;
`

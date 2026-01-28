import styled from 'styled-components'

import { Antd } from '@/shared/components/du-admin-ui/Antd'
import { type AntdInputProps } from '@/shared/components/du-admin-ui/Antd/input'
import { FormFieldWrapper, type FormFieldWrapperProps } from '@/shared/components/du-admin-ui/Form/fieldWrapper'

export interface FormInputProps extends FormFieldWrapperProps {
  childrenProps?: AntdInputProps
}

export const Suffix = styled.div`
  transition: all 0.5s ease;
  visibility: visible;
  opacity: 1;
`

/**
 * Form 필드를 감싸는 래퍼 컴포넌트
 * @param colSetProps - Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)
 * @param formItemProps - Form.Item에 전달할 props (children 포함)
 * @param childrenProps - Input에 전달할 props
 * @example
 * <Form.Input
 *   colSetProps={{ defaultColSize: 12 }}
 *   formItemProps={{ name: "input", label: "입력" }}
 *   childrenProps={{ placeholder: "입력하세요." }}
 * />
 */
const FormInput = (props: FormInputProps) => {
  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        hasFeedback: props.formItemProps?.hasFeedback ?? true,
        children: (
          <Antd.Input
            {...props.childrenProps}
            type={props.childrenProps?.type ?? 'text'}
            suffix={<Suffix>{props.childrenProps?.suffix}</Suffix>}
          />
        )
      }}
    />
  )
}

export default FormInput

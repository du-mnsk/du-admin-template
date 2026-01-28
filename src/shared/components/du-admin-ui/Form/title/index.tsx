import type { ReactNode } from "react";

import { FormFieldWrapper, type FormFieldWrapperProps } from "@/shared/components/du-admin-ui/Form/fieldWrapper";
import { FormTitleStyled } from "@/shared/components/du-admin-ui/Form/styled";

export interface FormTitleProps extends FormFieldWrapperProps {
  children: ReactNode | string
}

/**
 * Form 제목 컴포넌트
 * @param colSetProps - Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)
 * @param formItemProps - Form.Item에 전달할 props (children 포함)
 * @param children - 제목 텍스트
 * @example
 * <Form.Title children="제목" />
 * <Form.Title>
 *   <span>제목</span>
 * </Form.Title>
 */
const FormTitle = (props: FormTitleProps) => {
  return (
  <FormFieldWrapper
    colSetProps={{...props.colSetProps, defaultColSize: 24}}
    formItemProps={{
      ...props.formItemProps,
      children: <FormTitleStyled>{props.children}</FormTitleStyled>
      }}
    />
  )
}

export default FormTitle
import type { TextAreaProps as AntdTextAreaProps } from 'antd/lib/input'

import { Antd } from '@/shared/components/du-admin-ui/Antd'
import { FormFieldWrapper, type FormFieldWrapperProps } from '@/shared/components/du-admin-ui/Form/fieldWrapper'

export interface FormTextAreaProps extends FormFieldWrapperProps {
  childrenProps?: AntdTextAreaProps
}

/**
 * Form 필드를 감싸는 래퍼 컴포넌트
 * @param colSetProps - Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)
 * @param formItemProps - Form.Item에 전달할 props (children 포함)
 * @param childrenProps - TextArea에 전달할 props
 * @example
 * <Form.TextArea
 *   colSetProps={{ defaultColSize: 12 }}
 *   formItemProps={{ name: "textArea", label: "텍스트 영역" }}
 *   childrenProps={{ placeholder: "텍스트를 입력하세요.", rows: 4, showCount: true }}
 * />
 */
const FormTextArea = (props: FormTextAreaProps) => {
  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        children: (
          <Antd.TextArea
            {...props.childrenProps}
          />
        )
      }}
    />
  )
}

export default FormTextArea

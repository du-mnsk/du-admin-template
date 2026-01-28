import { Antd } from '@/shared/components/du-admin-ui/Antd'
import type { AntdInputProps } from '@/shared/components/du-admin-ui/Antd/input'
import { FormFieldWrapper, type FormFieldWrapperProps } from '@/shared/components/du-admin-ui/Form/fieldWrapper'

export interface FormColorPickerProps extends FormFieldWrapperProps {
  childrenProps?: AntdInputProps
}

/**
 * Form 필드를 감싸는 래퍼 컴포넌트
 * @param colSetProps - Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)
 * @param formItemProps - Form.Item에 전달할 props (children 포함)
 * @param childrenProps - Input에 전달할 props
 * @example
 * <Form.ColorPicker
 *   colSetProps={{ defaultColSize: 12 }}
 *   formItemProps={{ name: "color", label: "색상" }}
 *   childrenProps={{ placeholder: "색상을 선택하세요." }}
 * />
 */
const FormColorPicker = (props: FormColorPickerProps) => {
  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        children: (
          <Antd.Input
            type="color"
            {...props.childrenProps}
            style={{ padding: 0, ...props.childrenProps?.style }}
          />
        ),
      }}
    />
  )
}

export default FormColorPicker

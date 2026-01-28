import { Antd } from '@/shared/components/du-admin-ui/Antd'
import type { AntdDatePickerProps } from '@/shared/components/du-admin-ui/Antd/datePicker'
import { FormFieldWrapper, type FormFieldWrapperProps } from '@/shared/components/du-admin-ui/Form/fieldWrapper'

export interface FormDatePickerProps extends FormFieldWrapperProps {
  childrenProps?: AntdDatePickerProps
}

/**
 * Form 필드를 감싸는 래퍼 컴포넌트
 * @param colSetProps - Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)
 * @param formItemProps - Form.Item에 전달할 props (children 포함)
 * @param childrenProps - DatePicker에 전달할 props
 * @example
 * <Form.DatePicker
 *   colSetProps={{ defaultColSize: 12 }}
 *   formItemProps={{ name: "date", label: "날짜" }}
 *   childrenProps={{ format: 'YYYY-MM-DD HH:mm' }}
 * />
 */
const FormDatePicker = (props: FormDatePickerProps) => {
  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        hasFeedback: props.formItemProps?.hasFeedback ?? true,
        children: (
          <Antd.DatePicker
            {...props.childrenProps}
            allowClear={!props.formItemProps?.required}
            format={props.childrenProps?.format ?? 'YYYY-MM-DD HH:mm'}
            style={{ width: '100%', ...props.childrenProps?.style }}
            inputReadOnly
          />
        ),
      }}
    />
  )
}

export default FormDatePicker

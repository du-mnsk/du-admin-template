import { Antd } from '@/shared/components/du-admin-ui/Antd'
import type { AntdSwitchProps } from '@/shared/components/du-admin-ui/Antd/switch'
import { FormFieldWrapper, type FormFieldWrapperProps } from '@/shared/components/du-admin-ui/Form/fieldWrapper'

export interface FormSwitchProps extends FormFieldWrapperProps {
  childrenProps?: AntdSwitchProps
}

/**
 * Form 필드를 감싸는 래퍼 컴포넌트
 * @param colSetProps - Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)
 * @param formItemProps - Form.Item에 전달할 props (children 포함)
 * @param childrenProps - Switch에 전달할 props
 * @example
 * <Form.Switch
 *   colSetProps={{ defaultColSize: 12 }}
 *   formItemProps={{ name: "switch", label: "스위치" }}
 *   childrenProps={{ defaultChecked: true, checkedChildren: "On", unCheckedChildren: "Off" }}
 * />
 */
const FormSwitch = (props: FormSwitchProps) => {
  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        valuePropName: props.formItemProps?.valuePropName ?? 'checked',
        children: (
          <Antd.Switch
            {...props.childrenProps}
          />
        )
      }}
    />
  )
}

export default FormSwitch

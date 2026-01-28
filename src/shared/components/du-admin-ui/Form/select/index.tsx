import { Antd } from '@/shared/components/du-admin-ui/Antd'
import type { AntdSelectProps } from '@/shared/components/du-admin-ui/Antd/select'
import { FormFieldWrapper, type FormFieldWrapperProps } from '@/shared/components/du-admin-ui/Form/fieldWrapper'

export interface FormSelectItem {
  text: string
  value: string | number | boolean
  disabled?: boolean
}

export interface FormSelectProps extends FormFieldWrapperProps {
  childrenProps?: AntdSelectProps
  items?: FormSelectItem[]
}

/**
 * Form 필드를 감싸는 래퍼 컴포넌트
 * @param colSetProps - Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)
 * @param formItemProps - Form.Item에 전달할 props (children 포함)
 * @param childrenProps - Select에 전달할 props
 * @param items - Select 옵션 목록
 * @example
 * <Form.Select
 *   colSetProps={{ defaultColSize: 12 }}
 *   formItemProps={{ name: "select", label: "선택" }}
 *   childrenProps={{ placeholder: "선택하세요." }}
 *   items={[
 *     { text: "옵션1", value: "option1" },
 *     { text: "옵션2", value: "option2" },
 *   ]}
 * />
 */
const FormSelect = (props: FormSelectProps) => {
  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        hasFeedback: props.formItemProps?.hasFeedback ?? true,
        children: (
          <Antd.Select
            {...props.childrenProps}
          >
            {props.items?.map((item, index) => (
              <Antd.SelectOption value={item.value} key={index} disabled={item.disabled}>
                {item.text}
              </Antd.SelectOption>
            ))}
          </Antd.Select>
        ),
      }}
    >
    </FormFieldWrapper>
  )
}

export default FormSelect

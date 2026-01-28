import { Radio, type RadioGroupProps } from 'antd'

import { FormFieldWrapper, type FormFieldWrapperProps } from '@/shared/components/du-admin-ui/Form/fieldWrapper'

export interface FormRadioItem {
  text: string
  value: string | number | boolean | null
}

export interface FormRadioProps extends FormFieldWrapperProps {
  childrenProps?: RadioGroupProps
  items?: FormRadioItem[]
}

/**
 * Form 라디오 컴포넌트
 * @param props - FormRadioProps
 * @example
 * <Form.Radio
 *   colSetProps={{ defaultColSize: 12 }}
 *   formItemProps={{ name: "radio", label: "라디오" }}
 *   childrenProps={{ defaultValue: "radio1" }}
 *   items={[
 *     { text: "라디오 1", value: "radio1" },
 *     { text: "라디오 2", value: "radio2" },
 *     { text: "라디오 3", value: "radio3" },
 *   ]}
 * />
 */
const FormRadio = (props: FormRadioProps) => {
  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        children: (
          <Radio.Group {...props.childrenProps}>
            {props.items?.map((item, index) => (
              <Radio key={index} value={item.value}>
                {item.text}
              </Radio>
            ))}
          </Radio.Group>
        )
      }}
    />
  )
}

export default FormRadio

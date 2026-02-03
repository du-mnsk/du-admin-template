import { Col, Row } from "antd";
import type { CheckboxGroupProps } from "antd/lib/checkbox";

import { Antd } from "@/shared/components/du-admin-ui/Antd";
import { FormFieldWrapper, type FormFieldWrapperProps } from "@/shared/components/du-admin-ui/Form/fieldWrapper";

export interface FormCheckboxItem {
  label: string
  value: string | number | boolean | null
}

export interface FormCheckboxProps extends FormFieldWrapperProps {
  childrenProps?: CheckboxGroupProps
  items?: FormCheckboxItem[]
  span?: number
}

/**
 * Form 필드를 감싸는 래퍼 컴포넌트
 * @param colSetProps - Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)
 * @param formItemProps - Form.Item에 전달할 props (children 포함)
 * @param childrenProps - CheckboxGroup에 전달할 props
 * @param items - Checkbox 아이템 배열
 * @param span - Checkbox 아이템 간격
 * @example
 * <Form.Checkbox
 *   colSetProps={{ defaultColSize: 12 }}
 *   formItemProps={{ name: "checkbox", label: "체크박스" }}
 *   childrenProps={{ defaultValue: [1, 2] }}
 *   items={[{ label: "체크박스1", value: 1 }, { label: "체크박스2", value: 2 }]}
 *   span={4}
 * />
 */
const FormCheckbox = (props: FormCheckboxProps) => {
  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        children: (
          <Antd.CheckboxGroup {...props.childrenProps}>
            {props.span ? 
              <Row>
                {props.items?.map((item, index) => (
                  <Col key={index} span={props.span}>
                    <Antd.Checkbox value={item.value}>{item.label}</Antd.Checkbox>
                  </Col>
                ))}
              </Row>
              :
              <>
                {props.items?.map((item, index) => (
                  <Antd.Checkbox key={index} value={item.value}>{item.label}</Antd.Checkbox>
                ))}
              </>
            }
          </Antd.CheckboxGroup>
        )
      }}
    />
  )
}

export default FormCheckbox
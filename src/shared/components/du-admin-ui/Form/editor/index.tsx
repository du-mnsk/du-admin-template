import Editor from '@/shared/components/du-admin-ui/Editor'

import { FormFieldWrapper, type FormFieldWrapperProps } from '../fieldWrapper'

export type FormEditorProps = FormFieldWrapperProps

/**
 * Form 에디터 컴포넌트
 * @param props - FormEditorProps
 * @example
 * <Form.Editor
 *   colSetProps={{ defaultColSize: 24 }}
 *   formItemProps={{ name: "editor", label: "에디터" }}
 * />
 */
const FormEditor = (props: FormEditorProps) => {
  return (
    <FormFieldWrapper
      colSetProps={props.colSetProps}
      formItemProps={{
        ...props.formItemProps,
        children: <Editor />,
      }}
    />
  )
}

export default FormEditor

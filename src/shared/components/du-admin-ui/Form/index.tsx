import * as React from 'react'
import { type ComponentProps } from 'react'
import { Form as AntdForm, Modal,Row } from 'antd'
import { type ValidateErrorEntity } from 'rc-field-form/lib/interface'

import FormCheckbox from '@/shared/components/du-admin-ui/Form/checkbox'
import FormColorPicker from '@/shared/components/du-admin-ui/Form/colorPicker'
import FormDatePicker from '@/shared/components/du-admin-ui/Form/datePicker'
import FormEditor from '@/shared/components/du-admin-ui/Form/editor'
import FormInput from '@/shared/components/du-admin-ui/Form/input'
import FormRadio from '@/shared/components/du-admin-ui/Form/radio'
import FormSelect from '@/shared/components/du-admin-ui/Form/select'  
import { FormItem } from '@/shared/components/du-admin-ui/Form/styled'
import FormSwitch from '@/shared/components/du-admin-ui/Form/switch'
import FormTextArea from '@/shared/components/du-admin-ui/Form/textArea'
import FormTitle from '@/shared/components/du-admin-ui/Form/title'
import FormUploadCertFile from '@/shared/components/du-admin-ui/Form/uploadCertFile'
import FormUploadDragger from '@/shared/components/du-admin-ui/Form/uploadDragger'
import FormUploadReplaceDragger from '@/shared/components/du-admin-ui/Form/uploadReplaceDragger'
import { notificationController } from '@/shared/utils/notificationController'

export interface FormInterface<T> extends React.FC<T> {
  Checkbox: typeof FormCheckbox
  ColorPicker: typeof FormColorPicker
  DatePicker: typeof FormDatePicker
  Editor: typeof FormEditor
  Input: typeof FormInput
  Item: typeof FormItem
  Radio: typeof FormRadio
  Select: typeof FormSelect
  Switch: typeof FormSwitch
  TextArea: typeof FormTextArea
  Title: typeof FormTitle
  UploadDragger: typeof FormUploadDragger
  UploadReplaceDragger: typeof FormUploadReplaceDragger
  UploadCertFile: typeof FormUploadCertFile
  useForm: typeof AntdForm.useForm
  useWatch: typeof AntdForm.useWatch
}

export type FormProps = Omit<ComponentProps<typeof AntdForm>, 'onFinish'> & {
  footer?: React.ReactElement
  onFinish?: (values: any) => void
  confirmFinish?: boolean
  isLoading?: boolean
  onCancel?: () => void
}

const Form: FormInterface<FormProps> = ({
  form,
  isLoading = false,
  children,
  onFinishFailed,
  layout = 'vertical',
  confirmFinish = true,
  footer,
  ...props
}) => {
  const [formDefault] = Form.useForm()
  const currentForm = form || formDefault

  const onCancel = () => {
    currentForm?.resetFields()
    props.onCancel && props.onCancel()
  }

  const onFinish = (values: any) => {
    if (confirmFinish) {
      Modal.confirm({
        title: '알림',
        content: '저장하시겠습니까?',
        centered: true,
        onOk: () => {
          props.onFinish && props.onFinish(values)
        },
      })
    } else {
      props.onFinish && props.onFinish(values)
    }
  }

  const onFinishFailedDefault = (error: ValidateErrorEntity<unknown>) => {
    const eleName = error.errorFields[0].name[0]
    const formName = props.name

    if (eleName && formName) {
      const targetId = `${formName}_${eleName}`
      document.getElementById(targetId)?.focus()
    }

    notificationController.error({
      message: '저장 실패',
      description: error.errorFields[0].errors,
    })
  }

  return (
    <AntdForm
      onFinishFailed={onFinishFailed || onFinishFailedDefault}
      layout={layout}
      form={currentForm}
      {...props}
      onFinish={onFinish}
    >
      <Row gutter={{ xs: 10, md: 15, xl: 30 }}>{children}</Row>
      {!!footer && (
        <Row gutter={[10, 10]} wrap={false} justify={'end'}>
          {footer}
        </Row>
      )}
    </AntdForm>
  )
}

Form.Checkbox = FormCheckbox
Form.ColorPicker = FormColorPicker
Form.DatePicker = FormDatePicker
Form.Editor = FormEditor
Form.Input = FormInput
Form.Item = FormItem
Form.Radio = FormRadio
Form.Select = FormSelect
Form.Switch = FormSwitch
Form.TextArea = FormTextArea
Form.Title = FormTitle
Form.UploadDragger = FormUploadDragger
Form.UploadReplaceDragger = FormUploadReplaceDragger
Form.UploadCertFile = FormUploadCertFile
Form.useForm = AntdForm.useForm
Form.useWatch = AntdForm.useWatch

export default Form

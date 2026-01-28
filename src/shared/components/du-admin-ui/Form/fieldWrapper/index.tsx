import React from 'react'
import { Col, type FormItemProps } from 'antd'

import Form from '@/shared/components/du-admin-ui/Form'

// mdCol 사이즈 종류
export type ColSize = 'fill' | 'flat' | 'tiny' | number

// mdCol 사이즈 변환 유틸리티 함수
export const transformMdCols = (colSize?: ColSize): number => {
  if (colSize === undefined) {
    return 12 // 기본값
  }
  
  if (typeof colSize === 'number') {
    return colSize
  }
  
  switch (colSize) {
    case 'fill':
      return 24
    case 'flat':
      return 6
    case 'tiny':
      return 3
    default:
      return 12
  }
}

export interface ColSetProps {
  defaultColSize?: ColSize // 기본사이즈
  xsColSize?: number // 화면 xs사이즈
  colOffset?: number // 왼쪽 여백
  style?: React.CSSProperties
}

// FormFieldWrapper Props 인터페이스
export interface FormFieldWrapperProps {
  colSetProps?: ColSetProps
  formItemProps?: FormItemProps
  className?: string
}

/**
 * Form 필드를 감싸는 래퍼 컴포넌트
 * @param colSetProps - Col 레이아웃 설정 (defaultColSize, xsColSize, colOffset)
 * @param formItemProps - Form.Item에 전달할 props (children 포함)
 * @example
 * <FormFieldWrapper
 *   colSetProps={{ defaultColSize: 12 }}
 *   formItemProps={{
 *     name: "email",
 *     label: "이메일",
 *     children: <Input />
 *   }}
 * />
 */
export const FormFieldWrapper = ({
  colSetProps,
  formItemProps = {},
  className,
}: FormFieldWrapperProps) => {
  const mdColsSize = transformMdCols(colSetProps?.defaultColSize)

  return (
    <Col xs={colSetProps?.xsColSize || 24} md={mdColsSize} offset={colSetProps?.colOffset} style={colSetProps?.style}>
      <Form.Item {...formItemProps} className={className} />
    </Col>
  )
}

/** 사용중인 Form.Item 속성들
 * dependencies: NamePath[] //폼 필드 의존성 목록. 상위 필드가 업데이트될 때 해당 필드도 자동으로 업데이트 및 유효성 검사를 수행.
 * hasFeedback: boolean //폼 필드 검증 피드백 여부
 * help: React.ReactNode //화면에 표시되는 도움말
 * hidden: boolean //화면에 숨김 여부
 * label: string | React.ReactNode //화면에 표시되는 텍스트
 * name: string //폼 필드명
 * required: boolean //폼 필드 필수 여부
 * rules: Rule[] //폼 필드 검증 규칙
 * tooltip: string //화면에 표시되는 툴팁
 * valuePropName: string //value대신 값을 전달받을 prop의 이름
 */
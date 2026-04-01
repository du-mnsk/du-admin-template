/**
 * UI 템플릿 공용 컴포넌트.
 * - 실제 페이지에서 import해서 사용.
 *
 * ## 사용 방법
 *
 * ### 1) TemplateCard + 직접 Row/Col (기존 페이지처럼)
 * ```tsx
 * import { TemplateCard, NoticeBox } from '@/shared/components/ui-template'
 *
 * <TemplateCard title="제목">
 *   <Row><Col span={24}><NoticeBox>안내</NoticeBox></Col></Row>
 *   <Row><Col span={12}>...</Col><Col span={12}>...</Col></Row>
 * </TemplateCard>
 * ```
 *
 * ### 2) TemplateCard + TemplateLayout (설정으로 레이아웃)
 * ```tsx
 * import { TemplateCard, TemplateLayout } from '@/shared/components/ui-template'
 * import type { LayoutConfig } from '@/shared/components/ui-template'
 *
 * const layout: LayoutConfig = {
 *   rows: [
 *     { cols: [ { span: 12, form: { type: 'input', name: 'a', label: '필드 A' } }, { span: 12, form: { type: 'select', name: 'b', label: '필드 B' } } ] },
 *     { cols: [ { span: 24, form: { type: 'textarea', name: 'memo', label: '메모' } } ] },
 *   ],
 * }
 *
 * <TemplateCard title="상세">
 *   <Form form={form} ...>
 *     <Row><TemplateLayout config={layout} form={form} /></Row>
 *   </Form>
 * </TemplateCard>
 * ```
 */
export { NoticeBox, NoticeBoxDefault } from './NoticeBox'
export { TemplateCard } from './TemplateCard'
export type { TemplateLayoutProps } from './TemplateLayout'
export { TemplateLayout } from './TemplateLayout'
export type { ColConfig, FormFieldType, LayoutConfig, RowConfig } from './types'

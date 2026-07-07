import { LinkOutlined } from '@ant-design/icons'
import { Space, Tooltip, Typography } from 'antd'

import { ImagePreviewButton } from '@/shared/components/du-admin-ui/ImagePreviewButton'
import { renderCommas } from '@/shared/utils/number'

/**
 * URL 텍스트와 새 창 열기 링크 아이콘을 함께 렌더링
 *
 * @param value - 표시할 URL (클릭 시 window.open)
 * @returns Space + LinkOutlined React 요소
 * @example
 * renderLinkIcon('https://example.com/page')
 * @usage
 * - features/service/contentMsg/pages/detail
 * - features/service/contentMsg/pages/preview
 * - features/partner/channel/pages (단축 URL)
 */
export const renderLinkIcon = (value: string) => (
  <Space>
    {value}
    <LinkOutlined onClick={() => window.open(value)} />
  </Space>
)

/**
 * Ant Design Typography copyable로 복사 가능한 텍스트 렌더링
 *
 * @param text - 표시 및 복사할 문자열
 * @returns copyable Paragraph React 요소
 * @example
 * // Table column render prop
 * <Table.Column render={renderCopyable} />
 */
// renderCopyableText
export const renderCopyableText = (text: string) => {
  return (
    <Typography.Paragraph style={{ margin: 0 }} copyable>
      {text}
    </Typography.Paragraph>
  )
}

/**
 * 천 단위 구분 + copyable로 숫자 렌더링
 *
 * @param value - 표시할 숫자 (화면: 콤마 포맷, 복사: 원본 숫자 문자열)
 * @returns copyable Paragraph React 요소
 * @example
 * renderCopyableNumber(1234567) // 화면 '1,234,567', 복사 '1234567'
 * @usage features/member/refund/pages (환불 목록 테이블 컬럼)
 */
// renderCopyableCommaNumber 수정?
export const renderCopyableNumber = (value: number) => {
  return (
    <Typography.Paragraph style={{ margin: 0 }} copyable={{ text: String(value) }}>
      {renderCommas(value)}
    </Typography.Paragraph>
  )
}

/**
 * 긴 텍스트를 Tooltip으로 감싸 전체 내용 표시
 *
 * @param text - 셀에 표시할 텍스트 (hover 시 동일 내용 tooltip)
 * @returns Tooltip React 요소
 * @example
 * // Table column render prop
 * <Table.Column render={renderTooltip} />
 * @usage
 * - features/cs/customerMsg/pages (고객 메시지 목록)
 * - features/member/search/components/TransMsgHistory (전송 메시지 이력)
 */
export const renderTooltip = (text: string) => {
  return (
    <Tooltip placement="bottomLeft" title={text}>
      {text}
    </Tooltip>
  )
}

/**
 * 이미지 서버 경로를 미리보기 버튼으로 렌더링
 *
 * @param path - 이미지 상대 경로
 * @returns ImagePreviewButton React 요소
 * @example
 * renderImgPath('/uploads/banner.png')
 * @usage
 * - features/service/contentMsg/pages/detail, preview
 * - features/service/contents/pages/detail
 */
export const renderImgPath = (path: string) => {
  return <ImagePreviewButton image={path} label={path} />
}

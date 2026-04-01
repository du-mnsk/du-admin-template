import styled from 'styled-components'

export interface NoticeBoxProps {
  children: React.ReactNode
  className?: string
}

const StyledNoticeBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 14px;
  background-color: #fafafa;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 500;
  p {
    color: #333;
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  ul {
    padding-left: 8px;
    display: flex;
    flex-flow: column;
    gap: 4px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    li {
      position: relative;
      padding-left: 8px;
      color: #555;
      &::after {
        display: inline-block;
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: #555;
      }
    }
  }
`

export function NoticeBox({ children, className }: NoticeBoxProps) {
  return <StyledNoticeBox className={className}>{children}</StyledNoticeBox>
}

const defaultContent = (
  <>
    <p>안내사항이 있을 경우 이 박스로 노출합니다.</p>
    <ul>
      <li>여러 줄의 안내 문구를 넣을 수 있습니다.</li>
      <li>필요 시 목록 형태로 구분하여 작성합니다.</li>
    </ul>
    <p>추가 안내가 있다면 아래와 같이 구분해서 표시할 수 있습니다.</p>
    <ul>
      <li>검색/필터/정렬은 컬럼 헤더를 활용합니다.</li>
      <li>컬럼이 많을 경우 가로 스크롤이 생깁니다.</li>
    </ul>
  </>
)

export function NoticeBoxDefault() {
  return <NoticeBox>{defaultContent}</NoticeBox>
}

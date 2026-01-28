import styled from 'styled-components'

const Loading = () => {
  return (
    <S.RouterLoaderLoadingWrap>
      <S.Spinner $color={`var(--white)`} />
    </S.RouterLoaderLoadingWrap>
  )
}
export default Loading

const S = {
  RouterLoaderLoadingWrap: styled.div`
    display: flex;
    flex-direction: column;
    z-index: 9998;
    width: 100%;
    overflow: hidden;
    height: calc(var(--vh, 1vh) * 100);
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
  `,
  Spinner: styled.div<{ $color?: string; }>`
    display: flex;
    margin: 0 auto;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;

    &:before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 5px solid ${(props) => props.$color ?? 'var(--black-10)'};
      animation: prixClipFix 2s linear infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes prixClipFix {
      0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
      }
      25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
      }
      50% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
      }
      75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
      }
      100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
      }
    }
  `
}



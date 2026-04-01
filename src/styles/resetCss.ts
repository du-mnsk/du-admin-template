import { css } from 'styled-components'

export const resetCss = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
    background: none;
    vertical-align: baseline;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 16px;
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', Arial, Helvetica, sans-serif;
    background: #fff;
    color: #222;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  main,
  nav,
  section,
  article,
  aside,
  header,
  footer,
  address,
  figure,
  figcaption,
  details,
  summary {
    display: block;
  }

  ul,
  ol,
  li,
  dl,
  dd,
  dt {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    background: transparent;
    cursor: pointer;

    &:hover,
    &:active {
      outline: none;
      text-decoration: underline;
    }
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background: none;
    border: none;
    outline: none;
    color: inherit;
    box-shadow: none;
    appearance: none;
  }

  textarea {
    resize: none;
    border-radius: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
    background: none;
  }
  p,
  ul,
  ol,
  li,
  dl,
  dd,
  dt,
  div,
  span,
  strong,
  em,
  b,
  i,
  small,
  cite,
  code,
  pre,
  kbd,
  samp,
  xmp,
  tt,
  var,
  mark,
  ruby,
  rt,
  rp,
  bdi,
  bdo,
  details,
  summary,
  dialog,
  menuitem,
  optgroup,
  option,
  output,
  progress,
  meter,
  time,
  audio,
  video,
  source,
  track,
  canvas,
  iframe,
  embed,
  object,
  param,
  picture,
  svg,
  math,
  code,
  kbd,
  samp,
  xmp,
  tt,
  var,
  mark,
  ruby,
  rt,
  rp,
  bdi,
  bdo,
  details,
  summary,
  dialog,
  menuitem,
  optgroup,
  option,
  output,
  progress,
  meter,
  time,
  audio,
  video,
  source,
  track,
  canvas,
  iframe,
  embed,
  object,
  param,
  picture,
  svg,
  math,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  th,
  td {
    padding: 0;
    font-weight: normal;
    vertical-align: middle;
    text-align: left;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 12px;

    border: 2px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::selection {
    background: #cce1ff;
    color: #222;
  }

  input:focus,
  textarea:focus,
  select:focus,
  button:focus {
    outline: none;
    box-shadow: none;
  }

  address {
    font-style: normal;
  }
`

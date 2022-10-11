import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  :root {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
    font-weight: 400;
    --toastify-toast-width: 400px;

  }
  h1, h2, h3, h4, h5, h6 {
    font-size: revert;
    /* font-weight: revert; */
  }
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  ol, ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    &:link,
    &:visited {
      color: inherit;
    }
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

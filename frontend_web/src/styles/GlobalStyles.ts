import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  body {
    margin: 0;
    padding: 0;
  }

  *, button, input {
    border: 0;
    background: none;
  }

  html {
    background-color: var(--primary);
  }

  :root {
    --primary: #f0f0f0;
    --secondary: #3F51B5;
    --thirty: #F6F7FB;
    --gray: #7A7A7A;
    --dark: #595761;
    --remove: #C0392B;
  }
`;

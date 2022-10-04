import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    list-style: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    display: flex;
    width: 100%;
    height: 100%;
    width: 100vw;
    height: 100vh;

    padding: 0;
  }

  *, button, input {
    border: 0;
    background: none;
  }


  html {
    display: flex;

    width: 100%;
    height: 100%;
    background-color: var(--primary);
  }

  div {
    display: flex;
    width: 100%;
  }

  :root {
    --white: #fff;
    --primary: #f0f0f0;
    --yellow: #FCBC2F;
    --text-gray: rgba(0, 0, 0, 0.6);

    --thin-stroke: rgba(0, 0, 0, 0.3);

    --thirty: #F6F7FB;
    --gray: #7A7A7A;
    --dark: #595761;
    --remove: #C0392B;
  }
`;

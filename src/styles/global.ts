import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    overflow: auto;
    color: #463535;
    background: linear-gradient(360deg, rgba(150, 139, 223, 0) 29%, rgba(150, 139, 223, 0.25) 93.34%) no-repeat;
    background-size: contain;
    -webkit-font-smoothing: antialiased !important;
    font-family: Roboto, sans-serif;
  }

  body, button, input, text-area {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    background: transparent;
  }
`;

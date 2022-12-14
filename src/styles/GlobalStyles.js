import { css } from '@emotion/react';


export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
   font-family: Proxima Nova, sans-serif;
    background: white;
    min-height: 100vh;

    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
 
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: Proxima Nova;
  }
`;

// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica Neue', sans-serif;
    background-color: #ffffff;
    color: #333333;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;

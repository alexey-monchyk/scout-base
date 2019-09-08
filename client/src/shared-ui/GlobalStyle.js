import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    padding-top: 6rem;
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    font-family: 'Muli', sans-serif;
  }
`;

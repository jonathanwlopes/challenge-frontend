import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }
  body,
   input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.default};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

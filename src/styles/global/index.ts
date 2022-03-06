import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
  
  body,
   input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.default};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    outline-color: ${({ theme }) => theme.colors.outlineColor};
  }

  div, article {
    outline-color: ${({ theme }) => theme.colors.outlineColor};
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

  .sr-only {
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

  .swiper-pagination-bullet {
    opacity: unset;
    background: ${({ theme }) => theme.colors.bullets};
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.bulletsActive};
    width: 10px;
    height: 10px;
  }

  @media screen and (max-width: 1240px) {
    .swiper-pagination-bullet-active, .swiper-pagination-bullet{
    width: 7px;
    height: 7px;
    }
  }
`

import { ThemeProvider } from "styled-components"
import { ProductContextProvider } from "./context/Product"
import { Header } from "./components"
import { Home } from "./Pages"
import { theme } from "./styles/theme/theme"
import { GlobalStyle } from "./styles/global"
import "swiper/css/bundle"

export const App = () => {
  return (
    <ProductContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Home />
      </ThemeProvider>
    </ProductContextProvider>
  )
}

export default App

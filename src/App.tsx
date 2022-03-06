import { ThemeProvider } from "styled-components"
import { ProductContextProvider } from "./context/Product"
import { CartContextProvider } from "./context/Cart"
import { Header } from "./components"
import { Home } from "./Pages"
import { theme } from "./styles/theme/theme"
import { GlobalStyle } from "./styles/global"
import "swiper/css/bundle"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Home />
          <Footer />
        </ThemeProvider>
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App

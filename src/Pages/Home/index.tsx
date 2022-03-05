import * as S from "./styles"
import { banners } from "../../mocks/banners"
import { Newsletter, Shelf, SliderBanner } from "../../components"
import { Footer } from "../../components/Footer"

export const Home = () => {
  return (
    <S.Container>
      <SliderBanner slides={banners} />
      <Shelf />
      <Newsletter />
      <Footer />
    </S.Container>
  )
}

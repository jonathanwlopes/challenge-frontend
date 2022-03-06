import * as S from "./styles"
import { banners } from "../../mocks/banners"
import { Newsletter, Shelf, SliderBanner } from "../../components"

export const Home = () => {
  return (
    <S.Container>
      <S.TitleSEO className="sr-only">Corebiz - challenge frontend</S.TitleSEO>
      <SliderBanner slides={banners} />
      <Shelf />
      <Newsletter />
    </S.Container>
  )
}

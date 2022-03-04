import { Shelf, SliderBanner } from "../../components"
import { banners } from "../../mocks/banners"
import * as S from "./styles"

export const Home = () => {
  return (
    <S.Container>
      <SliderBanner slides={banners} />
      <Shelf />
    </S.Container>
  )
}

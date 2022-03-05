import { Contact } from "./Contact"
import { Localization } from "./Localization"
import { Partners } from "./Partners"
import * as S from "./styles"

export const Footer = () => {
  return (
    <S.Container>
      <S.Center>
        <Localization />
        <Contact />
        <Partners />
      </S.Center>
    </S.Container>
  )
}

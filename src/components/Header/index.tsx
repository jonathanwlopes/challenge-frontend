import * as S from "./styles"
import { Icon, MyAccount, Search } from "../shared"
import { QuantityCart } from "../shared/QuantityCart"
import { useWindowDimensions } from "../../hooks/Responsive"
import { theme } from "../../styles/theme/theme"
import { HeaderMobile } from "./Mobile"

export const Header = () => {
  const { width } = useWindowDimensions()
  const { notebook } = theme.responsive

  if (width < notebook) return <HeaderMobile />

  return (
    <S.Container>
      <S.Center>
        <S.OpenMenu name="open-menu" className="icon-open-menu" labelIcon="Abrir Menu" />
        <S.Logo name="logo" className="logo" labelIcon="Corebiz" />
        <S.WrapperRow>
          <Search placeholder="O que está procurando?" />
          <MyAccount />
          <QuantityCart />
        </S.WrapperRow>
      </S.Center>
    </S.Container>
  )
}

import * as S from "./styles"
import { MyAccount, Search } from "../shared"
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
        <S.Link>
          <S.Logo size="170" icon="logo-corebiz" />
        </S.Link>
        <S.WrapperRow>
          <Search placeholder="O que está procurando?" />
          <MyAccount />
          <QuantityCart />
        </S.WrapperRow>
      </S.Center>
    </S.Container>
  )
}

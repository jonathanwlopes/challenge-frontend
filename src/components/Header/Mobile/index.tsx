import * as S from "./styles"
import { Search } from "../../shared"
import { QuantityCart } from "../../shared/QuantityCart"

export const HeaderMobile = () => {
  return (
    <S.Container>
      <S.WrapperRow>
        <S.OpenMenu size="22" icon="open-menu" />
        <S.Link href="/" title="Home Page">
          <S.Logo size="170" icon="logo-corebiz" />
        </S.Link>
        <QuantityCart />
      </S.WrapperRow>
      <Search placeholder="O que está procurando?" />
    </S.Container>
  )
}

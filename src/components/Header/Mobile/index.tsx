import * as S from "./styles"
import { Icon, Search } from "../../shared"
import { QuantityCart } from "../../shared/QuantityCart"

export const HeaderMobile = () => {
  return (
    <S.Container>
      <S.WrapperRow>
        <Icon name="open-menu" className="open-menu" labelIcon="Abrir Menu"/>
        <S.Logo name="logo" className="logo" labelIcon="Corebiz"/>
        <QuantityCart />
      </S.WrapperRow>
      <Search placeholder="O que está procurando?" />
    </S.Container>
  )
}

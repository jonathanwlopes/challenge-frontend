import * as S from "./styles"
import { Icon, MyAccount, Search } from "../shared"
import { QuantityCart } from "../shared/QuantityCart"

export const Header = () => {
  return (
    <S.Container>
      <S.Center>
        <S.OpenMenu name="open-menu" className="icon-open-menu" />
        <S.Logo>
          <Icon name="logo" />
        </S.Logo>
        <S.WrapperRow>
          <Search placeholder="O que está procurando?" />
          <MyAccount />
          <QuantityCart />
        </S.WrapperRow>
      </S.Center>
    </S.Container>
  )
}

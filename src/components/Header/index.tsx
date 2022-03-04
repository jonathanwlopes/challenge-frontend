import { Icon, MyAccount, Search } from "../shared"
import { QuantityCart } from "../shared/QuantityCart"
import * as S from "./styles"

export const Header = () => {
  return (
    <S.Container>
      <S.Center>
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

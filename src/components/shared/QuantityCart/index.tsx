import * as S from "./styles"
import { Icon } from "../Icon"

export const QuantityCart = () => {
  return (
    <S.Container>
      <Icon name="cart" />
      <S.Quantity>1</S.Quantity>
    </S.Container>
  )
}

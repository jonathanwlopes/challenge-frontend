import * as S from "./styles"
import { useCart } from "../../../context/Cart"
import { useMemo } from "react"

export const QuantityCart = () => {
  const { cartItems } = useCart()

  const cartTotalQuantity = useMemo(() => {
    return cartItems.reduce((acc, product) => {
      return acc + product.quantity
    }, 0)
  }, [cartItems])

  return (
    <S.Container tabIndex={0}>
      <S.IconCart size="18" icon="shopping-cart" />
      <S.Quantity>{cartTotalQuantity}</S.Quantity>
    </S.Container>
  )
}

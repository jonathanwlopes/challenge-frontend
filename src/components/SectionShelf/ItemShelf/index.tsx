import * as S from "./styles"

import { Product } from "../../../context/Product/types"
import { Stars } from "../Stars"
import { useCart } from "../../../context/Cart"

interface ItemShelfProps {
  product: Product
}

export const ItemShelf = ({ product }: ItemShelfProps) => {
  const { handleBuy } = useCart()

  const isPriceOff = !!product.listPrice
  const isInstallments = product.installments.length > 0

  return (
    <S.Container>
      <S.Image src={product.imageUrl} alt={product.productName} />
      <S.WrapperInfo>
        <S.Name>{product.productName}</S.Name>
        <Stars filled={product.stars} />
        <S.WrapperPriceOf>{isPriceOff && <S.PriceOf>de {product.formattedListPrice}</S.PriceOf>}</S.WrapperPriceOf>
        <S.BestPrice>por: {product.formattedPrice}</S.BestPrice>
        <S.WrapperInstallments>
          {isInstallments && <S.Installments>{`ou em ${product.installments[0]?.quantity}x de ${product.installments[0]?.value}`}</S.Installments>}
        </S.WrapperInstallments>
        <S.Buy onClick={() => handleBuy(product)}>Comprar</S.Buy>
      </S.WrapperInfo>
      {isPriceOff && (
        <S.Seal>
          <S.SealText>OFF</S.SealText>
        </S.Seal>
      )}
    </S.Container>
  )
}

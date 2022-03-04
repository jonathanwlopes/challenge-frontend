import * as S from "./styles"

import { Product } from "../../../context/Product/types"
import { Stars } from "../Stars"

interface ItemShelfProps {
  product: Product
}

export const ItemShelf = ({ product }: ItemShelfProps) => {
  const isEqualPrices = !!product.listPrice
  const isInstallments = product.installments.length > 0

  return (
    <S.Container>
      <S.Image src={product.imageUrl} alt={product.productName} />
      <S.WrapperInfo>
        <S.Name>{product.productName}</S.Name>
        <Stars filled={product.stars} />
        <S.WrapperPriceOf>{isEqualPrices && <S.PriceOf>de {product.formattedListPrice}</S.PriceOf>}</S.WrapperPriceOf>
        <S.BestPrice>por: {product.formattedPrice}</S.BestPrice>
        <S.WrapperInstallments>
          {isInstallments && <S.Installments>{`ou em ${product.installments[0]?.quantity}x de ${product.installments[0]?.value}`}</S.Installments>}
        </S.WrapperInstallments>
        <S.Buy>Comprar</S.Buy>
      </S.WrapperInfo>
    </S.Container>
  )
}

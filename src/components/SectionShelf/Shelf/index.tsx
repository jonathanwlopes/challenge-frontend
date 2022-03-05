import { useEffect, useState } from "react"
import { Navigation } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"
import { useProduct } from "../../../context/Product"
import { Product } from "../../../context/Product/types"
import { formatReal } from "../../../utils/formatReal"

import { ItemShelf } from "../ItemShelf"
import * as S from "./styles"

export const Shelf = () => {
  const { products } = useProduct()
  const [listProducts, setListProducts] = useState<Product[]>([])

  useEffect(() => {
    const newListProducts = products.map((product) => {
      const formattedInstallments = product.installments.map((installment) => {
        return {
          ...installment,
          value: formatReal(Number(installment.value)),
        }
      })

      return {
        ...product,
        formattedListPrice: formatReal(Number(product.listPrice)),
        formattedPrice: formatReal(Number(product.price)),
        installments: formattedInstallments,
      }
    })

    setListProducts(newListProducts)
  }, [products])

  if (!products.length || !listProducts.length) return <S.LoadingShelf>Carregando lista de produtos...</S.LoadingShelf>

  return (
    <S.Container>
      <S.Center>
        <S.Title>Mais Vendidos</S.Title>
        <S.WrapperShelf>
          <Swiper
            slidesPerView={4}
            modules={[Navigation]}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            spaceBetween={5}
          >
            {listProducts.map((product) => (
              <SwiperSlide key={`${product.productId}-product-id`}>
                <ItemShelf product={product} />
              </SwiperSlide>
            ))}

            <S.Arrows>
              <S.ArrowLeft name="arrow-left" className="swiper-button-prev" />
              <S.ArrowRight name="arrow-right" className="swiper-button-next" />
            </S.Arrows>
          </Swiper>
        </S.WrapperShelf>
      </S.Center>
    </S.Container>
  )
}

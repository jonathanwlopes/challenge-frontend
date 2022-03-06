import { useEffect, useState } from "react"
import { Navigation, Pagination } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"
import { useProduct } from "../../../context/Product"
import { Product } from "../../../context/Product/types"
import { formatReal } from "../../../utils/formatReal"

import { ItemShelf } from "../ItemShelf"
import * as S from "./styles"

export const Shelf = () => {
  const { products } = useProduct()
  const [listProducts, setListProducts] = useState<Product[]>([])

  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },

    780: {
      slidesPerView: 3,
      spaceBetween: 38,
    },

    1321: {
      slidesPerView: 4,
      spaceBetween: 100,
    },
  }

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
            modules={[Navigation, Pagination]}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            breakpoints={breakpoints}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-shelf",
            }}
          >
            {listProducts.map((product) => (
              <SwiperSlide key={`${product.productId}-product-id`}>
                <ItemShelf product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <S.Pagination className="swiper-pagination swiper-pagination-shelf" />
          <S.ArrowLeft size="13" icon="arrow-left" className="swiper-button-prev" />
          <S.ArrowRight size="13" icon="arrow-right" className="swiper-button-next" />
        </S.WrapperShelf>
      </S.Center>
    </S.Container>
  )
}

import * as S from "./styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { BannerWithText } from "../BannerWithText"

interface SliderBanner {
  slides: {
    id: number
    title: string
    subtitle: string
    imageUrl: string
  }[]
}

export const SliderBanner = ({ slides }: SliderBanner) => {
  return (
    <S.Container>
      <Swiper modules={[Pagination]} pagination={{ clickable: true, el: ".swiper-pagination" }}>
        {slides.map((slide) => (
          <SwiperSlide key={`${slide.id}-banner-id`}>
            <BannerWithText title={slide.title} subtitle={slide.subtitle} imageUrl={slide.imageUrl} />
          </SwiperSlide>
        ))}
        <S.Pagination className="swiper-pagination" />
      </Swiper>
    </S.Container>
  )
}

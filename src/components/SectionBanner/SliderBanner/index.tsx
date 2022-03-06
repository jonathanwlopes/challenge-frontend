import * as S from "./styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { BannerWithText } from "../BannerWithText"
import { useWindowDimensions } from "../../../hooks/Responsive"
import { theme } from "../../../styles/theme/theme"

interface SliderBanner {
  slides: {
    id: number
    title: string
    subtitle: string
    imageUrl: string
    mobileImageUrl: string
  }[]
}

export const SliderBanner = ({ slides }: SliderBanner) => {
  const { width } = useWindowDimensions()
  const { notebook } = theme.responsive

  return (
    <S.Container>
      <S.Center>
        <Swiper modules={[Pagination]} pagination={{ clickable: true, el: ".swiper-pagination" }}>
          {slides.map((slide) => (
            <SwiperSlide key={`${slide.id}-banner-id`}>
              <BannerWithText title={slide.title} subtitle={slide.subtitle} imageUrl={width < notebook ? slide.mobileImageUrl : slide.imageUrl} />
            </SwiperSlide>
          ))}
          <S.Pagination className="swiper-pagination" />
        </Swiper>
      </S.Center>
    </S.Container>
  )
}

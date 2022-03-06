import styled from "styled-components"
import { container } from "../../../styles/theme/utils/container"
import { Icon } from "../../shared"

export const Container = styled.section`
  @media screen and (max-width: 1240px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`

export const Center = styled.div`
  ${container.center};
  margin-top: 25px;

  @media screen and (max-width: 1320px) {
    max-width: 768px;
    padding: 0 7px 0 20px;
  }
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[20]};
  line-height: ${({ theme }) => theme.fontSizes[24]};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 900;
  position: relative;
  user-select: none;

  &::before {
    position: absolute;
    content: "";
    width: 65px;
    border-bottom: 4.29px solid ${({ theme }) => theme.colors.borderTitle};
    bottom: -6px;
  }
`

export const WrapperShelf = styled.div`
  margin-top: 26px;
  position: relative;

  .swiper-button-prev {
    left: -34px;
  }

  .swiper-button-next {
    right: -23px;
  }
`

export const Arrows = styled.div``

export const ArrowLeft = styled(Icon)`
  width: 12.92px;
  height: 22px;
`

export const ArrowRight = styled(Icon)`
  width: 12.92px;
  height: 22px;
`

export const Pagination = styled.div`
  display: none;

  @media screen and (max-width: 1240px) {
    &.swiper-pagination-shelf {
      display: inline-block;
      bottom: -20px;
    }
  }
`

export const Bullet = styled.span``

export const LoadingShelf = styled.h3`
  margin-top: 25px;
  text-align: center;
`

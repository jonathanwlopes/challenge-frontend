import styled from "styled-components"

export const Container = styled.section`
  height: 430px;
`

export const Pagination = styled.div`
  bottom: 30px !important;

  .swiper-pagination-bullet {
    opacity: unset;
    background: ${({ theme }) => theme.colors.bullets};
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.bulletsActive};
  }
`

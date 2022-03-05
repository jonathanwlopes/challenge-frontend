import styled from "styled-components"
import { container } from "../../../styles/theme/utils/container"
import { Icon } from "../../shared"

export const Container = styled.section``

export const Center = styled.div`
  ${container.center};
  margin-top: 25px;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[20]};
  line-height: ${({ theme }) => theme.fontSizes[24]};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 900;
  margin-left: calc((100% - 1150px) / 2);
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

export const LoadingShelf = styled.h3`
  margin-top: 25px;
  text-align: center;
`

import styled from "styled-components"
import { container } from "../../styles/theme/utils/container"

import * as Search from "../shared/Search/styles"
import * as MyAccount from "../shared/MyAccount/styles"
import * as QuantityCart from "../shared/QuantityCart/styles"
import { Icon } from "../shared"

export const Container = styled.header`
  padding: 16px 25px;

  ${Search.Container} {
    flex: 1;
  }

  ${MyAccount.Container} {
    margin-left: ${({ theme }) => theme.space[44]};
  }

  ${QuantityCart.Container} {
    margin-left: ${({ theme }) => theme.space[21]};
  }
`

export const Center = styled.div`
  ${container.center};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WrapperRow = styled.div`
  display: flex;
  width: 80%;
`
export const Logo = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 170px;
  max-height: 41px;
  cursor: pointer;
`

export const OpenMenu = styled(Icon)`
  &.icon-open-menu {
    display: none;
  }
`

import styled from "styled-components"
import { Icon } from "../../shared"
import * as Search from "../../shared/Search/styles"

export const Container = styled.header`
  padding: 7px 22px 11px 20px;

  ${Search.Container} {
    margin-top: 15px;
  }
`

export const Logo = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 102.46px;
  height: 25px;
`
export const WrapperRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OpenMenu = styled(Icon)`
  max-width: 22px;
  max-height: 15px;
`
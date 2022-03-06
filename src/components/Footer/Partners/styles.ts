import styled from "styled-components"
import { Icon } from "../../shared"

export const Container = styled.div`
  display: flex;
  align-items: center;

  svg + svg {
    margin-left: 25px;
  }
`

export const IconCorebiz = styled(Icon)`
  width: 76px;
`

export const IconVtex = styled(Icon)`
  width: 57px;
  height: 35px;
`

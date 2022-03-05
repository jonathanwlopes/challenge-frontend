import styled from "styled-components"
import { Icon } from "../../shared"

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const PartnerIcon = styled(Icon)`
  &.partner-icon + .partner-icon {
    margin-left: 25px;
  }
`

import styled from "styled-components"
import { Icon } from "../../shared"

export const ButtonContact = styled.a`
  display: flex;
  align-items: center;
  width: 198px;
  height: 38px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.default};
  text-decoration: unset;

  &:last-child {
    margin-top: 25px;
  }

  &:hover {
    cursor: pointer;
  }
`

export const Text = styled.span`
  display: inline-block;
  margin-left: 17.23px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 600;
  text-transform: uppercase;
`

export const IconEmail = styled(Icon)`
  &.icon-email {
    min-width: 15.19px;
    min-height: 18.58px;
  }
`

export const IconHeadphone = styled(Icon)`
  &.icon-headphone {
    min-width: 15.19px;
    min-height: 18.58px;
  }
`

export const Container = styled.div``

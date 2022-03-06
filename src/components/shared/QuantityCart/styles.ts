import styled from "styled-components"
import { Icon } from ".."

export const Container = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const Quantity = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.contrastBG};
  color: ${({ theme }) => theme.colors.contrastTextBG};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: ${({ theme }) => theme.fontSizes[16]};

  border-radius: ${({ theme }) => theme.radii.full};
  margin-left: 5px;
`

export const IconCart = styled(Icon)`
  max-width: 18px;
  max-height: 18px;
`

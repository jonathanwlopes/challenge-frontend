import styled from "styled-components"
import { container } from "../../styles/theme/utils/container"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBG};
  padding: 25px 0 28px;
  border-bottom: 10px solid ${({ theme }) => theme.colors.borderTitle};
`

export const Center = styled.div`
  ${container.center};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

import styled from "styled-components"
import { Icon } from ".."

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`

export const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 0 ${({ theme }) => theme.space[4]};
`

export const IconSearch = styled(Icon)`
  width: 18px;
  height: 18px;
  margin-bottom: 2px;
`

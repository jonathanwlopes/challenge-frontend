import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const Text = styled.span`
  display: inline-block;
  margin-left: 6px;
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fontSizes[13]};
  line-height: ${({ theme }) => theme.space[16]};
  color: ${({ theme }) => theme.colors.text};
`

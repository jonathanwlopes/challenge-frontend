import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const Quantity = styled.div`
  width: 18px;
  height: 18px;
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

import styled from "styled-components"

export const Item = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[13]};
  line-height: ${({ theme }) => theme.fontSizes[12]};
  color: ${({ theme }) => theme.colors.white};
`

export const Title = styled.h2`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes[20]};
  line-height: ${({ theme }) => theme.fontSizes[27]};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 37px;
  position: relative;

  &::before {
    display: inline-block;
    content: "";
    position: absolute;
    bottom: -16px;
    border-bottom: 5px solid ${({ theme }) => theme.colors.white};
    width: 44.94px;
  }

  @media screen and (max-width: 480px) {
    &::before {
      width: 32px;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${Item} + ${Item} {
    margin-top: 10px;
  }
`

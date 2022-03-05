import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: ${({ theme }) => theme.fontSizes[14]};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
`

export const Message = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: ${({ theme }) => theme.fontSizes[14]};
  color: ${({ theme }) => theme.colors.black};
`

export const Button = styled.button`
  border: unset;
  width: 328px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.default};
  margin-top: 15px;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black}CC;
  }
`

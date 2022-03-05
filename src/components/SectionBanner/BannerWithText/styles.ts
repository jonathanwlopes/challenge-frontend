import styled from "styled-components"

export const Container = styled.div`
  position: relative;

`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 522px;
  position: absolute;
  top: 35%;
  left: 20%;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  line-height: 41px;
  font-weight: 700;
`

export const SubTitle = styled.p`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSizes[30]};
  line-height: 41px;
  color: ${({ theme }) => theme.colors.white};
  max-width: 300px;
`

export const WrapperImage = styled.div`
  max-width: 1920px;
  max-height: 430px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

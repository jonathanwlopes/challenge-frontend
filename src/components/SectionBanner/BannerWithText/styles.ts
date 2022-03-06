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
  transform: translate(0, -35%);

  @media screen and (max-width: 480px) {
    max-width: 277px;
    left: 8%;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  line-height: 40.92px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes[30]};

  @media screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 20px;
  }
`

export const SubTitle = styled.h2`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSizes[45]};
  line-height: 45px;
  color: ${({ theme }) => theme.colors.white};
  max-width: 450px;

  @media screen and (max-width: 480px) {
    font-size: 30px;
    line-height: 30px;
  }
`

export const WrapperImage = styled.div`
  max-width: 1920px;
  max-height: 430px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;


`

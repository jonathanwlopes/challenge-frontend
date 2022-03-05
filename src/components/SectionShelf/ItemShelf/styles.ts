import styled from "styled-components"

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 15px;
  transition-duration: 0.3s;
`

export const Buy = styled.button`
  all: unset;
  margin-top: 7px;
  width: 125px;
  height: 32px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: ${({ theme }) => theme.fontSizes[16]};
  border-radius: ${({ theme }) => theme.radii.default};
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition-duration: 0.3s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.black}CC;
  }
`

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 216px;
  margin: 0 auto;
  position: relative;

  &:hover {
    cursor: pointer;

    ${WrapperInfo} {
      background-color: #e6e8ea;
    }

    ${Buy} {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const Image = styled.img`
  width: 100%;
  height: 200px;
`

export const Name = styled.span`
  display: inline-block;
  margin-top: 7px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: ${({ theme }) => theme.fontSizes[16]};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
`

export const Stars = styled.span`
  display: inline-block;
  margin-top: 7px;
`

export const WrapperPriceOf = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 14px;
  margin-top: 7px;
`

export const PriceOf = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: ${({ theme }) => theme.fontSizes[16]};
`

export const BestPrice = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes[18]};
  line-height: ${({ theme }) => theme.fontSizes[24]};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  margin-top: 5px;
`

export const WrapperInstallments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 14px;
`

export const Installments = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[11]};
  line-height: ${({ theme }) => theme.fontSizes[15]};
`

export const SealText = styled.span`
  position: absolute;
  top: -10px;
  left: 13px;
  font-size: ${({ theme }) => theme.fontSizes[16]};
  line-height: ${({ theme }) => theme.fontSizes[24]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
`

export const Seal = styled.div`
  border-bottom: 50px solid transparent;
  border-top: 20px solid ${({ theme }) => theme.colors.contrastBG};
  border-left: 20px solid transparent;
  border-right: 50px solid ${({ theme }) => theme.colors.contrastBG};
  position: absolute;
  top: 0;
  right: 0;
`

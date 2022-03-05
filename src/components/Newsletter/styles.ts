import styled from "styled-components"
import { container } from "../../styles/theme/utils/container"

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  margin-top: 70px;
  padding: 24px 0 36px;
`

export const Center = styled.div`
  ${container.center};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: ${({ theme }) => theme.fontSizes[22]};
  line-height: ${({ theme }) => theme.fontSizes[22]};
  font-weight: 700;
`

export const Form = styled.form`
  margin-top: 16px;
  display: flex;
  position: relative;
`

interface InputNameProps {
  error: boolean
}

export const InputName = styled.input<InputNameProps>`
  border: none;
  padding: 17px 16px;
  border-radius: ${({ theme }) => theme.radii.default};
  width: 280px;
  height: 48px;

  color: ${({ theme }) => theme.colors.inputColor};
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;

  outline-color: ${({ theme, error }) => (error ? theme.colors.errors : theme.colors.outlineColor)};
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.errors : "transparent")};
`

interface InputEmailProps {
  error: boolean
}

export const InputEmail = styled.input<InputEmailProps>`
  border: none;
  padding: 17px 16px;
  border-radius: ${({ theme }) => theme.radii.default};
  width: 280px;
  height: 48px;
  margin-left: 8px;

  color: ${({ theme }) => theme.colors.inputColor};
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;

  outline-color: ${({ theme, error }) => (error ? theme.colors.errors : theme.colors.outlineColor)};
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.errors : "transparent")};
`
export const Send = styled.button`
  border: unset;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.default};
  background: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: ${({ theme }) => theme.fontSizes[14]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  width: 140px;
  height: 48px;

  transition-duration: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black}CC;
  }
`

export const WrapperColumn = styled.div`
  position: relative;
`

export const NameError = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.errors};
  bottom: -20px;
  left: 0px;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: ${({ theme }) => theme.fontSizes[12]};
`

export const EmailError = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.colors.errors};
  bottom: -20px;
  left: 8px;
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: ${({ theme }) => theme.fontSizes[12]};
`

export const SubmitError = styled.div`
  position: absolute;
  bottom: -20px;
  color: ${({ theme }) => theme.colors.errors};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  line-height: ${({ theme }) => theme.fontSizes[12]};
`

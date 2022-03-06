import styled from "styled-components"
import { container } from "../../styles/theme/utils/container"
import * as Localization from "./Localization/styles"
import * as Contact from "./Contact/styles"
import * as Partners from "./Partners/styles"

export const Center = styled.div`
  ${container.center};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBG};
  padding: 25px 0 28px;
  border-bottom: 10px solid ${({ theme }) => theme.colors.borderTitle};

  @media screen and (max-width: 1240px) {
    padding: 27px 48px 10px 16px;

    ${Center} {
      flex-direction: column;
    }

    ${Localization.Container} {
      width: 100%;
      max-width: 320px;
    }

    ${Contact.Container} {
      margin-top: 32px;
      width: 100%;
      max-width: 320px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ${Partners.Container} {
      width: 100%;
      max-width: 240px;
      justify-content: space-between;
      margin-top: 24px;
    }
  }
`

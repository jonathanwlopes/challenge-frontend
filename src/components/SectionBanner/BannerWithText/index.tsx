import { useWindowDimensions } from "../../../hooks/Responsive"
import { theme } from "../../../styles/theme/theme"
import { HeaderMobile } from "../../Header/Mobile"
import * as S from "./styles"

interface BannerWithTextProps {
  title?: string
  subtitle?: string
  imageUrl: string
}

export const BannerWithText = ({ title, subtitle, imageUrl }: BannerWithTextProps) => {
  return (
    <S.Container>
      <S.WrapperText>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.WrapperText>
      <S.WrapperImage>
        <S.Image src={imageUrl} alt={title} title={title}/>
      </S.WrapperImage>
    </S.Container>
  )
}

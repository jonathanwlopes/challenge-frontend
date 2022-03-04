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
      <S.Image src={imageUrl} alt="Banner" />
    </S.Container>
  )
}

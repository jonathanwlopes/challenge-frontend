import * as S from "./styles"

export const Contact = () => {
  return (
    <S.Container>
      <S.ButtonContact href="#" title="Entre em contato por email">
        <S.IconEmail icon="email" />
        <S.Text>Entre em contato</S.Text>
      </S.ButtonContact>

      <S.ButtonContact href="#" title="Fale com o nosso consultor online">
        <S.IconHeadphone icon="headphone" />
        <S.Text>Fale com o nosso consultor online</S.Text>
      </S.ButtonContact>
    </S.Container>
  )
}

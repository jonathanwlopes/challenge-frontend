import * as S from "./styles"

export const Contact = () => {
  return (
    <S.Container>
      <S.ButtonContact href="#" title="Entre em contato por email">
        <S.IconEmail name="email" className="icon-email" labelIcon="Icone Email" />
        <S.Text>Entre em contato</S.Text>
      </S.ButtonContact>

      <S.ButtonContact href="#" title="Fale com o nosso consultor online">
        <S.IconHeadphone name="headphone" className="icon-headphone" labelIcon="Icone Headphone" />
        <S.Text>Fale com o nosso consultor online</S.Text>
      </S.ButtonContact>
    </S.Container>
  )
}

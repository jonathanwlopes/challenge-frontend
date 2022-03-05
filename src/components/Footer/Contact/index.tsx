import * as S from "./styles"

export const Contact = () => {
  return (
    <S.Container>
      <S.ButtonContact href="#">
        <S.IconEmail name="email" className="icon-email" />
        <S.Text>Entre em contato</S.Text>
      </S.ButtonContact>

      <S.ButtonContact href="#">
        <S.IconHeadphone name="headphone" className="icon-headphone" />
        <S.Text>Fale com o nosso consultor online</S.Text>
      </S.ButtonContact>
    </S.Container>
  )
}

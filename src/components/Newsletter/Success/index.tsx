import * as S from "./styles"

interface SuccessProps {
  handleSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export const Success = ({ handleSuccess }: SuccessProps) => {
  return (
    <S.Container>
      <S.Title>Seu e-mail foi cadastrado com sucesso!</S.Title>
      <S.Message>A partir de agora você receberá as novidade e ofertas exclusivas.</S.Message>
      <S.Button onClick={() => handleSuccess(false)}>Cadastrar novo e-mail</S.Button>
    </S.Container>
  )
}

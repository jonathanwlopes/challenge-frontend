import * as S from "./styles"
import { Icon } from "../Icon"

export const MyAccount = () => {
  return (
    <S.Container tabIndex={0}>
      <Icon name="profile" labelIcon="Perfil" />
      <S.Text>Minha Conta</S.Text>
    </S.Container>
  )
}

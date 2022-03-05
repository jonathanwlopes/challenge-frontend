import * as S from "./styles"
import { location } from "../../../mocks/location"

export const Localization = () => {
  const { address, city, email, telephone } = location

  return (
    <S.Container>
      <S.Title>Localização</S.Title>
      <S.Item>{address}</S.Item>
      <S.Item>{city}</S.Item>
      <S.Item>{email}</S.Item>
      <S.Item>{telephone}</S.Item>
    </S.Container>
  )
}

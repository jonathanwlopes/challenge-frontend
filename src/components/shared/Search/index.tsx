import * as S from "./styles"
import { SearchProps } from "./types"

export const Search = ({ ...rest }: SearchProps) => {
  return (
    <S.Container aria-label="Barra de pesquisa, digite o que você está procurando?" tabIndex={0}>
      <S.Input {...rest} />
      <S.IconSearch icon="search" />
    </S.Container>
  )
}

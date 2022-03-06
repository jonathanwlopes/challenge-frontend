import * as S from "./styles"
import { SearchProps } from "./types"

import { Icon } from "../Icon"

export const Search = ({ ...rest }: SearchProps) => {
  return (
    <S.Container aria-label="Barra de pesquisa, digite o que você está procurando?" tabIndex={0}>
      <S.Input {...rest} />
      <Icon name="search" labelIcon="Pesquisa" />
    </S.Container>
  )
}

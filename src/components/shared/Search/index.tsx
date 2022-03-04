import * as S from "./styles"
import { SearchProps } from "./types"

import { Icon } from "../Icon"

export const Search = ({ ...rest }: SearchProps) => {
  return (
    <S.Container>
      <S.Input {...rest} />
      <Icon name="search" />
    </S.Container>
  )
}

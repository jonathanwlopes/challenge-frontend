import { Icon } from "../../shared"
import * as S from "./styles"

interface StarsProps {
  filled: number
}

export const Stars = ({ filled }: StarsProps) => {
  let maxStars = Array(5).fill(" ")
  maxStars.fill("filled", 0, filled)

  return (
    <S.Container>
      {maxStars.map((star, idx) => {
        if (star === "filled") {
          return <Icon key={idx} name="star-filled" labelIcon="Estrelas Avaliação" />
        }
        return <Icon key={idx} name="star-unfilled" labelIcon="Estrelas Avaliação" />
      })}
    </S.Container>
  )
}

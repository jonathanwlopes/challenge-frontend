import { useCallback, useState } from "react"
import { api } from "../../api"
import * as S from "./styles"
import { Success } from "./Success"

export const Newsletter = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const clearForm = () => {
    setName("")
    setEmail("")
  }

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      setLoading(true)

      const emailRegex = /^.+@[a-z0-9]+\.[a-z]+(\.[a-z]+)*$/i

      if (name === "" || !email.match(emailRegex)) {
        name === "" ? setNameError(true) : null
        !email.match(emailRegex) ? setEmailError(true) : null

        setLoading(false)

        setTimeout(() => {
          setNameError(false)
          setEmailError(false)
        }, 2000)

        return
      }

      const data = {
        email,
        name,
      }

      try {
        await api.post("/newsletter", data)

        setSuccess(true)
        setLoading(false)
        clearForm()
        setSubmitError(false)
      } catch (e) {
        setLoading(false)
        clearForm()
        setSubmitError(true)
      }
    },
    [name, email]
  )

  if (success) {
    return (
      <S.Container>
        <S.Center>
          <Success handleSuccess={setSuccess} />
        </S.Center>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Center>
        <S.Title>Participe de nossas news com promoções e novidades!</S.Title>
        <S.Form autoComplete="off" onSubmit={handleSubmit}>
          <S.WrapperColumn>
            <S.NameLabel htmlFor="name" className="sr-only">
              Digite seu nome
            </S.NameLabel>
            <S.InputName
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Digite seu nome"
              error={nameError}
              id="name"
              name="name"
            />
            {nameError && <S.NameError>Preencha com seu nome completo</S.NameError>}
          </S.WrapperColumn>

          <S.WrapperColumn>
            <S.NameLabel htmlFor="email" className="sr-only">
              Digite seu email
            </S.NameLabel>
            <S.InputEmail
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Digite seu email"
              error={emailError}
              id="email"
              name="email"
            />
            {emailError && <S.EmailError>Preencha com um e-mail válido</S.EmailError>}
          </S.WrapperColumn>

          {!success && (
            <S.Send type="submit" disabled={success}>
              {!loading ? "Eu quero!" : "Enviando..."}
            </S.Send>
          )}

          {submitError && <S.SubmitError>Ocorreu um erro, tente novamente.</S.SubmitError>}
        </S.Form>
      </S.Center>
    </S.Container>
  )
}

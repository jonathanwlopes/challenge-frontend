export function formatReal(number: number) {
  const formatted = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(number / 100)
  return formatted
}

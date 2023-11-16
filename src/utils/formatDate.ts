export function formatDate(input?: string): string {
  // Cria um objeto de data a partir da string fornecida

  if (!input) return ''

  const date = new Date(input)

  // Extrai o dia, mês e ano da data
  const day = String(date.getUTCDate()).padStart(2, '0') // adiciona um '0' à esquerda se for um dígito único
  const month = String(date.getUTCMonth() + 1).padStart(2, '0') // getMonth() retorna de 0-11, então adicionamos 1
  const year = date.getUTCFullYear()

  // Retorna no formato DD/MM/AAAA
  return `${day}/${month}/${year}`
}

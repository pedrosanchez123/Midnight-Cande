// Formatea un número como precio en pesos.
const formatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
})

export function formatPrice(value) {
  return formatter.format(value)
}

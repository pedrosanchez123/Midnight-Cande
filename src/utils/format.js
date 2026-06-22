// Formatea un número como precio en pesos.
const formatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

export function formatPrice(value) {
  return formatter.format(value)
}

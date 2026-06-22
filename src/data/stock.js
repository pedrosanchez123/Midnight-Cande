// Control de stock por prenda y talle, leído desde una Google Sheet publicada
// como CSV. Mientras STOCK_CSV_URL esté vacío (o falle la carga), se usa
// LOCAL_STOCK y, si tampoco hay datos, todo se muestra disponible.
//
// 👉 SETUP (ver STOCK.md): creá una planilla con columnas  id | talle | stock
//    (una fila por prenda y talle), Archivo → Compartir → Publicar en la web →
//    CSV, y pegá esa URL acá abajo.
export const STOCK_CSV_URL = ''

// Fallback local opcional: { [idProducto]: { [talle]: cantidad } }.
// Vacío = todas las prendas/talles se consideran disponibles.
export const LOCAL_STOCK = {}

// Parser CSV mínimo (soporta comillas y comas dentro de comillas).
function parseCsv(text) {
  const lines = text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .filter((l) => l.length > 0)
  if (lines.length === 0) return []

  const parseLine = (line) => {
    const out = []
    let cur = ''
    let inQuotes = false
    for (let i = 0; i < line.length; i++) {
      const c = line[i]
      if (inQuotes) {
        if (c === '"') {
          if (line[i + 1] === '"') {
            cur += '"'
            i++
          } else {
            inQuotes = false
          }
        } else {
          cur += c
        }
      } else if (c === '"') {
        inQuotes = true
      } else if (c === ',') {
        out.push(cur)
        cur = ''
      } else {
        cur += c
      }
    }
    out.push(cur)
    return out
  }

  const headers = parseLine(lines[0]).map((h) => h.trim().toLowerCase())
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const cells = parseLine(lines[i])
    const obj = {}
    headers.forEach((h, idx) => {
      obj[h] = (cells[idx] ?? '').trim()
    })
    rows.push(obj)
  }
  return rows
}

// Devuelve el mapa de stock: { [id]: { [talle]: cantidad } }.
export async function loadStock() {
  if (!STOCK_CSV_URL) return LOCAL_STOCK
  try {
    const res = await fetch(STOCK_CSV_URL, { cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const rows = parseCsv(await res.text())
    const map = {}
    for (const r of rows) {
      const id = Number(r.id)
      const talle = (r.talle || '').trim()
      const stock = Number(r.stock)
      if (!id || !talle || Number.isNaN(stock)) continue
      map[id] = map[id] || {}
      map[id][talle] = stock
    }
    // Si la planilla vino vacía, no pisamos con un mapa inútil.
    return Object.keys(map).length ? map : LOCAL_STOCK
  } catch (e) {
    console.warn('Midnight Club: no se pudo cargar el stock remoto, uso LOCAL_STOCK.', e)
    return LOCAL_STOCK
  }
}

// Stock de un talle. Si no está declarado, se asume disponible (Infinity).
export function sizeStock(stock, id, size) {
  const forId = stock && stock[id]
  if (!forId || !(size in forId)) return Infinity
  return forId[size]
}

export function isSizeOut(stock, id, size) {
  return sizeStock(stock, id, size) === 0
}

// Una prenda está sin stock si TODOS sus talles están en 0.
export function isProductOut(stock, product) {
  return product.sizes.every((size) => isSizeOut(stock, product.id, size))
}

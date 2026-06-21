import { useMemo, useState } from 'react'
import { products, categories, colors } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

const sortOptions = [
  { value: 'destacados', label: 'Destacados' },
  { value: 'precio-asc', label: 'Precio: menor a mayor' },
  { value: 'precio-desc', label: 'Precio: mayor a menor' },
  { value: 'nombre', label: 'Nombre A-Z' },
]

export default function Catalog() {
  const [category, setCategory] = useState('Todos')
  const [color, setColor] = useState('Todos')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('destacados')

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCat = category === 'Todos' || p.category === category
      const matchColor = color === 'Todos' || p.color === color
      const matchQuery =
        query.trim() === '' ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      return matchCat && matchColor && matchQuery
    })

    list = [...list]
    if (sort === 'precio-asc') list.sort((a, b) => a.price - b.price)
    else if (sort === 'precio-desc') list.sort((a, b) => b.price - a.price)
    else if (sort === 'nombre') list.sort((a, b) => a.name.localeCompare(b.name))
    else list.sort((a, b) => (b.tag ? 1 : 0) - (a.tag ? 1 : 0))

    return list
  }, [category, color, query, sort])

  function reset() {
    setCategory('Todos')
    setColor('Todos')
    setQuery('')
    setSort('destacados')
  }

  return (
    <section className="catalog" id="catalogo">
      <div className="section-head">
        <h2 className="section-title">Catálogo</h2>
        <p className="section-sub">
          {filtered.length} {filtered.length === 1 ? 'prenda' : 'prendas'} disponibles
        </p>
      </div>

      <div className="filters">
        <div className="filters__row">
          <input
            type="search"
            className="filters__search"
            placeholder="Buscar prendas…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar prendas"
          />
          <select
            className="filters__select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Ordenar"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filters__group">
          <span className="filters__label">Categoría</span>
          <div className="chip-row">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${category === c ? 'chip--active' : ''}`}
                onClick={() => setCategory(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="filters__group">
          <span className="filters__label">Color</span>
          <div className="chip-row">
            {colors.map((c) => (
              <button
                key={c}
                className={`chip ${color === c ? 'chip--active' : ''}`}
                onClick={() => setColor(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty">
          <p>No encontramos prendas con esos filtros.</p>
          <button className="btn btn--ghost" onClick={reset} type="button">
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  )
}

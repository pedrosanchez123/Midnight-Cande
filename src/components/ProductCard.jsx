import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../utils/format.js'

// Paleta para el placeholder visual según el color de la prenda.
const colorMap = {
  Negro: ['#1a1a24', '#2d2d3d'],
  Blanco: ['#e9e9ef', '#c5c5d0'],
  Azul: ['#1e2a4a', '#33508c'],
  Dorado: ['#7a5c1e', '#c9a227'],
  Gris: ['#34343f', '#56565f'],
  Vino: ['#3d1322', '#7a2342'],
}

function Thumb({ product }) {
  const [from, to] = colorMap[product.color] || ['#1a1a24', '#2d2d3d']
  const gradId = `g-${product.id}`
  return (
    <svg className="card__image" viewBox="0 0 400 460" role="img" aria-label={product.name}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="460" fill={`url(#${gradId})`} />
      <circle cx="320" cy="90" r="46" fill="#ffffff" opacity="0.06" />
      <circle cx="300" cy="80" r="34" fill="#ffffff" opacity="0.05" />
      <text
        x="200"
        y="245"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="34"
        fill="#ffffff"
        opacity="0.85"
      >
        {product.name.split(' ')[0]}
      </text>
      <text
        x="200"
        y="280"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="16"
        letterSpacing="4"
        fill="#ffffff"
        opacity="0.5"
      >
        MIDNIGHT CLUB
      </text>
    </svg>
  )
}

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [size, setSize] = useState(product.sizes[0])
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem(product, size)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="card">
      <div className="card__media">
        <Thumb product={product} />
        {product.tag && <span className="card__tag">{product.tag}</span>}
      </div>
      <div className="card__body">
        <div className="card__head">
          <h3 className="card__name">{product.name}</h3>
          <span className="card__price">{formatPrice(product.price)}</span>
        </div>
        <p className="card__meta">
          {product.category} · {product.color}
        </p>
        <p className="card__desc">{product.description}</p>

        <div className="card__sizes" role="group" aria-label={`Talla de ${product.name}`}>
          {product.sizes.map((s) => (
            <button
              key={s}
              className={`size-chip ${size === s ? 'size-chip--active' : ''}`}
              onClick={() => setSize(s)}
              type="button"
            >
              {s}
            </button>
          ))}
        </div>

        <button
          className={`btn btn--primary btn--block ${added ? 'btn--added' : ''}`}
          onClick={handleAdd}
          type="button"
        >
          {added ? '✓ Agregado' : 'Agregar al carrito'}
        </button>
      </div>
    </article>
  )
}

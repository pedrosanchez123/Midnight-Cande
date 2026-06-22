import { useCart } from '../context/CartContext.jsx'
import Logo from './Logo.jsx'

export default function Navbar({ onOpenCart }) {
  const { count } = useCart()

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#inicio" className="brand">
          <Logo size={46} />
          <span className="brand__name">
            Midnight <span className="brand__accent">Club</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Principal">
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Sobre nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <button className="cart-button" onClick={onOpenCart} aria-label="Abrir carrito">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 4h-2l-1 2H2v2h2l3.6 7.6-1.35 2.44C5.52 21.37 6.48 23 8 23h12v-2H8.42a.25.25 0 0 1-.22-.37L9 19h7.55c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21 10H6.21l-.94-2H7V4Z"
            />
            <circle cx="9" cy="21" r="1.6" fill="currentColor" />
            <circle cx="18" cy="21" r="1.6" fill="currentColor" />
          </svg>
          {count > 0 && <span className="cart-button__badge">{count}</span>}
        </button>
      </div>
    </header>
  )
}

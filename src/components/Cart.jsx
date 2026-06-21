import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../utils/format.js'

export default function Cart({ open, onClose }) {
  const { items, count, total, increment, decrement, removeItem, clear } = useCart()
  const [confirmed, setConfirmed] = useState(false)

  function checkout() {
    setConfirmed(true)
    clear()
    setTimeout(() => setConfirmed(false), 3500)
  }

  return (
    <>
      <div
        className={`drawer-overlay ${open ? 'drawer-overlay--open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`drawer ${open ? 'drawer--open' : ''}`}
        role="dialog"
        aria-label="Carrito de compras"
        aria-modal="true"
      >
        <div className="drawer__head">
          <h2>Tu carrito {count > 0 && <span className="drawer__count">({count})</span>}</h2>
          <button className="drawer__close" onClick={onClose} aria-label="Cerrar carrito">
            ✕
          </button>
        </div>

        <div className="drawer__body">
          {confirmed ? (
            <div className="checkout-done">
              <div className="checkout-done__icon">✓</div>
              <h3>¡Gracias por tu compra!</h3>
              <p>Tu pedido fue recibido. Te contactaremos pronto para coordinar el envío.</p>
            </div>
          ) : items.length === 0 ? (
            <div className="drawer__empty">
              <p>Tu carrito está vacío.</p>
              <button className="btn btn--ghost" onClick={onClose} type="button">
                Seguir comprando
              </button>
            </div>
          ) : (
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.key} className="cart-item">
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__meta">
                      {item.color} · Talla {item.size}
                    </p>
                    <p className="cart-item__price">{formatPrice(item.price)}</p>
                  </div>
                  <div className="cart-item__controls">
                    <div className="qty">
                      <button onClick={() => decrement(item.key)} aria-label="Quitar uno">
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => increment(item.key)} aria-label="Agregar uno">
                        +
                      </button>
                    </div>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeItem(item.key)}
                      type="button"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!confirmed && items.length > 0 && (
          <div className="drawer__foot">
            <div className="drawer__total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <button className="btn btn--primary btn--block" onClick={checkout} type="button">
              Finalizar compra
            </button>
            <button className="drawer__clear" onClick={clear} type="button">
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

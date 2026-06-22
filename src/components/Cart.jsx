import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../utils/format.js'
import { whatsappLink } from '../data/site.js'
import { WhatsAppIcon } from './QuickActions.jsx'

export default function Cart({ open, onClose }) {
  const { items, count, total, increment, decrement, removeItem, clear } = useCart()
  const [sent, setSent] = useState(false)
  const [confirmClear, setConfirmClear] = useState(false)

  // Arma el pedido y abre WhatsApp con el resumen.
  function orderByWhatsApp() {
    const lines = items.map(
      (i) => `• ${i.name} (${i.color}, talle ${i.size}) x${i.qty} — ${formatPrice(i.price * i.qty)}`,
    )
    const message = `Hola Midnight Club! 💋 Quiero hacer este pedido:\n\n${lines.join(
      '\n',
    )}\n\nTotal: ${formatPrice(total)}`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  function handleClear() {
    if (!confirmClear) {
      setConfirmClear(true)
      return
    }
    clear()
    setConfirmClear(false)
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
          {items.length === 0 ? (
            <div className="drawer__empty">
              {sent ? (
                <div className="checkout-done">
                  <div className="checkout-done__icon">💬</div>
                  <h3>¡Te esperamos en WhatsApp!</h3>
                  <p>Abrimos el chat con tu pedido. Confirmá ahí para coordinar pago y envío.</p>
                </div>
              ) : (
                <>
                  <p>Tu carrito está vacío.</p>
                  <button className="btn btn--ghost" onClick={onClose} type="button">
                    Seguir comprando
                  </button>
                </>
              )}
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

        {items.length > 0 && (
          <div className="drawer__foot">
            <div className="drawer__total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <button
              className="btn btn--primary btn--block"
              onClick={orderByWhatsApp}
              type="button"
            >
              <WhatsAppIcon /> Pedir por WhatsApp
            </button>
            {confirmClear ? (
              <div className="drawer__confirm">
                <span>¿Vaciar el carrito?</span>
                <button onClick={handleClear} type="button">
                  Sí, vaciar
                </button>
                <button onClick={() => setConfirmClear(false)} type="button">
                  No
                </button>
              </div>
            ) : (
              <button className="drawer__clear" onClick={handleClear} type="button">
                Vaciar carrito
              </button>
            )}
          </div>
        )}
      </aside>
    </>
  )
}

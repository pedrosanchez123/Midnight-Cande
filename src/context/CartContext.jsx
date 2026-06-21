import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'midnight-cande-cart'

function init() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { product, size } = action
      const key = `${product.id}-${size}`
      const existing = state.find((i) => i.key === key)
      if (existing) {
        return state.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i))
      }
      return [
        ...state,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          color: product.color,
          size,
          qty: 1,
        },
      ]
    }
    case 'increment':
      return state.map((i) => (i.key === action.key ? { ...i, qty: i.qty + 1 } : i))
    case 'decrement':
      return state
        .map((i) => (i.key === action.key ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    case 'remove':
      return state.filter((i) => i.key !== action.key)
    case 'clear':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, init)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.qty, 0)
    const total = items.reduce((sum, i) => sum + i.qty * i.price, 0)
    return {
      items,
      count,
      total,
      addItem: (product, size) => dispatch({ type: 'add', product, size }),
      increment: (key) => dispatch({ type: 'increment', key }),
      decrement: (key) => dispatch({ type: 'decrement', key }),
      removeItem: (key) => dispatch({ type: 'remove', key }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}

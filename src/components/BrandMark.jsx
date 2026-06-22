import { useState } from 'react'
import Logo from './Logo.jsx'

// Muestra el logo real (/public/logo.png) si existe; si no, usa la recreación SVG.
//
// 👉 PARA USAR EL LOGO REAL:
//    1. Guarda la imagen del logo como  public/logo.png  (o .jpg/.svg, ajusta LOGO_SRC).
//    2. Listo. Se carga automáticamente; si el archivo falta, se ve la recreación.
const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`

export default function BrandMark({ size = 46 }) {
  const [useFallback, setUseFallback] = useState(false)

  if (useFallback) {
    return <Logo size={size} />
  }

  return (
    <img
      className="brand__img"
      src={LOGO_SRC}
      alt="Midnight Club"
      width={size}
      height={size}
      onError={() => setUseFallback(true)}
    />
  )
}

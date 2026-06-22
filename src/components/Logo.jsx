import Lips from './Lips.jsx'

// Recreación del logo circular de Midnight Club (estilo perfil de Instagram).
// 👉 Si tienes el archivo real, guárdalo en /public/logo.png y reemplaza el uso
//    de <Logo /> por: <img src="/logo.png" alt="Midnight Club" className="brand__img" />
export default function Logo({ size = 46, withTagline = false }) {
  return (
    <svg
      className="brand__svg"
      width={size}
      height={size}
      viewBox="0 0 240 240"
      role="img"
      aria-label="Midnight Club"
    >
      <defs>
        <radialGradient id="logoBg" cx="35%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#241f52" />
          <stop offset="100%" stopColor="#0c0a1e" />
        </radialGradient>
      </defs>

      <circle cx="120" cy="120" r="118" fill="url(#logoBg)" stroke="#2e2440" strokeWidth="3" />

      <text
        x="120"
        y={withTagline ? 104 : 112}
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="42"
        fill="#ff8fc0"
      >
        Midnight
      </text>
      <text
        x="108"
        y={withTagline ? 150 : 160}
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="48"
        fill="#ff6fae"
      >
        Club
      </text>

      {/* labios beso (dos marcas superpuestas, como el logo real) */}
      <g transform={`translate(144 ${withTagline ? 112 : 122})`}>
        <Lips id="logoA" x="0" y="0" scale="0.5" rotate="-8" />
        <Lips id="logoB" x="30" y="16" scale="0.4" rotate="12" />
      </g>

      {withTagline && (
        <>
          <text
            x="120"
            y="182"
            textAnchor="middle"
            fontFamily="'Inter', sans-serif"
            fontSize="13"
            letterSpacing="3"
            fill="#ab9fb8"
          >
            INDUMENTARIA FEMENINA
          </text>
          <line x1="78" y1="196" x2="162" y2="196" stroke="#2e2440" strokeWidth="1.5" />
          <text
            x="120"
            y="210"
            textAnchor="middle"
            fontFamily="'Inter', sans-serif"
            fontStyle="italic"
            fontSize="11"
            fill="#7d7290"
          >
            más que ropa, una comunidad
          </text>
        </>
      )}
    </svg>
  )
}

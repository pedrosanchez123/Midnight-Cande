// Beso de labial con textura (líneas verticales), estilo marca de beso real.
// Se renderiza como <g> para poder incrustarlo dentro de otro <svg> (logo) o solo.
// Sistema de coordenadas: 120 (ancho) x 84 (alto).
export default function Lips({ id = 'l', x = 0, y = 0, scale = 1, rotate = 0 }) {
  const cid = `lipsClip-${id}`

  // Labio superior con arco de Cupido (dos picos + muesca central).
  const upper =
    'M10 40 Q24 23 38 23 Q50 23 60 33 Q70 23 82 23 Q96 23 110 40 Q88 50 60 46 Q32 50 10 40 Z'
  // Labio inferior, más lleno y redondeado.
  const lower = 'M10 42 Q32 50 60 46 Q88 50 110 42 Q93 75 60 77 Q27 75 10 42 Z'

  const stripes = []
  for (let i = 0; i < 40; i++) {
    const lx = 13 + i * 2.6
    if (lx > 107) break
    const dark = i % 2 === 0
    stripes.push(
      <line
        key={i}
        x1={lx}
        y1="18"
        x2={lx}
        y2="78"
        stroke={dark ? '#7c1144' : '#ff8fc0'}
        strokeWidth="1.4"
        opacity={dark ? 0.4 : 0.28}
      />,
    )
  }

  return (
    <g transform={`translate(${x} ${y}) scale(${scale}) rotate(${rotate} 60 46)`}>
      <defs>
        <clipPath id={cid}>
          <path d={upper} />
          <path d={lower} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${cid})`}>
        <rect x="0" y="0" width="120" height="84" fill="#c11d6a" />
        {stripes}
      </g>
      {/* línea de la boca entre el labio superior e inferior */}
      <path
        d="M12 40 Q34 49 60 45 Q86 49 108 40"
        fill="none"
        stroke="#5e0d33"
        strokeWidth="1.4"
        opacity="0.6"
      />
    </g>
  )
}

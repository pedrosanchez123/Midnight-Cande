import { useState } from 'react'
import { site } from '../data/site.js'
import Lips from './Lips.jsx'
import { InstagramIcon } from './QuickActions.jsx'

// Usa una imagen real (/public/lips.png) si existe; si no, el beso SVG.
// 👉 Para usar tu imagen: guárdala como  public/lips.png  (ideal con fondo transparente).
const LIPS_SRC = `${import.meta.env.BASE_URL}lips.png`

function HeroLips() {
  const [useFallback, setUseFallback] = useState(false)

  if (useFallback) {
    return (
      <svg className="hero__lips" viewBox="0 0 120 84" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <Lips id="hero" />
      </svg>
    )
  }

  return (
    <img
      className="hero__lips"
      src={LIPS_SRC}
      alt=""
      aria-hidden="true"
      onError={() => setUseFallback(true)}
    />
  )
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <HeroLips />
      <div className="hero__content">
        <p className="hero__eyebrow">Indumentaria femenina · Archive Sale</p>
        <h1 className="hero__title">
          No ordinary <em>girls</em> here. <br /> Be part of the club.
        </h1>
        <p className="hero__subtitle">
          Prendas de edición limitada para quienes brillan cuando cae la noche.
          Sin restock, sin segundas oportunidades. Más que ropa, una comunidad.
        </p>
        <div className="hero__actions">
          <a href="#catalogo" className="btn btn--primary">
            Ver catálogo
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ig"
          >
            <InstagramIcon /> Únete al club
          </a>
        </div>
        <p className="hero__marquee">
          LAST CALL <span>·</span> NO RESTOCK <span>·</span> ARE YOU READY? <span>·</span> COMING SOON
          <span>·</span> NOT EVERYTHING GETS A SECOND CHANCE
        </p>
      </div>
    </section>
  )
}

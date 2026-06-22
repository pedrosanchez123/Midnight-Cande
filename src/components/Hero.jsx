import { site } from '../data/site.js'

function Lips() {
  return (
    <svg className="hero__lips" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M50 22C40 8 22 6 10 14c8 2 14 8 18 14-10-4-20-3-28 2 10 10 28 22 50 22s40-12 50-22c-8-5-18-6-28-2 4-6 10-12 18-14C78 6 60 8 50 22z"
        fill="#c11d6a"
      />
      <path
        d="M22 30c8 6 18 9 28 9s20-3 28-9c-8-2-18-1-28 3-10-4-20-5-28-3z"
        fill="#ff6fae"
        opacity="0.7"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <Lips />
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
            className="btn btn--ghost"
          >
            Únete al club
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

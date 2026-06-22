import { site } from '../data/site.js'

function Lips() {
  return (
    <svg className="hero__lips" viewBox="-50 -12 100 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M0 6C-7 -4 -22 -6 -33 0C-26 1 -16 8 -9 15C-18 11 -30 11 -40 14C-28 30 -14 38 0 38C14 38 28 30 40 14C30 11 18 11 9 15C16 8 26 1 33 0C22 -6 7 -4 0 6Z"
        fill="#c11d6a"
      />
      <path
        d="M-30 16C-16 22 -8 23 0 20C8 23 16 22 30 16C18 13 8 14 0 18C-8 14 -18 13 -30 16Z"
        fill="#ff6fae"
        opacity="0.75"
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

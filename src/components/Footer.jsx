import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="brand__name">
            Midnight <span className="brand__accent">Club</span>
          </span>
          <p>{site.tagline} {site.taglineAlt}</p>
        </div>
        <nav className="footer__links" aria-label="Pie de página">
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Sobre nosotras</a>
          <a href="#contacto">Contacto</a>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Midnight Club · {site.instagramHandle}
      </p>
    </footer>
  )
}

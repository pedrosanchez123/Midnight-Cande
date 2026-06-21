export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="brand__name">
            Midnight <span className="brand__accent">Club</span>
          </span>
          <p>Moda con actitud para tus mejores noches.</p>
        </div>
        <nav className="footer__links" aria-label="Pie de página">
          <a href="#catalogo">Catálogo</a>
          <a href="#nosotros">Sobre nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Midnight Club. Todos los derechos reservados.
      </p>
    </footer>
  )
}

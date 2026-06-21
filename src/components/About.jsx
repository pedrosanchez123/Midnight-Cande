export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about__grid">
        <div className="about__text">
          <h2 className="section-title">Sobre nosotros</h2>
          <p>
            <strong>Midnight Cande</strong> nació en 2021 de una idea simple: la mejor versión de
            cada persona aparece cuando cae la noche. Somos una marca independiente que diseña
            prendas con carácter, pensadas para acompañarte desde la oficina hasta la pista de baile.
          </p>
          <p>
            Trabajamos con talleres locales, materiales de bajo impacto y producción en pequeñas
            tandas para cuidar cada detalle —y al planeta. Cada prenda se piensa para durar, no para
            una sola temporada.
          </p>

          <div className="about__stats">
            <div className="stat">
              <span className="stat__num">+12.000</span>
              <span className="stat__label">clientas felices</span>
            </div>
            <div className="stat">
              <span className="stat__num">100%</span>
              <span className="stat__label">producción local</span>
            </div>
            <div className="stat">
              <span className="stat__num">2021</span>
              <span className="stat__label">desde</span>
            </div>
          </div>
        </div>

        <ul className="values">
          <li>
            <span className="values__icon">✦</span>
            <div>
              <h3>Diseño con propósito</h3>
              <p>Piezas versátiles que combinan entre sí y se adaptan a tu día a día.</p>
            </div>
          </li>
          <li>
            <span className="values__icon">✦</span>
            <div>
              <h3>Hecho de forma responsable</h3>
              <p>Materiales nobles, talleres con condiciones justas y cero desperdicio.</p>
            </div>
          </li>
          <li>
            <span className="values__icon">✦</span>
            <div>
              <h3>Cerca de ti</h3>
              <p>Atención personalizada, cambios fáciles y envíos a todo el país.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

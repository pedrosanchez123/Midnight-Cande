export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about__grid">
        <div className="about__text">
          <h2 className="section-title">Sobre nosotras</h2>
          <p>
            <strong>Midnight Club</strong> es indumentaria femenina con actitud, para chicas que no
            pasan desapercibidas. Acá no hay <em>ordinary girls</em>: hay comunidad, noches
            infinitas y prendas que cuentan una historia.
          </p>
          <p>
            Trabajamos por <em>drops</em> en ediciones limitadas —cuando se agota, se agota:{' '}
            <strong>no restock</strong>. Cada lanzamiento es un momento, y vos decidís si querés ser
            parte. <em>Not everything gets a second chance.</em>
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

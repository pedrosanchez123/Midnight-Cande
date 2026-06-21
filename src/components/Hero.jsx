export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__eyebrow">Colección Otoño · Invierno</p>
        <h1 className="hero__title">
          Moda que brilla <br /> cuando cae la noche
        </h1>
        <p className="hero__subtitle">
          Prendas de carácter para quienes hacen de la noche su pasarela.
          Diseños atemporales, materiales nobles y mucha actitud.
        </p>
        <div className="hero__actions">
          <a href="#catalogo" className="btn btn--primary">
            Ver catálogo
          </a>
          <a href="#nosotros" className="btn btn--ghost">
            Conócenos
          </a>
        </div>
      </div>
    </section>
  )
}

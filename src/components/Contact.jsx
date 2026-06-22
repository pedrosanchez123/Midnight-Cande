import { useState } from 'react'
import { site } from '../data/site.js'
import { WhatsAppIcon, InstagramIcon } from './QuickActions.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Ingresa tu nombre'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Ingresa un email válido'
    if (form.message.trim().length < 10) next.message = 'Cuéntanos un poco más (mín. 10 caracteres)'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }
  }

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  return (
    <section className="contact" id="contacto">
      <div className="contact__grid">
        <div className="contact__info">
          <h2 className="section-title">Contacto</h2>
          <p>
            ¿Tienes dudas sobre tallas, envíos o cambios? Escríbenos y te respondemos dentro de 24
            horas hábiles.
          </p>
          <ul className="contact__list">
            <li>
              <span>✉</span> {site.email}
            </li>
            <li>
              <span>✦</span> {site.instagramHandle}
            </li>
            <li>
              <span>♡</span> Creado por {site.creatorHandle}
            </li>
            <li>
              <span>◷</span> Envíos a todo el país
            </li>
          </ul>

          <div className="social-cta">
            <a
              className="social-btn social-btn--wa"
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Escribir por WhatsApp
            </a>
            <a
              className="social-btn social-btn--ig"
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon /> Seguir en Instagram
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <label>
            Nombre
            <input
              type="text"
              value={form.name}
              onChange={update('name')}
              className={errors.name ? 'input--error' : ''}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              className={errors.email ? 'input--error' : ''}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </label>

          <label>
            Mensaje
            <textarea
              rows="4"
              value={form.message}
              onChange={update('message')}
              className={errors.message ? 'input--error' : ''}
            />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </label>

          <button className="btn btn--primary btn--block" type="submit">
            Enviar mensaje
          </button>

          {sent && (
            <p className="form-success">✓ ¡Mensaje enviado! Te responderemos muy pronto.</p>
          )}
        </form>
      </div>
    </section>
  )
}

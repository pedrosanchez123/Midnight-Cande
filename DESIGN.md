---
name: Midnight Club
description: Indumentaria femenina con estética editorial nocturna — fucsia sobre negro.
colors:
  magenta: "#c11d6a"
  pink: "#ff6fae"
  pink-soft: "#ff9ec8"
  navy: "#1a1740"
  ink-black: "#0a0712"
  ink-violet: "#100b1d"
  surface: "#16101f"
  surface-raised: "#211733"
  border: "#2e2440"
  pearl: "#f4eef4"
  lilac-dim: "#ab9fb8"
  ink-plum: "#2b0a1a"
  white: "#ffffff"
  alert: "#e26d8a"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.4rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "0.5px"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, Segoe UI, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "2px"
rounded:
  sm: "8px"
  md: "14px"
  input: "10px"
  full: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.8rem"
  md: "1.25rem"
  lg: "1.6rem"
  xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "0.7rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.pearl}"
    rounded: "{rounded.full}"
    padding: "0.7rem 1.5rem"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.lilac-dim}"
    rounded: "{rounded.full}"
    padding: "0.45rem 1rem"
  chip-active:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink-plum}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.pearl}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.pearl}"
    rounded: "{rounded.input}"
    padding: "0.7rem 0.9rem"
---

# Design System: Midnight Club

## 1. Overview

**Creative North Star: "Editorial de medianoche"**

Midnight Club se ve como una revista de moda fotografiada a las 3 a.m.: mucho
negro respirando alrededor de titulares serif dramáticos, un fucsia que aparece
como el flash de un labial y se va. No es una tienda; es un editorial con
carrito. La densidad es baja y deliberada — pocas piezas, mucho aire — porque la
escasez (drops, *no restock*) es parte del lujo. Cada pantalla debería poder ser
una publicación del feed de Instagram sin retocar nada.

El sistema **rechaza** explícitamente el look de fast-fashion genérico (grillas
saturadas tipo Shein, mil productos sin curaduría), el e-commerce de plantilla
frío (azul/gris corporativo) y el "AI-slop" (degradados violetas genéricos y
glows decorativos sin intención). Acá lo oscuro y el brillo fucsia son identidad
de marca elegida —espejo del Instagram—, no un efecto por defecto.

**Key Characteristics:**
- Negro tinta como lienzo dominante; el color es un acento raro y caro.
- Titulares serif de alto contraste (Playfair Display) que cargan el drama.
- Fucsia y magenta como única familia de acento — sin segundo color.
- Editorial, mobile-first, poco denso: el aire negro es parte del diseño.

## 2. Colors

Una paleta casi monocromática de negros violáceos donde el único protagonista es
el rosa: del fucsia neón al magenta labial.

### Primary
- **Fucsia Neón** (#ff6fae): el acento principal. Aparece en el realce *girls*
  del titular, precios, talle activo, badges, focos de inputs y bordes en hover.
  Es la "voz" de la marca; su escasez es lo que lo hace fuerte.
- **Magenta Labial** (#c11d6a): el rosa profundo. Base del degradado de los
  botones primarios y de los labios del logo. Aporta peso y madurez al acento.
- **Rosa Tenue** (#ff9ec8): rosa claro para textos de realce sobre fondo oscuro
  (precios en tarjetas, hover de links) donde el fucsia pleno sería demasiado.

### Neutral
- **Negro Tinta** (#0a0712): fondo base de toda la página.
- **Negro Violáceo** (#100b1d): fondo de secciones alternas (about, footer).
- **Superficie Noche** (#16101f): tarjetas, drawer del carrito, formularios.
- **Superficie Elevada** (#211733): chips, botón del carrito, controles.
- **Azul Medianoche** (#1a1740): tinte de los degradados radiales del fondo y del
  logo; aporta la profundidad "nocturna".
- **Borde Penumbra** (#2e2440): bordes y divisores sutiles de 1px.
- **Blanco Perla** (#f4eef4): color de texto principal (no es blanco puro).
- **Lila Apagado** (#ab9fb8): texto secundario, etiquetas, metadatos.

### Tertiary
- **Rosa Alerta** (#e26d8a): solo para errores de validación y acciones
  destructivas (eliminar del carrito). Nunca decorativo.

### Named Rules
**The One Lipstick Rule.** El fucsia/magenta es la única familia de acento. Está
prohibido introducir un segundo color de marca (azules, dorados, verdes salvo el
verde funcional de WhatsApp). Si una pantalla necesita "más color", la respuesta
es más fucsia, no otro tono.

**The Black-First Rule.** El fondo siempre es negro tinta. Las superficies se
distinguen por capas tonales (#16101f → #211733), no por bordes brillantes.

## 3. Typography

**Display Font:** Playfair Display (con Georgia, serif de respaldo)
**Body Font:** Inter (con Segoe UI / system-ui)
**Accent Font:** Dancing Script (cursiva, reservada para guiños tipo firma)

**Character:** El contraste serif/sans es el motor del look editorial: el Playfair
de alto contraste y trazo fino pone el drama y el glamour; el Inter mantiene el
cuerpo y la UI legibles y modernos sin pelear con el titular.

### Hierarchy
- **Display** (Playfair, 700, clamp(2.4rem, 6vw, 4rem), lh 1.12): titular del
  hero. Usa cursiva fucsia para una palabra clave ("*girls*").
- **Headline** (Playfair, 700, clamp(1.8rem, 4vw, 2.6rem), lh 1.15): títulos de
  sección ("Catálogo", "Sobre nosotras", "Contacto").
- **Title** (Playfair, 700, 1.15rem): nombre de marca y nombres de prenda en las
  tarjetas.
- **Body** (Inter, 400, 1rem, lh 1.6): párrafos y descripciones. Largo de línea
  cómodo (~60–70ch en bloques de texto).
- **Label** (Inter, 600, 0.78rem, letter-spacing 2–3px, MAYÚSCULAS): eyebrows,
  metadatos de producto, etiquetas de filtro. El tracking ancho es la firma.

### Named Rules
**The Serif-Carries-Drama Rule.** Todo lo que deba sentirse "de marca" va en
Playfair. Inter nunca lleva un titular grande; si un texto grande se ve plano,
probablemente está en la fuente equivocada.

**The Wide-Caps Label Rule.** Las etiquetas y eyebrows van siempre en mayúsculas
con letter-spacing ≥2px. Nunca un eyebrow en minúscula o con tracking normal.

## 4. Elevation

El sistema es mayormente plano y se apoya en **capas tonales** (negro → superficie
→ superficie elevada) para separar planos, no en sombras. Las sombras aparecen
solo como respuesta a un estado (hover) o para elementos flotantes, y cuando lo
hacen tienden a tener tinte fucsia en vez de negro neutro.

### Shadow Vocabulary
- **Glow fucsia** (`box-shadow: 0 14px 40px rgba(255,111,174,0.18)`): halo de los
  botones primarios; el "brillo de neón" de la marca.
- **Sombra profunda** (`box-shadow: 0 18px 50px rgba(0,0,0,0.55)`): hover de
  tarjetas, drawer del carrito y botones flotantes.

### Named Rules
**The Flat-At-Rest Rule.** Las superficies son planas en reposo. Una sombra es
una *reacción* (hover, flotante), nunca decoración permanente.

## 5. Components

### Buttons
- **Shape:** píldora completa (border-radius 999px).
- **Primary:** degradado magenta→fucsia (135deg), texto blanco, glow fucsia.
  Padding 0.7rem 1.5rem, peso 600.
- **Ghost:** transparente con borde penumbra y texto perla; en hover el borde se
  vuelve fucsia y el texto rosa tenue.
- **Instagram (signature):** borde de 2px con degradado cónico de los colores de
  Instagram que **gira** en loop (4s). Reservado para el CTA "Únete al club".
- **Hover / Focus:** lift de -2px (solo punteros reales) + intensificación del
  brillo. **Press:** scale(0.97) con curva ease-out fuerte, en todos los
  dispositivos. Se respeta `prefers-reduced-motion`.

### Chips
- **Filtros:** píldora, fondo superficie, texto lila; en hover borde fucsia. El
  **activo** invierte a fondo fucsia con texto ciruela oscuro (#2b0a1a).
- **Talles:** cuadrados redondeados (8px), fondo superficie elevada; el activo es
  fucsia. Al clickear, *squish* (scale 0.92–0.94).

### Cards / Containers
- **Corner Style:** 14px (--radius).
- **Background:** superficie noche (#16101f) con borde penumbra de 1px.
- **Shadow Strategy:** plano en reposo; en hover sube -4px, el borde se vuelve
  fucsia y aparece la sombra profunda (ver Elevation).
- **Internal Padding:** ~1.1rem.

### Inputs / Fields
- **Style:** fondo negro tinta, borde penumbra 1px, radio 10px, texto perla.
- **Focus:** el borde se vuelve fucsia (sin glow). **Error:** borde rosa alerta.

### Navigation
- **Style:** links en lila apagado, tipografía Inter. En hover el texto pasa a
  rosa tenue y crece un subrayado fucsia desde la izquierda (transform scaleX,
  gateado a punteros reales). El logo es un badge circular; en mobile los links
  se ocultan y queda el carrito.

### Quick Actions (signature)
Botones flotantes circulares (54px) abajo a la derecha: WhatsApp (verde funcional)
e Instagram (degradado de marca). Lift+scale en hover, press en tap. Son el puente
directo a la venta/comunidad.

## 6. Do's and Don'ts

### Do:
- **Do** mantener el negro tinta (#0a0712) como fondo dominante y dejar respirar
  el contenido; el aire negro ES el diseño.
- **Do** usar el fucsia/magenta como único acento, con moderación (la regla *One
  Lipstick*): titulares de realce, precios, estado activo, CTAs.
- **Do** poner todo lo "de marca" en Playfair Display de alto contraste; etiquetas
  en Inter MAYÚSCULAS con tracking ≥2px.
- **Do** mantener píldoras (999px) en botones y chips, y el press feedback
  scale(0.97) en todo lo clickeable.
- **Do** respetar `prefers-reduced-motion` y el contraste legible sobre oscuro.

### Don't:
- **Don't** caer en el look fast-fashion genérico tipo **Shein**: grillas
  saturadas, mil productos sin curaduría, todo gritando a la vez.
- **Don't** parecer un **e-commerce de plantilla frío** (azules/grises
  corporativos, cero personalidad).
- **Don't** usar **degradados violetas genéricos ni glows decorativos sin
  intención** ("AI-slop"); el brillo fucsia siempre tiene una razón y un origen.
- **Don't** introducir un segundo color de marca ni titulares grandes en Inter.
- **Don't** llenar las superficies de sombras permanentes: planas en reposo.

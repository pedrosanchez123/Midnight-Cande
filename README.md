# Midnight Club 🌙

Tienda de ropa online construida con **React + Vite**. Moda nocturna con actitud.

## Características

- 🛍️ **Catálogo filtrable** — filtra por categoría, color, búsqueda por texto y ordenamiento (precio, nombre, destacados).
- 🛒 **Carrito de compras** — agrega prendas con talla, ajusta cantidades, total en vivo y checkout simulado. Persiste en `localStorage`.
- 👗 **Sobre nosotros** — historia de la marca, valores y métricas.
- ✉️ **Contacto** — formulario con validación de campos.
- 🎨 Diseño responsive con tema oscuro "midnight" (sin dependencias de UI externas ni assets remotos).

## Requisitos

- Node.js 18+ (probado con Node 24)

## Ejecución local

Clona el repositorio, instala las dependencias y levanta el servidor de desarrollo:

```bash
# 1. Clonar el repositorio
git clone https://github.com/pedrosanchez123/Midnight-Cande.git
cd Midnight-Cande

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Luego abre **http://localhost:5173** en tu navegador.

### Otros comandos

```bash
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build de producción
```

## Estructura

```
src/
├── components/      # Navbar, Hero, Catalog, ProductCard, Cart, About, Contact, Footer
├── context/         # CartContext (estado global del carrito con useReducer)
├── data/            # products.js (catálogo)
├── utils/           # format.js (formato de precios)
├── App.jsx
├── main.jsx
└── index.css        # estilos globales
```

## Personalización

- **Productos:** edita `src/data/products.js`.
- **Colores / tema:** variables CSS en `:root` dentro de `src/index.css`.
- **Imágenes:** las tarjetas usan un placeholder SVG generado en runtime; reemplázalo en `ProductCard.jsx` por `<img>` reales cuando tengas fotos.
- **Logo real:** guarda la imagen del logo como `public/logo.png` y se cargará automáticamente en el navbar. Si el archivo no existe, se muestra una recreación SVG (`Logo.jsx`). Para usar otra extensión, ajusta `LOGO_SRC` en `BrandMark.jsx`.
- **Redes / contacto:** edita WhatsApp, Instagram y email en `src/data/site.js`.

---

© Midnight Club

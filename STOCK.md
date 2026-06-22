# Control de stock (Google Sheets)

La web puede leer el stock de una **planilla de Google** publicada como CSV. Así
Cande edita las cantidades en la planilla y la página se actualiza sola (al
recargar), sin tocar código ni re-deployar.

> Mientras no haya planilla conectada, **todas las prendas se muestran
> disponibles**. No hace falta cargar todas: solo las que quieras limitar o
> marcar agotadas.

## 1. Crear la planilla

Creá una Google Sheet con estas columnas en la primera fila (los nombres
importan; el orden no):

| id | talle | stock | nombre (opcional) |
|----|-------|-------|-------------------|
| 1  | S     | 0     | Vestido Eclipse   |
| 1  | M     | 2     | Vestido Eclipse   |
| 1  | L     | 1     | Vestido Eclipse   |
| 2  | S     | 0     | Blazer Medianoche |

- **id**: el número de la prenda (el mismo `id` de `src/data/products.js`).
- **talle**: tal cual aparece en la web (`S`, `M`, `L`, `XL`, `XS`, `Único`).
- **stock**: cantidad disponible. `0` = agotado.
- **nombre**: opcional, solo para que te ubiques; la web lo ignora.

Reglas:
- Un talle **sin fila** se considera disponible.
- Si **todos** los talles de una prenda están en `0`, la prenda aparece como
  **"Sin stock"**.

## 2. Publicar como CSV

En la planilla: **Archivo → Compartir → Publicar en la web** → en "Vínculo"
elegí la hoja y el formato **CSV** → **Publicar**. Copiá la URL (termina en
`output=csv`).

## 3. Conectar la URL

Pegá esa URL en [src/data/stock.js](src/data/stock.js):

```js
export const STOCK_CSV_URL = 'https://docs.google.com/.../pub?gid=0&single=true&output=csv'
```

Commit + push y listo. A partir de ahí, cada vez que cambies un número en la
planilla, la web lo refleja al recargar (Google cachea el CSV unos minutos).

## Notas

- **No descuenta solo al vender.** Como las ventas se cierran por WhatsApp, hay
  que actualizar la cantidad en la planilla manualmente cuando vendés.
- Para probar sin planilla, podés cargar valores en `LOCAL_STOCK` dentro de
  `stock.js` (ej. `{ 1: { S: 0, M: 2 } }`).
- ¿Querés actualización **en vivo sin recargar** y un panel de admin? Eso
  requiere una base de datos (Supabase/Firebase); se puede migrar más adelante.

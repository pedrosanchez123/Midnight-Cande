// Configuración central de la marca y enlaces sociales.
// 👉 Reemplaza WHATSAPP_NUMBER por el número real de Cande (formato internacional,
//    solo dígitos, sin "+", espacios ni guiones). Ej: Argentina => 5491122334455.
const WHATSAPP_NUMBER = '5491122334455' // ← PLACEHOLDER: cambiar por el de Cande
const WHATSAPP_MESSAGE = 'Hola Midnight Club! Me interesa una prenda 💋'

export const site = {
  brand: 'Midnight Club',
  tagline: 'No ordinary girls here.',
  taglineAlt: 'Be part of the club.',
  bio: 'Indumentaria femenina · Más que ropa, una comunidad.',
  instagramHandle: '@midnightclb.ind',
  instagramUrl: 'https://instagram.com/midnightclb.ind',
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: 'hola@midnightclub.com',
  creatorHandle: '@_cande_sol',
}

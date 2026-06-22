// Configuración central de la marca y enlaces sociales.
// WhatsApp en formato internacional, solo dígitos (+54 9 11 7669-5369).
const WHATSAPP_NUMBER = '5491176695369'
const WHATSAPP_MESSAGE = 'Hola Midnight Club! Me interesa una prenda 💋'

export const site = {
  brand: 'Midnight Club',
  tagline: 'No ordinary girls here.',
  taglineAlt: 'Be part of the club.',
  bio: 'Indumentaria femenina · Más que ropa, una comunidad.',
  instagramHandle: '@midnightclb.ind',
  instagramUrl:
    'https://www.instagram.com/midnightclb.ind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: 'hola@midnightclub.com',
}

// Arma un link de WhatsApp con un mensaje dinámico (ej. el resumen del pedido).
export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

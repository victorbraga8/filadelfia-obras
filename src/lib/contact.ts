export const CONTACT_PHONE_DISPLAY = "(21) 97319-2305";
export const CONTACT_PHONE_DIGITS = "5521973192305";
export const CONTACT_EMAIL_ADDRESS = "comercial@filadelfiaobras.com.br";

export const CONTACT_PHONE_HREF = `tel:+${CONTACT_PHONE_DIGITS}`;
export const CONTACT_WHATSAPP_HREF = `https://wa.me/${CONTACT_PHONE_DIGITS}`;
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL_ADDRESS}`;

export function buildServiceWhatsAppHref(serviceTitle: string) {
  const message = `Olá! Gostaria de mais informações sobre o serviço de ${serviceTitle}.`;

  return `${CONTACT_WHATSAPP_HREF}?text=${encodeURIComponent(message)}`;
}

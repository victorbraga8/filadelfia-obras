export const CONTACT_PHONE_DISPLAY = "(21) 97319-2305";
export const CONTACT_PHONE_DIGITS = "5521973192305";
export const CONTACT_EMAIL_ADDRESS = "contato@filadelfiaobras.com.br";
export const CONTACT_FORM_MIN_FILL_TIME_MS = 4000;
export const CONTACT_FORM_SUBMIT_COOLDOWN_MS = 30000;

export const CONTACT_PHONE_HREF = `tel:+${CONTACT_PHONE_DIGITS}`;
export const CONTACT_WHATSAPP_HREF = `https://wa.me/${CONTACT_PHONE_DIGITS}`;
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL_ADDRESS}`;

export function buildServiceWhatsAppHref(serviceTitle: string) {
  const message = `Olá! Gostaria de mais informações sobre o serviço de ${serviceTitle}.`;

  return `${CONTACT_WHATSAPP_HREF}?text=${encodeURIComponent(message)}`;
}

export type ContactFormPayload = {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  subject: string;
  details: string;
};

type ContactFormSpamGuardInput = {
  elapsedMs: number;
  honeypotValue: string;
  lastSubmittedAt: number;
  now: number;
};

function normalizeSingleLineValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizeMultilineValue(value: string) {
  return value
    .trim()
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

export function formatBrazilianPhoneInput(value: string) {
  const rawDigits = value.replace(/\D/g, "");
  const digits = (
    rawDigits.startsWith("55") && rawDigits.length > 11
      ? rawDigits.slice(2)
      : rawDigits
  ).slice(0, 11);
  const areaCode = digits.slice(0, 2);
  const number = digits.slice(2);

  if (digits.length <= 2) {
    return areaCode ? `(${areaCode}` : "";
  }

  if (number.length <= 4) {
    return `(${areaCode}) ${number}`;
  }

  if (number.length <= 8) {
    return `(${areaCode}) ${number.slice(0, 4)}-${number.slice(4)}`;
  }

  return `(${areaCode}) ${number.slice(0, 5)}-${number.slice(5, 9)}`;
}

export function getContactFormSpamBlockReason({
  elapsedMs,
  honeypotValue,
  lastSubmittedAt,
  now,
}: ContactFormSpamGuardInput) {
  if (honeypotValue.trim().length > 0) {
    return "Não foi possível validar o envio. Tente novamente.";
  }

  if (elapsedMs < CONTACT_FORM_MIN_FILL_TIME_MS) {
    return "Aguarde alguns segundos e revise os dados antes de enviar.";
  }

  if (lastSubmittedAt > 0 && now - lastSubmittedAt < CONTACT_FORM_SUBMIT_COOLDOWN_MS) {
    return "Aguarde alguns segundos antes de enviar uma nova solicitação.";
  }

  return null;
}

export function buildContactFormWhatsAppHref(payload: ContactFormPayload) {
  const fullName = normalizeSingleLineValue(payload.fullName);
  const phone = normalizeSingleLineValue(payload.phone);
  const email = normalizeSingleLineValue(payload.email);
  const company = normalizeSingleLineValue(payload.company);
  const subject = normalizeSingleLineValue(payload.subject);
  const details = normalizeMultilineValue(payload.details);

  const messageLines = [
    "Olá! Gostaria de solicitar atendimento da Filadélfia Obras.",
    "",
    "Origem: Formulário do site",
    `Nome: ${fullName}`,
    `Telefone: ${phone}`,
    email ? `E-mail: ${email}` : null,
    company ? `Empresa: ${company}` : null,
    `Assunto: ${subject}`,
    "",
    "Detalhes do projeto:",
    details,
  ].filter((line): line is string => Boolean(line));

  return `${CONTACT_WHATSAPP_HREF}?text=${encodeURIComponent(
    messageLines.join("\n"),
  )}`;
}

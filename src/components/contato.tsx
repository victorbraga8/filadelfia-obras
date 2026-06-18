import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  User,
  Building,
  FileText,
} from "lucide-react";

import {
  CONTACT_EMAIL_ADDRESS,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
  buildContactFormWhatsAppHref,
  formatBrazilianPhoneInput,
  getContactFormSpamBlockReason,
} from "@/lib/contact";

const contactLabelClassName =
  "block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 group-focus-within:text-blue-700 transition-colors";
const contactIconClassName =
  "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-blue-700 transition-colors";
const contactControlClassName =
  "w-full rounded-xl border border-slate-300 bg-white text-slate-950 shadow-sm outline-none transition-all font-semibold placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/20 focus:shadow-[0_10px_30px_-18px_rgba(37,99,235,0.75)] [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_white] [&:-webkit-autofill]:[-webkit-text-fill-color:#020617] [&:-webkit-autofill]:caret-slate-950";
const contactInputClassName = `${contactControlClassName} pl-12 pr-4 py-4`;
const contactPhonePattern = "^\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}$";
const submitFeedbackDurationMs = 8000;

function getFormFieldValue(formData: FormData, fieldName: string) {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value : "";
}

export default function Contato() {
  const formStartedAtRef = useRef(0);
  const lastSubmittedAtRef = useRef(0);
  const [phoneValue, setPhoneValue] = useState("");
  const [submitFeedback, setSubmitFeedback] = useState<string | null>(null);
  const [submitFeedbackTone, setSubmitFeedbackTone] = useState<
    "error" | "success" | null
  >(null);

  useEffect(() => {
    if (!submitFeedback) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setSubmitFeedback(null);
      setSubmitFeedbackTone(null);
    }, submitFeedbackDurationMs);

    return () => window.clearTimeout(timeoutId);
  }, [submitFeedback]);

  const handleFormInteraction = () => {
    if (formStartedAtRef.current === 0) {
      formStartedAtRef.current = Date.now();
    }
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(formatBrazilianPhoneInput(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const now = Date.now();
    const spamBlockReason = getContactFormSpamBlockReason({
      elapsedMs:
        formStartedAtRef.current > 0 ? now - formStartedAtRef.current : 0,
      honeypotValue: getFormFieldValue(formData, "companyWebsite"),
      lastSubmittedAt: lastSubmittedAtRef.current,
      now,
    });

    if (spamBlockReason) {
      setSubmitFeedbackTone("error");
      setSubmitFeedback(spamBlockReason);
      return;
    }

    const whatsappHref = buildContactFormWhatsAppHref({
      fullName: getFormFieldValue(formData, "fullName"),
      phone: getFormFieldValue(formData, "phone"),
      email: getFormFieldValue(formData, "email"),
      company: getFormFieldValue(formData, "company"),
      subject: getFormFieldValue(formData, "subject"),
      details: getFormFieldValue(formData, "details"),
    });

    lastSubmittedAtRef.current = now;
    setSubmitFeedbackTone("success");
    setSubmitFeedback(
      "Recebemos sua mensagem. O WhatsApp foi aberto para concluir o envio.",
    );

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-100 -skew-y-2 transform origin-top-left z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100">
          <div className="lg:w-5/12 bg-slate-950 p-8 md:p-12 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-900/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

            <div className="relative z-10">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-3 block">
                Fale Conosco
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight break-words">
                Vamos tirar seu projeto <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  do papel?
                </span>
              </h3>
              <p className="text-slate-400 mb-10 leading-relaxed text-sm md:text-base border-l-2 border-slate-700 pl-4">
                Nossa equipe de engenharia está pronta para realizar a visita
                técnica e orçamento. Entre em contato pelos canais oficiais.
              </p>

              <div className="space-y-6 md:space-y-8 mb-12">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 border border-white/5">
                    <MapPin size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                      Base Operacional
                    </p>
                    <p className="font-medium text-base md:text-lg break-words">
                      Rio de Janeiro
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 border border-white/5">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                      Telefone / Comercial
                    </p>
                    <a
                      href={CONTACT_PHONE_HREF}
                      className="font-medium text-base md:text-lg break-words !text-white transition-colors hover:!text-white"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 border border-white/5">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                      Email Corporativo
                    </p>
                    <a
                      href={CONTACT_EMAIL_HREF}
                      className="font-medium text-base md:text-lg break-all leading-tight !text-white transition-colors hover:!text-white md:break-words"
                    >
                      {CONTACT_EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 mb-10 w-full">
                <a
                  href={CONTACT_WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] !text-white py-3 md:py-3.5 px-2 md:px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#25D366]/20 active:scale-95 text-sm md:text-base min-w-0 whitespace-nowrap no-underline"
                >
                  <MessageCircle
                    size={20}
                    fill="white"
                    className="!text-white shrink-0"
                  />
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="flex-1 bg-slate-800 hover:bg-slate-700 !text-white py-3 md:py-3.5 px-2 md:px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all border border-slate-700 hover:border-slate-600 active:scale-95 text-sm md:text-base min-w-0 whitespace-nowrap no-underline"
                >
                  <Instagram size={20} className="!text-white shrink-0" />
                  Instagram
                </a>
              </div>
            </div>
            {/* <div className="relative z-10 w-full h-40 md:h-48 rounded-xl overflow-hidden border border-slate-700 shadow-inner shrink-0 bg-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.07921609655!2d-42.89063226295714!3d-22.9200424694924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9986b6a48f700f%3A0x6334641505306660!2sMaric%C3%A1%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1707140000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div> */}
          </div>

          <div className="lg:w-7/12 p-8 md:p-12 lg:p-14 bg-white">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold text-slate-900">
                Envie uma mensagem
              </h4>
              <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Online agora
              </div>
            </div>

            <form
              className="space-y-6"
              onFocus={handleFormInteraction}
              onChange={handleFormInteraction}
              onSubmit={handleSubmit}
            >
              <div
                className="absolute left-[-5000px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="company-website">Site da empresa</label>
                <input
                  id="company-website"
                  name="companyWebsite"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative">
                  <label
                    htmlFor="contact-full-name"
                    className={contactLabelClassName}
                  >
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className={contactIconClassName} />
                    <input
                      id="contact-full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      minLength={3}
                      maxLength={120}
                      required
                      className={contactInputClassName}
                      placeholder="Digite seu nome"
                    />
                  </div>
                </div>
                <div className="group relative">
                  <label
                    htmlFor="contact-phone"
                    className={contactLabelClassName}
                  >
                    Telefone
                  </label>
                  <div className="relative">
                    <Phone className={contactIconClassName} />
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="numeric"
                      minLength={14}
                      maxLength={15}
                      pattern={contactPhonePattern}
                      value={phoneValue}
                      onChange={handlePhoneChange}
                      required
                      className={contactInputClassName}
                      placeholder="(21) 00000-0000"
                    />
                  </div>
                </div>
              </div>

              <div className="group relative">
                <label
                  htmlFor="contact-email"
                  className={contactLabelClassName}
                >
                  Email Corporativo
                </label>
                <div className="relative">
                  <Mail className={contactIconClassName} />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={120}
                    className={contactInputClassName}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative">
                  <label
                    htmlFor="contact-company"
                    className={contactLabelClassName}
                  >
                    Empresa
                  </label>
                  <div className="relative">
                    <Building className={contactIconClassName} />
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      maxLength={120}
                      className={contactInputClassName}
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                <div className="group relative">
                  <label
                    htmlFor="contact-subject"
                    className={contactLabelClassName}
                  >
                    Assunto
                  </label>
                  <div className="relative">
                    <FileText className={contactIconClassName} />
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      className={`${contactInputClassName} appearance-none cursor-pointer`}
                    >
                      <option>Orçamento de Obra</option>
                      <option>Limpeza Industrial</option>
                      <option>Aluguel de Caminhão</option>
                      <option>Trabalhe Conosco</option>
                      <option>Outros</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="contact-details"
                  className={contactLabelClassName}
                >
                  Detalhes do Projeto
                </label>
                <textarea
                  id="contact-details"
                  name="details"
                  rows={4}
                  minLength={20}
                  maxLength={1500}
                  required
                  className={`${contactControlClassName} px-4 py-4 resize-none`}
                  placeholder="Descreva sua necessidade com o máximo de detalhes possível..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="md:w-1/2! w-full bg-linear-to-r! from-blue-600! to-blue-500! hover:from-blue-500! hover:to-blue-400! text-white! font-bold! py-2! rounded-lg! transition-all! duration-300! shadow-[0_4px_15px_-5px_rgba(37,99,235,0.4)]! hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.5)]! hover:-translate-y-0.5! flex! items-center! justify-center! gap-2! group! active:scale-[0.99]! text-sm!"
                >
                  <span className="text-lg">Enviar Solicitação</span>
                  <Send
                    size={18}
                    className="text-blue-100! group-hover:text-white! group-hover:translate-x-0.5! group-hover:-translate-y-0.5! transition-all! duration-300!"
                  />
                </button>
              </div>
              {submitFeedback ? (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-center text-sm ${
                    submitFeedbackTone === "error"
                      ? "text-amber-600"
                      : "text-green-600"
                  }`}
                >
                  {submitFeedback}
                </p>
              ) : null}
              <p className="mx-auto mt-4 flex max-w-xl items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-center text-sm font-medium text-slate-600">
                <ShieldCheckIcon size={16} className="text-green-600" />
                Mensagem e dados seguem com criptografia de ponta a ponta.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldCheckIcon({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

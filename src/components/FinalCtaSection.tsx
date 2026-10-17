import React, { useState } from 'react';
import { MessageCircle, Phone, Send, ArrowRight } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick, trackFormSubmit } from '../utils/tracking';

const SERVICES_OPTIONS = [
  'Reparación de filtraciones y goteras',
  'Cambio de techo',
  'Instalación y construcción nueva',
  'Impermeabilización',
  'Mantención preventiva',
  'Aislación térmica y acústica',
  'Otro requerimiento',
];

export const FinalCtaSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES_OPTIONS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackFormSubmit(service);

    const cleanName = name.trim() || 'un cliente';
    const cleanPhone = phone.trim() || 'no especificado';
    const message = `Hola Jmn, soy ${cleanName}. Necesito ${service}. Mi teléfono es ${cleanPhone}.`;
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/56967292923?text=${encoded}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#15181D] overflow-hidden text-white">
      
      {/* Background Image with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://jmn.cl/wp-content/uploads/2025/04/cotiza-tu-techo-1.jpg"
          alt="Cotización y evaluación de techos en Santiago"
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15181D] via-[#15181D]/85 to-[#15181D]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <span className="text-xs sm:text-sm font-bold tracking-wider text-[#E8731A] uppercase block mb-3">
          PROTEGE TU HOGAR O EMPRESA
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
          Arregla tu techo antes de la próxima lluvia
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-10">
          Cuéntanos qué necesita tu techo y te respondemos por WhatsApp con alternativas claras y presupuesto sin sorpresas.
        </p>

        {/* Primary Direct WhatsApp Button */}
        <div className="mb-14">
          <a
            href="https://wa.me/56967292923?text=Hola%20Jmn%2C%20quiero%20cotizar%20mi%20techo.%20Comuna%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_final')}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-lg sm:text-xl shadow-2xl shadow-[#25D366]/30 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0"
          >
            <MessageCircle className="w-7 h-7 fill-current" aria-hidden="true" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>

        {/* Short 3-field form card */}
        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-[12px] text-left shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-white mb-1">
              O envíanos tus datos para coordinar
            </h3>
            <p className="text-xs text-neutral-400">
              Te conectaremos directo a WhatsApp con tu solicitud prellenada:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="form-nombre" className="block text-xs font-semibold text-neutral-300 mb-1">
                Nombre
              </label>
              <input
                id="form-nombre"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Rodrigo Navarro"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8731A] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="form-telefono" className="block text-xs font-semibold text-neutral-300 mb-1">
                Teléfono / WhatsApp
              </label>
              <input
                id="form-telefono"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+56 9 1234 5678"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8731A] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="form-servicio" className="block text-xs font-semibold text-neutral-300 mb-1">
                ¿Qué necesitas?
              </label>
              <select
                id="form-servicio"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#1D2024] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E8731A] focus:border-transparent transition-all"
              >
                {SERVICES_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#1D2024] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 px-4 rounded-xl bg-[#E8731A] hover:bg-[#d26414] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              <span>Enviar y continuar por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Secondary phone link */}
        <div className="mt-8">
          <a
            href="tel:+56224177165"
            onClick={() => trackPhoneClick('cta_final')}
            className="inline-flex items-center gap-2 text-sm sm:text-base text-neutral-300 hover:text-white transition-colors group"
          >
            <Phone className="w-4 h-4 text-[#E8731A] group-hover:scale-110 transition-transform" />
            <span>¿Prefieres llamar? <strong className="text-white underline underline-offset-4 decoration-neutral-500 hover:decoration-white">+56 2 2417 7165</strong></span>
          </a>
        </div>

      </div>
    </section>
  );
};

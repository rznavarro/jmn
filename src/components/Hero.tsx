import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ShieldCheck, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/tracking';

const WHATSAPP_HERO_URL = "https://wa.me/56967292923?text=Hola%20Jmn%2C%20quiero%20cotizar%20mi%20techo.%20Comuna%3A%20";

export const Hero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#15181D] pt-24 pb-16">
      
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Poster / Fallback image (with high fetchpriority) */}
        <img
          src="https://jmn.cl/wp-content/uploads/2025/02/reparacion-en-techos-santiago.webp"
          alt="Trabajo profesional de reparación de techos en Santiago por Jmn"
          fetchPriority="high"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            isVideoLoaded && !prefersReducedMotion ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />

        {/* Real Video in loop (hidden if prefers reduced motion or data saver) */}
        {!prefersReducedMotion && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-center scale-100 animate-[pulse_12s_ease-in-out_infinite_alternate]"
            style={{ animationDuration: '12s' }}
          >
            <source src="https://jmn.cl/wp-content/uploads/2024/11/jmn.mp4" type="video/mp4" />
          </video>
        )}

        {/* High Contrast Gradient Overlay for AAA/AA Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#15181D]/95 via-[#15181D]/80 to-[#15181D]/60 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15181D] via-transparent to-[#15181D]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
        <div className="max-w-3xl">
          
          {/* Kicker / Tag */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#E8731A] uppercase mb-4 sm:mb-6">
            <span className="w-2 h-0.5 bg-[#E8731A]" aria-hidden="true" />
            <span>TECHOS · TECHUMBRES · CUBIERTAS — SANTIAGO</span>
          </div>

          {/* Single H1 on the entire page */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
            Chao goteras: reparamos y cambiamos tu techo en Santiago, con garantía
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl font-normal">
            Más de 30 años y 1.341 proyectos en casas, empresas e instituciones. Evaluamos tu techo y te damos alternativas claras: reparar o cambiar.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12">
            <a
              href={WHATSAPP_HERO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero')}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-base sm:text-lg shadow-xl shadow-[#25D366]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              <MessageCircle className="w-6 h-6 fill-current" aria-hidden="true" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <a
              href="tel:+56224177165"
              onClick={() => trackPhoneClick('hero')}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 text-neutral-300 hover:text-white text-sm sm:text-base font-medium transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8731A] rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#E8731A] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>o llámanos al <strong className="text-white underline underline-offset-4 decoration-neutral-500 hover:decoration-white">+56 2 2417 7165</strong></span>
            </a>
          </div>

          {/* Trust markers row */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-neutral-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E8731A] shrink-0" aria-hidden="true" />
              <span className="font-semibold text-white">+30 años</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E8731A] shrink-0" aria-hidden="true" />
              <span className="font-semibold text-white">1.341 proyectos</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E8731A] shrink-0" aria-hidden="true" />
              <span>Garantía materiales y mano de obra</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#E8731A] shrink-0" aria-hidden="true" />
              <span>Proveedor del Estado</span>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative slope at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-[#F6F5F2] roof-slope-top" aria-hidden="true" />
    </section>
  );
};

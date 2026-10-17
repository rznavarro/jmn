import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/tracking';

const WHATSAPP_URL = "https://wa.me/56967292923?text=Hola%20Jmn%2C%20quiero%20cotizar%20mi%20techo.%20Comuna%3A%20";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E8731A] focus:text-white focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Saltar al contenido principal
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 bg-[#15181D]/95 backdrop-blur-md border-b border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo Zone */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8731A] rounded-md p-1"
              aria-label="Jmn – Expertos en Techos - Volver al inicio"
            >
              <img
                src="https://jmn.cl/wp-content/uploads/2024/10/jmn-logo-blanco.svg"
                alt="Jmn – Expertos en Techos"
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                width="120"
                height="44"
              />
            </a>
          </div>

          {/* Nav links (Desktop) */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300"
          >
            <a
              href="#servicios"
              className="hover:text-white transition-colors py-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8731A] rounded"
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              className="hover:text-white transition-colors py-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8731A] rounded"
            >
              Proyectos
            </a>
            <a
              href="#como-trabajamos"
              className="hover:text-white transition-colors py-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8731A] rounded"
            >
              Cómo trabajamos
            </a>
            <a
              href="#preguntas"
              className="hover:text-white transition-colors py-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8731A] rounded"
            >
              Preguntas
            </a>
          </nav>

          {/* Right Action Zone (Desktop) */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a
              href="tel:+56224177165"
              onClick={() => trackPhoneClick('header')}
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E8731A] rounded px-2 py-1"
              aria-label="Llamar al teléfono fijo de Jmn: +56 2 2417 7165"
            >
              <Phone className="w-4 h-4 text-[#E8731A]" aria-hidden="true" />
              <span className="font-medium">+56 2 2417 7165</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('header')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-semibold text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Icons (WhatsApp Icon + Hamburger) */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('header_mobile_icon')}
              className="w-10 h-10 rounded-lg bg-[#25D366] text-slate-950 flex items-center justify-center transition-colors active:scale-95"
              aria-label="Cotizar por WhatsApp con Jmn"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8731A]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#15181D] border-b border-white/15 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
            <nav className="flex flex-col gap-3 py-2 text-base text-neutral-200 font-medium">
              <a
                href="#servicios"
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Servicios
              </a>
              <a
                href="#proyectos"
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#como-trabajamos"
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Cómo trabajamos
              </a>
              <a
                href="#preguntas"
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                Preguntas frecuentes
              </a>

              <div className="h-px bg-white/10 my-2" />

              <a
                href="tel:+56224177165"
                onClick={() => {
                  trackPhoneClick('header_mobile_menu');
                  handleNavClick();
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5"
              >
                <Phone className="w-4 h-4 text-[#E8731A]" />
                <span>+56 2 2417 7165 (Llamar fijo)</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('header_mobile_menu');
                  handleNavClick();
                }}
                className="flex items-center justify-center gap-2 mt-2 w-full py-3 rounded-xl bg-[#25D366] text-slate-950 font-bold shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Cotizar por WhatsApp</span>
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

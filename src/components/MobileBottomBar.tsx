import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/tracking';

const WHATSAPP_URL = "https://wa.me/56967292923?text=Hola%20Jmn%2C%20quiero%20cotizar%20mi%20techo.%20Comuna%3A%20";

export const MobileBottomBar: React.FC = () => {
  return (
    <nav
      aria-label="Acciones rápidas de contacto"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#15181D]/95 backdrop-blur-md border-t border-white/10 p-2.5 shadow-2xl"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* WhatsApp Button (70% width) */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('barra_movil')}
          className="w-[70%] min-h-[48px] px-3 py-2.5 rounded-xl bg-[#25D366] active:bg-[#20bd5a] text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
          aria-label="Cotizar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" aria-hidden="true" />
          <span className="truncate">Cotizar WhatsApp</span>
        </a>

        {/* Call Button (30% width) */}
        <a
          href="tel:+56224177165"
          onClick={() => trackPhoneClick('barra_movil')}
          className="w-[30%] min-h-[48px] px-2 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors border border-white/10"
          aria-label="Llamar al teléfono fijo +56 2 2417 7165"
        >
          <Phone className="w-4 h-4 text-[#E8731A] shrink-0" aria-hidden="true" />
          <span className="truncate">Llamar</span>
        </a>
      </div>
    </nav>
  );
};

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/tracking';

const WHATSAPP_URL = "https://wa.me/56967292923?text=Hola%20Jmn%2C%20quiero%20cotizar%20mi%20techo.%20Comuna%3A%20";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show tooltip once at 8 seconds
    const showTimer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 8000);

    // Auto-hide after 7 seconds of showing
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [dismissed]);

  return (
    <aside
      aria-label="Contacto rápido por WhatsApp"
      className="fixed bottom-20 md:bottom-7 right-4 md:right-7 z-40 flex items-end gap-3 pointer-events-auto"
    >
      {/* Tooltip: "¿Cotizamos tu techo?" */}
      {showTooltip && !dismissed && (
        <div
          role="status"
          className="relative bg-white text-[#1D2024] text-xs sm:text-sm font-semibold py-2 px-3.5 rounded-xl shadow-2xl border border-neutral-200 animate-in fade-in slide-in-from-right-4 duration-300 max-w-[200px]"
        >
          <div className="flex items-center justify-between gap-2">
            <span>¿Cotizamos tu techo?</span>
            <button
              type="button"
              onClick={() => {
                setShowTooltip(false);
                setDismissed(true);
              }}
              className="text-neutral-400 hover:text-neutral-700 p-0.5"
              aria-label="Cerrar sugerencia"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-neutral-200 rotate-45" />
        </div>
      )}

      {/* WhatsApp Floating Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('flotante')}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 flex items-center justify-center shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95 animate-whatsapp-pulse focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        aria-label="Escribir por WhatsApp a Jmn para cotizar o evaluar techo"
      >
        <MessageCircle className="w-8 h-8 md:w-9 md:h-9 fill-current" />
      </a>
    </aside>
  );
};

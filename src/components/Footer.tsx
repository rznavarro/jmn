import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Map, Facebook, Instagram } from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick } from '../utils/tracking';

// Custom TikTok icon
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export const Footer: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <footer className="bg-[#15181D] text-white border-t border-white/10 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#" className="inline-block" aria-label="Jmn – Inicio">
              <img
                src="https://jmn.cl/wp-content/uploads/2024/10/jmn-logo-blanco.svg"
                alt="Jmn – Expertos en Techos"
                className="h-10 w-auto"
                width="120"
                height="44"
              />
            </a>
            <p className="text-sm font-semibold text-[#E8731A]">
              "Más soluciones, menos problemas."
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Más de 30 años en techos, techumbres y cubiertas. Empresa familiar nacida en el sur de Chile con cobertura integral en todas las comunas de Santiago.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/jmn.cl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Jmn en Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/jmnchile.cl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Jmn en Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@jmn.cl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir a Jmn en TikTok"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Reparación de techos
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Cambio de techos y asbesto
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Instalación y construcción
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Impermeabilización de cubiertas
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Mantención preventiva
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Aislación térmica y acústica
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contacto directo
            </h4>

            <a
              href="https://wa.me/56967292923?text=Hola%20Jmn%2C%20quiero%20cotizar%20mi%20techo.%20Comuna%3A%20"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('footer')}
              className="flex items-center gap-3 text-sm text-neutral-300 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>WhatsApp: +56 9 6729 2923</span>
            </a>

            <a
              href="tel:+56224177165"
              onClick={() => trackPhoneClick('footer')}
              className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8731A] shrink-0" />
              <span>Fijo: +56 2 2417 7165</span>
            </a>

            <a
              href="mailto:contacto@jmn.cl"
              className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#E8731A] shrink-0" />
              <span>contacto@jmn.cl</span>
            </a>

            <div className="flex items-start gap-3 text-sm text-neutral-300 pt-1">
              <MapPin className="w-4 h-4 text-[#E8731A] shrink-0 mt-0.5" />
              <span>Hernando de Aguirre 128, oficina 505, Providencia, RM</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-neutral-300 pt-1">
              <Clock className="w-4 h-4 text-[#E8731A] shrink-0" />
              <span>Atención y cotizaciones vía WhatsApp</span>
            </div>
          </div>

          {/* Deferred Google Maps Col */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Ubicación en Providencia
            </h4>
            
            {!showMap ? (
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center flex flex-col items-center justify-center min-h-[160px]">
                <MapPin className="w-7 h-7 text-[#E8731A] mb-2" />
                <p className="text-xs text-neutral-400 mb-3">
                  Hernando de Aguirre 128, Providencia, Santiago
                </p>
                <button
                  type="button"
                  onClick={() => setShowMap(true)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>Ver mapa en Google Maps</span>
                </button>
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden border border-white/15 h-44 w-full">
                <iframe
                  title="Ubicación de Jmn en Google Maps"
                  src="https://maps.google.com/maps?q=Hernando%20de%20Aguirre%20128%2C%20Providencia%2C%20Chile&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            )}
          </div>

        </div>

        {/* Legal bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Jmn. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://jmn.cl/politica-de-privacidad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              Política de privacidad
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

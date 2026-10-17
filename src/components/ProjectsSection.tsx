import React, { useState } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { MessageCircle, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/tracking';

const GALLERY_IMAGES = [
  {
    url: 'https://jmn.cl/wp-content/uploads/2025/02/Techo-Americano-Emballetado-en-Las-Condes.jpg',
    title: 'Techo Americano Emballetado en Las Condes',
    location: 'Las Condes, Santiago',
  },
  {
    url: 'https://jmn.cl/wp-content/uploads/2025/02/instalacion-de-teja-asfaltica-cafe-en-casa-particular.jpg',
    title: 'Instalación de teja asfáltica café en casa particular',
    location: 'La Reina, Santiago',
  },
  {
    url: 'https://jmn.cl/wp-content/uploads/2024/11/Techo-de-Policarbonato-Colegio.jpg',
    title: 'Techo de Policarbonato en Colegio',
    location: 'Institución Educacional, Santiago',
  },
  {
    url: 'https://jmn.cl/wp-content/uploads/2024/11/Techo-Americano-Las-Condes.jpg',
    title: 'Techo Americano en Las Condes',
    location: 'Las Condes, Santiago',
  },
  {
    url: 'https://jmn.cl/wp-content/uploads/2024/11/techo-teja-asfaltica-las-condes.jpg',
    title: 'Techo de teja asfáltica en Las Condes',
    location: 'Las Condes, Santiago',
  },
  {
    url: 'https://jmn.cl/wp-content/uploads/2024/11/techo-teja-colonial-instalacion.jpg',
    title: 'Instalación de techo teja colonial',
    location: 'Colina / Chicureo, RM',
  },
];

const WHATSAPP_PROJECTS_URL = "https://wa.me/56967292923?text=Hola%20Jmn%2C%20vi%20sus%20proyectos%20y%20quiero%20un%20resultado%20as%C3%AD%20para%20mi%20techo.%20Comuna%3A%20";

export const ProjectsSection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="proyectos" className="py-20 sm:py-28 bg-white border-b border-black/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#E8731A] uppercase">
            TRABAJOS REALES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1D2024] tracking-tight mt-2 [text-wrap:balance]">
            Así quedan los techos que intervenimos
          </h2>
          <p className="text-base text-[#5B6168] mt-3">
            Desliza el comparador para ver el antes y después de nuestras obras en la Región Metropolitana.
          </p>
        </div>

        {/* 2 Draggable Before/After Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Card 1 */}
          <div className="bg-[#F6F5F2] rounded-[12px] border border-neutral-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <BeforeAfterSlider
              title="Cambio de techo en Las Condes"
              beforeImage="https://jmn.cl/wp-content/uploads/2025/02/cambio-de-techo-de-zinc-v5.jpg"
              afterImage="https://jmn.cl/wp-content/uploads/2025/02/instalacion-de-techo-americano-en-las-condes.jpg"
              beforeAlt="Cambio de techo de zinc a techo americano en Las Condes – antes"
              afterAlt="Cambio de techo de zinc a techo americano en Las Condes – después terminado"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1D2024] mb-2">
                Cambio de techo en Las Condes
              </h3>
              <p className="text-sm text-[#5B6168] leading-relaxed mb-4">
                Reemplazamos un techo de zinc 5V por techo americano de largo continuo, con tragaluz, sellos, canaletas y bajadas de agua.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600 pt-3 border-t border-neutral-200">
                <span className="tabular-nums">220 m²</span>
                <span aria-hidden="true">·</span>
                <span>1 semana</span>
                <span aria-hidden="true">·</span>
                <span>Noviembre 2024</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F6F5F2] rounded-[12px] border border-neutral-200 overflow-hidden shadow-sm flex flex-col justify-between">
            <BeforeAfterSlider
              title="Instalación de teja asfáltica en Vitacura"
              beforeImage="https://jmn.cl/wp-content/uploads/2025/02/teja-asfaltica-antes.jpg"
              afterImage="https://jmn.cl/wp-content/uploads/2025/02/teja-asfaltica-cafe-en-casa.jpg"
              beforeAlt="Instalación de teja asfáltica en Vitacura – techo antes de la obra"
              afterAlt="Instalación de teja asfáltica en Vitacura – casa con teja asfáltica café terminada"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1D2024] mb-2">
                Instalación de teja asfáltica en Vitacura
              </h3>
              <p className="text-sm text-[#5B6168] leading-relaxed mb-4">
                Retiramos la cubierta antigua e instalamos OSB, fieltro y teja asfáltica color café.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-600 pt-3 border-t border-neutral-200">
                <span className="tabular-nums">330 m²</span>
                <span aria-hidden="true">·</span>
                <span>2 semanas</span>
                <span aria-hidden="true">·</span>
                <span>Septiembre 2023</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mosaic Lightbox Gallery */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-[#1D2024] mb-6">
            Galería de obras recientes en Santiago
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-[12px] overflow-hidden bg-neutral-100 border border-neutral-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8731A]"
                aria-label={`Ver imagen ampliada: ${img.title}`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                  <div className="text-center text-white">
                    <ZoomIn className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-xs font-semibold block">{img.title}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-4">
          <a
            href={WHATSAPP_PROJECTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('proyectos')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-base shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Quiero un resultado así → WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8731A]"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full overflow-hidden rounded-xl bg-neutral-950 flex items-center justify-center max-h-[75vh]">
              <img
                src={GALLERY_IMAGES[activeLightboxIndex].url}
                alt={GALLERY_IMAGES[activeLightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />

              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full text-center text-white mt-4">
              <p className="font-bold text-base sm:text-lg">{GALLERY_IMAGES[activeLightboxIndex].title}</p>
              <p className="text-xs text-neutral-400 mt-1">{GALLERY_IMAGES[activeLightboxIndex].location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

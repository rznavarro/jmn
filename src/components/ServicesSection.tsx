import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/tracking';

interface ServiceItem {
  id: string;
  title: string;
  benefit: string;
  chips: string[];
  image: string;
  alt: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'reparacion',
    title: 'Reparación de techos',
    benefit: 'Eliminamos goteras y filtraciones en cualquier tipo de techo.',
    chips: ['Goteras', 'Canaletas', 'Tejas', 'Zinc'],
    image: 'https://jmn.cl/wp-content/uploads/2024/11/reparacion-de-techo.jpg',
    alt: 'Trabajo de reparación de techos y eliminación de filtraciones en Santiago',
  },
  {
    id: 'cambio',
    title: 'Cambio de techos',
    benefit: 'Renovamos tu techumbre completa, incluido el cambio de techo de asbesto.',
    chips: ['Casa', 'Asbesto', 'Tejas', 'Zinc'],
    image: 'https://jmn.cl/wp-content/uploads/2024/11/cambio-de-techo.jpg',
    alt: 'Cambio total de cubierta y retiro seguro de techos antiguos',
  },
  {
    id: 'instalacion',
    title: 'Instalación y construcción',
    benefit: 'Techos nuevos a medida, de la estructura a la terminación.',
    chips: ['Americano', 'Teja asfáltica', 'Policarbonato', 'Hojalatería'],
    image: 'https://jmn.cl/wp-content/uploads/2024/10/instalacion-de-techos.jpg',
    alt: 'Instalación y construcción de techumbres nuevas en Santiago',
  },
  {
    id: 'impermeabilizacion',
    title: 'Impermeabilización',
    benefit: 'Sellamos techos, losas y terrazas antes de que llegue el agua.',
    chips: ['Membrana', 'Líquida', 'Losas', 'Terrazas'],
    image: 'https://jmn.cl/wp-content/uploads/2024/11/impermeabilizacion-de-techos.jpg',
    alt: 'Impermeabilización profesional de cubiertas y losas con sellos técnicos',
  },
  {
    id: 'mantencion',
    title: 'Mantención',
    benefit: 'Revisión preventiva para que tu techo dure más años.',
    chips: ['Canaletas', 'Bajadas de agua', 'Eólicos', 'Cubiertas'],
    image: 'https://jmn.cl/wp-content/uploads/2024/11/mantencion-de-techos.jpg',
    alt: 'Mantención preventiva y limpieza profunda de techumbres y canaletas',
  },
  {
    id: 'aislacion',
    title: 'Aislación',
    benefit: 'Más confort térmico y acústico en casas y empresas.',
    chips: ['Térmica', 'Acústica', 'Casas', 'Empresas'],
    image: 'https://jmn.cl/wp-content/uploads/2024/11/Aislacion-de-techos.jpg',
    alt: 'Instalación de aislación térmica y acústica para techos en Santiago',
  },
];

const ROOF_TYPES = [
  'Americano',
  'Zinc acanalado',
  'Zinc PV4',
  'Teja asfáltica',
  'Teja chilena',
  'Teja colonial',
  'Teja Marsella',
  'Policarbonato',
  'Emballetado prepintado',
  'Panel Kover',
  'Cobertizo',
  'Cambio de asbesto',
];

export const ServicesSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getWhatsAppServiceUrl = (serviceName: string) => {
    const text = encodeURIComponent(`Hola Jmn, quiero cotizar el servicio de ${serviceName}. Comuna: `);
    return `https://wa.me/56967292923?text=${text}`;
  };

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-[#F6F5F2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#E8731A] uppercase">
            LO QUE HACEMOS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1D2024] tracking-tight mt-2 [text-wrap:balance]">
            Servicios de techos en Santiago para casas, empresas e instituciones
          </h2>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group bg-white rounded-[12px] overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with zoom on hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  {!imageErrors[srv.id] ? (
                    <img
                      src={srv.image}
                      alt={srv.alt}
                      loading="lazy"
                      onError={() => handleImageError(srv.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-400 p-4 text-center text-sm font-medium">
                      <span>{srv.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1D2024] mb-2 group-hover:text-[#E8731A] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#5B6168] leading-relaxed mb-4">
                    {srv.benefit}
                  </p>

                  {/* Chips (clean unboxed styling per design guidelines) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                    {srv.chips.map((chip, idx) => (
                      <React.Fragment key={chip}>
                        <span className="font-medium text-neutral-700">{chip}</span>
                        {idx < srv.chips.length - 1 && <span className="text-neutral-300" aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover action button */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={getWhatsAppServiceUrl(srv.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`servicios_${srv.id}`)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-100 text-slate-900 group-hover:bg-[#25D366] group-hover:text-slate-950 font-semibold text-sm transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 fill-current opacity-70 group-hover:opacity-100" />
                  <span>Cotizar este servicio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Scrollable Roof Types Bar */}
        <div className="bg-white p-6 sm:p-7 rounded-[12px] border border-neutral-200 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8731A] block">
                COBERTURA TÉCNICA
              </span>
              <span className="text-base font-bold text-[#1D2024] whitespace-nowrap">
                Trabajamos todo tipo de techos:
              </span>
            </div>

            <div className="overflow-x-auto pb-2 lg:pb-0 scrollbar-thin">
              <div className="flex items-center gap-2 whitespace-nowrap">
                {ROOF_TYPES.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-700 text-xs sm:text-sm font-medium border border-neutral-200/70"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

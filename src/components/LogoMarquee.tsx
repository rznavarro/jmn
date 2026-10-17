import React from 'react';

interface LogoItem {
  name: string;
  url: string;
}

const CLIENT_LOGOS: LogoItem[] = [
  { name: 'Clínica Dávila', url: 'https://jmn.cl/wp-content/uploads/2024/11/clinica-davila.png' },
  { name: 'Walmart', url: 'https://jmn.cl/wp-content/uploads/2026/03/logo-wallmart.png' },
  { name: 'Fonasa', url: 'https://jmn.cl/wp-content/uploads/2026/03/logo-fonasa.png' },
  { name: 'Ministerio de Obras Públicas', url: 'https://jmn.cl/wp-content/uploads/2024/11/ministerio-de-obras-publicas.png' },
  { name: 'Sernatur', url: 'https://jmn.cl/wp-content/uploads/2024/11/sernatur.png' },
  { name: 'Municipalidad de Las Condes', url: 'https://jmn.cl/wp-content/uploads/2024/11/miunicipalidad-las-condes.png' },
  { name: 'Municipalidad de San Miguel', url: 'https://jmn.cl/wp-content/uploads/2024/11/municipalidad-san-miguel.png' },
  { name: 'Municipalidad de La Pintana', url: 'https://jmn.cl/wp-content/uploads/2024/11/municipalidad-de-la-pintana.png' },
  { name: 'Municipalidad de San Bernardo', url: 'https://jmn.cl/wp-content/uploads/2024/11/municipalidad-de-san-bernardo.png' },
  { name: 'Municipalidad de La Cisterna', url: 'https://jmn.cl/wp-content/uploads/2026/03/logo-municipalidad-de-la-cisterna.png' },
  { name: 'Municipalidad de La Serena', url: 'https://jmn.cl/wp-content/uploads/2024/11/logo-municipalidad-de-la-serena.png' },
  { name: 'Servicio de Salud Concepción', url: 'https://jmn.cl/wp-content/uploads/2024/11/servicio-de-salud-concepcion.png' },
  { name: 'Servicio de Salud Valdivia', url: 'https://jmn.cl/wp-content/uploads/2024/11/servicio-de-salud-valdivia.png' },
  { name: 'Defensoría Penal Pública', url: 'https://jmn.cl/wp-content/uploads/2024/11/defensoria-penal-p.png' },
  { name: 'Unifrutti', url: 'https://jmn.cl/wp-content/uploads/2024/11/unifrutti.png' },
  { name: 'Soletanche Bachy', url: 'https://jmn.cl/wp-content/uploads/2024/11/soletanche.png' },
  { name: 'Espacio Riesco', url: 'https://jmn.cl/wp-content/uploads/2026/03/logo-espacio-riesco.png' },
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-[#F6F5F2] border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-[#5B6168] uppercase">
          Han confiado en nosotros más de 43 empresas e instituciones públicas
        </h2>
      </div>

      {/* Marquee Wrapper with soft edge fades */}
      <div className="relative w-full overflow-hidden marquee-container">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F6F5F2] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F6F5F2] to-transparent z-10" />

        {/* Marquee track duplicated for continuous loop */}
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 py-3">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center shrink-0 w-32 sm:w-40 h-16 px-2 group transition-transform"
            >
              <img
                src={logo.url}
                alt={`Logo ${logo.name}, cliente de Jmn`}
                loading="lazy"
                className="max-h-12 w-auto max-w-full object-contain grayscale opacity-60 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

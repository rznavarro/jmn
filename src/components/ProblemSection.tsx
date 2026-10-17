import React from 'react';
import { Droplets, Waves, AlertTriangle, ThermometerSnowflake, MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/tracking';

const WHATSAPP_URL = "https://wa.me/56967292923?text=Hola%20Jmn%2C%20tengo%20un%20problema%20en%20mi%20techo%20y%20quiero%20evaluarlo.%20Comuna%3A%20";

const PROBLEMS = [
  {
    icon: Droplets,
    title: "Goteras y filtraciones",
    description: "Manchas en el cielo, humedad y agua que entra justo cuando llueve.",
  },
  {
    icon: Waves,
    title: "Canaletas tapadas o rebalsadas",
    description: "El agua se devuelve al techo o cae por los muros.",
  },
  {
    icon: AlertTriangle,
    title: "Techo viejo o de asbesto",
    description: "El material cumplió su vida útil y ya no vale la pena parcharlo.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Calor o frío dentro de la casa",
    description: "Un techo sin buena aislación térmica ni acústica.",
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F6F5F2] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#E8731A] uppercase">
            ¿TE SUENA?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1D2024] tracking-tight mt-2 [text-wrap:balance]">
            Un techo con problemas no se arregla solo. Empeora con cada lluvia.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {PROBLEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-[12px] border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#E8731A]/10 text-[#E8731A] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 stroke-[2]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1D2024] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5B6168] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing banner */}
        <div className="bg-[#15181D] text-white p-8 sm:p-10 rounded-[12px] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
              Te decimos con honestidad si conviene reparar o cambiar.
            </h3>
            <p className="text-sm sm:text-base text-neutral-300">
              Evaluamos la estructura y el desgaste para recomendarte la solución más duradera y conveniente para tu bolsillo.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('problema')}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-base shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

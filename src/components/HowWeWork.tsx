import React from 'react';
import { MessageSquare, ClipboardCheck, ShieldCheck, MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/tracking';

const WHATSAPP_STEPS_URL = "https://wa.me/56967292923?text=Hola%20Jmn%2C%20quiero%20empezar%20a%20coordinar%20la%20evaluaci%C3%B3n%20de%20mi%20techo.%20Comuna%3A%20";

const STEPS = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Escríbenos',
    description: 'Cuéntanos por WhatsApp qué le pasa a tu techo y en qué comuna estás. Si puedes, envía fotos.',
  },
  {
    step: '02',
    icon: ClipboardCheck,
    title: 'Evaluamos tu techo',
    description: 'Un técnico revisa el estado del techo y te propone alternativas claras: reparar o cambiar, según tu presupuesto.',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Lo dejamos listo, con garantía',
    description: 'Ejecutamos el trabajo con garantía en mano de obra y materiales.',
  },
];

export const HowWeWork: React.FC = () => {
  return (
    <section id="como-trabajamos" className="py-20 sm:py-28 bg-[#F6F5F2] scroll-mt-20 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#E8731A] uppercase">
            SIMPLE Y SIN VUELTAS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1D2024] tracking-tight mt-2 [text-wrap:balance]">
            Tu techo resuelto en 3 pasos
          </h2>
          <p className="text-base text-[#5B6168] mt-2">
            Un proceso directo, transparente y enfocado en solucionar el problema de raíz.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="relative mb-16">
          {/* Horizontal connection line for desktop */}
          <div className="hidden md:block absolute top-12 left-16 right-16 h-0.5 bg-neutral-300 z-0" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[12px] p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between relative group hover:border-[#E8731A]/40 transition-colors"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#15181D] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#E8731A] transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-extrabold font-mono text-neutral-300">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1D2024] mb-3">
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
        </div>

        {/* Call to action & microcopy */}
        <div className="text-center">
          <a
            href={WHATSAPP_STEPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('como_trabajamos')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-base shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Empezar ahora por WhatsApp</span>
          </a>

          <p className="mt-4 text-xs sm:text-sm text-neutral-500">
            Atendemos todas las comunas de Santiago y proyectos en todo Chile
          </p>
        </div>

      </div>
    </section>
  );
};

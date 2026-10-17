import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'comunas',
    question: '¿En qué comunas trabajan?',
    answer:
      'Trabajamos en todas las comunas de Santiago. Además, ejecutamos proyectos de gran envergadura en todo Chile para empresas e instituciones públicas.',
  },
  {
    id: 'garantia',
    question: '¿Los trabajos tienen garantía?',
    answer:
      'Sí. Todos nuestros trabajos en techos tienen garantía en mano de obra y materiales. La extensión de la garantía depende del tipo de trabajo realizado.',
  },
  {
    id: 'filtraciones',
    question: '¿Por qué se producen filtraciones en el techo?',
    answer:
      'La causa más común es la fatiga del material, cuando este cumple su vida útil. Otra causa frecuente es una mala construcción o instalación de la techumbre.',
  },
  {
    id: 'materiales',
    question: '¿Qué techo puedo instalar en mi casa?',
    answer:
      'Depende de la pendiente del techo. El fabricante define la pendiente mínima de cada material para evitar filtraciones: por ejemplo, la cubierta emballetada sirve para pendientes menores al 5% y la teja asfáltica funciona mejor sobre el 30%. Evaluamos tu techo y te recomendamos la opción adecuada.',
  },
  {
    id: 'canaletas',
    question: '¿Por qué se tapan las canaletas?',
    answer:
      'Suele pasar cuando la canaleta no tiene el tamaño adecuado para los metros cuadrados del techo, o cuando las boquillas y los codos de las bajadas de agua son muy pequeños y retienen hojas y basura.',
  },
];

export const FaqSection: React.FC = () => {
  // First item open by default as specified
  const [openIds, setOpenIds] = useState<string[]>(['comunas']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="preguntas" className="py-20 sm:py-28 bg-white scroll-mt-20 border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#E8731A] uppercase">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1D2024] tracking-tight mt-2 [text-wrap:balance]">
            Preguntas frecuentes sobre reparación y cambio de techos
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="border border-neutral-200 rounded-[12px] overflow-hidden transition-all duration-200 bg-[#F6F5F2]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#1D2024] hover:text-[#E8731A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8731A]"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E8731A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#5B6168] leading-relaxed border-t border-neutral-200/60"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

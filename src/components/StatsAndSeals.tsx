import React, { useEffect, useState, useRef } from 'react';

export const StatsAndSeals: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [countYears, setCountYears] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [countClients, setCountClients] = useState(0);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setCountYears(30);
      setCountProjects(1341);
      setCountClients(43);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const startTime = performance.now();

          const animateCounts = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCountYears(Math.floor(easeProgress * 30));
            setCountProjects(Math.floor(easeProgress * 1341));
            setCountClients(Math.floor(easeProgress * 43));

            if (progress < 1) {
              requestAnimationFrame(animateCounts);
            } else {
              setCountYears(30);
              setCountProjects(1341);
              setCountClients(43);
            }
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 bg-[#15181D] text-white relative overflow-hidden">
      
      {/* Background subtle glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E8731A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#E8731A] uppercase block mb-2">
            EXPERIENCIA Y TRAYECTORIA
          </span>
          <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
            Empresa familiar nacida en el sur de Chile. Hoy trabajamos en todas las comunas de Santiago y ejecutamos proyectos grandes en todo el país.
          </p>
        </div>

        {/* 3 Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center pb-16 border-b border-white/10">
          
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#E8731A] tracking-tight tabular-nums mb-2">
              +{countYears}
            </div>
            <div className="text-lg font-bold text-white mb-1">
              años de experiencia
            </div>
            <p className="text-sm text-neutral-400">
              Especialistas dedicados exclusivamente a techumbres y cubiertas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight tabular-nums mb-2">
              {countProjects.toLocaleString('es-CL')}
            </div>
            <div className="text-lg font-bold text-white mb-1">
              proyectos ejecutados en Chile
            </div>
            <p className="text-sm text-neutral-400">
              Obras concluidas en casas particulares, colegios y empresas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#E8731A] tracking-tight tabular-nums mb-2">
              +{countClients}
            </div>
            <div className="text-lg font-bold text-white mb-1">
              empresas e instituciones públicas
            </div>
            <p className="text-sm text-neutral-400">
              Convenios y proyectos de infraestructura técnica en todo Chile.
            </p>
          </div>

        </div>

        {/* Seals of endorsement */}
        <div className="pt-14 text-center">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-8">
            RESPALDO Y CERTIFICACIONES OFICIALES
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center max-w-4xl mx-auto">
            
            {/* ChileCompra */}
            <div className="bg-white p-4 sm:p-5 rounded-xl w-full max-w-[200px] h-24 flex items-center justify-center hover:scale-105 transition-transform">
              <img
                src="https://jmn.cl/wp-content/uploads/2024/11/logo-chilecompra-original.png"
                alt="Logo Proveedor del Estado ChileCompra acreditado"
                loading="lazy"
                className="max-h-12 w-auto object-contain"
              />
            </div>

            {/* Sika */}
            <div className="bg-white p-4 sm:p-5 rounded-xl w-full max-w-[200px] h-24 flex items-center justify-center hover:scale-105 transition-transform">
              <img
                src="https://jmn.cl/wp-content/uploads/2024/11/glo-sika_claimu_pos_rgb.png"
                alt="Logo Técnicos capacitados por Sika"
                loading="lazy"
                className="max-h-12 w-auto object-contain"
              />
            </div>

            {/* RETC */}
            <div className="bg-white p-4 sm:p-5 rounded-xl w-full max-w-[200px] h-24 flex items-center justify-center hover:scale-105 transition-transform">
              <img
                src="https://jmn.cl/wp-content/uploads/2025/04/logo-retc.png"
                alt="Logo Registro de Emisiones y Transferencia de Contaminantes RETC"
                loading="lazy"
                className="max-h-12 w-auto object-contain"
              />
            </div>

            {/* MOP */}
            <div className="bg-white p-4 sm:p-5 rounded-xl w-full max-w-[200px] h-24 flex items-center justify-center hover:scale-105 transition-transform">
              <img
                src="https://jmn.cl/wp-content/uploads/2024/11/ministerio-de-obras-publicas.png"
                alt="Logo Proveedor de servicios del Ministerio de Obras Públicas MOP"
                loading="lazy"
                className="max-h-12 w-auto object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

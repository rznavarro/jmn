import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  title,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      className="relative aspect-[16/10] w-full overflow-hidden select-none rounded-t-[12px] bg-neutral-900 group cursor-ew-resize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8731A]"
      tabIndex={0}
      role="slider"
      aria-label={`Comparador antes y después para ${title}. Use flechas izquierda y derecha para ajustar.`}
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      onKeyDown={handleKeyDown}
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm pointer-events-none">
        Después
      </span>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            height: '100%',
          }}
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
          Antes
        </span>
      </div>

      {/* Divider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none transition-transform"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div
          onMouseDown={handleMouseDown}
          className="pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center font-bold text-xs border-2 border-[#15181D]"
        >
          <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
          </svg>
        </div>
      </div>
    </div>
  );
};

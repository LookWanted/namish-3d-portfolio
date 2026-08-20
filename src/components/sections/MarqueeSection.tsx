import React, { useRef, useState, useEffect } from 'react';
import { MARQUEE_CERTIFICATES_ROW_1, MARQUEE_CERTIFICATES_ROW_2 } from '../../data/portfolioData';

interface MarqueeSectionProps {
  onSelectCertificate?: (src: string) => void;
}

export const MarqueeSection: React.FC<MarqueeSectionProps> = ({ onSelectCertificate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Triple arrays for seamless continuous scrolling
  const tripledRow1 = [
    ...MARQUEE_CERTIFICATES_ROW_1,
    ...MARQUEE_CERTIFICATES_ROW_1,
    ...MARQUEE_CERTIFICATES_ROW_1,
  ];
  const tripledRow2 = [
    ...MARQUEE_CERTIFICATES_ROW_2,
    ...MARQUEE_CERTIFICATES_ROW_2,
    ...MARQUEE_CERTIFICATES_ROW_2,
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll (translateX(offset - 200)) */}
        <div
          className="flex gap-3 whitespace-nowrap cursor-pointer"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((src, index) => (
            <div
              key={`row1-cert-${index}`}
              onClick={() => onSelectCertificate?.(src)}
              className="w-[420px] h-[270px] min-w-[420px] rounded-2xl overflow-hidden bg-[#161616] border border-white/15 p-2 flex items-center justify-center flex-shrink-0 shadow-lg group hover:border-[#B600A8]/60 transition-all duration-300 relative"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-contain rounded-xl pointer-events-none transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-2xl">
                <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs uppercase font-bold tracking-wider border border-white/30">
                  Inspect Certificate
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll (translateX(-(offset - 200))) */}
        <div
          className="flex gap-3 whitespace-nowrap cursor-pointer"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((src, index) => (
            <div
              key={`row2-cert-${index}`}
              onClick={() => onSelectCertificate?.(src)}
              className="w-[420px] h-[270px] min-w-[420px] rounded-2xl overflow-hidden bg-[#161616] border border-white/15 p-2 flex items-center justify-center flex-shrink-0 shadow-lg group hover:border-[#B600A8]/60 transition-all duration-300 relative"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-contain rounded-xl pointer-events-none transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-2xl">
                <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs uppercase font-bold tracking-wider border border-white/30">
                  Inspect Certificate
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

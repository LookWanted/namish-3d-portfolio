import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const skillPillsRow1 = [
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React' },
    { name: 'Flutter' },
    { name: 'Arduino', featured: true },
    { name: 'Raspberry Pi' },
  ];

  const skillPillsRow2 = [
    { name: 'AI / ML' },
    { name: 'Electronics' },
    { name: 'C++' },
    { name: 'NodeMCU / ESP8266' },
    { name: 'IoT Systems' },
    { name: 'Control Systems' },
  ];

  const skillPillsRow3 = [
    { name: '3D Modeling / CAD' },
    { name: 'Sensor Integration' },
    { name: 'Git' },
  ];

  const proficiencyBars = [
    { name: 'Arduino / Embedded C++', percent: 92 },
    { name: 'React / JavaScript', percent: 88 },
    { name: 'IoT / NodeMCU Systems', percent: 84 },
    { name: 'Python / AI & ML', percent: 78 },
    { name: '3D Modeling / CAD', percent: 82 },
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#D7E2EA 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Sub-label & Section Heading */}
        <FadeIn delay={0} y={30} className="mb-10 sm:mb-14">
          <p className="font-mono text-xs sm:text-sm text-[#D7E2EA]/60 mb-3 tracking-wide flex items-center gap-2">
            <Terminal className="w-4 h-4 text-lime-400" />
            <span>Toolkit & technologies I reach for —</span>
          </p>
          <h2
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
          >
            Engineering Toolkit
          </h2>
        </FadeIn>

        {/* 1. Skill Pills Container */}
        <FadeIn delay={0.15} y={30} className="w-full flex flex-col gap-3 sm:gap-4 mb-16 sm:mb-20">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {skillPillsRow1.map((pill, idx) => (
              <span
                key={idx}
                className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-normal tracking-wide transition-all duration-300 select-none cursor-default ${
                  pill.featured
                    ? 'border-2 border-white text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.25)] font-medium scale-105'
                    : 'border border-white/20 text-[#D7E2EA]/90 bg-white/[0.03] hover:border-white/50 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {pill.name}
              </span>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {skillPillsRow2.map((pill, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-normal tracking-wide border border-white/20 text-[#D7E2EA]/90 bg-white/[0.03] hover:border-white/50 hover:bg-white/[0.08] hover:text-white transition-all duration-300 select-none cursor-default"
              >
                {pill.name}
              </span>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {skillPillsRow3.map((pill, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-normal tracking-wide border border-white/20 text-[#D7E2EA]/90 bg-white/[0.03] hover:border-white/50 hover:bg-white/[0.08] hover:text-white transition-all duration-300 select-none cursor-default"
              >
                {pill.name}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* 2. Proficiency Progress Bars */}
        <FadeIn delay={0.3} y={30} className="w-full max-w-3xl space-y-5 sm:space-y-6 pt-6 border-t border-white/10">
          {proficiencyBars.map((bar, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6">
              {/* Mono Label */}
              <span className="font-mono text-xs sm:text-sm text-[#D7E2EA]/80 whitespace-nowrap min-w-[220px]">
                {bar.name}
              </span>

              {/* Progress Line */}
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-[#A3E635] rounded-full shadow-[0_0_8px_#A3E635]"
                  style={{
                    width: `${bar.percent}%`,
                    transition: 'width 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                />
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

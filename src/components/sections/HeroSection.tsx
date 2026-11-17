import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { ContactButton } from '../common/ContactButton';
import { Github, Instagram, Mail, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { PrismHeroBackground } from '../common/PrismHeroBackground';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">

      {/* ── REAL-TIME 3D PRISM LIGHT REFRACTION ANIMATION ── */}
      <PrismHeroBackground />

      {/* Subtle top/bottom blends for smooth section transitions */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: '90px', background: 'linear-gradient(to bottom, #0C0C0C 10%, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: '70px', background: 'linear-gradient(to top, #0C0C0C 10%, transparent)' }}
      />

      {/* ── 1. NAVBAR ── */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full z-20 relative" immediate={true}>
        <div className="w-full px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('achievements')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            achievments
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={onOpenContact}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </FadeIn>

      {/* ── 2. HERO CONTENT (Text on Left, 3D Prism on Right/Center) ── */}
      <div className="w-full flex-1 flex flex-col justify-center px-6 md:px-14 lg:px-20 z-10 relative pointer-events-none py-12 md:py-0">
        <div className="max-w-xl md:max-w-2xl text-left pointer-events-auto">
          {/* Main Name / Title */}
          <FadeIn delay={0} duration={0.4} y={15} immediate={true}>
            <h1
              className="font-black uppercase tracking-tight leading-[0.92] select-none text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.95)] mb-4 md:mb-6"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)' }}
            >
              Hi, i&apos;m Namish
            </h1>
          </FadeIn>

          {/* Subtitle / Tagline */}
          <FadeIn delay={0.08} duration={0.4} y={15} immediate={true}>
            <p
              className="text-white font-medium uppercase tracking-wide leading-relaxed mb-6 md:mb-8 text-base sm:text-lg md:text-xl max-w-md drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
            >
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>

          {/* CTA & Quick Socials */}
          <FadeIn delay={0.16} duration={0.4} y={15} className="flex items-center gap-4 sm:gap-6 flex-wrap" immediate={true}>
            <div className="drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)]">
              <ContactButton onClick={onOpenContact} />
            </div>

            <div className="flex items-center gap-2.5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-pink-400 flex items-center justify-center transition-all border border-white/10"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-amber-400 flex items-center justify-center transition-all border border-white/10"
                aria-label="Email Namish"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-cyan-400 flex items-center justify-center transition-all border border-white/10"
                aria-label="Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

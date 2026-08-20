import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { FadeIn } from '../common/FadeIn';
import { ContactButton } from '../common/ContactButton';
import { Github, Instagram, Mail, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls({ autoStartLoad: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS
      video.src = src;
      video.play().catch(() => {});
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">

      {/* ── HLS VIDEO BACKGROUND ── */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Top black fade — blends into the section above */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: '220px', background: 'linear-gradient(to bottom, #0C0C0C 20%, transparent)' }}
      />
      {/* Bottom black fade — blends into sections below */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: '220px', background: 'linear-gradient(to top, #0C0C0C 20%, transparent)' }}
      />
      {/* Subtle dark vignette overlay so text stays readable */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-black/30" />

      {/* ── 1. NAVBAR ── */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full z-20 relative">
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

      {/* ── 2. HERO HEADING (massive, over the video) ── */}
      <div className="w-full text-center z-10 relative">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full select-none pointer-events-none"
              style={{ fontSize: 'clamp(2.5rem, 9.2vw, 11rem)' }}>
            Hi, i&apos;m Namish
          </h1>
        </FadeIn>
      </div>

      {/* ── 3. BOTTOM BAR ── */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 relative">

        {/* Left: tagline + quick socials */}
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[280px]">
          <p
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug mb-3"
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>

          <div className="flex items-center gap-2.5 pt-1">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-white flex items-center justify-center transition-all border border-white/10"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-pink-400 flex items-center justify-center transition-all border border-white/10"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-amber-400 flex items-center justify-center transition-all border border-white/10"
              aria-label="Email Namish"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 text-[#D7E2EA] hover:text-cyan-400 flex items-center justify-center transition-all border border-white/10"
              aria-label="Official Website"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>

        {/* Right: Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { ContactButton } from '../common/ContactButton';
import { ArrowUp, Github, Instagram, Mail, MessageSquare, ExternalLink, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenContact,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-16 sm:py-20 z-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0} y={30} className="w-full">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#BBCCD7] font-semibold">
            Have a bold project or collaboration in mind?
          </span>
          <h2
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            className="hero-heading font-black uppercase tracking-tight leading-none mt-4 mb-8 select-none"
          >
            Let&apos;s Create Together
          </h2>
          <div className="flex justify-center mb-12">
            <ContactButton onClick={onOpenContact} />
          </div>
        </FadeIn>

        {/* Links & Socials Grid */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10 text-[#D7E2EA]/70 text-sm">
          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" /> {PERSONAL_INFO.email}
            </a>
            <a
              href={PERSONAL_INFO.discordUrl || 'https://discord.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" /> Discord: {PERSONAL_INFO.discord}
            </a>
            <button
              onClick={() => scrollToSection('achievements')}
              className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider text-xs font-semibold"
            >
              Achievements
            </button>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-xs"
            >
              <Globe className="w-3.5 h-3.5" /> namishdawar.xyz <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <p className="text-xs uppercase tracking-wider text-white/50">
              © {new Date().getFullYear()} Namish Dawar · 3D Creator
            </p>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

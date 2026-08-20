import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { ContactButton } from '../common/ContactButton';
import { GitBranch, Globe, Award, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const stats = [
    { value: '17', label: 'GitHub repos', icon: GitBranch, accent: 'text-violet-400' },
    { value: '4', label: 'Deployed apps', icon: Globe, accent: 'text-cyan-400' },
    { value: '7', label: 'Awards & honors', icon: Award, accent: 'text-amber-400' },
    { value: '10', label: 'Class / Grade', icon: Sparkles, accent: 'text-pink-400' },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 overflow-hidden"
    >
      {/* Corner 3D Decorative Assets */}
      {/* 1. Top-Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D Floater"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none opacity-90"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* 2. Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Floating Shape"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none opacity-90"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* 3. Top-Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D Floater"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none opacity-90"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* 4. Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Composition"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none opacity-90"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#BBCCD7] font-semibold mb-2 block">
            About Me
          </span>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
          >
            About Me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-12" />

        {/* Narrative Paragraphs */}
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-left sm:text-center">
          <FadeIn delay={0.15} y={20}>
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#D7E2EA] leading-relaxed">
              Hey — I&apos;m <span className="font-semibold text-white">Namish</span>, a Class 10 student from Gurugram with a deep interest in robotics, embedded systems, and software development.
            </p>
          </FadeIn>

          <FadeIn delay={0.25} y={20}>
            <p className="text-base sm:text-lg text-[#D7E2EA]/85 font-light leading-relaxed">
              I build hands‑on STEM and programming projects — Arduino‑based devices, NodeMCU IoT systems, and modern web interfaces. My flagship build, the <span className="text-amber-300 font-medium">Parkinson&apos;s Self‑Stabilizing Spoon</span>, uses gyroscopic correction to counteract hand tremors and earned <span className="text-amber-300 font-medium">1st Runner‑Up at KVRSS India</span> in the Physics category.
            </p>
          </FadeIn>

          <FadeIn delay={0.35} y={20}>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-[#D7E2EA]/90 text-sm sm:text-base font-light italic leading-relaxed">
              &ldquo;I&apos;ve also shipped web prototypes in time‑bound, collaborative environments — sharpening how I design systems, debug under pressure, and ship fast. My approach is simple: <span className="text-white font-semibold not-italic">learn by building.</span>&rdquo;
            </div>
          </FadeIn>
        </div>

        {/* Stats Grid */}
        <FadeIn delay={0.4} y={30} className="w-full max-w-3xl mt-12 sm:mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-[28px] bg-[#121212] border border-[#D7E2EA]/20 flex flex-col items-center justify-center text-center shadow-lg hover:border-[#B600A8]/50 transition-all duration-300 group"
              >
                <stat.icon className={`w-5 h-5 ${stat.accent} mb-2 group-hover:scale-110 transition-transform`} />
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/70 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Contact CTA */}
        <FadeIn delay={0.5} y={20} className="mt-12 sm:mt-16">
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

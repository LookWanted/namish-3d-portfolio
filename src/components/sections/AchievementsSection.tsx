import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { AchievementItem } from '../../types/portfolio';
import { Award, Sparkles, CheckCircle2, ZoomIn, ExternalLink } from 'lucide-react';

interface AchievementCardProps {
  achievement: AchievementItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenCertificate: (img: string, title: string) => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  index,
  totalCards: _totalCards,
  progress,
  range,
  targetScale,
  onOpenCertificate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[88vh] min-h-[640px] flex items-center justify-center sticky"
      style={{
        top: `calc(4.5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative overflow-hidden group"
      >
        {/* Ambient Gold / Violet Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7621B0]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Row: Number, Award Badge, Title, Certificate Trigger */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-[#D7E2EA]/20 relative z-10">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            {/* Number */}
            <span
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)' }}
              className="text-[#D7E2EA] font-black leading-none tracking-tighter select-none opacity-90"
            >
              {achievement.number}
            </span>

            {/* Category & Title */}
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/80 font-medium">
                  {achievement.organization}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] uppercase font-bold tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1 shadow-[0_0_12px_rgba(251,191,36,0.2)]">
                  <Sparkles className="w-3 h-3" />
                  {achievement.badge}
                </span>
                <span className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider">
                  {achievement.year}
                </span>
              </div>
              <h3
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
                className="text-white font-medium uppercase tracking-tight"
              >
                {achievement.title}
              </h3>
            </div>
          </div>

          {/* Inspect Certificate Button */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={() => onOpenCertificate(achievement.certificateImg, achievement.title)}
              className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border-2 border-amber-400/60 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(251,191,36,0.15)]"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Inspect Certificate</span>
            </button>

            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:text-white transition-colors cursor-pointer"
                title="View project data"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Middle: Description & Highlights */}
        <div className="mt-3 sm:mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm sm:text-base text-[#D7E2EA]/85 font-light leading-relaxed mb-3">
              {achievement.description}
            </p>
            <div className="space-y-1.5 mb-3">
              {achievement.highlights.slice(0, 3).map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#BBCCD7]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {achievement.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-[#BBCCD7] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Visual: Official Certificate Scan Preview */}
          <div className="lg:col-span-5 flex items-center gap-3">
            <div
              onClick={() => onOpenCertificate(achievement.certificateImg, achievement.title)}
              className="flex-1 h-[180px] sm:h-[220px] md:h-[240px] rounded-[30px] sm:rounded-[40px] overflow-hidden bg-[#161616] border border-amber-400/30 p-2 cursor-pointer group/cert relative shadow-lg"
            >
              <img
                src={achievement.certificateImg}
                alt={`${achievement.title} Certificate`}
                className="w-full h-full object-contain rounded-[20px] transition-transform duration-500 group-hover/cert:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover/cert:opacity-100 rounded-[30px]">
                <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/40 flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" /> Full Resolution
                </span>
              </div>
            </div>

            {achievement.secondaryImg && (
              <div
                onClick={() => onOpenCertificate(achievement.secondaryImg!, `${achievement.title} (Supporting Credential)`)}
                className="hidden sm:block w-[120px] md:w-[140px] h-[180px] sm:h-[220px] md:h-[240px] rounded-[30px] sm:rounded-[40px] overflow-hidden bg-[#161616] border border-white/15 p-2 cursor-pointer group/cert2 relative shadow-lg flex-shrink-0"
              >
                <img
                  src={achievement.secondaryImg}
                  alt={`${achievement.title} Supporting Credential`}
                  className="w-full h-full object-contain rounded-[20px] transition-transform duration-500 group-hover/cert2:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/cert2:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover/cert2:opacity-100 rounded-[30px]">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface AchievementsSectionProps {
  onOpenCertificate: (img: string, title: string) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  onOpenCertificate,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = ACHIEVEMENTS_DATA.length;

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-28 pb-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" /> Verified Honors & Certifications
          </span>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none mt-2"
          >
            Achievements
          </h2>
        </FadeIn>

        {/* Sticky Stacking Achievement Cards */}
        <div className="relative">
          {ACHIEVEMENTS_DATA.map((achievement, index) => {
            const targetScale = 1 - (totalCards - 1 - index) * 0.03;
            const start = index * (1 / totalCards);
            const end = 1;

            return (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
                totalCards={totalCards}
                progress={scrollYProgress}
                range={[start, end]}
                targetScale={targetScale}
                onOpenCertificate={onOpenCertificate}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

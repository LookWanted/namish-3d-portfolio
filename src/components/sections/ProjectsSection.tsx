import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { LiveProjectButton } from '../common/LiveProjectButton';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import { ProjectPreviewModal } from '../common/ProjectPreviewModal';
import { Github, Sparkles, Layers, Info } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenDetails: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards: _totalCards,
  progress,
  range,
  targetScale,
  onOpenDetails,
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
        {/* Subtle background gradient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B600A8]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Row: Number, Category & Award Badge, Project Name, Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-[#D7E2EA]/20 relative z-10">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            {/* Number */}
            <span
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)' }}
              className="text-[#D7E2EA] font-black leading-none tracking-tighter select-none opacity-90"
            >
              {project.number}
            </span>

            {/* Category & Title */}
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/80 font-medium">
                  {project.category}
                </span>
                {project.badge && (
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] uppercase font-bold tracking-wider flex items-center gap-1 ${
                    project.badgeType === 'award'
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30 shadow-[0_0_12px_rgba(251,191,36,0.2)]'
                      : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                  }`}>
                    {project.badgeType === 'award' && <Sparkles className="w-3 h-3" />}
                    {project.badge}
                  </span>
                )}
              </div>
              <h3
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
                className="text-white font-medium uppercase tracking-tight"
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 self-start sm:self-center">
            <button
              onClick={() => onOpenDetails(project)}
              className="p-3 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:text-white transition-colors cursor-pointer"
              title="Project Details"
              aria-label="View project details"
            >
              <Info className="w-4 h-4" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:text-white transition-colors cursor-pointer"
                title="View Source on GitHub"
                aria-label="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            <LiveProjectButton
              href={project.liveUrl}
              label={project.badgeType === 'repo' ? 'Explore Lab' : 'Live Project'}
            />
          </div>
        </div>

        {/* Middle: Brief summary & tags */}
        <div className="mt-3 sm:mt-4 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs sm:text-sm text-[#D7E2EA]/70 relative z-10">
          <p className="line-clamp-2 max-w-3xl font-light text-[#D7E2EA]/85">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 flex-shrink-0">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-[#BBCCD7] border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row: 2-Column Image Grid */}
        <div className="mt-3 sm:mt-4 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 flex-1 relative z-10">
          {/* Left Column (40% width -> 5 cols on md): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 justify-between">
            {/* Left Top Image */}
            <div
              style={{ height: 'clamp(120px, 15vw, 210px)' }}
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#141414] border border-white/10 relative group/img"
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} Render 1`}
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-700 group-hover/img:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Left Bottom Image */}
            <div
              style={{ height: 'clamp(140px, 20vw, 300px)' }}
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#141414] border border-white/10 relative group/img"
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} Render 2`}
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-700 group-hover/img:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column (60% width -> 7 cols on md): 1 tall image */}
          <div className="md:col-span-7 overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-[#141414] border border-white/10 min-h-[220px] md:min-h-full relative group/img">
            <img
              src={project.col2Image}
              alt={`${project.title} Hero Render`}
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] transition-transform duration-700 group-hover/img:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredProjects =
    filterCategory === 'all'
      ? PROJECTS_DATA
      : filterCategory === 'hardware'
      ? PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes('hardware') || p.category.toLowerCase().includes('stem'))
      : filterCategory === 'web'
      ? PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes('web') || p.category.toLowerCase().includes('os'))
      : PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes('game'));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = filteredProjects.length;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-28 pb-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-6 sm:mb-8">
          <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4 text-[#B600A8]" /> Hand-Crafted Works & STEM Feats
          </span>
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none mt-2"
          >
            Project
          </h2>
        </FadeIn>

        {/* Category Filter Pills */}
        <FadeIn delay={0.1} y={20} className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {[
            { id: 'all', label: 'All Projects (6)' },
            { id: 'hardware', label: 'Robotics & 3D Hardware' },
            { id: 'web', label: 'Web Apps & OS' },
            { id: 'games', label: 'Interactive Games' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase font-medium tracking-wider transition-all duration-300 cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg scale-105'
                  : 'bg-white/5 text-[#D7E2EA]/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="relative">
          {filteredProjects.map((project, index) => {
            const targetScale = 1 - (totalCards - 1 - index) * 0.03;
            const start = totalCards > 1 ? index * (1 / totalCards) : 0;
            const end = 1;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                totalCards={totalCards}
                progress={scrollYProgress}
                range={[start, end]}
                targetScale={targetScale}
                onOpenDetails={setSelectedProject}
              />
            );
          })}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

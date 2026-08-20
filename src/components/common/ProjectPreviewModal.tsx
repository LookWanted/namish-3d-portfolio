import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';

interface ProjectPreviewModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-3xl rounded-[36px] border-2 border-[#D7E2EA]/40 bg-[#101010] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#D7E2EA]/15">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
                  {project.category}
                </span>
                {project.badge && (
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                    project.badgeType === 'award'
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                      : 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40'
                  }`}>
                    {project.badge}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA] hover:bg-white/15 hover:text-white transition-colors cursor-pointer flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Grid Showcase */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="h-36 sm:h-40 rounded-2xl overflow-hidden border border-white/10 bg-[#161616]">
              <img
                src={project.col1Image1}
                alt={`${project.title} Preview 1`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 sm:h-40 rounded-2xl overflow-hidden border border-white/10 bg-[#161616]">
              <img
                src={project.col1Image2}
                alt={`${project.title} Preview 2`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 sm:h-40 rounded-2xl overflow-hidden border border-white/10 bg-[#161616]">
              <img
                src={project.col2Image}
                alt={`${project.title} Preview 3`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h4 className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-2">Overview</h4>
            <p className="text-sm sm:text-base text-[#D7E2EA]/90 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Key Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D7E2EA]/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs uppercase tracking-wider bg-black/50 text-[#BBCCD7] border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 pt-5 border-t border-[#D7E2EA]/15 flex flex-wrap items-center justify-between gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 border border-white/20 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:from-[#c700b8] hover:to-[#8625c8] text-white font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg ml-auto"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

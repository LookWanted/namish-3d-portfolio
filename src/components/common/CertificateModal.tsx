import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink } from 'lucide-react';

interface CertificateModalProps {
  imageSrc: string | null;
  title?: string;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ imageSrc, title, onClose }) => {
  if (!imageSrc) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-lg cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full rounded-3xl border border-white/20 bg-[#121212] p-4 sm:p-6 shadow-2xl z-10 flex flex-col items-center max-h-[92vh] overflow-hidden"
        >
          {/* Header */}
          <div className="w-full flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                {title || 'Certificate of Merit & Recognition'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Image View */}
          <div className="w-full flex-1 flex items-center justify-center my-3 overflow-hidden rounded-2xl bg-black/40 border border-white/10 p-2">
            <img
              src={imageSrc}
              alt={title || "Verified Certificate"}
              className="max-h-[68vh] w-auto object-contain rounded-lg shadow-xl"
            />
          </div>

          {/* Footer Actions */}
          <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D7E2EA]/70">
            <span>Verified STEM Credential · Namish Dawar</span>
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              <span>Open High-Res</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

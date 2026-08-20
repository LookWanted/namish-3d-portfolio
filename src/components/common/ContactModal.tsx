import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Github, Instagram, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-[36px] border-2 border-[#D7E2EA]/30 bg-[#121212] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl overflow-hidden z-10"
          >
            {/* Ambient glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#7621B0]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#D7E2EA]/15">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">Get In Touch</span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">Let&apos;s Build Together</h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 border border-[#D7E2EA]/20 flex items-center justify-center text-[#D7E2EA] hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Email Box */}
            <div className="mt-6 p-4 rounded-2xl bg-black/50 border border-[#D7E2EA]/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#B600A8]/20 text-[#B600A8] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">Email</p>
                  <p className="text-sm sm:text-base font-medium truncate text-white">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-[#D7E2EA] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-[#B600A8] text-white hover:bg-[#a00094] transition-colors cursor-pointer flex items-center gap-1 text-xs uppercase tracking-wider font-bold"
                  title="Open mail client"
                >
                  Send
                </a>
              </div>
            </div>

            {/* Social Grid */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-black/40 border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <Github className="w-6 h-6 text-[#D7E2EA] group-hover:text-white group-hover:scale-110 transition-all" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 group-hover:text-white">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-black/40 border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <Instagram className="w-6 h-6 text-[#D7E2EA] group-hover:text-pink-400 group-hover:scale-110 transition-all" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 group-hover:text-white">Instagram</span>
              </a>

              <div className="p-3.5 rounded-2xl bg-black/40 border border-[#D7E2EA]/15 flex flex-col items-center justify-center gap-2 col-span-2 sm:col-span-1">
                <MessageSquare className="w-6 h-6 text-[#D7E2EA]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80">Discord: {PERSONAL_INFO.discord}</span>
              </div>
            </div>

            {/* Main Portfolio Link */}
            <div className="mt-6 pt-4 border-t border-[#D7E2EA]/10 flex items-center justify-between text-xs text-[#D7E2EA]/70">
              <span>Official Website:</span>
              <a
                href={PERSONAL_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BBCCD7] hover:text-white flex items-center gap-1 font-semibold underline underline-offset-4"
              >
                namishdawar.xyz <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

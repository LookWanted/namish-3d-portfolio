import { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { FooterSection } from './components/sections/FooterSection';
import { ContactModal } from './components/common/ContactModal';
import { CertificateModal } from './components/common/CertificateModal';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [certificatePreview, setCertificatePreview] = useState<{
    src: string;
    title?: string;
  } | null>(null);

  return (
    <div className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] overflow-x-clip min-h-screen">
      {/* 1. HeroSection */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 2. MarqueeSection (Filled with real PDF certificates) */}
      <MarqueeSection
        onSelectCertificate={(src) => setCertificatePreview({ src, title: 'Verified Certificate of Merit' })}
      />

      {/* 3. AboutSection (Updated narrative & stats) */}
      <AboutSection
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* 4. SkillsSection (Engineering Toolkit & Progress Bars from screenshot) */}
      <SkillsSection />

      {/* 5. AchievementsSection (Full sticky stacking section with real certificates) */}
      <AchievementsSection
        onOpenCertificate={(img, title) => setCertificatePreview({ src: img, title })}
      />

      {/* 6. ProjectsSection (Personalized projects) */}
      <ProjectsSection />

      {/* 7. FooterSection */}
      <FooterSection
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Contact Drawer */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* High-Resolution Certificate Zoom Viewer */}
      <CertificateModal
        imageSrc={certificatePreview ? certificatePreview.src : null}
        title={certificatePreview?.title}
        onClose={() => setCertificatePreview(null)}
      />
    </div>
  );
}

export default App;

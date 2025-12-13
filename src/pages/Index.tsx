import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FloatingParticles } from '@/components/FloatingParticles';
import { MuteButton } from '@/components/MuteButton';
import { LandingSection } from '@/components/sections/LandingSection';
import { DisclaimerSection } from '@/components/sections/DisclaimerSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { PhotoGallerySection } from '@/components/sections/PhotoGallerySection';
import { MomentsSection } from '@/components/sections/MomentsSection';
import { ProposalSection } from '@/components/sections/ProposalSection';
import { CelebrationSection } from '@/components/sections/CelebrationSection';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import FoolSong from '@/assets/memories/Fool.mp3';

const Index = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasReadDisclaimer, setHasReadDisclaimer] = useState(false);
  const [hasAnsweredYes, setHasAnsweredYes] = useState(false);
  const disclaimerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Audio player hook
  const { play, toggleMute, isMuted, isPlaying } = useAudioPlayer(FoolSong);

  const handleStart = () => {
    setHasStarted(true);
    play(); // Start playing the song
    setTimeout(() => {
      disclaimerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleContinue = () => {
    setHasReadDisclaimer(true);
    setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleYes = () => {
    setHasAnsweredYes(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleReadAgain = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative">
      <FloatingParticles />
      
      {/* Mute/Unmute Button */}
      <MuteButton isMuted={isMuted} onToggle={toggleMute} isVisible={isPlaying} />
      
      <LandingSection onStart={handleStart} />
      
      <AnimatePresence>
        {hasStarted && (
          <div ref={disclaimerRef}>
            <DisclaimerSection onContinue={handleContinue} />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasReadDisclaimer && (
          <>
            <div ref={timelineRef}>
              <TimelineSection />
            </div>
            <PhotoGallerySection />
            <MomentsSection />
            <ProposalSection onYes={handleYes} onReadAgain={handleReadAgain} />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasAnsweredYes && <CelebrationSection />}
      </AnimatePresence>
    </main>
  );
};

export default Index;

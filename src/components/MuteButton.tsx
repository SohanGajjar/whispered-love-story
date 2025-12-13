import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface MuteButtonProps {
  isMuted: boolean;
  onToggle: () => void;
  isVisible: boolean;
}

export const MuteButton = ({ isMuted, onToggle, isVisible }: MuteButtonProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          onClick={onToggle}
          className="fixed top-6 right-6 z-50 p-4 bg-card/80 backdrop-blur-sm rounded-full shadow-card border border-blush/30 hover:shadow-glow transition-all duration-300 group"
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-foreground/60 group-hover:text-foreground transition-colors" />
            ) : (
              <Volume2 className="w-6 h-6 text-blush-deep group-hover:text-blush transition-colors" />
            )}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};


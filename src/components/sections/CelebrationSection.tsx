import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Confetti {
  id: number;
  x: number;
  delay: number;
  rotation: number;
  color: string;
}

export const CelebrationSection = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(350, 60%, 75%)',
      'hsl(350, 55%, 70%)',
      'hsl(270, 40%, 80%)',
      'hsl(20, 80%, 85%)',
      'hsl(35, 50%, 90%)',
    ];

    const newConfetti: Confetti[] = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setConfetti(newConfetti);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-romantic relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -20, x: `${piece.x}vw`, opacity: 1, rotate: piece.rotation }}
          animate={{ y: '100vh', opacity: 0, rotate: piece.rotation + 720 }}
          transition={{ duration: 3, delay: piece.delay, ease: "linear" }}
          className="absolute top-0 w-3 h-3 rounded-sm"
          style={{ backgroundColor: piece.color, left: 0 }}
        />
      ))}

      {/* Hearts floating */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, x: Math.random() * window.innerWidth }}
            animate={{ opacity: [0, 1, 0], y: -100 }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="absolute bottom-0"
          >
            <Heart
              className="text-blush-deep/50"
              size={20 + Math.random() * 20}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center max-w-2xl relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-blush/30 rounded-full flex items-center justify-center animate-pulse-soft">
            <Heart className="w-12 h-12 text-blush-deep" fill="currentColor" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-handwritten text-foreground mb-6"
        >
          You said yes.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-xl md:text-2xl font-serif text-foreground/80 mb-8 leading-relaxed"
        >
          This is just the beginning of our forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="p-8 bg-card/60 backdrop-blur-sm rounded-3xl border border-blush/30 shadow-card"
        >
          <p className="font-serif text-lg text-foreground/70 italic leading-relaxed">
            "Every love story is beautiful, but ours is my favorite."
          </p>
          <p className="mt-6 font-handwritten text-xl text-blush-deep">
            With all my love, always.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-12 text-sm text-muted-foreground font-serif"
        >
          I'll spend the rest of my life proving this was the best decision you ever made.
        </motion.p>
      </motion.div>
    </section>
  );
};

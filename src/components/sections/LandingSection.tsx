import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface LandingSectionProps {
  onStart: () => void;
}

export const LandingSection = ({ onStart }: LandingSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-romantic px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl font-serif italic mb-8"
          style={{ color: "hsl(350, 45%, 30%)" }}
        >
          Hey Surbhi..
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-handwritten mb-6 leading-tight"
          style={{ color: "hsl(350, 45%, 18%)" }}
        >
          This isn't just a website.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-2xl md:text-3xl font-handwritten"
          style={{ color: "hsl(350, 55%, 32%)" }}
        >
          It's everything I never said out loud.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          onClick={onStart}
          className="mt-16 px-8 py-4 rounded-full font-serif text-lg shadow-lg hover:shadow-xl transition-all duration-500 group border"
          style={{
            backgroundColor: "hsla(30, 50%, 98%, 0.95)",
            color: "hsl(350, 45%, 22%)",
            borderColor: "hsla(350, 50%, 60%, 0.4)",
          }}
        >
          <span className="flex items-center gap-2">
            Start the journey
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-6 h-6" style={{ color: "hsla(350, 35%, 35%, 0.6)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

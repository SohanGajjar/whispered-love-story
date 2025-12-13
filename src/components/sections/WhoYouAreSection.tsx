import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Trait {
  id: number;
  label: string;
  description: string;
}

const traits: Trait[] = [
  {
    id: 1,
    label: "Kind when no one is watching",
    description: "The way you treat people when there's nothing to gain... that's who you really are. And it's beautiful.",
  },
  {
    id: 2,
    label: "Strong but gentle",
    description: "You carry yourself with quiet strength, but there's a softness underneath that not everyone gets to see. I'm grateful I do.",
  },
  {
    id: 3,
    label: "Feels like home",
    description: "I don't know how to explain it. Being with you just feels right. Like everything finally makes sense.",
  },
  {
    id: 4,
    label: "Thoughtful in small ways",
    description: "The little things you do—remembering details, checking in, noticing when something's off—they mean more than you know.",
  },
  {
    id: 5,
    label: "Brave without realizing it",
    description: "You face things with courage, even when you're scared. That's not nothing. That's everything.",
  },
  {
    id: 6,
    label: "Real, always",
    description: "You don't pretend to be something you're not. In a world full of filters, you're refreshingly, beautifully real.",
  },
];

export const WhoYouAreSection = () => {
  const [selectedTrait, setSelectedTrait] = useState<Trait | null>(null);

  return (
    <section className="min-h-screen py-24 px-6 bg-lavender/30 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-handwritten text-foreground mb-4">
          Who You Are
        </h2>
        <p className="text-lg text-muted-foreground font-serif italic">
          Through my eyes
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6">
        {traits.map((trait, index) => (
          <motion.button
            key={trait.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setSelectedTrait(trait)}
            className="px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full font-handwritten text-lg text-foreground border border-blush/30 shadow-soft hover:shadow-glow hover:bg-card transition-all duration-300"
          >
            {trait.label}
          </motion.button>
        ))}
      </div>

      {/* Expanded view */}
      <AnimatePresence>
        {selectedTrait && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedTrait(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 max-w-md w-full shadow-card border border-blush/30 relative text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTrait(null)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-handwritten text-foreground mb-6">
                {selectedTrait.label}
              </h3>
              <p className="text-foreground/80 font-serif leading-relaxed italic">
                "{selectedTrait.description}"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

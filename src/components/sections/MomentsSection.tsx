import { useState } from 'react';
import { motion } from 'framer-motion';

interface Moment {
  id: number;
  front: string;
  back: string;
}

const moments: Moment[] = [
  {
    id: 1,
    front: "Adaptability",
    back: "You adapt so effortlessly to everything. There are countless moments that show how naturally you handle every situation with calm and grace. It's something I truly admire about you",
  },
  {
    id: 2,
    front: "Real, Always",
    back: "You are always real, with me and with yourself. I’ve never seen you do something you didn’t truly want to do. You have clarity, and you don’t let anyone influence you, not even me, even when I try to push you.",
  },
  {
    id: 3,
    front: "Maturity",
    back: "You are far more mature than your age suggests, and that’s something I genuinely admire. There have been so many moments where I’ve learned from yous",
  },
  {
    id: 4,
    front: "Family Oriented",
    back: "I can genuinely say that not even ten percent of people would buy their father a phone worth a good amount, even when they can afford it. That says a lot about you. And the way I’ve seen you talk to your mom and dad, it shows how deeply family-oriented you are.",
  },
  {
    id: 5,
    front: "Your presence",
    back: "When you're around, I feel calmer. Safer. Like whatever happens, it'll be okay because you're there. You have no idea how much that means.",
  },
  {
    id: 6,
    front: "You",
    back: "You are pretty!! why would I ever hide that fact? So yes, my favorite thing about you… is YOU. Full stop.",
  },
];

export const MomentsSection = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-soft relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-handwritten text-foreground mb-4">
          My Favorite Things About You
        </h2>
        <p className="text-lg text-muted-foreground font-serif italic">
          Click to reveal what these mean to me
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {moments.map((moment, index) => (
          <motion.div
            key={moment.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="perspective-1000"
          >
            <motion.div
              onClick={() => toggleCard(moment.id)}
              className="relative w-full h-64 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: flippedCards.has(moment.id) ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-card rounded-2xl shadow-card border border-blush/30 flex items-center justify-center p-6 backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h3 className="text-2xl font-handwritten text-foreground text-center">
                  {moment.front}
                </h3>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-blush/20 rounded-2xl shadow-card border border-blush/30 flex items-center justify-center p-6 backface-hidden"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <p className="text-sm font-serif text-foreground/80 leading-relaxed text-center">
                  {moment.back}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

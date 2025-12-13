import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, X } from 'lucide-react';

interface ProposalSectionProps {
  onYes: () => void;
  onReadAgain: () => void;
}

export const ProposalSection = ({ onYes, onReadAgain }: ProposalSectionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleYes = () => {
    setSelectedOption('yes');
    setTimeout(() => onYes(), 1000);
  };

  const handleNo = () => {
    setSelectedOption('no');
  };

  const handleMaybe = () => {
    setSelectedOption('maybe');
  };

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-romantic relative overflow-hidden">
      {/* Soft glow in background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-blush/30 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Heart Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="mb-8 text-center"
        >
          <Heart className="w-16 h-16 mx-auto text-blush-deep animate-heart-beat" fill="currentColor" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-3xl md:text-4xl font-handwritten text-foreground mb-8 text-center"
        >
          Listen, Surbhi...
        </motion.h2>

        {/* Letter Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 1 }}
          className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card border border-blush/30 mb-12 max-h-[60vh] overflow-y-auto"
        >
          <div className="space-y-6 text-foreground/80 font-serif leading-relaxed">
            <p>
              I understand the weight of this moment. I know this is serious, and I'm fully aware of that. But I need you to know one thing clearly: <span className="font-semibold text-foreground">you feel right to me in every possible way.</span>
            </p>

            <p>
              I could honestly write ten times more than what I already have, but right now what matters most is clarity.. being honest about what you are to me.
            </p>

            <p>
              I want to say this with complete respect: I am okay if your answer is no. I understand you more than you think I do. But if that happens, I'll need to step back completely and cut the bond we share right now, not out of anger, but out of self respect and honesty.
            </p>

            <p>
              Why? Because I wouldn't be able to see you sitting behind someone else's bike, or watching Virat Kohli with another person. I can't imagine you making food for someone who isn't me, or going on trips with someone else. In short, I wouldn't be able to continue being your friend at the level we are today.
            </p>

            <p>
              If your answer is no, I hope you understand and respect this decision. You don't need to explain anything or inform me further… I'll respect your choice and move on with clarity.
            </p>

            <p className="text-foreground font-semibold">
              Now, looking at the brighter side if there is even a small possibility for us.. I honestly can't explain how beautiful life could be.
            </p>

            <p>
              You're already trending among my closest people. Neel and Pal genuinely love our bond and are always rooting for us. Miral is already forcing me to invite you to Saket's wedding because she has full confidence that I'll end up with anyone I want anyway😂, so why not invite you already.
            </p>

            <p>
              Only these three people know about this, and all of them truly like you.
            </p>

            <p>
              I imagine a life where you're there, not just someone I love, but someone I grow with. I want to watch the 2027 World Cup with you. I want to travel to New Zealand, Queenstown, Spain, and so many places. And honestly, it would be a dream if you were sitting beside me on every flight.
            </p>

            <p>
              That's all I wanted to say, clearly, honestly, and with respect.
            </p>

            <p className="text-foreground font-semibold">
              There's also a third possibility, you can take your time and think about this for as long as you need.
            </p>

            <p>
              There's no rush at all. I know these things take time, and whatever you feel is completely valid.
            </p>

            <p>
              I'm sure you enjoy being around me, and I also understand that you might be attached to this friendship, and that's okay. People process emotions differently, and often it takes longer to understand what something truly means.
            </p>

            <p>
              At one point, I thought that if we spent more time together, you might feel more comfortable, and maybe that could naturally lead us somewhere. But then I realized something important that, if it's a yes, it will always be a yes. And if it's a no, it will always be a no. Time doesn't change the truth, it only delays it.
            </p>

            <p>
              I'll share this link on a random Sunday morning, unexpected and maybe a little awkward but I wanted clarity. I have other serious priorities in life right now, and while I know I could have done this in many different and beautiful ways, this felt like the most honest way for me to express what I feel.
            </p>

            <p className="text-center text-foreground text-lg font-semibold italic mt-8">
              Just know this: you are special to me, and you will always be special.
            </p>
          </div>
        </motion.div>

        {/* Three Options */}
        {!selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {/* Yes Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="group relative overflow-hidden px-8 py-6 bg-gradient-to-br from-blush-deep to-blush text-card rounded-2xl font-handwritten text-2xl shadow-glow transition-all duration-500"
            >
              <Heart className="w-6 h-6 mx-auto mb-2 group-hover:animate-heart-beat" fill="currentColor" />
              <span className="block">Yes 💖</span>
              <span className="block text-sm font-serif mt-2 opacity-90">I feel the same way</span>
            </motion.button>

            {/* Maybe Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMaybe}
              className="group relative overflow-hidden px-8 py-6 bg-gradient-to-br from-lavender to-peach text-foreground rounded-2xl font-handwritten text-2xl shadow-card border border-blush/30 transition-all duration-500"
            >
              <Clock className="w-6 h-6 mx-auto mb-2 group-hover:animate-spin-slow" />
              <span className="block">Maybe 💭</span>
              <span className="block text-sm font-serif mt-2 opacity-80">I need time to think</span>
            </motion.button>

            {/* No Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNo}
              className="group relative overflow-hidden px-8 py-6 bg-card/80 backdrop-blur-sm text-foreground rounded-2xl font-handwritten text-2xl shadow-soft border border-foreground/20 transition-all duration-500"
            >
              <X className="w-6 h-6 mx-auto mb-2" />
              <span className="block">No 💔</span>
              <span className="block text-sm font-serif mt-2 opacity-70">I value our friendship</span>
            </motion.button>
          </motion.div>
        )}

        {/* Response Messages */}
        {selectedOption === 'no' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-foreground/20 text-center"
          >
            <p className="text-xl font-serif text-foreground/80 mb-4">
              I understand and respect your decision. Thank you for being honest with me.
            </p>
            <p className="text-foreground/70 font-serif">
              You will always be special to me. Take care, Surbhi. 💙
            </p>
          </motion.div>
        )}

        {selectedOption === 'maybe' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-lavender/20 to-peach/20 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-blush/30 text-center"
          >
            <p className="text-xl font-serif text-foreground/80 mb-4">
              Take all the time you need. There's no pressure at all.
            </p>
            <p className="text-foreground/70 font-serif">
              I'll be here, and whatever you feel is completely valid. 💭
            </p>
          </motion.div>
        )}

        {/* Read Again Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center"
        >
          <button
            onClick={onReadAgain}
            className="px-8 py-3 text-foreground/60 hover:text-foreground font-serif text-sm underline transition-all duration-300"
          >
            Read from the beginning
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

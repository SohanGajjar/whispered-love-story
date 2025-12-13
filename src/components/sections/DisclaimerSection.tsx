import { motion } from "framer-motion";
import { Heart, Sparkles, MessageCircleHeart, Code } from "lucide-react";
import making2 from "@/assets/behind-the-scenes/making2.jpg";

interface DisclaimerSectionProps {
  onContinue: () => void;
}

export const DisclaimerSection = ({ onContinue }: DisclaimerSectionProps) => {
  const paragraphs = [
    {
      text: "This might not be the right time.. or the perfect way to say it.",
      delay: 0.2,
    },
    {
      text: "You may find this unexpected… or maybe you always knew it was coming. I have no idea..!!",
      delay: 0.4,
    },
    {
      text: "I could have waited for a better moment.",
      delay: 0.8,
    },
    {
      text: "I could have given it more time.",
      delay: 1.0,
    },
    {
      text: "I could have said this in person.",
      delay: 1.2,
    },
    {
      text: "But somewhere inside, I know it might not turn out the way I hope.. and I'm at a point in my life where I can't keep holding back what truly matters, even for one more day (job and all). I want to fix many things… and yes, you guessed it right — this is a proposal.",
      delay: 1.6,
      highlight: true,
    },
    {
      text: "Honestly, you had me at the very first hello.",
      delay: 2.2,
      italic: true,
    },
    {
      text: "It was NEVER my plan to keep you just as a friend, but you turned out to be one of the easiest, coolest people to hang around with.. someone I'm genuinely comfortable with. We somehow have so much in common: traveling, sports, movies… and of course, our love for Virat Kohli.",
      delay: 2.6,
    },
    {
      text: "For the last six months, I let everything flow naturally, without forcing anything, and I loved everything. I love spending time with you. I admire your nature. You're easy to be with, easy to talk to,(not easy to text/call to😂) but somehow, you just feel right.",
      delay: 3.0,
    },
    {
      text: "(Please ignore my stupid roasting and complaints — I only do that with people I truly care about.)",
      delay: 3.4,
      muted: true,
    },
    {
      text: "Before you go any further, I just want you to interact with this website. Click anywhere that feels clickable (Mehnat thi banavi ch). I've been writing everything in it since last week. I hope you enjoy reading it… as much as I enjoyed creating it for you.❤️",
      delay: 3.8,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-romantic relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blush/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-lavender/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-peach/10 rounded-full blur-3xl" />

      {/* Floating hearts */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 text-blush/30"
      >
        <Heart className="w-8 h-8" fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-48 right-32 text-lavender/30"
      >
        <Heart className="w-6 h-6" fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-32 text-peach/30"
      >
        <Sparkles className="w-7 h-7" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Header with icon */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <MessageCircleHeart className="w-16 h-16 text-blush-deep" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-blush-deep/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-handwritten text-foreground mb-3"
          >
            Before we begin...
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-blush via-lavender to-peach mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-card/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-card border border-blush/20 relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blush/10 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-lavender/10 to-transparent rounded-tl-full" />
          
          {/* Quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute top-8 left-8 text-9xl font-serif text-blush-deep leading-none select-none"
          >
            "
          </motion.div>

          {/* Content with better spacing */}
          <div className="space-y-6 relative z-10">
            {paragraphs.map((para, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: para.delay * 0.2, duration: 0.6 }}
              >
                {para.highlight ? (
                  <div className="relative p-6 bg-gradient-to-r from-blush/10 via-lavender/10 to-peach/10 rounded-2xl border border-blush/30">
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <p className="text-base md:text-lg leading-relaxed font-serif font-semibold text-foreground">
                        {para.text}
                      </p>
                    </motion.div>
                    <div className="absolute -right-2 -top-2">
                      <Sparkles className="w-5 h-5 text-blush-deep" />
                    </div>
                  </div>
                ) : para.italic ? (
                  <div className="text-center">
                    <p className="text-lg md:text-xl leading-relaxed font-handwritten text-blush-deep italic">
                      {para.text}
                    </p>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="w-16 h-0.5 bg-blush-deep/50 mx-auto mt-3 rounded-full"
                    />
                  </div>
                ) : (
                  <p className={`text-base md:text-lg leading-relaxed font-serif ${
                    para.muted 
                      ? "text-muted-foreground/70 text-sm italic" 
                      : "text-foreground/80"
                  }`}>
                    {para.text}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Closing quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 right-8 text-9xl font-serif text-blush-deep leading-none select-none transform rotate-180"
          >
            "
          </motion.div>
        </motion.div>

        {/* Behind the Scenes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 text-foreground/70 mb-3"
            >
              <Code className="w-5 h-5 text-blush-deep" />
              <span className="text-sm font-serif italic">The guy behind this website</span>
              <Code className="w-5 h-5 text-blush-deep" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-base font-serif text-muted-foreground"
            >
              Yes, that's me coding all of this for you 😊
            </motion.p>
          </div>

          {/* Single Centered Photo */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="relative group overflow-hidden rounded-2xl shadow-card border-4 border-card bg-card max-w-md"
              style={{ transformOrigin: 'center center' }}
            >
              <div className="p-3 pb-16 bg-card">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={making2}
                    alt="Making this website for you"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 p-4 text-center"
                >
                  <p className="text-sm font-handwritten text-foreground/70">
                    Coding this for you ❤️
                  </p>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="text-center mt-6 text-sm font-serif text-foreground/70 italic"
          >
            Late nights, countless rewrites, and all the effort... because you're worth it ❤️
          </motion.p>
        </motion.div>

        {/* Enhanced Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={onContinue}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 rounded-full font-handwritten text-xl shadow-glow hover:shadow-soft transition-all duration-500 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(350, 70%, 65%) 0%, hsl(350, 65%, 55%) 100%)",
              color: "hsl(30, 50%, 98%)",
            }}
          >
            {/* Animated shine effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"
            />
            
            <span className="relative flex items-center gap-3">
              <Heart className="w-5 h-5 group-hover:animate-heart-beat" fill="currentColor" />
              Continue to our story
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl"
              >
                →
              </motion.span>
            </span>
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-6 text-sm font-serif text-muted-foreground italic"
          >
            Click to explore our journey together ✨
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: "OCT 2023",
    title: "The day we first talked",
    description:
      "So if you don't know the story.. back in 2023, Instagram kept recommending your profile to me again and again. Instagram was literally like, \"Aane follow kr, follow kr.\"\n\nAfter seeing your aesthetic DP, I felt like texting you… And honestly, I'm not someone who randomly messages people.. but that day I thought, let me just take a chance and see what happens.\n\nSo I came up with the worst opening line ever:\n\n\"How to approach a girl without a zero post and zero stories?\"😂\n\nI never expected a reply to that message. And even after you did reply, we didn't really get along for almost a year — we were just following each other, nothing more.\n\nBut… the rest is history.",
  },
  {
    id: 2,
    date: "MAR 2025",
    title: "The first meeting",
    description:
      "Even when I gave you a referral to my company, or when we had those small, random conversations, nothing really was that much of highlight. I wasn't trying too hard either — and honestly, none of that mattered.\n\nSo let's skip straight to the highlight.\n\nWhen I came to Ahmedabad and randomly asked you to meet… you actually showed up.\n\nI saw you, and I realized… she is just as beautiful as her DP. It was a really great meeting. From day one, I felt super comfort with you (not sure about you 😅), but the first impression was definitely attraction… without a doubt.",
  },
  {
    id: 3,
    date: "APR 2025",
    title: "Start of beautiful friendship",
    description:
      "But after that, somehow, we just became good friends. Whether it was you coming over to my flat and drinking together in the early stage of our friendship, playing pickleball with your great great skills so that we lost every match 😂, or going to movies.. in all those moments, I felt the same thing.\n\nI stopped thinking about relationships and just thought, forget dating… she's genuinely such a cool person to be with. So similar, so easy. I was simply enjoying everything the way a normal friend would.\n\nAnd honestly, you are a great great friend. I know we haven't known each other for a very long time, but trust me… sometimes, a bond matters more than duration.",
  },
  {
    id: 4,
    date: "MAY 2025",
    title: "The RCB Day",
    description:
      "But then came the shift.\n\nWhen we went to watch the final match and celebrated every single moment together — that day became one of the best memories of my life. VIRAT WON THE IPL. I mean, I had been dreaming about that since 2016… and it finally happened after nine long years  with you there beside me.\n\nImagine a hypothetical scenario where I get to tell people that I watched Virat win an IPL trophy and fell in love at the same time. How beautiful is that?\n\nAnd honestly… I can always say that.\n\nIf you noticed, that's when I started approaching you more after that match. You brought luck in my life (The manifestation always worked)",
  },
  {
    id: 5,
    date: "DEC 2025",
    title: "Right now",
    description:
      "So the reason this might feel unexpected is because I've thought about it carefully from both your side and mine.\n\nThe more time I spend with you, the more attached I become, and right now, living in uncertainty isn't something I can continue with. And the more we keep hanging out, I know you'll also get attached to me with time at least as a friend, if not more (come on, I am very worth getting attached to… don't say no 😄). so It is not right for me to be a friend for long time and than ruin this friendship.\n\nThat's why lately I've felt the need for clarity in my life. I need to understand where we stand. Because from my side, it has always been this way.\n\nI tried hard to hide it and kept waiting for a \"better time.\" I thought that the more we got to know each other, the more certain everything would become. But I've realized this is enough. I know you well enough to ask this now and you know me well enough to decide too.",
  },
];

export const TimelineSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <section className="min-h-screen py-24 px-6 bg-gradient-soft relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-handwritten text-foreground mb-4">Our Timeline</h2>
        <p className="text-lg text-muted-foreground font-serif italic">The moments that brought us here</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-px bg-blush-deep/30 top-0"
        />

        {/* Timeline events */}
        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blush-deep rounded-full border-4 border-cream z-10 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              />

              {/* Event card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedEvent(event)}
                className={`w-5/12 p-6 bg-card/80 backdrop-blur-sm rounded-2xl shadow-card border border-blush/30 cursor-pointer transition-all duration-300 hover:shadow-glow ${
                  index % 2 === 0 ? "mr-auto text-right pr-12" : "ml-auto text-left pl-12"
                }`}
              >
                <p className="text-sm text-blush-deep font-serif mb-2">{event.date}</p>
                <h3 className="text-xl font-handwritten text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground font-serif line-clamp-2">{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 max-w-md w-full shadow-card border border-blush/30 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              <p className="text-sm text-blush-deep font-serif mb-3">{selectedEvent.date}</p>
              <h3 className="text-2xl font-handwritten text-foreground mb-4">{selectedEvent.title}</h3>
              <p className="text-foreground/80 font-serif leading-relaxed">{selectedEvent.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

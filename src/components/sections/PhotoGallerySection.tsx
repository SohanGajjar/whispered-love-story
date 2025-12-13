import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import BikeRideImg from "@/assets/memories/BikeRide.png";
import BusRideImg from "@/assets/memories/busRide.png";
import RCBMatchImg from "@/assets/memories/RCBFinalMatch.png";
import TreckingImg from "@/assets/memories/Trecking.png";
import KitchenImg from "@/assets/memories/UsInKitchen.png";

interface Photo {
  id: number;
  image: string;
  title: string;
  caption: string;
  rotation: number;
  color: string;
}

const photos: Photo[] = [
  { 
    id: 0, 
    image: BikeRideImg,
    title: "Bike rides",
    caption: "I don't know why, but I really love this when you riding the bike and I'm sitting behind.\n\nYou didn't know this, but the first time you rode the bike from pickleball to SBR, I was blushing so hard sitting behind you. I was thanking God for that moment.\n\nYou never rode it again after that.. maybe you sensed my feelings..\n\nBut honestly, that ride is one of the most beautiful memories I've had with you… and something I'll always remember.", 
    rotation: -3, 
    color: "bg-lavender/20" 
  },

  { 
    id: 1, 
    image: BusRideImg,
    title: "4 hours",
    caption: "So I started scheduling everything in a way that could sync with your routine. It wasn't difficult… and those trips from Rajkot to Ahmedabad and Ahmedabad to Rajkot on the GSRTC Volvo were planned more times than you know.\n\nBecause honestly, why would I ever miss the chance to sit beside you for four hours straight… sharing music, watching series, and just being completely in the moment. I truly loved those memories. It was wholesome!\n\nbut tu rajkot ma to mne hju sudhi madi nthi, e to lagtu nthi k possible che ekei rite", 
    rotation: 2, 
    color: "bg-blush/20" 
  },
  { 
    id: 2, 
    image: RCBMatchImg,
    title: "RCB Final Match",
    caption: "I've already talked a lot about how special that match was for me. Honestly, that day I wasn't even worried about who would come with me.. whether it was Kush, some other friends, or even you. All I wanted was one thing: RCB should win.\n\nBut God gave me two things when I was expecting just one.\n\nSomewhere along the way, I started believing that Surbhi brings luck into my life. Surbhi brings happiness. And she's just as crazy as I am when it comes to Virat Kohli… shouting for him for no reason, standing up on the chair for him, celebrating every small moment, and admiring Virat and Anushka together with the same madness as me. Wohhh !!\n\nHow could I not fall in love at that moment?\n\nWhy wouldn't I?", 
    rotation: -2, 
    color: "bg-blush/20" 
  },
  { 
    id: 3, 
    image: TreckingImg,
    title: "Mountain adventure",
    caption: "I can honestly say I fell harder when we got the chance to go on a trip together.\n\nThey say if you really want to know someone, travel with them…. and that's exactly what happened. Until that RCB final match, I didn't truly know your personality. But when you came to trip with me, I saw a completely different side of you.\n\nI saw how calm you are. How mature. How easily you adjust to situations. No drama, no complaints.. just handling things beautifully. Climbing the mountain first, making quick decisions that's when I realized I was falling even more and more..\n\nAnd while we were climbing, I secretly wished there were more stones and mud, just so I'd get the chance to hold your hand and help you up. I loved being there for you… even though I know that if I wasn't there, you would still have done everything just fine. But it felt really good to be there for you.\n\nFrom shopping together at Colaba, to going to ONE8 Cafe not thinking about money, just being there as pure Virat Kohli fans… that feeling was pure class. And every bit of it was totally worth it.", 
    rotation: 3, 
    color: "bg-peach/20" 
  },
  { 
    id: 4, 
    image: KitchenImg,
    title: "Ghar ke haath ka khana",
    caption: "That was my breaking point.\n\nAfter eating food made by you, my patience was honestly gone. From that day, I started questioning myself. I knew that if I continued like this, I would only get more attached and if things didn't work out, it would hurt even more.\n\nThat's when I realized I needed clarity. I needed to be honest with myself that I love you, and I should confess it to you as soon as possible.\n\nBut yes… I truly loved the bhakhri and sabzi. I finished everything. And even if it was just that one time, these are the kinds of moments not everyone gets to experience.\n\nThat's why I say this with complete sincerity, \n\nyou are wife material, not just girlfriend material.", 
    rotation: -4, 
    color: "bg-lavender/20" 
  },



];

export const PhotoGallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section className="min-h-screen py-24 px-6 bg-cream relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-handwritten text-foreground mb-4">
          Memories
        </h2>
        <p className="text-lg text-muted-foreground font-serif italic">
          Photos that tell our story
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
              onClick={() => setSelectedPhoto(photo)}
              className="cursor-pointer"
              style={{ rotate: `${photo.rotation}deg` }}
            >
              <div className={`${photo.color} p-3 pb-12 rounded-sm shadow-card hover:shadow-glow transition-all duration-500`}>
                <div className="aspect-square bg-white rounded-sm overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-handwritten text-foreground/70">
                  {photo.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 max-w-lg w-full shadow-card relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              <div className="aspect-square bg-white rounded-2xl mb-6 overflow-hidden">
                <img 
                  src={selectedPhoto.image} 
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-handwritten text-foreground mb-3 text-center">
                {selectedPhoto.title}
              </h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center text-lg font-serif text-foreground/80 italic leading-relaxed"
              >
                {selectedPhoto.caption}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

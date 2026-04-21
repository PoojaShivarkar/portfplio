import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Award as AwardIcon, Calendar, Building2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";

interface Award {
  id: string;
  // title: string;
  description: string;
  // organization: string;
  // date: string;
  image: string;
}

const awards: Award[] = [
  {
    id: "1",
    description:"Outstanding performance and demonstrating the following values. Accountability, Adaptability, Leadership",
    image: "image/award/award3.jpg",
  }
  ,
  {
    id: "2",
    description:"Outstanding performance and demonstrating the following values.Dedication, commitment, alignment.",
    image: "image/award/award1.jpg",
  },
  {
    id: "3",
    description:"Outstanding performance and demonstrating the following values.Accountability, Additional Responsibility, Team Player",
    image: "image/award/award2.jpg",
  },
  {
    id: "4",
    description:"Outstanding performance and demonstrating the following values. Ownership, Excellence driven, Adaptability",
    image: "image/award/award3.jpg",
  },
];

export default function Awards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
     <SectionWrapper id="awards" className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-12">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium"
          >
            <AwardIcon className="w-4 h-4" />
            Recognition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Achievements & <span className="text-muted-foreground">Awards</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of milestones and recognitions earned through dedication to excellence and innovation in technology.
          </motion.p>
        </div>

        <div 
          className="relative w-full max-w-4xl h-[500px] md:h-[600px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  nextSlide();
                } else if (swipe > 10000) {
                  prevSlide();
                }
              }}
              className="absolute w-full px-4 md:px-0 cursor-grab active:cursor-grabbing"
            >
              <div className="group relative overflow-hidden rounded-[2.5rem] bg-accent/30 border border-border backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-blue-500/10 hover:border-blue-500/30">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                    <img
                      src={awards[currentIndex].image}
                      alt="Achievement Award"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://picsum.photos/seed/${awards[currentIndex].id}/800/600`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/20" />
                  </div>
                  
                  <div className="p-8 md:p-12 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-medium">
                      <AwardIcon className="w-3 h-3" />
                      Recognition Value
                    </div>

                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground italic">
                      "{awards[currentIndex].description}"
                    </p>

                    <div className="pt-6">
                      <div className="h-1.5 w-16 bg-blue-500 rounded-full group-hover:w-32 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-16 md:bottom-auto md:inset-x-0 flex md:justify-between items-center px-4 md:-mx-12 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-background/50 backdrop-blur-md border hover:bg-primary hover:text-white transition-all shadow-lg"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-background/50 backdrop-blur-md border hover:bg-primary hover:text-white transition-all shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-3 pt-8 md:pt-16">
          {awards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 transition-all duration-500 rounded-full ${
                index === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-muted hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

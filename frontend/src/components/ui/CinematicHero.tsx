import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedNumber = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const rounded = useTransform(springValue, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  return <motion.span>{rounded}</motion.span>;
};

const ShinyWord = ({ children, color = "amber" }: { children: React.ReactNode, color?: "amber" | "emerald" | "cyan" }) => {
  const colors = {
    amber: "text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]",
    emerald: "text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]",
    cyan: "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
  };
  return (
    <span className={`font-black tracking-wide ${colors[color]}`}>
      {children}
    </span>
  );
};

const SLIDE_DURATION = 6000; // 6 seconds

const slides = [
  {
    id: '01',
    title: 'NUTRITIONAL SUPPORT',
    description: <>Nourishing <ShinyWord color="amber">families.</ShinyWord></>,
    video: '/videos/nutrition for pregnat.mp4',
    image: '/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg',
    transformOrigin: 'center center',
  },
  {
    id: '02',
    title: 'CLEAN WATER',
    description: <>Providing <ShinyWord color="cyan">clean water.</ShinyWord></>,
    video: '/videos/water.mp4',
    image: '/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg',
    transformOrigin: 'left center',
  },
  {
    id: '03',
    title: 'SCHOOL INFRASTRUCTURE',
    description: <>Building <ShinyWord color="emerald">better schools.</ShinyWord></>,
    video: '/videos/school infrastructure.mp4',
    image: '/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.jpeg',
    transformOrigin: 'center bottom',
  },
  {
    id: '04',
    title: 'RURAL DEVELOPMENT',
    description: <>Empowering <ShinyWord color="amber">rural lives.</ShinyWord></>,
    video: '/videos/rural developement.mp4',
    image: '/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.20 PM (1).jpeg',
    transformOrigin: 'right center',
  },
  {
    id: '05',
    title: 'HEALTHCARE SUPPORT',
    description: <>Delivering <ShinyWord color="emerald">essential healthcare.</ShinyWord></>,
    video: '/videos/nutrition for pregnat.mp4',
    image: '/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.17 PM (1).jpeg',
    transformOrigin: 'center top',
  },
  {
    id: '06',
    title: 'RO PLANT INSTALLATION',
    description: <>Sustainable <ShinyWord color="cyan">water access.</ShinyWord></>,
    video: '/videos/water.mp4',
    image: '/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.53 PM.jpeg',
    transformOrigin: 'right center',
  },
  {
    id: '07',
    title: 'DIGITAL CLASSROOMS',
    description: <>Enabling <ShinyWord color="amber">digital education.</ShinyWord></>,
    video: '/videos/school infrastructure.mp4',
    image: '/blind school porject/WhatsApp Image 2026-08-19 at 11.13.23 PM.jpeg',
    transformOrigin: 'center center',
  },
  {
    id: '08',
    title: 'COMMUNITY WELLNESS',
    description: <>Fostering <ShinyWord color="emerald">public wellness.</ShinyWord></>,
    video: '/videos/rural developement.mp4',
    image: '/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.21 PM.jpeg',
    transformOrigin: 'center bottom',
  }
];

export const CinematicHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isPlaying = true;
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number>(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const animateProgress = (time: number) => {
    if (!startTimeRef.current) startTimeRef.current = time - pausedTimeRef.current;
    
    const elapsed = time - startTimeRef.current;
    const currentProgress = (elapsed / SLIDE_DURATION) * 100;

    if (currentProgress >= 100) {
      setProgress(0);
      startTimeRef.current = null;
      pausedTimeRef.current = 0;
      nextSlide();
    } else {
      setProgress(currentProgress);
      requestRef.current = requestAnimationFrame(animateProgress);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animateProgress);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      pausedTimeRef.current = (progress / 100) * SLIDE_DURATION;
      startTimeRef.current = null;
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, progress, currentSlide]);

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0);
    startTimeRef.current = null;
    pausedTimeRef.current = 0;
  }, [currentSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Video Backgrounds */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0, scale: 1, transition: { duration: 1.2 } }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: slides[currentSlide].transformOrigin }}
          >
              <video
                src={slides[currentSlide].video}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              {/* Neutral dark overlay for readability without blue tint */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Area - Centered Text */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center -mt-32">
        
        {/* Animated Title */}
        <div className="h-[120px] md:h-[150px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl"
            >
              <h1 
                className="text-xl md:text-2xl lg:text-4xl font-serif font-normal leading-snug tracking-wide whitespace-pre-line text-white"
                style={{ textShadow: '0 4px 40px rgba(0,0,0,0.8)' }}
              >
                {slides[currentSlide].description}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-5 mt-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
            <Link to="/programs" className="bg-[#009966] hover:bg-[#008855] text-white px-5 py-2 rounded-full font-bold text-[11px] tracking-wide transition-all shadow-[0_4px_20px_rgba(0,153,102,0.4)] flex items-center justify-center gap-2 whitespace-nowrap">
              Explore Programs 
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button 
              onClick={() => {
                const element = document.getElementById('impact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white px-5 py-2 rounded-full font-bold text-[11px] tracking-wide transition-all flex items-center justify-center gap-2 backdrop-blur-sm whitespace-nowrap"
            >
              <Play className="w-3.5 h-3.5" fill="currentColor" /> Watch Our Impact
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
            <div className="flex -space-x-2.5">
              <img src="/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM (1).jpeg" alt="Volunteer" className="w-8 h-8 rounded-full border-2 border-[#061928] object-cover" />
              <img src="/Bihar ro plant 50 lakhs/WhatsApp Image 2026-08-19 at 11.17.09 PM (1).jpeg" alt="Volunteer" className="w-8 h-8 rounded-full border-2 border-[#061928] object-cover" />
              <img src="/Medical equipment ghatkesar hyd 1 crore/WhatsApp Image 2026-08-19 at 11.19.11 PM.jpeg" alt="Volunteer" className="w-8 h-8 rounded-full border-2 border-[#061928] object-cover" />
              <img src="/Cycle project karimnagar/WhatsApp Image 2026-08-19 at 11.13.06 PM (2).jpeg" alt="Volunteer" className="w-8 h-8 rounded-full border-2 border-[#061928] object-cover" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-xs leading-tight">
                <AnimatedNumber value={10000} />+ people reached
              </p>
              <p className="text-white/70 text-[10px]">across rural communities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Carousel - 5 Cards */}
      <div className="absolute bottom-10 w-full z-10 flex justify-center items-end h-[30vh] lg:h-[35vh] pointer-events-none perspective-1000">
        {slides.map((slide, i) => {
          const diff = i - currentSlide;
          let distance = diff;
          if (diff > slides.length / 2) distance -= slides.length;
          else if (diff < -slides.length / 2) distance += slides.length;

          if (Math.abs(distance) > 2) return null; // Show up to 5 cards (center, left 1&2, right 1&2)

          const isActive = distance === 0;
          const isL1 = distance === -1;
          const isR1 = distance === 1;
          const isL2 = distance === -2;

          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                x: isActive ? "0%" : isL1 ? "-90%" : isR1 ? "90%" : isL2 ? "-165%" : "165%",
                y: isActive ? "-5%" : Math.abs(distance) === 1 ? "15%" : "25%",
                scale: isActive ? 1 : Math.abs(distance) === 1 ? 0.8 : 0.65,
                opacity: isActive ? 1 : Math.abs(distance) === 1 ? 0.4 : 0.15,
                zIndex: isActive ? 30 : Math.abs(distance) === 1 ? 20 : 10,
                rotateZ: isActive ? 0 : isL1 ? -6 : isR1 ? 6 : isL2 ? -12 : 12,
              }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className={`absolute w-[85%] max-w-[260px] md:max-w-[320px] lg:max-w-[380px] aspect-[16/9] rounded-2xl overflow-hidden border origin-bottom pointer-events-auto cursor-pointer group transition-colors duration-500`}
              style={{
                boxShadow: isActive 
                  ? '0 30px 60px -10px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.15)' 
                  : '0 20px 40px rgba(0,0,0,0.6)',
                borderColor: isActive ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)'
              }}
              onClick={() => setCurrentSlide(i)}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear group-hover:scale-110"
                style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 transition-opacity duration-500" style={{ opacity: isActive ? 1 : 0.7 }} />
              <div className="absolute bottom-0 left-0 p-4 lg:p-5 w-full">
                <h3 className="text-sm lg:text-lg font-serif font-normal text-white drop-shadow-xl leading-snug tracking-wider">{slide.title}</h3>
                <p 
                  className="text-white/80 text-[8px] lg:text-[10px] tracking-[0.2em] uppercase mt-1 font-light transition-opacity duration-500 delay-200"
                  style={{ opacity: isActive ? 1 : 0 }}
                >
                  Featured Initiative
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

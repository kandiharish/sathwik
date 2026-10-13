import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { Play, Pause, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Img } from '../common/Img';
import { scrollToElement } from '../../lib/lenis';

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
    amber: "text-[#FF5A6E] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]",
    emerald: "text-[#3FD6A6] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]",
    cyan: "text-[#5CC8F5] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
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
    video: '/videos/nutrition-for-pregnant.mp4',
    image: '/images/projects/nutrition-kits-hyderabad/01.webp',
    transformOrigin: 'center center',
  },
  {
    id: '02',
    title: 'CLEAN WATER',
    description: <>Providing <ShinyWord color="cyan">clean water.</ShinyWord></>,
    video: '/videos/water.mp4',
    image: '/images/projects/ro-plant-janaagama/01.webp',
    transformOrigin: 'left center',
  },
  {
    id: '03',
    title: 'SCHOOL INFRASTRUCTURE',
    description: <>Building <ShinyWord color="emerald">better schools.</ShinyWord></>,
    video: '/videos/school-infrastructure.mp4',
    image: '/images/projects/blind-school/01.webp',
    transformOrigin: 'center bottom',
  },
  {
    id: '04',
    title: 'RURAL DEVELOPMENT',
    description: <>Empowering <ShinyWord color="amber">rural lives.</ShinyWord></>,
    video: '/videos/rural-development.mp4',
    image: '/images/projects/open-air-gym-hyderabad/04.webp',
    transformOrigin: 'right center',
  },
  {
    id: '05',
    title: 'HEALTHCARE SUPPORT',
    description: <>Delivering <ShinyWord color="emerald">essential healthcare.</ShinyWord></>,
    video: '/videos/nutrition-for-pregnant.mp4',
    image: '/images/projects/medical-equipment-hyderabad/06.webp',
    transformOrigin: 'center top',
  },
  {
    id: '06',
    title: 'RO PLANT INSTALLATION',
    description: <>Sustainable <ShinyWord color="cyan">water access.</ShinyWord></>,
    video: '/videos/water.mp4',
    image: '/images/projects/ro-plant-janaagama/03.webp',
    transformOrigin: 'right center',
  },
  {
    id: '07',
    title: 'DIGITAL CLASSROOMS',
    description: <>Enabling <ShinyWord color="amber">digital education.</ShinyWord></>,
    video: '/videos/school-infrastructure.mp4',
    image: '/images/projects/blind-school/04.webp',
    transformOrigin: 'center center',
  },
  {
    id: '08',
    title: 'COMMUNITY WELLNESS',
    description: <>Fostering <ShinyWord color="emerald">public wellness.</ShinyWord></>,
    video: '/videos/rural-development.mp4',
    image: '/images/projects/open-air-gym-hyderabad/02.webp',
    transformOrigin: 'center bottom',
  }
];

export const CinematicHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentSlideRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);

  const nextSlide = useCallback(() => {
    const next = (currentSlideRef.current + 1) % slides.length;
    currentSlideRef.current = next;
    setCurrentSlide(next);
  }, []);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Only rotate while the hero is on screen, the tab is visible and the visitor hasn't paused it.
  const autoplay = inView && !tabHidden && !paused && !reduceMotion;
  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(nextSlide, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide, autoplay]);

  const goTo = (i: number) => {
    currentSlideRef.current = i;
    setCurrentSlide(i);
  };

  return (
    <section ref={sectionRef} aria-roledescription="carousel" aria-label="Featured initiatives" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-black text-white">
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
                src={inView ? slides[currentSlide].video : undefined}
                poster={slides[currentSlide].image}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
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
        <div className="h-[130px] md:h-[150px] flex items-center justify-center">
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
                className="text-[1.65rem] sm:text-3xl lg:text-[2.75rem] font-serif font-normal leading-snug tracking-wide whitespace-pre-line text-white"
                style={{ textShadow: '0 4px 40px rgba(0,0,0,0.8)' }}
              >
                {slides[currentSlide].description}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-5 mt-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
            <Link to="/programs" className="bg-[#009966] hover:bg-[#008855] text-white min-h-11 px-6 py-3 rounded-full font-semibold text-[13px] tracking-wide transition-all shadow-[0_4px_20px_rgba(0,153,102,0.4)] flex items-center justify-center gap-2 whitespace-nowrap">
              Explore Programs 
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button 
              type="button"
              onClick={() => scrollToElement(document.getElementById('impact'))}
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white min-h-11 px-6 py-3 rounded-full font-semibold text-[13px] tracking-wide transition-all flex items-center justify-center gap-2 backdrop-blur-sm whitespace-nowrap"
            >
              <Play className="w-3.5 h-3.5" fill="currentColor" /> Watch Our Impact
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
            <div className="flex -space-x-2.5">
              <Img src="/images/projects/blind-school/06.webp" alt="Volunteer" className="w-8 h-8 rounded-full border-2 border-primary-deep object-cover" />
              <Img src="/images/projects/bihar-ro-plant/09.webp" alt="Volunteer" className="w-8 h-8 rounded-full border-2 border-primary-deep object-cover" />
              <Img src="/images/projects/medical-equipment-ghatkesar/01.webp" alt="Volunteer" className="w-8 h-8 rounded-full border-2 border-primary-deep object-cover" />
              <Img src="/images/projects/cycles-karimnagar/05.webp" alt="Volunteer" className="w-8 h-8 rounded-full border-2 border-primary-deep object-cover" />
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
            <motion.button
              type="button"
              key={slide.id}
              aria-label={`Show ${slide.title}`}
              aria-current={isActive}
              tabIndex={Math.abs(distance) > 1 ? -1 : 0}
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
              className={`absolute w-[85%] max-w-[260px] md:max-w-[320px] lg:max-w-[380px] aspect-[16/9] rounded-2xl overflow-hidden border origin-bottom pointer-events-auto cursor-pointer group text-left focus-visible:outline-2 focus-visible:outline-white transition-colors duration-500`}
              style={{
                boxShadow: isActive 
                  ? '0 30px 60px -10px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.15)' 
                  : '0 20px 40px rgba(0,0,0,0.6)',
                borderColor: isActive ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)'
              }}
              onClick={() => goTo(i)}
            >
              <Img 
                src={slide.image} 
                alt="" 
                className="w-full h-full object-cover transform"
                style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
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
            </motion.button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
        className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/50 md:bottom-6 md:right-6"
      >
        {paused ? <Play className="h-4 w-4" fill="currentColor" /> : <Pause className="h-4 w-4" fill="currentColor" />}
      </button>
    </section>
  );
};

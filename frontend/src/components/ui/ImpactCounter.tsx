import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface ImpactCounterProps {
  value: string | number;
  label: string;
  suffix?: string;
}

export const ImpactCounter: React.FC<ImpactCounterProps> = ({ value, label, suffix = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Parse numeric value if passed as string (e.g. "20,000" -> 20000)
  const numericValue = typeof value === 'string' 
    ? parseInt(value.replace(/,/g, ''), 10) 
    : value;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 60, 
    stiffness: 100, 
    mass: 1 
  });
  
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest).toString());
    });
  }, [springValue]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-8 text-center relative group bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-shadow duration-500 rounded-2xl"
    >
      

      
      <div className="text-5xl md:text-7xl font-serif font-medium text-slate-900 mb-4 tracking-tighter drop-shadow-sm flex items-baseline">
        {display}
        <span className="text-3xl md:text-5xl text-amber-600 ml-1 font-sans">{suffix}</span>
      </div>
      
      <div className="w-12 h-1 bg-amber-600/20 mb-6 rounded-full group-hover:w-24 group-hover:bg-amber-500 transition-all duration-500" />
      
      <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-[0.2em]">
        {label}
      </div>
    </motion.div>
  );
};

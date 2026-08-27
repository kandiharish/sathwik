import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface ImpactCounterProps {
  value: string | number;
  label: string;
  suffix?: string;
  icon?: ReactNode;
}

export const ImpactCounter: React.FC<ImpactCounterProps> = ({ value, label, suffix = '', icon }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center mt-10 p-8 pt-14 text-center relative bg-white/80 backdrop-blur-md rounded-[32px] border border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 group"
    >
      {/* Top Overlapping Icon Circle */}
      {icon && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-50 group-hover:-translate-y-2 transition-transform duration-500">
          <div className="w-[66px] h-[66px] rounded-full border border-gray-100 flex items-center justify-center bg-gray-50/30">
            {icon}
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Number */}
        <div className="text-4xl md:text-5xl lg:text-[54px] font-serif font-black text-[#0f172a] mb-4 tracking-tight flex items-baseline justify-center whitespace-nowrap">
          {display}
          <span className="text-3xl md:text-4xl text-[#d97706] ml-1 font-serif">{suffix}</span>
        </div>
        
        {/* Orange Divider */}
        <div className="w-8 h-[2px] bg-[#d97706] mb-5 rounded-full group-hover:w-16 transition-all duration-300" />
        
        {/* Label */}
        <div className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-relaxed max-w-[150px]">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

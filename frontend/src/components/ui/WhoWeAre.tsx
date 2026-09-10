import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ArrowRight, Stethoscope, Droplets, GraduationCap, Heart, Activity, Building2, Accessibility, Users } from 'lucide-react';
import { ButtonLink } from './Button';

// 8 Initiatives arranged exactly as in the enterprise reference:
// Outer ring (4 items at 0°, 90°, 180°, 270°) and Inner ring (4 items at 45°, 135°, 225°, 315°)
const initiatives = [
  // Outer Ring items
  {
    title: ["Disability", "Inclusion"],
    icon: Accessibility,
    color: "text-teal-600",
    angle: 270, // Top (12 o'clock)
    ring: 'outer',
  },
  {
    title: ["Healthcare", "& Medical"],
    icon: Stethoscope,
    color: "text-emerald-600",
    angle: 0, // Right (3 o'clock)
    ring: 'outer',
  },
  {
    title: ["Education", "Infrastructure"],
    icon: GraduationCap,
    color: "text-amber-500",
    angle: 90, // Bottom (6 o'clock)
    ring: 'outer',
  },
  {
    title: ["Sports &", "Wellness"],
    icon: Activity,
    color: "text-indigo-500",
    angle: 180, // Left (9 o'clock)
    ring: 'outer',
  },

  // Inner Ring items (staggered at 45° offsets)
  {
    title: ["Community", "Development"],
    icon: Users,
    color: "text-[#053e2f]",
    angle: 315, // Top-Right (1:30 o'clock)
    ring: 'inner',
  },
  {
    title: ["Water &", "Sanitation"],
    icon: Droplets,
    color: "text-blue-500",
    angle: 45, // Bottom-Right (4:30 o'clock)
    ring: 'inner',
  },
  {
    title: ["Nutrition", "& Health"],
    icon: Heart,
    color: "text-rose-500",
    angle: 135, // Bottom-Left (7:30 o'clock)
    ring: 'inner',
  },
  {
    title: ["Community", "Infrastructure"],
    icon: Building2,
    color: "text-orange-500",
    angle: 225, // Top-Left (10:30 o'clock)
    ring: 'inner',
  },
];

const ORBIT_PERIOD = 55; // 55 seconds smooth continuous revolution

export const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] bg-[#e11d48]/5 rounded-full blur-[60px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-[#0017a5]/5 rounded-full blur-[60px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#054E38]/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-8 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col pr-0 xl:pr-12"
          >
            <h2 
              className="text-5xl md:text-7xl text-[#053e2f]/10 tracking-tight leading-none mb-0 md:mb-2"
              style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}
            >
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-black text-[#1d1d1f] tracking-tight leading-tight -mt-4 md:-mt-8 mb-8">
              Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053e2f] to-[#0a7a5c]">Are</span>
            </h3>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                The <strong className="text-slate-900">Sathwik Rural and Youth Integrated Association (SRAYI)</strong> was founded with a singular vision: to bring sustainable development to the grassroots of India. 
              </p>
              <p>
                We recognize that true progress is impossible without addressing the fundamental needs of our rural communities. What started as a small initiative has blossomed into a comprehensive force for change.
              </p>
              <p>
                Our approach is deeply rooted in the belief that empowering individuals, especially youth and women, creates a ripple effect that transforms entire communities. We work tirelessly across multiple sectors to build resilient, self sustaining ecosystems where every individual has the opportunity to thrive.
              </p>
            </div>

            <div className="mt-10">
              <ButtonLink to="/about" variant="primary" className="inline-flex items-center">
                Read Our Full Story <ArrowRight className="w-4 h-4 ml-2" />
              </ButtonLink>
            </div>
          </motion.div>

          {/* Right Side: Enterprise Orbiting System */}
          <div className="relative w-full h-[580px] md:h-[720px] flex items-center justify-center select-none orbit-stage group/stage">
            
            {/* CSS Variables for Responsive Radii */}
            <style>{`
              .orbit-stage {
                --radius-outer: min(42vw, 290px);
                --radius-inner: min(29vw, 195px);
              }
              @media (min-width: 1280px) {
                .orbit-stage {
                  --radius-outer: 290px;
                  --radius-inner: 195px;
                }
              }

              @keyframes orbitRevolve {
                0% {
                  transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
                }
                25% {
                  transform: rotate(90deg) translateX(var(--orbit-radius)) rotate(-90deg);
                }
                50% {
                  transform: rotate(180deg) translateX(var(--orbit-radius)) rotate(-180deg);
                }
                75% {
                  transform: rotate(270deg) translateX(var(--orbit-radius)) rotate(-270deg);
                }
                100% {
                  transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
                }
              }

              .orbit-arm {
                animation: orbitRevolve ${ORBIT_PERIOD}s linear infinite;
                will-change: transform;
              }
            `}</style>

            {/* Concentric Background Orbital Guide Rings matching Image 2 */}
            <div 
              className="absolute rounded-full border border-slate-200/50 pointer-events-none z-0"
              style={{
                width: 'calc(var(--radius-inner) * 2)',
                height: 'calc(var(--radius-inner) * 2)',
              }}
            />
            <div 
              className="absolute rounded-full border border-slate-200/60 pointer-events-none z-0"
              style={{
                width: 'calc(var(--radius-outer) * 2)',
                height: 'calc(var(--radius-outer) * 2)',
              }}
            />
            <div 
              className="absolute rounded-full border border-slate-100 pointer-events-none z-0 hidden md:block"
              style={{
                width: 'calc(var(--radius-outer) * 2.3)',
                height: 'calc(var(--radius-outer) * 2.3)',
              }}
            />
            <div 
              className="absolute rounded-full border border-[#0017a5]/5 pointer-events-none z-0"
              style={{
                width: 'calc(var(--radius-inner) * 1.5)',
                height: 'calc(var(--radius-inner) * 1.5)',
              }}
            />
            <div 
              className="absolute rounded-full border border-[#e11d48]/5 pointer-events-none z-0"
              style={{
                width: 'calc(var(--radius-outer) * 1.25)',
                height: 'calc(var(--radius-outer) * 1.25)',
              }}
            />

            {/* Center Logo & Organization Name Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="absolute z-30 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center p-3.5 border-4 border-white">
                <img 
                  src="/logo.webp" 
                  alt="SRAYI Association" 
                  className="w-full h-full object-contain relative z-10 scale-105" 
                />
                {/* Subtle pulsing rings behind logo */}
                <div className="absolute inset-[-15px] rounded-full border border-[#0017a5]/20 animate-ping [animation-duration:4s] pointer-events-none" />
                <div className="absolute inset-[-30px] rounded-full border border-[#e11d48]/15 animate-ping [animation-duration:4s] [animation-delay:1.5s] pointer-events-none" />
              </div>
              
              {/* Organization Name with strict horizontal typography */}
              <div className="flex flex-col items-center text-center mt-3 pointer-events-none">
                <span className="text-xl md:text-2xl font-black text-[#0017a5] tracking-tight leading-none mb-1">
                  Sathwik
                </span>
                <span className="text-[10px] md:text-[11px] font-bold text-[#0b9c66] tracking-tight leading-tight">
                  Rural And Youth<br/>
                  Integrated Association
                </span>
              </div>
            </motion.div>

            {/* Revolving Orbiting Cards - 100% Guaranteed Upright & Horizontal */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {initiatives.map((item, idx) => {
                const isOuter = item.ring === 'outer';
                const delay = - (item.angle / 360) * ORBIT_PERIOD;
                const Icon = item.icon;

                return (
                  <div
                    key={idx}
                    className="absolute top-1/2 left-1/2 w-0 h-0"
                  >
                    {/* Orbit arm rotates around (0,0) with counter-rotation to keep card horizontal */}
                    <div
                      className="absolute top-0 left-0 w-0 h-0 orbit-arm"
                      style={{
                        '--orbit-radius': isOuter ? 'var(--radius-outer)' : 'var(--radius-inner)',
                        animationDelay: `${delay}s`,
                      } as React.CSSProperties}
                    >
                      {/* Card element centered at the orbit arm tip, always 100% horizontal */}
                      <div 
                        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] group-hover:scale-105 group-hover:border-slate-300 transition-all duration-300 px-3.5 py-2.5 rounded-2xl">
                          <div className={`p-1.5 md:p-2 rounded-xl bg-slate-50 border border-slate-100 ${item.color} shrink-0 group-hover:bg-slate-100/80 transition-colors`}>
                            <Icon className="w-4 h-4 md:w-4.5 md:h-4.5" />
                          </div>
                          <div className="flex flex-col text-left leading-[1.15]">
                            <span className="text-[12px] md:text-[13px] font-bold text-slate-800 tracking-tight whitespace-nowrap">
                              {item.title[0]}
                            </span>
                            <span className="text-[12px] md:text-[13px] font-bold text-slate-800 tracking-tight whitespace-nowrap">
                              {item.title[1]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

import { lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { RouteTitleTracker } from './components/common/RouteTitleTracker';
import { lenisRef } from './lib/lenis';

// Route-level code splitting: only the home page ships in the initial bundle.
// Every loader is also kept so all pages can be prefetched once the browser is idle,
// which makes later navigation instant (no loading spinner between pages).
const loaders: (() => Promise<unknown>)[] = [];
const page = <T extends Record<string, React.ComponentType>>(load: () => Promise<T>, name: keyof T) => {
  loaders.push(load);
  return lazy(() => load().then((m) => ({ default: m[name] })));
};

const prefetchPages = () => {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (conn?.saveData) return;
  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
  let i = 0;
  const next = () => {
    if (i >= loaders.length) return;
    loaders[i++]().catch(() => {}).finally(() => idle(next));
  };
  idle(next);
};

const About = page(() => import('./pages/About'), 'About');
const Programs = page(() => import('./pages/Programs'), 'Programs');
const ProgramDetail = page(() => import('./pages/ProgramDetail'), 'ProgramDetail');
const Projects = page(() => import('./pages/Projects'), 'Projects');
const ProjectDetail = page(() => import('./pages/ProjectDetail'), 'ProjectDetail');
const Impact = page(() => import('./pages/Impact'), 'Impact');
const ImpactMap = page(() => import('./pages/ImpactMap'), 'ImpactMap');
const Stories = page(() => import('./pages/Stories'), 'Stories');
const StoryDetail = page(() => import('./pages/StoryDetail'), 'StoryDetail');
const Gallery = page(() => import('./pages/Gallery'), 'Gallery');
const FAQ = page(() => import('./pages/FAQ'), 'FAQ');
const Contact = page(() => import('./pages/Contact'), 'Contact');
const Donate = page(() => import('./pages/Donate'), 'Donate');
const Volunteer = page(() => import('./pages/Volunteer'), 'Volunteer');
const NotFound = page(() => import('./pages/NotFound'), 'NotFound');

function App() {
  useEffect(() => {
    if (document.readyState === 'complete') prefetchPages();
    else window.addEventListener('load', prefetchPages, { once: true });
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    // Native scrolling is smoother and cheaper on touch devices.
    if (reduceMotion || coarsePointer) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <RouteTitleTracker />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="programs/:slug" element={<ProgramDetail />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="impact" element={<Impact />} />
            <Route path="impact/map" element={<ImpactMap />} />
            <Route path="stories" element={<Stories />} />
            <Route path="stories/:slug" element={<StoryDetail />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="donate" element={<Donate />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;

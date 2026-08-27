import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';

import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Stories } from './pages/Stories';
import { Gallery } from './pages/Gallery';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Impact } from './pages/Impact';
import { ImpactMap } from './pages/ImpactMap';
import { StoryDetail } from './pages/StoryDetail';
import { FAQ } from './pages/FAQ';

// Placeholder components for routing
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <h1 className="text-3xl font-serif font-bold text-primary">{title} Page - Coming Soon</h1>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:slug" element={<Placeholder title="Program Detail" />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="impact" element={<Impact />} />
          <Route path="impact/map" element={<ImpactMap />} />
          <Route path="stories" element={<Stories />} />
          <Route path="stories/:slug" element={<StoryDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Placeholder title="Contact Us" />} />
          <Route path="donate" element={<Placeholder title="Donate" />} />
          <Route path="volunteer" element={<Placeholder title="Volunteer" />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

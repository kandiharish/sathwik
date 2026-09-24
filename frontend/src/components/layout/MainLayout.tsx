import { Suspense, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { NextPage } from './NextPage';
import { MotionController } from '../common/MotionController';
import { scrollToTop } from '../../lib/lenis';

const PageFallback = () => (
  <div className="min-h-[70vh] flex items-center justify-center" aria-busy="true" aria-live="polite">
    <span className="h-8 w-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
    <span className="sr-only">Loading…</span>
  </div>
);

export const MainLayout = () => {
  const { pathname, hash } = useLocation();

  // Start every new page at the top (unless linking to an in-page anchor).
  useLayoutEffect(() => {
    if (!hash) scrollToTop();
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen relative bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-grow relative z-10">
        <Suspense fallback={<PageFallback />}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0.4, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </Suspense>
      </main>
      <NextPage key={pathname} pathname={pathname} />
      <Footer />
      <MotionController />
    </div>
  );
};

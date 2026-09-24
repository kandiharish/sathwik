import type Lenis from 'lenis';

/** Shared handle to the smooth-scroll instance (null on touch / reduced-motion). */
export const lenisRef: { current: Lenis | null } = { current: null };

export const scrollToTop = (smooth = false) => {
  if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: !smooth });
  else window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
};

export const scrollToElement = (el: HTMLElement | null, offset = -88) => {
  if (!el) return;
  if (lenisRef.current) lenisRef.current.scrollTo(el, { offset });
  else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: 'smooth' });
};

import { useEffect } from 'react';

/**
 * Site-wide, zero-React-state animation housekeeping:
 *  - Sections that are off-screen get `data-offscreen`, which pauses their CSS
 *    animations (see index.css) and their videos, so marquees, the orbit and
 *    decorative loops cost nothing while you can't see them.
 *  - Elements marked `data-reveal="wipe"` get `data-revealed` the first time they
 *    scroll into view, which plays the curtain-wipe reveal.
 * New sections/elements rendered later (lazy sections, route changes) are picked up
 * automatically through a MutationObserver.
 */
export const MotionController = () => {
  useEffect(() => {
    const root = document.getElementById('main');
    if (!root || !('IntersectionObserver' in window)) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) document.documentElement.classList.add('reveal-ready');

    const sectionIO = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          const el = target as HTMLElement;
          if (isIntersecting) el.removeAttribute('data-offscreen');
          else el.setAttribute('data-offscreen', '');
          el.querySelectorAll('video').forEach((v) => {
            if (!isIntersecting) v.pause();
            else if (v.autoplay) v.play().catch(() => {});
          });
        }
      },
      { rootMargin: '200px 0px' },
    );

    // A wipe target starts fully clipped, and Chrome counts an element's own clip-path
    // when computing intersection, so we watch its (unclipped) parent instead.
    const pending = new Map<Element, Element[]>();
    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (!isIntersecting) continue;
          pending.get(target)?.forEach((el) => el.setAttribute('data-revealed', ''));
          pending.delete(target);
          revealIO.unobserve(target);
        }
      },
      { rootMargin: '0px' },
    );
    const watchReveal = (el: Element) => {
      const anchor = el.parentElement ?? el;
      const list = pending.get(anchor);
      if (list) list.push(el);
      else {
        pending.set(anchor, [el]);
        revealIO.observe(anchor);
      }
    };

    const seen = new WeakSet<Element>();
    const scan = (node: ParentNode) => {
      node.querySelectorAll('section').forEach((s) => {
        if (seen.has(s)) return;
        seen.add(s);
        sectionIO.observe(s);
      });
      node.querySelectorAll('[data-reveal]:not([data-revealed])').forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (reduceMotion) el.setAttribute('data-revealed', '');
        else watchReveal(el);
      });
    };

    scan(root);
    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan(root);
      });
    });
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      sectionIO.disconnect();
      revealIO.disconnect();
    };
  }, []);

  return null;
};

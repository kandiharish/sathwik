import { useLocation } from 'react-router-dom';
import { breadcrumbs, routeMeta, usePageMeta } from '../../lib/seo';

/**
 * Applies default <head> metadata for top-level routes. Detail pages
 * (projects/:slug, stories/:slug, programs/:slug) set their own via usePageMeta.
 */
export const RouteTitleTracker = () => {
  const { pathname } = useLocation();
  const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
  const meta = routeMeta[path];

  usePageMeta(
    meta
      ? {
          ...meta,
          path,
          jsonLd: path === '/' ? undefined : [breadcrumbs([{ name: meta.title.split(/ [—|] /)[0], path }])],
        }
      : null,
  );

  return null;
};

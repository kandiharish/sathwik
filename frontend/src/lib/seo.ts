import { useEffect } from 'react';

/** Production origin used for canonical URLs, Open Graph and the sitemap. */
export const SITE_URL = 'https://sathwikassociation.org';
export const SITE_NAME = 'SATHWIK | Rural and Youth Integrated Association';
export const DEFAULT_IMAGE = '/og-cover.jpg';

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  /** Extra JSON-LD objects for this page (breadcrumbs, articles, …). */
  jsonLd?: Record<string, unknown>[];
  noindex?: boolean;
}

export { routeMeta } from './routeMeta';

const absolute = (url: string) => (url.startsWith('http') ? url : `${SITE_URL}${encodeURI(url)}`);

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absolute(item.path),
  })),
});

/** Keeps <head> in sync with the current page for crawlers and link previews. */
export const usePageMeta = (meta: PageMeta | null) => {
  const key = meta ? JSON.stringify(meta) : '';
  useEffect(() => {
    if (!meta) return;
    const url = absolute(meta.path);
    const image = absolute(meta.image ?? DEFAULT_IMAGE);

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setLink('canonical', url);
    setMeta('property', 'og:type', meta.type ?? 'website');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:url', url);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', image);

    document.head.querySelectorAll('script[data-page-jsonld]').forEach((el) => el.remove());
    meta.jsonLd?.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.pageJsonld = '';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
};

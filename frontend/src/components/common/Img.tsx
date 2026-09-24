import type { ImgHTMLAttributes } from 'react';
import { DEFAULT_SIZES, srcSetFor } from '../../lib/images';

/**
 * Drop-in <img> that adds a responsive srcSet for our WebP photos, lazy-loads by
 * default (unless marked fetchPriority="high") and decodes off the main thread.
 */
export const Img = ({ src, srcSet, sizes, loading, decoding = 'async', fetchPriority, ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  const set = srcSet ?? srcSetFor(src);
  const load = loading ?? (fetchPriority === 'high' ? 'eager' : 'lazy');
  const sz = set ? (sizes ?? (load === 'lazy' ? `auto, ${DEFAULT_SIZES}` : DEFAULT_SIZES)) : sizes;
  return <img src={src} srcSet={set} sizes={sz} loading={load} decoding={decoding} fetchPriority={fetchPriority} {...rest} />;
};

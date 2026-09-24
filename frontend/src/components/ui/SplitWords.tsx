import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';

/**
 * Wraps every word of `children` in a masked span so headings can reveal word by
 * word (see `[data-reveal="words"]` in index.css). Inline elements such as <em>
 * are preserved and their words are split too; `--i` staggers each word.
 */
export const SplitWords = ({ children }: { children: ReactNode }) => {
  let index = 0;

  const split = (node: ReactNode): ReactNode =>
    Children.map(node, (child) => {
      if (typeof child === 'string' || typeof child === 'number') {
        return String(child)
          .split(/(\s+)/)
          .map((part, k) => {
            if (!part) return null;
            if (/^\s+$/.test(part)) return part;
            const i = index++;
            return (
              <span key={`${i}-${k}`} className="sw">
                <span className="sw-in" style={{ '--i': i } as React.CSSProperties}>
                  {part}
                </span>
              </span>
            );
          });
      }
      if (isValidElement(child)) {
        const el = child as ReactElement<{ children?: ReactNode }>;
        if (el.type === 'br') return el;
        return cloneElement(el, undefined, split(el.props.children));
      }
      return child;
    });

  return <>{split(children)}</>;
};

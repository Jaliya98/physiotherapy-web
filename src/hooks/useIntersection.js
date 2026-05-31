import { useEffect, useRef, useState } from 'react';

export default function useIntersection(options = {}) {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce) {
          observer.unobserve(currentElement);
        }
      } else if (!options.triggerOnce) {
        setIsIntersecting(false);
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement && !options.triggerOnce) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
}

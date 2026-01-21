"use client";

import { useEffect, useRef } from "react";

export function useIntersection({
  onIntersect,
  threshold = 0.1,
}: {
  onIntersect: () => void;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const callbackRef = useRef(onIntersect);

  useEffect(() => {
    callbackRef.current = onIntersect;
  }, [onIntersect]);
  useEffect(() => {
    const element = ref.current;

    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callbackRef.current();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

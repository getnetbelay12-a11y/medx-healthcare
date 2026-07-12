"use client";

import { RefObject, useEffect, useState } from "react";

export function useElementVisibility<T extends Element>(
  ref: RefObject<T | null>,
  rootMargin = "120px",
) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(Boolean(entry?.isIntersecting)),
      { root: null, rootMargin, threshold: 0.01 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isVisible;
}

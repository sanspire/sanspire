"use client";

import {
  type VideoHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

type DeferredVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "preload"> & {
  loadStrategy?: "eager" | "visible";
  rootMargin?: string;
};

export function DeferredVideo({
  loadStrategy = "visible",
  rootMargin = "240px",
  src,
  autoPlay,
  ...props
}: DeferredVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (loadStrategy === "eager") {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        const idleId = window.requestIdleCallback(() => setShouldLoad(true), {
          timeout: 1200,
        });
        return () => window.cancelIdleCallback(idleId);
      }

      const timeoutId = setTimeout(() => setShouldLoad(true), 120);
      return () => clearTimeout(timeoutId);
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      const timeoutId = setTimeout(() => setShouldLoad(true), 0);
      return () => clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [loadStrategy, rootMargin]);

  useEffect(() => {
    if (!shouldLoad || !autoPlay) return;

    const node = ref.current;
    if (!node) return;

    void node.play().catch(() => {});
  }, [autoPlay, shouldLoad]);

  return (
    <video
      ref={ref}
      {...props}
      autoPlay={autoPlay}
      preload={shouldLoad ? "metadata" : "none"}
      src={shouldLoad ? src : undefined}
    />
  );
}

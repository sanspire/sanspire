"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Initial vertical offset in px */
  y?: number;
  /** Seconds after the element enters the viewport */
  delay?: number;
  duration?: number;
  once?: boolean;
};

/** Subtle ease-out (no overshoot) */
const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

/** Match viewport `amount: 0.12` — visible area / element area */
function intersectionRatio(el: Element) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const ih = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
  const iw = Math.min(rect.right, vw) - Math.max(rect.left, 0);
  if (ih <= 0 || iw <= 0 || rect.width <= 0 || rect.height <= 0) return 0;
  return (ih * iw) / (rect.width * rect.height);
}

export function ScrollReveal({
  children,
  className,
  y = 32,
  delay = 0,
  duration = 0.52,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [layoutInView, setLayoutInView] = useState(false);
  const [restoredFromCache, setRestoredFromCache] = useState(false);

  const isInView = useInView(ref, {
    once,
    amount: 0.12,
    margin: "0px 0px -56px 0px",
  });

  const syncLayoutVisibility = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (intersectionRatio(el) >= 0.12) setLayoutInView(true);
  }, []);

  useLayoutEffect(() => {
    let cancelled = false;
    const run = () => {
      if (!cancelled) syncLayoutVisibility();
    };
    run();
    const id1 = requestAnimationFrame(() => {
      run();
      requestAnimationFrame(run);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(id1);
    };
  }, [syncLayoutVisibility]);

  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setRestoredFromCache(true);
    };
    const onPop = () => {
      requestAnimationFrame(() => requestAnimationFrame(syncLayoutVisibility));
    };
    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("popstate", onPop);
    };
  }, [syncLayoutVisibility]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const visible = restoredFromCache || layoutInView || isInView;

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

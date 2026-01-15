import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

interface TickerProps {
  title: string[];
}

export default function Ticker({ title }: TickerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimationControls();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [overflowPx, setOverflowPx] = useState(0);

  const safeIndex = useMemo(() => {
    const len = title?.length ?? 0;
    if (!len) return 0;
    return ((activeIndex % len) + len) % len;
  }, [activeIndex, title]);

  const activeTitle = title?.length ? title[safeIndex] : "";

  // Measure how much text is hidden (if any).
  useEffect(() => {
    const viewport = viewportRef.current;
    const textEl = textRef.current;
    if (!viewport || !textEl) return;

    const recompute = () => {
      const overflow = Math.max(0, textEl.scrollWidth - viewport.clientWidth);
      setOverflowPx(overflow);
    };

    recompute();
    const ro = new ResizeObserver(recompute);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, [activeTitle]);

  // Reveal animation: keep the visible start stationary, slide just enough to reveal hidden end.
  useEffect(() => {
    if (!activeTitle) return;

    let cancelled = false;

    const run = async () => {
      const sleep = (ms: number) =>
        new Promise<void>((resolve) => setTimeout(resolve, ms));

      controls.stop();
      await controls.start({ x: 0, transition: { duration: 0 } });

      if (overflowPx <= 0) return;

      while (!cancelled) {
        await sleep(1000); // pause at start
        const slideDuration = Math.max(1.2, overflowPx / 80); // ~80px/sec
        await controls.start({
          x: -overflowPx,
          transition: { duration: slideDuration, ease: "linear" },
        });
        await sleep(1000); // pause at end
        await controls.start({
          x: 0,
          transition: { duration: slideDuration, ease: "linear" },
        });
      }
    };

    run();
    return () => {
      cancelled = true;
      controls.stop();
    };
  }, [activeTitle, controls, overflowPx]);

  const canNavigate = Boolean(title?.length);

  const onPrev = () => {
    if (!title?.length) return;
    setActiveIndex((i) => (i - 1 + title.length) % title.length);
  };

  const onNext = () => {
    if (!title?.length) return;
    setActiveIndex((i) => (i + 1) % title.length);
  };

  return (
    <div className="w-full max-w-[350px] sm:max-w-[560px] md:max-w-[750px]  h-[60px] md:h-[100px] border-2 border-black/10 rounded-xl justify-between mx-auto flex items-center bg-white overflow-hidden">
      <div className="w-[20%] md:w-[150px] h-full rounded-l-xl flex items-center justify-center ">
        <Image
          src="/logo.png"
          alt="ticker"
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <div
        ref={viewportRef}
        className="w-[80%] h-full overflow-hidden flex items-center relative px-2"
      >
        <motion.p
          ref={textRef}
          key={activeTitle}
          initial={{ x: 0 }}
          animate={controls}
          className="text-sm md:text-xl font-medium whitespace-nowrap w-max absolute left-0"
          style={{ willChange: "transform" }}
        >
          {activeTitle}
        </motion.p>
      </div>
      <div className="flex items-center gap-1 pr-2 z-20">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canNavigate}
          className="h-7 w-7 flex items-center justify-center rounded-md border border-black/10 text-xs disabled:opacity-50 p-0"
          aria-label="Previous headline cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canNavigate}
          className="h-7 w-7 flex items-center justify-center rounded-md border border-black/10 text-xs disabled:opacity-50 p-0"
          aria-label="Next headline cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

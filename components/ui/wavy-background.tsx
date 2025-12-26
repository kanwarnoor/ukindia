"use client";
import { cn } from "@/lib/utils";
import React, {
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
  HTMLAttributes,
} from "react";
import { createNoise3D } from "simplex-noise";

type WavyBackgroundProps = PropsWithChildren<{
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}> &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const noise = createNoise3D();
  let w = 0,
    h = 0,
    nt = 0,
    i = 0,
    x = 0,
    ctx: CanvasRenderingContext2D | null = null,
    canvas: HTMLCanvasElement | null = null;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = (): number => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    if (!ctx) return;
    const container = canvas.parentElement?.parentElement;
    if (container) {
      w = ctx.canvas.width = container.offsetWidth;
      h = ctx.canvas.height = container.offsetHeight;
    } else {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
    }
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      if (!canvas) return;
      const ctxResize = canvas.getContext("2d");
      if (!ctxResize) return;
      const containerResize = canvas.parentElement?.parentElement;
      if (containerResize) {
        w = ctxResize.canvas.width = containerResize.offsetWidth;
        h = ctxResize.canvas.height = containerResize.offsetHeight;
      } else {
        w = ctxResize.canvas.width = window.innerWidth;
        h = ctxResize.canvas.height = window.innerHeight;
      }
      ctxResize.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (n: number) => {
    nt += getSpeed();
    if (!ctx) return;
    // Tilt angle in radians (approximately 15 degrees)
    const tiltAngle = Math.PI / -15; // ~15 degrees
    const tiltOffset = Math.tan(tiltAngle) * w; // Calculate vertical offset for tilt

    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const waveY = noise(x / 800, 0.3 * i, nt) * 100;
        // Position at bottom with tilt: start higher on left, lower on right
        const baseY = h * 0.85; // Position at 85% from top (near bottom)
        const tiltY = (x / w) * tiltOffset; // Add tilt based on x position
        const y = baseY + waveY - tiltY; // Combine base position, wave, and tilt
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    if (!ctx) return;
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
    // animationId deliberately does not need to be a dep (animates self)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-full w-full flex flex-col items-center justify-center relative",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 w-full h-full"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10 w-full h-full", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

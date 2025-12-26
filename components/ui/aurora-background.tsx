"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

// Only use the three palette colors: --color-tiger, --color-navy, --color-mix
// imported from globals.css for the aurora background
// These are: #f15c23, #012d6b, #d8c4b5

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-white text-navy dark:bg-navy",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              // Aurora uses the three theme palette colors only
              "--aurora":
                "repeating-linear-gradient(100deg, var(--color-navy) 0%, var(--color-tiger) 40%, var(--color-mix) 70%, var(--color-navy) 100%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
              "--color-tiger": "#f15c23", // orange
              "--color-navy": "#012d6b", // deep navy
              "--color-mix": "#d8c4b5",  // light tan
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px]
              [background-image:var(--white-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              opacity-80 blur-[6px] invert filter will-change-transform
              [--aurora:repeating-linear-gradient(100deg,
                var(--color-navy)_0%,
                var(--color-tiger)_40%,
                var(--color-mix)_70%,
                var(--color-navy)_100%
              )]
              [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
              [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
              after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
              after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]
              dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_75%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};

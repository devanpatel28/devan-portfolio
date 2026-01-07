"use client";
import { useEffect, ReactNode, useRef } from "react";
import { motion, useInView, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimRevealProps {
  children: ReactNode;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
  once?: boolean; // Animation happens only once when scrolled into view
  amount?: number; // How much of element should be visible (0-1)
}

const AnimReveal = ({
  children,
  className,
  filter = true,
  duration = 0.4,
  staggerDelay = 0.1,
  once = true,
  amount = 0.3,
}: AnimRevealProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once, amount });

  useEffect(() => {
    if (isInView) {
      animate(
        "span, div > *",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
          y: 0,
        },
        {
          duration,
          delay: stagger(staggerDelay),
          ease: "easeOut",
        }
      );
    }
  }, [isInView, animate, duration, filter, staggerDelay]);

  return (
    <div className={cn("relative", className)}>
      <motion.div ref={scope} className="w-full">
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <motion.span
              key={i}
              initial={{
                opacity: 0,
                filter: filter ? "blur(8px)" : "none",
                y: 10,
              }}
            >
              {child}
            </motion.span>
          ))
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              filter: filter ? "blur(8px)" : "none",
              y: 10,
            }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default AnimReveal;

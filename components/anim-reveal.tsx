"use client";
import { useEffect, ReactNode } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimRevealProps {
  children: ReactNode;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
}

const AnimReveal = ({
  children,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2,
}: AnimRevealProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "*",
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
  }, [animate, duration, filter, staggerDelay]);

  const renderChild = (content: ReactNode, key?: number) => (
    <motion.span
      key={key}
      initial={{
        opacity: 0,
        filter: filter ? "blur(8px)" : "none",
        y: 10,
      }}
    >
      {content}
    </motion.span>
  );

  return (
    <div className={cn("relative", className)}>
      <motion.div ref={scope} className="w-full">
        {Array.isArray(children)
          ? children.map((child, i) => renderChild(child, i))
          : renderChild(children)}
      </motion.div>
    </div>
  );
};

export default AnimReveal;

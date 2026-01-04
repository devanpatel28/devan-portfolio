"use client";

import { icons } from "@/config/icons";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ShowAllProps {
  initialCount?: number;
  children: ReactNode[];
}

export default function ShowAll({
  initialCount = 5,
  children,
}: ShowAllProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? children
    : children.slice(0, initialCount);

  return (
    <>
      {/* LIST ANIMATION */}
      <motion.div
        layout
        className="flex flex-col gap-2"
      >
        <AnimatePresence>
          {visibleItems.map((child, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {child}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* BUTTON ANIMATION */}
      <AnimatePresence>
        {!showAll && children.length > initialCount && (
          <motion.div
            className="flex justify-center mt-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <Button
              onPress={() => setShowAll(true)}
              variant="solid"
              className="text-sm bg-default-50 text-white hover:bg-default-100 border-1 border-default-100 rounded-lg flex items-center gap-1"
            >
              <Icon icon={icons.chevronDown} className="text-base" />
              Show All
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

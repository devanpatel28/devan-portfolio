"use client";

import { icons } from "@/config/icons";
import { Icon } from "@iconify/react";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Chip } from "@heroui/chip";

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
      {/* 🔹 ONLY ITEMS — NO LAYOUT WRAPPER */}
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

      {/* 🔹 BUTTON (OUTSIDE GRID) */}
      {!showAll && children.length > initialCount && (
        <motion.div
          className="col-span-full flex justify-center mt-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Chip
            onClick={() => setShowAll(true)}
            classNames={{
              base: "bg-default-50 text-white hover:bg-default-100 border border-default-100 rounded-md cursor-pointer",
              content: "flex items-center gap-2",
            }}
          >
            <Icon icon={icons.chevronDown} className="text-base" />
            Show All
          </Chip>
        </motion.div>
      )}
    </>
  );
}

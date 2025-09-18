import React from "react";
import { motion } from "framer-motion";

/**
 * TechTicker
 * - Infinite horizontal scroll of tech logos + names.
 * - Pass an array of { name, logo, href? }.
 *
 * Props:
 *  - items: { name: string; logo: string; href?: string }[]
 *  - speed?: number  // seconds for one full loop (default 20)
 *  - direction?: "left" | "right" (default "left")
 *  - itemClassName?: string  // extra Tailwind for each card
 */
export default function TechTicker({
  items = [],
  speed = 20,
  direction = "left",
  itemClassName = "",
}) {
  if (!Array.isArray(items) || items.length === 0) return null;

  // Duplicate the items to create a seamless loop
  const row = [...items, ...items];

  const animateFrom = direction === "left" ? "0%" : "-50%";
  const animateTo   = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative w-full overflow-hidden">
      {/* fade edges (optional, looks nice) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/40 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/40 to-transparent z-10" />

      <motion.div
        className="flex w-[200%]" // 2x so translating -50% loops perfectly
        style={{ willChange: "transform" }}
        animate={{ x: [animateFrom, animateTo] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* First half */}
        <div className="flex min-w-[50%] shrink-0 items-center gap-8 pr-8">
          {items.map((item, i) => (
            <TickerItem key={`a-${i}`} item={item} itemClassName={itemClassName} />
          ))}
        </div>

        {/* Second half (duplicate) */}
        <div className="flex min-w-[50%] shrink-0 items-center gap-8 pr-8">
          {items.map((item, i) => (
            <TickerItem key={`b-${i}`} item={item} itemClassName={itemClassName} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function TickerItem({ item, itemClassName = "" }) {
  const content = (
    <div
      className={`flex items-center gap-3 rounded-lg border border-white/10 px-4 py-2 
                  bg-white/5 backdrop-blur-sm ${itemClassName}`}
    >
      <img
        src={item.logo}
        alt={item.name}
        className="h-7 w-7 object-contain"
        loading="lazy"
      />
      <span className="text-sm md:text-base text-white/90">{item.name}</span>
    </div>
  );

  return item.href ? (
    <a href={item.href} target="_blank" rel="noreferrer" className="shrink-0">
      {content}
    </a>
  ) : (
    <div className="shrink-0">{content}</div>
  );
}

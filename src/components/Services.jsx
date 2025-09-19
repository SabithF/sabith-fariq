import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { Compare } from "./other_components/compare";

/* Chevron */
const Chevron = ({ open }) => (
  <motion.div
    layout="position"
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.25 }}
    className="flex"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 transform transition-transform flex-shrink-0"
    >
      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
    </svg>
  </motion.div>
);

/* Single reusable card */
const ServiceCard = ({ title, points, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.45, type: "spring", stiffness: 260, damping: 24 },
      }}
      className="text-white w-full py-5 px-5 flex flex-col items-center justify-center border
                 border-[#f3f3f310] rounded-xl bg-[radial-gradient(circle_at_center,rgba(25,35,45,0.85)_0%,rgba(5,12,19,0.6)_100%)]"
      role="group"
      aria-expanded={isOpen}
    >
      {/* Header (click target) */}
      <motion.div
        layout="position"
        className="font-urbanist text-xl flex px-3 py-1 w-full justify-between items-center cursor-pointer select-none"
        onClick={() => setIsOpen((v) => !v)}
      >
        <motion.h2 layout="position">{title}</motion.h2>
        <Chevron open={isOpen} />
      </motion.div>

      {/* Body */}
      <AnimatePresence initial={false} mode="popLayout">
        {isOpen && (
          <motion.div
            key="content"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              layout: { duration: 0.45, type: "spring", stiffness: 260, damping: 24 },
              opacity: { duration: 0.2 },
            }}
            className="pt-3 w-full px-5 overflow-hidden"
          >
            <ul className="space-y-2 text-[#f3f3f398] text-md">
              {points.map((p, i) => (
                <li key={i} className="flex items-center">
                  <span className="pl-1">•</span>
                  <span className="pl-3">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  const cards = [
    {
      title: "Web Development",
      points: [
        "Responsive Web Applications",
        "Progressive Web Apps (PWA)",
        "Performance & SEO Optimization",
      ],
      defaultOpen: true,
    },
    {
      title: "UI/UX Design",
      points: ["Wireframes & Prototypes", "Design Systems", "Accessibility (WCAG)"],
    },
    {
      title: "Backend & APIs",
      points: ["REST/GraphQL APIs", "Auth & Security", "Database Design & Caching"],
    },
  ];

  return (
    <section
      className="text-white mx-auto w-full max-w-[1000px] min-h-full
                 items-center md:items-start justify-center md:justify-start flex flex-col
                 px-3"
    >
      {/* Heading */}
      <div className="mb-6 flex flex-col">
        <h2 className={styles.subHeadText}>Services</h2>
        <h1 className={styles.headText}>What I do?</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-5">
        {/* Cards */}
        <motion.div
          className="w-full flex flex-col gap-3 items-stretch justify-center md:justify-start"
          layout="position"
          transition={{ layout: { duration: 0.35, type: "spring" } }}
        >
          {cards.map((c, idx) => (
            <ServiceCard
              key={idx}
              title={c.title}
              points={c.points}
              defaultOpen={!!c.defaultOpen}
            />
          ))}
        </motion.div>

        {/* Compare panel */}
        <div className="w-full md:mt-0 mt-1">
          <div className="w-full h-64 sm:h-80 md:h-full overflow-hidden rounded-sm md:rounded-md">
            <Compare
              firstImage="https://assets.aceternity.com/code-problem.png"
              secondImage="https://assets.aceternity.com/linear-dark.png"
              firstImageClassName="object-cover object-left-top w-full h-full"
              secondImageClassName="object-cover object-left-top w-full h-full"
              className="w-full h-full shadow-3xl"
              slideMode="hover"
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
